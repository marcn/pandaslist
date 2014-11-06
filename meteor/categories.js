if (Meteor.isClient) {
  Template.categories.helpers({
    categoryGroups: function() {
      var posts = Posts.find().fetch();
      var groups = _.groupBy(_.pluck(posts, 'category'));
      var arr = [];
  	
      // turn obj to arr
    	for (var key in groups) {
    		var obj = groups[key];
        var selected = (this.query.category == key);
    		arr.push({category: key, count: groups[key].length, selected: selected})
    	}
      return arr;
    }
  });

  Template.subCategories.helpers({
    cssClass: function() {
      if(this.selected)
        return "active";
      else
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
