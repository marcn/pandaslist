
Router.route('/', function () {
	this.render('listings');
});

Router.route('/create', function () {
	this.render('create');
});

Router.route('/detail:_id', function () {
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
