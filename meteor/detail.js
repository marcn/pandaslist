
if (Meteor.isClient) {

	Template.detail.events({

		'click .edit': function() {
			Router.go("/edit");
		},

		'click .post': function() {
			var post = Session.get("previewPost");
			var id = Posts.insert(post);
			Session.set("previewPost", null);
			console.log("routing to ", "/detail/"+id);
			Router.go("/detail/"+id);
		},

		'click .purchase': function() {

		},

	});

	Template.detail.helpers({

	});

}
