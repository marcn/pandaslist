
Router.configure({
	// the default layout
	layoutTemplate: 'layout',

	data: function () {
    	return this.params;
  	},
});

Router.route('/', function () {
	this.render('listings', {
		data: function() {
			return this.params.query;
		}
	});
}, {
	name: 'listings'
});

Router.route('/create', function () {
	Session.set("postCategorySelected", null);
	Session.set("previewPost", null);
	this.render('create');
});

Router.route('/edit', function () {
	var post = Session.get("previewPost");
	if (post == null) {
		Router.go('/create');
	} else {
		Session.set("postCategorySelected", null);
		this.render('create');
	}
});

Router.route('/preview', function() {
	var post = Session.get("previewPost");
	if (post != null) {
		post['isPreview'] = true;
		this.render('detail', {
			data: function() {
				return post;
			}
		});
	} else {
		Router.go('/create');
	}
});

Router.route('/settings', function () {
	this.render('settings');
});


Router.route('/tempForm', function () {
	this.render('tempForm');
});

Router.route('/detail/:_id', function () {
	Session.set("previewPost", null);
	this.render('detail', {
		data: function() {
			return Posts.findOne({_id: this.params._id});
		}
	});
}, {name: "post.show"});

Router.onBeforeAction(function() {
	if(Meteor.isClient && !Meteor.userId()) {
	 	this.layout('emptyLayout');
		this.render('login');
	 } else {
		this.next();
	}
});

Router.map(function() {
   this.route('storeRegistrationId', {
       path: '/storeRegistrationId',
       where: 'server',
       action: function() {
           var requestMethod = this.request.method;
           var userId = this.request.query.userId;
           var registrationId = this.request.query.registrationId;
           Meteor.users.update({_id:userId}, {_id:userId, registrationId:registrationId}, 
           	{upsert:true});
           this.response.writeHead(200, {'Content-Type': 'text/html'});
           this.response.end('<html><body>Your userId:' + userId + ' and registrationId:'
           	+registrationId+'</body></html>');
       }
   });
});   
