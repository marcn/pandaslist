// Seed the categories
Meteor.startup(function () {
    if (Meteor.users.find({_id: "0"}).count() == 0) {
    	Meteor.users.insert({ _id: "0", pushToken: 'asdfasdf'});
        Meteor.users.insert({ _id: "1", pushToken: '1111111'});
        Meteor.users.insert({ _id: "2", pushToken: '222222'});
        Meteor.users.insert({ _id: "3", pushToken: '12345567'});
        Meteor.users.insert({ _id: "4", pushToken: 'FFFFFFFFF'});
    }
});