
Router.route('/', function () {
  this.render('Home');
});

Router.route('/listings', function () {
  this.render('Listings');
});

Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});
