if (Meteor.isClient) {
	// client-specific code
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

// Images = new FS.Collection("images", {
// 	stores: [new FS.Store.FileSystem("images")],
// 	filter: {
// 		allow: {
// 			contentTypes: ['image/*'],
// 			extensions: ['png', 'gif', 'jpg']
//     	},
//     	onInvalid: function (message) {
// 			if (Meteor.isClient) {
// 				// TODO: show nicer dialog?
// 				alert(message);
// 			} else {
// 				console.log(message);
// 			}
//     	}
// 	}
// });

Images = new Mongo.Collection('images');

if (Meteor.isServer) {
  Meteor.methods({
    "uploadImage": function(imageName) {
    	var url = "http://pandaslist.s3.amazonaws.com/images/" + imageName;
    	var entry = Images.insert({"url": url});
    	return {"method":"uploadImage", "data": {"imageId": enetry._id}};
    }
  });
}