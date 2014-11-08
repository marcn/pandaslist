if (Meteor.isClient) {

  var isSelected = function(category, subcategory, queryParams) {
    return queryParams.subcategory === subcategory && queryParams.category === category;
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
    subcategoryGroups: function() {
      var posts = Posts.find({category: this.category}).fetch();
      var groups = _.groupBy(_.pluck(posts, 'subcategory'));

      // turn obj to arr
      var arr = [];
      // add All subcategory
      arr.push({category: this.category, subcategory: "All", count: posts.length,
        selected: isSelected(this.category, "All", this.params.query)});

      // add rest of subcateories
      for (var key in groups) {
        var obj = groups[key];
        if(key !== "undefined")
          arr.push({category: this.category, subcategory: key, count: groups[key].length,
            selected: isSelected(this.category, key, this.params.query)});
      }

      return arr;
    }
  });

  Template.subcategory.helpers({
    cssClass: function() {
      if(this.selected)
        return "active";
      else
    	 return (this.count === 0) ? "inactive" : "";
    }
  });


  Template.subcategory.events({
  	"click li": function(evt) {

      $('#nav h2.topLevel').removeClass('active');

  		var path = $(evt.currentTarget).data('listing-category');
  		Router.go(path);
  	}
  });


  Template.categories.events({
    "click h2": function(evt) {

      if ( $(evt.currentTarget).hasClass('active') ) return false;


      if ( !$('#nav h2.active').hasClass('topLevel') || $(evt.currentTarget).hasClass('topLevel') ) {
        $('#nav h2').removeClass('active');
      }

      $(evt.currentTarget).addClass('active');


      $('#nav ul').slideUp(500);
      $(evt.currentTarget).next('ul').slideDown(500);

      //this.className = 'active';
      //var path = $(evt.currentTarget).data('listing-category');
      //Router.go(path);
    },

    //flash subcat that has a new posting
    "change span": function(evt) {
      $(evt.currentTarget).addClass('new');

      setTimeout(function(){
        $(evt.currentTarget).removeClass('new');
      }, 2000);

    }

  });



  Template.layout.events({
    "click #burger": function(evt) {

      $(evt.currentTarget).toggleClass('active');
      $('#nav').toggleClass('active');

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
