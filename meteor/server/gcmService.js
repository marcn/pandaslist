if (Meteor.isClient) {
  // Meteor.call('notifySubscribers','WANTED');
  // Meteor.call('storeRegistrationId','1', 'monkey');
  var post = {category: 'For Sale',
              subcategory: 'antiques',
              location: 'Oakland',
              title: 'afd',
              price: 'asdf',
              description: 'asdf',
              delivery_method: 'office_pickup',
              coverPhoto: null,
              coverPhotoUrl: null,
              photos: [],
              createdBy: '6htbgkcXhQmzpDi8k',
              creationDate: 1415322308257,
              published: true };
  Meteor.call('sendPushNotification', post, 'APA91bHI_awkvZqUDE1ahTQ79LasxMqvcBGnu6AFTSkY81bJYYIIMjHB-3h0J6wN1Y8g97wT4j5R6P0xlqVZyHyvHtoGNU73z0GBdELDAVwuvFsivU6b6qa4AGsKqqaJGQ6T6Pft1OkIStm_nZbyQTnv3n2oLFDDFFWAP3JOiiSXIfpnMJEIrdg');
}

if (Meteor.isServer) {
  Meteor.methods({
    'sendPushNotification': function(post, registrationId){
      this.unblock();
      var gcm = Meteor.npmRequire('node-gcm');
      var message = new gcm.Message();
      message.addDataWithKeyValue("post",post);
      var sender = new gcm.Sender(GCM_API);
      var registrationIds =[];
      registrationIds.push(registrationId);
      sender.sendNoRetry(message, registrationIds, function (err, result) {
        if(err){
          console.log('Error:'+err);
        }else{
          console.log('Result:'+JSON.stringify(result));
        }
      });
    },

    'sendEmail': function(user, post){
      // Let other method calls from the same client start running,
      // without waiting for the email sending to complete.
      this.unblock();
      
      console.log('send email');
      console.log(Email.send({
        to: 'rmordoff@gmail.com',
        from: 'rmordoff@gmail.com',
        subject: 'Pandalist - ' + post.category + ' - ' + post.title,
        html: '<h2>'+post.title+'</h2><p>'+post.description+'</p><img src="'+post.coverPhotoUrl+'/>'
      }));
    },

    'notifySubscribers': function(post){
      var category = post.category + "." + post.subcategory;
      var currentUserId = post.createdBy;
      var usersToNotify=Subscriptions.findOne({category: category}, {fields: {userIds:1, _id:0}});
      console.log(usersToNotify);
      if(usersToNotify==null){
        return
      }
      console.log("sending push notification to: "+usersToNotify.userIds);
      for(var i=0; i<usersToNotify.userIds.length; i++){
        var userId=usersToNotify.userIds[i];
        if(currentUserId==userId){
          continue;
        }
        var registrationId = Meteor.users.findOne({_id: userId},
          {fields: {registrationId:1, _id:0}}).registrationId;
        console.log(userId+":"+registrationId);
        
        var user = Meteor.users.findOne({_id: userId});
        if(user.sendEmails)
          Meteor.call('sendEmail', user, post);
        if(user.sendPushNotification)
          Meteor.call('sendPushNotification', post, registrationId);
      }
    },

    'storeRegistrationId': function(userId, registrationId) {
      Meteor.users.update({_id:userId}, {_id:userId, registrationId:registrationId}, 
            {upsert:true});
      console.log('userId:' + userId + ' registrationId:'+registrationId);
      return {"method":"storeRegistrationId", "data": {"userId": userId, "registrationId": registrationId}};
    }
  });
}