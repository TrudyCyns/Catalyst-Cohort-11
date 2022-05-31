
// 7 JavaScript class definitions

//first class
let book = function(title, author, isbn, year, numPages, genre,){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.year = year;
    this.numPages = numPages;
    this.genre = genre;
};

//2 instances (b1 and b2) of class 'book'
let b1 = new book("New Physics", "Jim Rhon", "12-2526-6", "564", "Science");
let b2 = new book("The Journey", "Ngugi JSON", "963-8362-1", "221", "Fiction");

//second class
let sale = function(date, item, qty, amount, salAgent){
    this.date = date;
    this.item = item;
    this.qty = qty;
    this.amount = amount;
    this.salAgent = salAgent;
};

//2 instances (s1 and s2) of class 'sale'
let s1 = new sale("12/07/2021", "Posho", "200 kg", "500,000", "NPK");
let s2 = new sale("01/10/2022", "Beans", "75 kg", "350,000", "Nooya Ltd");

//third class
let movie = function(name, id, directors, year, genre){
    this.name = name;
    this.id = id;
    this.directors = directors;
    this.year = year;
    this.genre = genre;
};

//2 instances (m1 and m2) of class movie
let m1 = new movie("One love", "p-2345", "Joy Ram, Tip Y", "1999", "Romance");
let m2 = new movie("Dead Man Walking", "c-0001", "New Bee", "2001", "Comedy" );

//fourth class
let deposit = function(date, amount, currency, customer, banker){
    this.date = date;
    this.amount = amount;
    this.currency = currency;
    this.customer = customer;
    this.banker = banker;
};

//2 objects (d1 and d2) of type 'deposit'
let d1 = new deposit("23/04/2022", "654.00", "USD", "Baraba Jink", "Toleo R");
let d2 = new deposit("01/05/2022", "100000", "SEK", "Juliano Kiv", "Toleo R" );

//fifth class
let country = function(name, president, capCity, population, landArea, gdp, currency){
    this.name = name;
    this.president = president;
    this.capCity = capCity;
    this.population = population;
    this.landArea = landArea;
    this.gdp = gdp;
    this.currency = currency;
};
//2 objects (c1 abd c2) of type 'country'
let c1 = new country("Uganda", "YK Museveni", "Kampala", "40000000", "6000000000000 SM", "47266 bn", "shillings");
let c2 = new country("Russia", "Putin", "Moscow", "200000000", "12461900000000 SM", "24244 bn", "ruble");

//sixth class
let school = function(name, category, location, ownership, numStudents, numTeachers){
    this.name = name;
    this.category = category;
    this.location = location;
    this.ownership = ownership;
    this.numStudents = numStudents;
    this.numTeachers = numTeachers;
};

//2 instances (sc1 and sc2) of class 'school'.
let sc1 = new school("Bwera school", "secondary", "Rwenzori", "Private", "1432", "76");
let sc2 = new school("Kuruhe Modern", "primary", "Masindi", "Government aided", "521", "21");

//seventh class
let drug = function(chemName, brandName, manufacturer, batchNo, dateOfManuf, dateOfExp, dealer){
    this.chemName = chemName;
    this.brandName = brandName;
    this.manufacturer = manufacturer;
    this.batchNo = batchNo;
    this.dateOfManuf = dateOfManuf;
    this.dateOfExp = dateOfExp;
    this.dealer = dealer;
};

// 2 objects (dr1 and dr2) of type 'drug'
let dr1 = new drug("Zinc Sulphate", "ZinKid", "KPI",  "12-19", "18/11/2019", "18/10/2023", "Med Ltd");
let dr2 = new drug("Paracetamol", "Panadol", "KPI", "23-21", "31/04/2021", "21/10/2025","Med Ltd" );

console.log(c1.president);