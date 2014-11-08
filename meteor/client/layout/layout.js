
if (Meteor.isClient) {

	Template.layout.helpers({
		"loggedInName": function() {
			console.log(getDisplayName(Meteor.user()));
			return getDisplayName(Meteor.user());
		}
	});

}
