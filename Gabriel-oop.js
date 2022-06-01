// 7 classes with atleast 5 parameters and properties

// computer class
let Computer = function (brand, core, ram, hhd, price) {
  this.brand = brand;
  this.core = core;
  this.ram = ram;
  this.hhd = hhd;
  this.price = price;
};

//computer class objects
const computer1 = new Computer("Dell", "i7", "8 gb", "1 TB", 2500000);
const computer2 = new Computer("Toshiba", "i3", "2 gb", "500 GB", 1500000);

//house class
let House = function (area, bedRoom, bathRoom, storeyed, price) {
  this.area = area;
  this.bedRoom = bedRoom;
  this.bathRoom = bathRoom;
  this.storeyed = storeyed;
  this.price = price;
};

//house objects
const house1 = new House("1500 sq ft", 5, 4, false, 150000000);
const house2 = new House("2000 sq ft", 6, 6, true, 700000000);

//TV class
let Tv = function (size, resolution, power, brand, serial) {
  this.size = size;
  this.resolution = resolution;
  this.power = power;
  this.brand = brand;
  this.serial = serial;
};

//tv object
const tv1 = new Tv("43 inch", "4K", "100 Watts", "Samsung", "5678654321987");
const tv2 = new Tv("32 inch", "HD", "60 Watts", "LG", "7890888766499");

//Book class
let Book = function (title, author, pages, publisher, ISBN) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publisher = publisher;
  this.ISBN = ISBN;
};

//Book class objects
book1 = new Book(
  "Rhapsody of realities",
  "Pastor Chris Oyakhilome",
  85,
  "Loveworld Publishers",
  15966984
);
book1 = new Book(
  "Advanced Pure Mathematics",
  " John Okello",
  300,
  "MK Publishers",
  45853652
);

//Country class
let Country = function (
  name,
  area,
  population,
  president,
  officialLang,
  capital
) {
  this.area = area;
  this.population = population;
  this.president = president;
  this.officialLang = officialLang;
  this.capital = capital;
  this.name = name;
};

//Country class objects
country1 = new Country(
  "Uganda",
  "450000 sq miles",
  "45 Million",
  "Yoweri Museveni",
  "English",
  "Kampala"
);
country2 = new Country(
  "Rwanda",
  "120000 sq miles",
  "15 Million",
  "Paul Kagame",
  "French",
  "Kigali"
);

// Continent class
let Continent = function (name, area, countries, population, density) {
  this.name = name;
  this.area = area;
  this.countries = countries;
  this.population = population;
  this.density = density;
};

//Continent class objects
const africa = new Continent("Africa", "29648481 sq km", 53, 1340598147, 45);
const northAmer = new Continent(
  "North America",
  "21330000 sq km",
  48,
  592072212,
  28
);
