
Router.route('/', function () {
	//this.render('listings');
});

Router.route('/listings', function () {
	this.render('listings');
}, {name: "listings"});

Router.route('/create', function () {
	this.render('create');
});

Router.route('/settings', function () {
	this.render('settings');
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
		this.render('login');
 	} else {
		this.next();
	}
});
