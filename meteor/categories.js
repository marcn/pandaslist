if (Meteor.isClient) {
  Template.categories.helpers({
    categoryGroups: function() {
      var posts = Posts.find().fetch();
      var groups = _.groupBy(_.pluck(posts, 'category'));
      var arr = [];
  	
      // turn obj to arr
    	for (var key in groups) {
    		var obj = groups[key];
    		arr.push({category: key, count: groups[key].length})
    	}
      return arr;
    }
  });

  Template.subCategories.helpers({
    cssClass: function() {
    	return (this.count === 0) ? "inactive" : "";
    }
  });


  Template.subCategories.events({
  	"click li": function(evt) {
  		var path = $(evt.currentTarget).data('listing-category');
  		Router.go(path);
  	}	
  });
}
