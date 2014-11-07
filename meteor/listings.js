if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			var filter = {};
			if(this.category)
				filter.category = this.category;
			if(this.subcategory && this.subcategory !== "All")
				filter.subcategory = this.subcategory;
			if(this.type === "me")
				filter.createdBy = Meteor.user()._id;
			if(this.search) {
				var reg = new RegExp(this.search,"gi");
				filter = { $or: [{ title: reg }, { description: reg }, { location: reg } ] };
			}
			return Posts.find(filter).fetch();
		}
	});

	Template.row.helpers({
		coverPhotoUrl: function() {
			return (this.coverPhotoUrl) ? this.coverPhotoUrl : '/img/fpo.png';
		},
		isSearch: function() {
			var asdf = "asdfa";
		}
	});
}	