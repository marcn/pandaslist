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

	'change .file_bag': function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, fileObj) {
			//Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
			console.log(err);
			console.log(fileObj);
			});
		});
	},

	'dropped .dropzone': function(event, temp) {
		console.log('files dropped');
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, fileObj) {
			//Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
			console.log(err);
			console.log(fileObj);
			});
		});
	}

});

Template.tempForm.helpers({
	"files": function(){
		return Images.find();
	}
});
