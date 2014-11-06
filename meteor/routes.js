
Router.configure({
	// the default layout
	layoutTemplate: 'layout'
});

Router.route('/', function () {
	this.render('listings');
}, {
	name: 'listings'
	//this.render('listings');
});

Router.route('/create', function () {
	this.render('create');
});

Router.route('/settings', function () {
	this.render('settings');
});

Router.route('/tempForm', function () {
	this.render('tempForm');
});

Router.route('/detail/:_id', function () {
	// TBD
	//var item = Items.findOne({_id: this.params._id});
	this.render('detail', {
		//data: item
  	});
});

Router.onBeforeAction(function() {
 	if (! Meteor.userId()) {
		this.render('login');
 	} else {
		this.next();
	}
});
