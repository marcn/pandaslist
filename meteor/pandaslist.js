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

	// Configure Google auth
	// first, remove configuration entry in case service is already configured
	ServiceConfiguration.configurations.remove({
		service: "google"
	});
	ServiceConfiguration.configurations.insert({
		service: "google",
		clientId: "662229862340-8bjks10vu8grjqsabjml3f1qfvd3ltdg.apps.googleusercontent.com",
		secret: "IGO8ODkE5FwprZfgrdZGHp35"
	});

	// Configure S3
	// S3.config = {
	// 	key: 'AKIAIDYZL6G4P4STOEUA',
	// 	secret: '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',
	// 	bucket: 'pandaslist'
	// };
}

Accounts.config({
	restrictCreationByEmailDomain: "pandora.com",
	loginExpirationInDays: null
});

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "public/uploads"})]
});
