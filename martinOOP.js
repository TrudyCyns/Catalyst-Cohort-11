//write 7 classes with atleast 5 properties and their corresponding parameters(5 parameters atleast) , two arguments for each class (DONE)

//class Phone
let Phone = function (name, price, pmem, ss){
    this.name = name;
    this.price = price;
    this.pmem = pmem; 
    this.ss = ss;
};
//objects of class Phone
let phone1 = new Phone ("samsung", "500000", "64gb", "5inches")
console.log(phone1.name)
let phone2 = new Phone ("huawei", "300000", "32gb", "4.5inches")
console.log(phone2.price)

//class Computer
let Computer = function (model, pstog, price, ram){
    this.model = model;
    this.pstog = pstog;
    this.price = price;
    this.ram = ram; 
};
//objects of class Computer
let computer1 = new Computer ("lenovo", "1tb", 1500000, "32gb")
console.log(computer1.model)
let computer2 = new Computer ("ACER", "500gb", 800000, "16gb")
console.log(computer2.ram)

//Bike class
let Bike = function (name, tyres, egCap, tankcap, seat){
    this.name = name; 
    this.tyres = tyres; 
    this.egCap = egCap; 
    this.tankcap = tankcap; 
    this.seat = seat; 
};
//Bike objects
let bike1 = new Bike ("rebel", 2, "400cc", "15ltrs", "2persons")
console.log(bike1.tyres)
let bike2 = new Bike ("kawasaki", 2, "750cc", "25ltrs", "2persons")
console.log(bike2.egCap)

//Animal class
let Animal = function (name, legs, h20land, feeding,){
    this.name = name; 
    this.legs = legs; 
    this.h20land = h20land; 
    this.feeding = feeding; 
};
//Animal objects
let animal1 = new Animal ("lion", 4, "land", "flesh")
console.log(animal1.h20land)
let animal2 = new Animal ("hippopotamus", 4, "h20", "grass")
console.log (animal2.feeding)

//class Telev
let Telev = function (type, floNfl, size, price,){
    this.type = type; 
    this.floNfl = floNfl; 
    this.size = size; 
    this.price = price; 
};
//Telev objects
let telev1 = new Telev ("L.G", "flat", "45inc", 1400000)
console.log(telev1.floNfl)
let telev2 = new Telev ("hisense", "Notflat", "20inc", 400000)
console.log(telev2.price)

//OS class 
let OS = function (type, sai, config,){
    this.type = type; 
    this.sai = sai; 
    this.config = config; 
};
//objects of OS
let os1 = new OS ("linux", "3gb", "64bit")
console.log(os1.sai)
let os2 = new OS ("WIN7", "1.5gb", "32bit")
console.log(os2.type)

//class Printer
let Printer = function (name, catrg, pcable, dcable, trsize){
    this.name = name;
    this.catrg = catrg;
    this.pcable = pcable;
    this.dcable = dcable;
    this.trsize = trsize; 
};

//objects of class Printer
let printer1 = new Printer("EPSON", "4pcs", 1, 1, "wide")
console.log(printer1.name)
let printer2 = new Printer("Pythonas", "12pcs", 1, 1, "doublesize")
console.log(typeof(printer1.catrg))
