
if (Meteor.isClient) {

	Template.search.events({

		'submit .search-form': function(evt) {
			evt.preventDefault();

			var searchText = $('input', evt.currentTarget).val();

			Router.go("/?search=" + searchText);
		},
		'change input, keyup input, paste input': function(evt) {
			var searchText = $(evt.currentTarget).val();

			Router.go("/?search=" + searchText);
		}
	});

}
