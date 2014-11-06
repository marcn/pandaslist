if (Meteor.isClient) {
  sendPushNotification = function sendPushNotification(callback){
    Meteor.call('sendPushNotification', callback);
  }
  notifySubscribers = function notifySubscribers(callback){
    Meteor.call('notifySubscribers', callback);
  }
  notifySubscribers('WANTED');
}

if (Meteor.isServer) {
  Meteor.methods({
    'sendPushNotification': function sendPushNotification(registrationIds){
      console.log("Meow meteor");
      var gcm = Meteor.npmRequire('node-gcm');
      var message = new gcm.Message();
      var sender = new gcm.Sender('AIzaSyDbvGCuwcCVKeSspP0rLuCPdKNdjG6J8uI')
      console.log(registrationIds);
      sender.sendNoRetry(message, registrationIds, function (err, result) {
        if(err){
          console.log('Error:'+err);
        }else{
          console.log('Result:'+JSON.stringify(result));
        }
      });
    },

    'notifySubscribers': function notifySubscribers(category){
      var usersToNotify=Subscriptions.findOne({category: category}, {fields: {userIds: 1, _id:0}});
      console.log(usersToNotify);
      console.log("sending push notification to: "+usersToNotify.userIds);
      Meteor.call('sendPushNotification',usersToNotify.userIds);
    }
  });
}