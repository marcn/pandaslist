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
		event.preventDefault();
		var files = event.target.files;
        S3.upload(files,"/images",function(e,r){
            console.log(r);
        });
	}

});

Template.tempForm.helpers({
    "files": function(){
        return S3.collection.find();
    }
});
