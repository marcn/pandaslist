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
