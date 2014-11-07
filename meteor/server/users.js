// Seed the users
Meteor.startup(function () {
    if (Meteor.users.find({_id: "0"}).count() == 0) {
      Meteor.users.insert({ _id: "0", registrationId: 'asdfasdf'});
        Meteor.users.insert({ _id: "1", registrationId: '1111111'});
        Meteor.users.insert({ _id: "2", registrationId: 'APA91bHI_awkvZqUDE1ahTQ79LasxMqvcBGnu6AFTSkY81bJYYIIMjHB-3h0J6wN1Y8g97wT4j5R6P0xlqVZyHyvHtoGNU73z0GBdELDAVwuvFsivU6b6qa4AGsKqqaJGQ6T6Pft1OkIStm_nZbyQTnv3n2oLFDDFFWAP3JOiiSXIfpnMJEIrdg'});
        Meteor.users.insert({ _id: "3", registrationId: '12345567'});
        Meteor.users.insert({ _id: "4", registrationId: 'FFFFFFFFF'});
    }
});