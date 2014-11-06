// Seed the locations
Meteor.startup(function () {
    if (Locations.find().count() == 0) {
    	Locations.insert({ name: 'Oakland'});
    	Locations.insert({ name: 'Atlanta'});
    	Locations.insert({ name: 'Aukland'});
    	Locations.insert({ name: 'Boulder'});
    	Locations.insert({ name: 'Boston'});
    	Locations.insert({ name: 'Chicago'});
    	Locations.insert({ name: 'Clevland'});
    	Locations.insert({ name: 'Columbus'});
    	Locations.insert({ name: 'Dallas'});
    	Locations.insert({ name: 'DC'});
    	Locations.insert({ name: 'Denver'});
    	Locations.insert({ name: 'Detroit'});
    	Locations.insert({ name: 'Houston'});
    	Locations.insert({ name: 'Kansas City'});
    	Locations.insert({ name: 'KXMZ'});
    	Locations.insert({ name: 'Minneapolis'});
    	Locations.insert({ name: 'Melbourne'});
    	Locations.insert({ name: 'New York'});
    	Locations.insert({ name: 'Phoenix'});
    	Locations.insert({ name: 'Portland'});
    	Locations.insert({ name: 'Santa Monica'});
    	Locations.insert({ name: 'San Diego'});
    	Locations.insert({ name: 'Seattle'});
    	Locations.insert({ name: 'St Louis'});
    	Locations.insert({ name: 'Sydney'});
    }
})