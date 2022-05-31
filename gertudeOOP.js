// Write 7 classes with at least 5 properties and parameters. 

// Carpet class
let Carpet = function (material, owner, price, seller, size) {
    this.material = material;
    this.owner = owner;
    this.price = price;
    this.seller = seller;
    this.size = size;
};
// Carpet objects
let carpet1 = new Carpet("cotton", "Tru", 500000, "Store", "100x100");
let carpet2 = new Carpet("leather", "G", 1500000, "Mall", "10x150");

// Jean class
let Jean = function (brandName, owner, price, seller, size) {
    this.brandName = brandName;
    this.owner = owner;
    this.price = price;
    this.seller = seller;
    this.size = size;
};
// Jean objects
let jean1 = new Jean("Louis Vuitton", "Tru", 500000, "Store", "XS");
let jean2 = new Jean("Good American", "G", 1500000, "Outlet", "XXL");

// Napkin class
let Napkin = function (brandName, material, price, numPapers, color) {
    this.brandName = brandName;
    this.material = material;
    this.price = price;
    this.numPapers = numPapers;
    this.color = color;
};
// Napkin objects
let napkin1 = new Napkin("Fay", "cotton", 4000, 100, "white");
let napkin2 = new Napkin("Delloite", "paper", 5000, 50, "red");

// Desktop class
let Desktop = function (brandName, owner, price, resolution, size) {
    this.brandName = brandName;
    this.owner = owner;
    this.price = price;
    this.resolution = resolution;
    this.size = size;
};
// Desktop objects
let desktop1 = new Desktop("HP", "Tru", 2500000, "1600x900", "25 inches");
let desktop2 = new Desktop("DELL", "G", 270000, "1440x600", "18 inches");

// Novel class
let Novel = function (title, author, numPages, rating, genre) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.rating = rating;
    this.genre = genre;
};
// Novel objects
let novel1 = new Novel("The Chase", "Clive Cussler", 600, "4.5 stars", "Suspense");
let novel2 = new Novel("The Book Thief", "Markus Zusak", 450, "5 stars", "Fiction");

// Fragrance class
let Fragrance = function (fragName, type, price, size, ingredient) {
    this.fragName = fragName;
    this.type = type;
    this.price = price;
    this.size = size;
    this.ingredient = ingredient;
};
// Fragrance objects
let fragrance1 = new Fragrance("Monaco", "Body Mist", 25000, "15 ounces", "Rose Petals");
let fragrance2 = new Fragrance("Brent", "Spray", 20000, "50 ml", "Ginseng");

// Lightbulb class
let Lightbulb = function (brandName, watts, color, shape, brightness) {
    this.brandName = brandName;
    this.watts = watts;
    this.color = color;
    this.shape = shape;
    this.brightness = brightness;
};
// Lightbulb objects
let lightbulb1 = new Lightbulb("Satco", 6, "red", "Circle", "450 lumens");
let lightbulb2 = new Lightbulb("Honeywell", 300, "yellow", "Spiral", "5800 lumens");