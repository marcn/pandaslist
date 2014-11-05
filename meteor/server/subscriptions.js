// Seed the categories
Meteor.startup(function () {
    if (Subscriptions.find().count() == 0) {
    	Subscriptions.insert({ category: "WANTED", userIds: ["0","2","3","4"]});
        Subscriptions.insert({ category: "For Sale.antiques", userIds: ["2"]});
        Subscriptions.insert({ category: "Housing.apartments/housing", userIds: ["3","4"]});
        Subscriptions.insert({ category: "Services.computer", userIds: ["git s","3","4"]});
    }
});