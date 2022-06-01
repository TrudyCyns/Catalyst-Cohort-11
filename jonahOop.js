// declare class bike
let Bike = function (brand, color, rims, rating, price) {
  this.brand = brand;
  this.color = color;
  this.rims = rims;
  this.rating = rating;
  this.price = price;
};
//initialize objects of class Bike
const bike1 = new Computer("Urban", "red", "fly", "120", 2500000);
const bike2 = new Computer("Cyclocross", "pink", "wack", "400", 1500000);

// declare class Dog
let Dog = function (breed, age, color, price) {
  this.breed = breed;
  this.age = age;
  this.color = color;
  this.price = price;
};
//initialize objects of class Dog
const dog1 = new Dog(maltese, 5, pink, 150000);
const dog2 = new Dog(pug, 3, white, 40000);

//declare class Phone
let Phone = function (brand, price, color, ram) {
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.ram = ram;
};
//initialize  objects of class Phone
const phone1 = new Phone(iphone, 200, red, "8gb");
const phone2 = new Phone(itel, 500, blue, "4gb");

//declare class Novel
let Novel = function (title, isbn, author, genre) {
  this.title = title;
  this.isbn = isbn;
  this.author = author;
  this.genre = genre;
};
//initialize objects of the class Novel
const novel1 = new Novel("Red Rising", "irc25", Jonah, fiction);
const novel2 = new Movel("Pepe", "irb64".Chris, nonfiction);

//declare class Perfume
let Perfume = function (fname, gender, brand, price) {
  this.fname = fname;
  this.gender = gender;
  this.brand = brand;
  this.price = price;
};
//iniatilize objects of the class Perfume
const perfume1 = new Perfume(gucci, male, D & G, 1500000);
const perfume2 = new Perfume(yves, female, YSL, 250000);

let Pen = function (brandName, color, price) {
  this.brandName = brandName;
  this.color = color;
  this.price = price;
};

//initialize objects of the class Pen
const pen1 = new Pen(Bic, red, 500);
const pen2 = new Pen(Nice, blue, 1000);
