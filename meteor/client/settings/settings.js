if (Meteor.isClient) {

  Template.subscriptions.helpers({
    categories: function() {
      return Categories.find().fetch();
    },
    subCategories: function() {
      for(var i = 0; i < this.subCategories.length; i++) {
        this.subCategories[i] = {
          subCategory: this.subCategories[i],
          category: this.name
        }
      }
      return this.subCategories;
    },
    isChecked: function() {
      if (Subscriptions.find({'userIds': Meteor.userId(), category: this.category+'.'+this.subCategory}).fetch().length > 0) {
        return "checked";
      }
      else {
        return "";
      }
    }
  });

  Template.subscriptions.events({


    'submit form': function(e) {
      e.preventDefault();

      var userId = Meteor.userId();

      // set notification types
      var sendEmails = ($('input[name=notification-email]', e.target).val()) ? true : false;
      var sendPushNotifications = ($('input[name=notification-push]', e.target).val()) ? true : false

      Meteor.users.update(userId, {$set: {sendEmails: sendEmails}});
      Meteor.users.update(userId, {$set: {sendPushNotifications: sendPushNotifications}});

      // remove all subs for user
      var currentSubs = Subscriptions.find({'userIds': userId}).fetch();
      for(var i = 0; i < currentSubs.length; i++) {
        currentSubs[i].userIds.splice(currentSubs[i].userIds.indexOf(userId), 1);
        console.log(currentSubs[i].userIds);
        Subscriptions.update(currentSubs[i]._id, {$set: {userIds: currentSubs[i].userIds}});
        console.log('deleting ' + currentSubs[i].category);
      }


      // add in new subs for user
      var subCategories = $('input:checked', e.target);
      for(var i = 0; i < subCategories.length; i++) {
        var category = $(subCategories[i]).val();
        var sub = Subscriptions.findOne({'category': category});
        console.log('adding ' + category);
        if(sub) {
          if(sub.userIds)
            sub.userIds.push(userId);
          else
            sub.userIds = [userId];
          Subscriptions.update(sub._id, {$set: {userIds: sub.userIds}});
        } else {
          Subscriptions.insert({category: category, userIds: [userId]});
        }

      }

    },


    // checkall
    'click .checkall': function(evt) {

      var el = $(evt.currentTarget),
           i = $('.checkall').index(el);

      $('.subCatBlock').eq(i).children('.subCatSub').children('input').each(function() {
        if ( el.is(':checked') )
          $(this).prop('checked', true)
        else
          $(this).prop('checked', false);
      });

    }



  });


}