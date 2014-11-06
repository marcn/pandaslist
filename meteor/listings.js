if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			var filter = {};
			if(this.category)
				filter.category = this.category;
			if(this.subCategory && this.subCategory !== "All")
				filter.subCategory = this.subCategory;

			return Posts.find(filter);
		}
	});
}	