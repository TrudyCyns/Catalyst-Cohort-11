let Uganda = function(lakes,rivers,culture,wildlife,mountains){
    this.lakes = lakes;
    this.rivers = rivers;
    this.culture = culture;
    this.wildlife = wildlife;
    this.mountains = mountains;
}
var Uganda1 = new Uganda("victoria","nile","kneeling","lion");
var Uganda2 = new Uganda("kyoga","jordan","dressing","tiger");
console.log(Uganda1.culture)
console.log(Uganda2.lakes)


let School = function( name,director,staff,cook,students){
    this.name = name;
    this.director = director;
    this.staff = staff;
    this.cook = cook;
    this.students = students;
}
var school00 = new School("Trinity College","Asaba Doreen",20,10,2000);
var school01 = new School("Kololo ss","Simon",32,8,1244);
console.log(school00.name)
console.log(school01.staff)


let House = function(type,bedrooms,kitchen,bathroom,balcony){
    this.type = type;
    this.bedrooms = bedrooms;
    this.kitchen = kitchen;
    this.bathroom = bathroom;
    this.balcony = balcony;
}
var house1 = new House("mansion",8,"yes",6,3);
var house2 = new House("bunglow",4,"yes",2,1);
console.log(house1.bedrooms)
console.log(house2.bathroom)

let Hospital = function (type,doctors,nurses,midwives,wards){
    this.type = type;
    this.doctors = doctors;
    this.nurses = nurses;
    this.midwives = midwives;
    this.wards = wards;
}
var hospital2 = new Hospital("private",3,10,5,8,);
var hospital3 = new Hospital("government",6,28,3,20);
console.log(hospital2.type)
console.log(hospital3.doctors)


   let Laptop = function(brandName,RAM,price,core,storage){
       this.brandName = brandName;
       this.RAM = RAM;
       this.price = price;
       this.core = core;
       this.storage = storage;
   }
   var laptop1 = new Laptop("hp","16GB","$2000","i5","500GB");
   var laptop2 = new Laptop("dell","8GB","$1500","i3","300GB");
   console.log(laptop1.brandName)
   console.log(laptop2.RAM)

   let Car = function(doors,wheels,modelName,type,Year){
       this.doors = doors;
       this.wheels = wheels;
       this.modelName = modelName;
       this.type = type;
       this.Year = Year;
   }
   var car1 = new Car(5,4,"Toyota",manual,2015);
   var car2 = new Car(5,4,"suzuki",automatic,2019);
console.log(car1.modelName)
console.log(car2.Year)

let Livingroom = function(sofas,table,curtains,television,lamp){
    this.sofas = sofas;
    this.table = table;
    this.curtains = curtains;
    this.television = television;
    this.lamp = lamp;
}
var livingroom1 = new Livingroom(3,1,"yes","smart","yes");
var livingroom2 = new Livingroom(4,1,"yes","smart","no");
console.log(livingroom1.curtains)
console.log(livingroom2.television)

