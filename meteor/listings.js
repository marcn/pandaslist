if (Meteor.isClient) {
	Template.listings.helpers({
		listing: function() {
			if(this.category)
				return Posts.find({category: this.category});
			else
				return Posts.find();
			}
	});
}	