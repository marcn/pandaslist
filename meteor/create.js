
if (Meteor.isClient) {

	Template.create.events({
		"change select": function(evt) {
			var classChanged = evt.target.className;
			var value = evt.target.value;
			if (classChanged == "category") {
				Session.set("postCategorySelected", value != "" ? value : null);
			}
		}
	});

	Template.create.helpers({
		"categories": function(){
			return Categories.find();
		},

		"subcategories": function() {
			var selectedName = Session.get("postCategorySelected");
			var category = Categories.findOne({name: selectedName});
			if (category != null) {
				return category.subCategories;
			}
		},

		"locations": function() {
			return Locations.find();
		},

		"defaultLocationSelected": function() {
			if (this.name == "Oakland") {	// TODO: user preference for default location
				return "SELECTED";
			}
		}
	});
}