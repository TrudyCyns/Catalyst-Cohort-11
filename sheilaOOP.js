//Define a 7 classes and give them a function with specific parameters accordingly
let phone = function ( make,color,name, specs, price){
    this.make = make;
    this.color = color;
    this.name = name;
    this.specs =specs;
    this.price = price;
};
let phone1 = new phone("J7prime", "black","samsung", "andriod", "camera", 800000 )
console.log (phone1.color);

let cloth = function ( make,color,type, price, label){
    this.make = make;
    this.color = color;
    this.type = type;
    this.price = price;
    this.label =label;

};
let cloth1 = new cloth ("cotton", "red","maxi",80000,"gucci")
console.log (cloth1.color);


let motorcycle = function (name, price, noTyres, engine, brand ){
    this.name = name;
    this.price = price;
    this.noTyres = noTyres;
    this.engine = engine;
    this.brand = brand;

};
let motorcycle2 =new motorcycle("bajaj" ,1500000, 2, "kickStart", "indian")
console.log( motorcycle2.engine)

let fruit = function (name, price, shape, taste, color ){
    this.name = name;
    this.price = price;
    this.shape = shape;
    this.taste = taste;
    this.color = color;

};
let fruit1 = new fruit ("berry",1000,"round","sweet","blue")
console.log (fruit1.price);

let politician = function (name, salary, consistuency, age, status ){
    this.name = name;
    this.salary = salary;
    this.consistuency = consistuency;
    this.age = age;
    this.status = status;

};
let politician4 =new politician("Ingrid" ,1500000, "kanungu", "48", "divorced")
console.log( politician4.consistuency)

let book = function (name, edition, price, author, editorCompany ){
    this.name = name;
    this.edition = edition;
    this.price = price;
    this.author = author;
    this.editorCompany = editorCompany;

};
let book8 =new book("life", "8th" , 8000, "carol",  "larkin")
console.log(book8.editorCompany)

let player= function (name, age, salary, team, position){
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.team = team;
    this.position = position;
};
let player5 =new player("Salah" ,29, "$400,000aweek", "liverpool", "forward")
console.log( player5.salary)