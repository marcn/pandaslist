
if (Meteor.isClient) {

	Template.detail.events({

		'click .edit': function() {
			Router.go("/edit");
		},

		'click .post': function() {
			var post = Session.get("previewPost");
			var id = Posts.insert(post);
			Session.set("previewPost", null);
			Router.go("/detail/"+id);		// FIXME: for some reason this does not go to detail page
		},

		'click .purchase': function() {

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
		}

	});

	Template.detail.helpers({
		"moreThanOnePhoto": function() {
			return this.photos.length > 1;
		}
	});

}
