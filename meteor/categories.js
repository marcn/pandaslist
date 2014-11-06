if (Meteor.isClient) {

  var isSelected = function(category, subCategory, queryParams) {
    return queryParams.subCategory === subCategory && queryParams.category === category;
  };

  Template.categories.helpers({
    categoryGroups: function() {
      var posts = Posts.find().fetch();
      var groups = _.groupBy(_.pluck(posts, 'category'));
      var arr = [];
  	
      // turn obj to arr
    	for (var key in groups) {
    		var obj = groups[key];
    		arr.push({category: key, count: groups[key].length, params: this})
    	}
      return arr;
    }
  });

  Template.category.helpers({
    subCategoryGroups: function() {
      var posts = Posts.find({category: this.category}).fetch();
      var groups = _.groupBy(_.pluck(posts, 'subCategory'));
      
      // turn obj to arr
      var arr = [];
      // add All subcategory
      arr.push({category: this.category, subCategory: "All", count: posts.length, 
        selected: isSelected(this.category, "All", this.params.query)});
    
      // add rest of subcateories
      for (var key in groups) {
        var obj = groups[key];
        if(key !== "undefined")
          arr.push({category: this.category, subCategory: key, count: groups[key].length, 
            selected: isSelected(this.category, key, this.params.query)});
      }

      return arr;
    }
  });

  Template.subCategory.helpers({
    cssClass: function() {
      if(this.selected)
        return "active";
      else
    	 return (this.count === 0) ? "inactive" : "";
    }
  });


  Template.subCategory.events({
  	"click li": function(evt) {
  		var path = $(evt.currentTarget).data('listing-category');
  		Router.go(path);
  	}	
  });
}

if (Meteor.isServer) {
  Meteor.methods({
    "getCategories": function() {
      var categories = Categories.find().fetch();
      return {"method":"getCategories", "data": {"categories": categories}};
    }
  });
}
