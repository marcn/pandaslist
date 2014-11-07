if (Meteor.isClient) {
  notifySubscribers = function(callback){
    Meteor.call('notifySubscribers', callback);
  }
  notifySubscribers('WANTED');
}

if (Meteor.isServer) {
  Meteor.methods({
    'sendPushNotification': function(registrationId){
      var gcm = Meteor.npmRequire('node-gcm');
      var message = new gcm.Message();
      var sender = new gcm.Sender('APIKEY');
      var registrationIds =[];
      registrationIds.push(registrationId)
      sender.sendNoRetry(message, registrationIds, function (err, result) {
        if(err){
          console.log('Error:'+err);
        }else{
          console.log('Result:'+JSON.stringify(result));
        }
      });
    },

    'notifySubscribers': function(post){
      var category = post.category + "." + post.subcategory;
      var usersToNotify=Subscriptions.findOne({category: category}, {fields: {userIds:1, _id:0}});
      console.log(usersToNotify);
      console.log("sending push notification to: "+usersToNotify.userIds);
      for(var i=0; i<usersToNotify.userIds.length; i++){
        var userId=usersToNotify.userIds[i];
        var registrationId = Meteor.users.findOne({_id: userId},{fields: {pushToken:1, _id:0}}).pushToken;
        console.log(userId+":"+registrationId);
        Meteor.call('sendPushNotification', registrationId);
      }
    }
  });
}