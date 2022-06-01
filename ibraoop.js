//Assignment
function shoe(size, color, price, style, gender)
{
    this.size = size;
    this.color = color;
    this.price = price;
    this.style = style;
    this.gender = gender;
}
let shoe1 = new shoe(42, "Brown", 120000, "formal", "men's shoes");
let shoe2 = new shoe(39, "Black", 45000, "stiletto", "Female");
console.log(shoe1.gender);
console.log(shoe2.size);

function house(location, nor, style, price, decor)
{
    this.location = location;
    this.nor = nor;
    this.style = style;
    this.price = price;
    this.decor = decor;
}
let house1 = new house("Buziga", 3, "Bungalow", 350000000, "Funished");
let house2 = new house("BUgolobi", 5, "Semi-Detached", 400000000, "Unfurnished")
console.log(house1.location);
console.log(house1.decor);

function tv(brand, dimensions, price, type, specs)
{
    this.brand = brand;
    this.dimensions = dimensions;
    this.price = price;
    this.type = type;
    this.specs = specs;
}
let tv1 = new tv("samsung", "42 inch", 2500000, "LED", "Smart TV");
let tv2 = new tv("LG", 32, 1700000, "LCD", "No Internet");
console.log(tv1.specs);
console.log(tv1.brand);

function person(race, age, gender, natonality, occupation)
{
    this.race = race;
    this.age = age;
    this.gender = gender;
    this.natonality = natonality;
    this.occupation = occupation;
}
let person1 = new person("Negroid", 38, "Male", "Ugandan", "Software Engineer");
let person2 = new person("Caucasian", 50, "Female", "French", "Doctor");
console.log(person1.natonality);
console.log(person2.race);

function country(geoloc, sqArea, popSize, name, currency)
{
    this.geoloc = geoloc;
    this.sqArea = sqArea;
    this.popSize = popSize;
    this.ofLang = name;
    this.currency = currency;
}
let country1 = new country("East Africa", "450000Sq Miles", 55000000, "Kenya", "Kenyan Shilling");
let country2 = new country("East Africa", "57000Sq Miles", 7000000, "Rwanda", "Rwandese Francs");
console.log(country1.geoloc);
console.log(sqArea);

function land(owner, sqArea, location, price, type)
{
    this.owner = owner;
    this.sqArea = sqArea;
    this.location = location;
    this.price = price;
    this.type = type;
}
let land1 = new land("Mutabaazi", "25000Sq Miles", "Mutundwe", 500000000, "Mailo");
let land2 = new land("Miiro", "357000sq feet", "Lugazi", 25000000, "Free Hold");

function distributor(distId,  telephone, locaton, orderNo,  qtyOdered)
{
    this.distId = distId;
    this.telephone = telephone;
    this.location = locaton;
    this.orderNo = orderNo;
    this.qtyOdered = qtyOdered;
}
let distributor1 = new distributor("A001", 073467000, "Ntinda", "LPO 125", 500);
let distributor2 = new distributor("A024", 756483931, "Kawempe", "LPO53", 312);
