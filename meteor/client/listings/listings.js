if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			var filter = {};
			if(this.category)
				filter.category = this.category;
			if(this.subcategory && this.subcategory !== "All")
				filter.subcategory = this.subcategory;
			if(this.type === "me")
				filter.createdBy = Meteor.userId();
			if(this.search) {
				var reg = new RegExp(this.search,"gi");
				filter = { $or: [{ title: reg }, { description: reg }, { location: reg } ] };
			}
			var posts = Posts.find(filter, {sort: {creationDate: -1}}).fetch();
			var search = this.search;

			// inject search term to post objects
			return posts.map($.proxy(function(post) {
			   post.search = this.search;
			   return post;
			}, this));				
		}
	});

	Template.row.helpers({
		coverPhotoUrl: function() {
			return (this.coverPhotoUrl) ? this.coverPhotoUrl : '/img/hackweek_Pandalist_default-img.png';
		},
		isSearch: function() {
			return (this.search) ? true : false;
		},
		truncatedDescription: function() {
			return highlight(this.description, this.search);
		},
		highlightedTitle: function() {
			return highlight(this.title, this.search);
		}
	});

	var highlight = function(text, searchTerm, alwaysReturn) {
    	var reg = new RegExp(searchTerm,"i");
		var res = reg.exec(text);

		if(!res)
			return text.substring(0, 200);

		var index = res.index;
		var startIndex = index - 100;
		if(startIndex < 0) {
			startIndex = 0;
		}
		var endIndex = index + 100;
		if(endIndex > text.length) {
			endIndex = text.length;
		}
		
		var truncatedDescription = "";
		if(startIndex !== 0) { truncatedDescription = "..."; }
		var truncatedDescription = text.substring(startIndex, endIndex);
		if(endIndex !== text.length) { truncatedDescription += "..."; }

		return truncatedDescription.replace(reg, "<span  class='search-term'>" + searchTerm + "</span>");
  };
}	