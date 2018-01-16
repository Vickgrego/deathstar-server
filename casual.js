var casual = require('casual');
// Create an object for config file
var code = casual.integer(100,999);
var db = {death_star:{code_access:code, defence:[], fleet:[]}, rebels:[]};

//make defence
for(var i=0; i<5; i++){
	var defence_level = {};
    defence_level.id = i+1;
	defence_level.activated = true;
	defence_level.guards = casual.integer(8,45);
	defence_level.energy_field = casual.integer(30,100);
    defence_level.entry_coordinates = [casual.latitude, casual.longitude];
	
    db.death_star.defence.push(defence_level);
};

//make fleet
var types = ['TIE fighter', 'T-4 Shuttle', 'TIE-Bomber', 'TIE-Advance x1', 'TIE-Interceptor'];

for(var i=0; i<15; i++){
    let rand = casual.integer(0, types.length);
	
	var spaceship = {};
    spaceship.id = i+1;
	
	var s = types[rand]
	spaceship.type = s;
    spaceship.coordinates = [casual.latitude, casual.longitude];
	
    db.death_star.fleet.push(spaceship);
};

//make rebels
for(var i=0; i<1; i++){
    var squad = {};
	squad.id = i;
	squad.amount = 0;
	squad.send_to_coordinates = [0, 0];

    db.rebels.push(squad);
  }
console.log(JSON.stringify(db));