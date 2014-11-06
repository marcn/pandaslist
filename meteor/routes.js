
Router.configure({
	// the default layout
	layoutTemplate: 'layout'
});

Router.route('/', function () {
	this.render('listings');
}, {
	name: 'listings'
});

Router.route('/create', function () {
	Session.set("postCategorySelected", null);
	this.render('create');
});

Router.route('/settings', function () {
	this.render('settings');
});


Router.route('/tempForm', function () {
	this.render('tempForm');
});

Router.route('/detail/:_id', function () {
	this.render('detail', {
		data: function() {
			return Posts.findOne({_id: this.params._id});
		}
	});
}, {name: "post.show"});

Router.onBeforeAction(function() {
 	if (! Meteor.userId()) {
 		this.layout('emptyLayout');
		this.render('login');
 	} else {
		this.next();
	}
});
