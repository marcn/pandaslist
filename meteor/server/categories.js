// Seed the categories
Meteor.startup(function () {
    if (Categories.find().count() == 0) {
        Categories.insert({ name: "For Sale", subCategories: [
        	'antiques', 'appliances', 'arts & crafts', 'atv/utv/sno', 'auto parts', 
        	'baby/kid', 'barter', 'beauty/health', 'bikes', 'boats', 'books', 'business', 
        	'cars/trucks', 'cds/dvd/vhs', 'clothes/accessories', 'collectibles', 'computers', 
        	'electronics', 'farm/garden', 'free', 'furniture', 'garage sale', 'general', 
        	'heavy equipment', 'household', 'jewelry', 'materials', 'motorcycles', 'music instruments', 
        	'photo/video', 'rvs/camp', 'sporting', 'tickets', 'tools', 'toys/games', 'video gaming', 
        	'other'
        	]
    	});
    	Categories.insert({ name: "WANTED", subCategories: [
        	]
    	});
    	Categories.insert({ name: "Housing", subCategories: [
    		'apartments/housing', 'housing swap', 'housing wanted', 'office/commercial', 
    		'parking/storage', 'real estate for sale', 'rooms/shared', 'rooms wanted', 
    		'sublets/temporary', 'vacation rentals', 'other'
        	]
    	});
    	Categories.insert({ name: "Gigs", subCategories: [
    		'computer', 'creative', 'crew', 'domestic event', 'labor', 'talent', 'writing', 'other'
        	]
    	});
    	Categories.insert({ name: "Community", subCategories: [
    		'activities', 'artists', 'childcare', 'classes', 'events', 'general', 'groups', 'local news', 
    		'lost-and-found', 'musicians', 'PERGs', 'pets', 'politics', 'rideshare', 'volunteers', 'other'
        	]
    	});
    	Categories.insert({ name: "Services", subCategories: [
    		'automotive', 'beauty', 'computer', 'creative', 'cycle', 'event', 
    		'farm & garden', 'financial', 'household', 'labor/move', 'legal', 
    		'lessons', 'marine', 'pet', 'real estate', 'skilled', 'trade', 
    		'small biz', 'ads', 'therapeutic', 'travel/vac', 'write/ed/tr8', 'other'
        	]
    	});
    }
});