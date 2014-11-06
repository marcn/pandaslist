if (Meteor.isClient) {
	// client-specific code
	Template.listings.helpers({
		listing: function() {
				return Posts.find();
			}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}

Accounts.config({
	restrictCreationByEmailDomain: "pandora.com",
	loginExpirationInDays: null
});

Images = new FS.Collection("images", {
	stores: [new FS.Store.FileSystem("images")],
	filter: {
		allow: {
			contentTypes: ['image/*'],
			extensions: ['png', 'gif', 'jpg']
    	},
    	onInvalid: function (message) {
			if (Meteor.isClient) {
				alert(message);
			} else {
				console.log(message);
			}
    	}
	}
});
