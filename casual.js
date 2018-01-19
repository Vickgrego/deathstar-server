var casual = require('casual');
// Create an object for config file
var code = casual.integer(100,999);
var db = {deathStar:{"access_to_defence_DataBase":"defenceLevels", "access_to_fleet_dataBase":"fleet"}, defenceLevels:[], fleet:[], rebels:[]};




//add level of defence
for(var i=0; i<5; i++){
	var defenceLevel = {};
	defenceLevel.id = i+1;
	defenceLevel.activated = true;
	defenceLevel.guards = casual.integer(8,45);
	defenceLevel.energy_field = casual.integer(30,100);
    defenceLevel.entry_coordinates = [casual.latitude, casual.longitude];
	
    db.defenceLevels.push(defenceLevel);
};

//add fleet
var types = ['TIE fighter', 'T-4 Shuttle', 'TIE-Bomber', 'TIE-Advance x1', 'TIE-Interceptor'];

for(var i=0; i<15; i++){
    let rand = casual.integer(0, types.length);
	
	var spaceship = {};
    spaceship.id = i+1;
	spaceship.type = types[rand];
	spaceship.coordinates = [casual.latitude, casual.longitude];
	
    db.fleet.push(spaceship);
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