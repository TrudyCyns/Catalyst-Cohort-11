// ASSIGNMENT 2.
// Wriite 7 classes with atleast five properties with their corresponding properties.

// create  class furniture with properties name, number of legs, price, weight and cushion status
let Furniture = function(name, legs, price, weight, cushion){
    this.name =name;
    this.legs = legs;
    this.price = price;
    this.weight = weight;
    this.cushion = cushion;
}
// creates new class objects table and chair
let Table = new Furniture("DinningTable", 4, "$50", "15kg", false);
let Chair = new Furniture("officeChair", 4, "$20", "10kg", true);
console.log(Table, Chair);


// Create class soldier with 4 properties name, rank , department and battlion
let Soldier = function(name,rank, department, battalion){
    this.name;
    this.rank;
    this.department;
    this.battalion
}
// intantiate new soldier class objects viz; redtop and updf 
let Redtop = new Soldier("Ozzy", "General", "IT", 5);
let Updf = new Soldier("Jonah","Colonel", "Anti-Riot", 2);
console.log(Redtop.name, Updf.name);


// create a class techer with 4 properrties name, dept, role and boolean scienceteacher?
let Teacher = function(name, department, role, scienceTeacher){
    this.name = name;
    this.department = department;
    this. role = role;
    this.scienceTeacher = scienceTeacher;
}
//instantiates new teacher objects Orban and Irene
let Orban = new Teacher ("Orban Martin", "Catalyst", "Team Lead", true);
let Irene = new Teacher ("Irene Nyakate", "Bootcamp", "Coach", true);
console.log(Orban.role, Irene.role);


// Define new class movie with 4 properties viz; title, genre, producer and rating
let Movie = function(title, genre, producer,rating){
    this.title = title;
    this.genre = genre;
    this.producer = producer;
    this.rating = rating;
}

// instantiates new movie objects Missionimpossible and gangaa
let MissionImpossible = new Movie ("thefallOut", "action", "motionPictures", 5.0);
let Gangaa = new Movie ("Aby", "Soap opera", "indians",2.0 );
console.log(MissionImpossible, Gangaa);


// Defines a new class politician with propperties name, position, level, cnstituency
let Politician = function(name, position, level,constituency){
    this.name = name;
    this.position =position;
    this.level = level;
    this.constituency = constituency;
}
// instatiates new politician class objects namely anita and doreen
let Anita = new Politician ("AnitaAmong", "speaker", "Parliamentary", "Bukedea");
let Doreen = new Politician ("DoreenNyanjura", "lcv", "localCouncil", "Makerere");
console.log(Anita, Doreen.constituency);



// Defines a class startup that takes 4 properties name, category, seedFund,employees
let Startup = function(name, category, seedFund,employees){
    this.name = name;
    this.category = category;
    this.seedFund = seedFund;
    this.employees = employees;
}

// instantiates new startup objects viz; safeboda and laboremus
let SafeBoda = new Startup("safeBoda", "transport", "SeriesB", 50);
let Laboremus = new Startup("labremus", "fintech", "LevelA",54);
console.log(SafeBoda, Laboremus);


// define  class institution with 3 properties
let Institution = function(name, category, location){
    this.name = name;
    this.category = category;
    this.location = location;

}
// instatiates new institution class objects ciu and ucu
let Ciu = new Institution ("ClarkeIntUniv", "university", "Kampala");
let Ucu = new Institution ("UgandaChrsitanUniv", "university", "Mukono");
console.log(Ciu.name, Ucu.location);


// create a new class churc with 4 properties
let Church = function(name, pastor,location,affiliation){
    this.name = name;
    this.pastor = pastor;
    this.location = location;
    this.affiliation= affiliation;
}

// instatiates new church objects namely watoto and stkagwa
let Watoto = new Church("Watoto", "Unknown", "Bombo", "bornAgain");
let StKagwa = new Church("StKagwaKigowa", "revFather", "Kisaasi", "catholic");
console.log(Watoto, StKagwa);