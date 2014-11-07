if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			var filter = {};
			if(this.category)
				filter.category = this.category;
			if(this.subcategory && this.subcategory !== "All")
				filter.subcategory = this.subcategory;
			if(this.type === "me" && Meteor.user())
				filter.createdBy = Meteor.user()._id;

			return Posts.find(filter, {sort: {creationDate: -1}});
		}
	});

	Template.row.helpers({

	});
}	