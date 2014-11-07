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
    },
    "mobileLogin" : function(args) {
    	var new_user = args[0];

    	var user = db.users.find({ 
    		"services" : {
    			"google" : {
    				"email" : new_user["email"]
    			}
    		}
    	});

    	if ( user == null) {
    		var user_id = Users.insert({
    			"profile" : {
    				"name" : new_user["name"]
    			}, "services" : {
    				"google" : {
    					"accessToken" : new_user[""],
    					"email" : new_user["email"],
    					"family_name" : new_user["family_name"],
    					"given_name" : new_user["given_name"],
    					"id" : new_user["id"],
    					"name" : new_user["name"],
    					"picture" : new_user["picture"]
    				}
    			}
    		});	
    	}

    	return {"method" : "login", "data" : {"userId" : user_id}};
    }
  });
}

getDisplayName = function(user) {
  if (user) {
    if (user.profile) {
      return user.profile.name;
    } else if (user.emails && user.emails.length > 0) {
      return user.emails[0].address;
    }
  }
}