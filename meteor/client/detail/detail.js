
if (Meteor.isClient) {

	var DEFAULT_COMMENT_TEXT = "Type a question or comment here";

	var addComment = function(text, interested) {
		Comments.insert({
			text: text,
			sender: Meteor.userId(),
			post: Template.currentData()._id,
			creationDate: new Date().getTime(),
			isInterested: interested
		});
	}

	Template.detail.events({

		'click .edit': function() {
			if (!Session.get("previewPost")) {
				Session.set("previewPost", Template.currentData());
			}
			Router.go("/edit");
		},

		'click .post': function() {
			var post = Template.currentData();
			delete post.isPreview;
			var id = Posts.insert(post);
			Meteor.call("notifySubscribers", post);
			Router.go("/detail/"+id);
		},

		'click .save': function() {
			var post = Template.currentData();
			delete post.isPreview;
			var id = Session.get("previewPost")._id;
			Posts.update({_id: id}, post);
			Meteor.call("notifySubscribers", post);
			Router.go("/detail/"+id);
		},

		'click .delete': function() {
			Posts.remove(Template.currentData()._id);
			Router.go("listings");
		},

		'click .contact': function() {
			addComment(null, true);
		},

		"click .postThumbs span": function(evt) {
			if ( $(evt.currentTarget).hasClass('active') ) {
				return false;
			}
			$('.postThumbs span').removeClass('active');
			var src = $(evt.currentTarget).children('img').attr('src');
			$(evt.currentTarget).addClass('active');
			$('#postHero img.active').removeClass('active');
			var x ='<img src="'+src+'">';
			$('#postHero').append(x);
			setTimeout(function(){
				$('#postHero img').eq(0).remove();
				$('#postHero img').addClass('active');
			}, 300);
		},

		"focus .comment": function(evt) {
			if (evt.target.value == DEFAULT_COMMENT_TEXT) {
				evt.target.value = "";
			}
		},

		"click .addComment": function() {
			var field = Template.instance().$(".comment");
			var val = field.val().trim();
			if (val != "" && val != DEFAULT_COMMENT_TEXT) {
				addComment(val, false);
				field.val(DEFAULT_COMMENT_TEXT);
			}
		}

	});

	Template.detail.helpers({
		"moreThanOnePhoto": function() {
			return this.photos.length > 1;
		},
		"posterName": function() {
			if (this.createdBy) {
				return getDisplayName(Meteor.users.findOne(this.createdBy));
			}
		},
		"ownPost": function() {
			return this.createdBy == Meteor.userId();
		},
		"isExistingPost": function() {
			return Template.currentData()._id;
		},
		"defaultCommentText": function() {
			return DEFAULT_COMMENT_TEXT;
		},
		"comments": function() {
			return Comments.find({ post: Template.currentData()._id }, { sort: {creationDate: 1}});
		},
		"commenter": function() {
			return getDisplayName(Meteor.users.findOne(this.sender));
		},
		"commentDate": function() {
			//return moment(this.creationDate).fromNow();
			return moment(this.creationDate).format("MM/D/YY h:mm a");
		}
	});

}
