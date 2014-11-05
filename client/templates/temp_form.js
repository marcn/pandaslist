Template.tempForm.events({
  'submit form': function(e) {
	    e.preventDefault();
		
	    var post = {
	      title: $(e.target).find('[name=title]').val(),
	      description: $(e.target).find('[name=description]').val(),
	      category: $(e.target).find('[name=category]').val()
	    };

	    Posts.insert(post);  
	}
});
