
if (Meteor.isClient) {

	Template.create.created = function() {
		Session.set("postCategorySelected", null);
		Session.set("postImages", []);
		Session.set("postCoverPhoto", null);
		Session.set("formChanges", 0);
	};

	Template.create.rendered = function() {
		var data = Session.get("previewPost");
		if (data) {
			Session.set("postCategorySelected", data['category']);
			var template = this;
			_.each(['category', 'location', 'title', 'price', 'description', 'delivery_method'], function(name) {
				template.$("."+name).val(data[name]);
			});
			Session.set("postImages", _.pluck(data.photos, "id"));
			Session.set("postCoverPhoto", data.coverPhoto);
			setTimeout(_.bind(function() {
				this.$(".subcategory").val(data['subcategory']);
				Session.set("formChanges", Session.get("formChanges")+1);
			}, this), 1);
		}
	};

	var handleImageUpload = function(files) {
		for (var i=0; i < files.length; i++) {
			if (files.item(i).type.indexOf("image/") != 0) {
				alert("Only image files are allowed");
				// Only allow image uploads
				return;
			}
		}
		S3.upload(files, "/images", function(err,result) {
			if (err) {
				console.log(err);
			} else {
				var image = Images.insert({
					url: result.url
				});
				var images = Session.get("postImages");
				images.push(image);
				Session.set("postImages", images);
				// If cover photo hasn't been chosen yet, auto-select this image
				if (!Session.get("postCoverPhoto")) {
					Session.set("postCoverPhoto", image);
				}
			}
			
		});
		// FS.Utility.eachFile(event, function(file) {
		// 	Images.insert(file, function (err, fileObj) {
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			var images = Session.get("postImages");
		// 			images.push(fileObj._id);
		// 			Session.set("postImages", images);
		// 			// If cover photo hasn't been chosen yet, auto-select this image
		// 			if (!Session.get("postCoverPhoto")) {
		// 				Session.set("postCoverPhoto", fileObj._id);
		// 			}
		// 		}
		// 	});
		// });
	}

	var getFormData = function(template) {
		var data = {};
		if (Session.get("postCategorySelected")) {
			_.each(['category', 'subcategory', 'location', 'title', 'price', 'description', 'delivery_method'], function(name) {
				data[name] = template.$("."+name).val();
			});
		}
		return data;
	}

	var getPostData = function(template) {
		var post = getFormData(Template.instance());
		var coverPhoto = Session.get("postCoverPhoto");
		post['coverPhoto'] = coverPhoto;
		post['coverPhotoUrl'] = coverPhoto != null ? Images.findOne(coverPhoto).url : null;
		var photos = [];
		_.each(Session.get("postImages"), function(image) {
			photos.push({
				id: image,
				url: Images.findOne(image).url
			});
		});
		post['photos'] = photos;
		post['createdBy'] = Meteor.userId();
		post['creationDate'] = new Date().getTime();
		post['published'] = true;
		return post;
	}

	Template.create.events({
		"change select": function(evt) {
			var classChanged = evt.target.className;
			var value = evt.target.value;
			if (classChanged == "category") {
				Session.set("postCategorySelected", value != "" ? value : null);
			}
		},

		"change, keyup": function(evt) {
			Session.set("formChanges", Session.get("formChanges")+1);
		},

		'change .file_bag': function(event) {
			handleImageUpload(event.target.files);
		},

		'dropped .dropzone': function(event) {
			handleImageUpload(event.originalEvent.dataTransfer.files);
		},

		'change .photoPreview .options': function(evt) {
			evt.preventDefault();
			if (evt.target.checked) {
				Session.set("postCoverPhoto", evt.target.value);
			}
		},

		'click .photoPreview a': function(evt) {
			evt.preventDefault();
			var li = $(evt.target).parents('li');
			var id = li.attr('data-id');
			// Remove from post images
			var images = _.without(Session.get("postImages"), id);
			// If image was selected for cover photo, select the first remaining image
			if (Session.get("postCoverPhoto") == id) {
				if (images.length > 0) {
					Session.set("postCoverPhoto", images[0]);
					// Even though the DOM is updated with "checked" on the element, it doesn't actualy check it
					$('input[type=radio][value="'+images[0]+'"]', li.parents("ul")).prop("checked", true);
				} else {
					Session.set("postCoverPhoto", null);
				}
			}
			Session.set("postImages", images);
		},

		'click .save': function() {
			var post = getPostData(Template.instance());
			var id = Session.get("previewPost")._id;
			Posts.update({_id: id}, post);
			Meteor.call("notifySubscribers", post);
			Router.go("/detail/"+id);
		},

		'click .post': function() {
			var post = getPostData(Template.instance());
			var id = Posts.insert(post);
			Meteor.call("notifySubscribers", post);
			Router.go("/detail/"+id);
		},

		'click .preview': function() {
			var data = getPostData(Template.instance());
			if (Session.get("previewPost")._id) {
				data._id = Session.get("previewPost")._id;
			}
			Session.set("previewPost", data);
			Router.go("/preview");
		},

		'click .cancel': function() {
			Router.go("listings");
		}

	});

	Template.create.helpers({

		"previewPost": function() {
			return Session.get("previewPost");
		},

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
			var images = Session.get("postImages");
			return Images.find({ _id: {$in: images}});
		},

		"coverPhotoChecked": function() {
			if (this._id == Session.get("postCoverPhoto")) {
				return "CHECKED";
			}
		},

		"formHasEnoughInfo": function() {
			Session.get("formChanges");	// create reactive dependency
			var category = Categories.findOne({name: Session.get("postCategorySelected")});
			var needsSubcategory = category && category.subCategories.length > 0;
			var data = getFormData(Template.instance());
			if (
				(data['category'] && data['category'].length > 0) &&
				(!needsSubcategory || (data['subcategory'] && data['subcategory'].length > 0)) &&
				(data['location'] && data['location'].length > 0) &&
				(data['title'] && data['title'].length > 0) &&
				(data['description'] && data['description'].length > 0) &&
				(data['delivery_method'] && data['delivery_method'].length > 0)
			) {
				return true;
			}
			return false;
		}

	});
}