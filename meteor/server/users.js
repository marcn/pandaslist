// Seed the users
Meteor.startup(function () {
    if (Meteor.users.find({_id: "0"}).count() == 0) {
      Meteor.users.insert({ _id: "0", registrationId: 'asdfasdf'});
        Meteor.users.insert({ _id: "1", registrationId: '1111111'});
        Meteor.users.insert({ _id: "2", registrationId: '222222'});
        Meteor.users.insert({ _id: "3", registrationId: '12345567'});
        Meteor.users.insert({ _id: "4", registrationId: 'FFFFFFFFF'});
    }
});