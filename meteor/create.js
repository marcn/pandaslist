
if (Meteor.isClient) {

	Template.create.created = function() {
		Session.set("postCategorySelected", null);
		Session.set("postImages", []);
		Session.set("postCoverPhoto", null);
	};

	var handleImageUpload = function(event, template) {
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, fileObj) {
				if (err) {
					console.log(err);
				} else {
					var images = Session.get("postImages");
					images.push(fileObj._id);
					Session.set("postImages", images);
					// If cover photo hasn't been chosen yet, auto-select this image
					if (!Session.get("postCoverPhoto")) {
						Session.set("postCoverPhoto", fileObj._id);
					}
				}
			});
		});
	}

	Template.create.events({
		"change select": function(evt) {
			var classChanged = evt.target.className;
			var value = evt.target.value;
			if (classChanged == "category") {
				Session.set("postCategorySelected", value != "" ? value : null);
			}
		},
		
		'change .file_bag': _.bind(handleImageUpload, this),
		'dropped .dropzone': _.bind(handleImageUpload, this),

		'change .photoPreview .options': function(evt) {
			evt.preventDefault();
			if (evt.target.checked) {
				Session.set("postCoverPhoto", evt.target.value);
			}
		},

		'click .photoPreview a': function(evt) {
			evt.preventDefault();
			var id = $(evt.target).parents('li').attr('data-id');
			console.log("removing ", id);
			// Remove from post images
			var images = _.without(Session.get("postImages"), id);
			// If image was selected for cover photo, select the first remaining image
			if (Session.get("postCoverPhoto") == id) {
				console.log("matched post cover photo, setting to ", images[0]);
				Session.set("postCoverPhoto", images.length > 0 ? images[0] : null);
			}
			Session.set("postImages", images);
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
		},

		"files": function(){
			return Images.find({ _id: {$in: Session.get("postImages")}});
		},

		"coverPhotoChecked": function() {
			if (this._id == Session.get("postCoverPhoto")) {
				return "CHECKED";
			}
		}

	});
}