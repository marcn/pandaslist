if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			var filter = {};
			if(this.category)
				filter.category = this.category;
			if(this.subcategory && this.subcategory !== "All")
				filter.subcategory = this.subcategory;

			return Posts.find(filter);
		}
	});

	Template.row.helpers({
		coverPhotoUrl: function() {
			return (this.coverPhotoUrl) ? this.coverPhotoUrl : '/img/fpo.png';
		}
	});
}	