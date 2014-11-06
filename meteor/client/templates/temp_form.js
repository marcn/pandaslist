
Template.tempForm.created = function() {
	Session.set("newPostImages", []);
};

var handleImageUpload = function(event, template) {
	FS.Utility.eachFile(event, function(file) {
		Images.insert(file, function (err, fileObj) {
			if (err) {
				console.log(err);
			} else {
				var images = Session.get("newPostImages");
				images.push(fileObj._id);
				Session.set("newPostImages", images);
			}
		});
	});
}

Template.tempForm.events({
  'submit form': function(e) {
		e.preventDefault();
		
		var post = {
		  title: $(e.target).find('[name=title]').val(),
		  description: $(e.target).find('[name=description]').val(),
		  category: $(e.target).find('[name=category]').val()
		};

		Posts.insert(post);  
	},

	'change .file_bag': _.bind(handleImageUpload, this),
	'dropped .dropzone': _.bind(handleImageUpload, this)

});


Template.tempForm.helpers({
	"files": function(){
		return Images.find({ _id: {$in: Session.get("newPostImages")}});
	}
});
