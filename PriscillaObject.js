// class Person
let Person = function (Name, age, job, hobby, address) {
    this.Name = Name;
    this.age = age;
    this.job = job;
    this.hobby = hobby;
    this.address = address;
}
// object1
let person1 = new Person("Lisa", 28, "Nurse", "dancing", "Namugongo");
console.log(person1);
// object2
let person2 = new Person("Eve", 35, "Teacher", "singing", "Nakawa");
console.log(person2); 
console.log(person1.age);



// class Car
let Car = function(cname, cyear, cmake, cmodel, ccolor) {
    this.cname = cname;
    this.cyear = cyear;
    this.cmake = cmake;
    this.cmodel = cmodel;
    this.ccolor = ccolor;
}
// object1
 let car1 = new Car("Ford", 2020, "USA", "Mustang", "Blue");
console.log(car1);
// object2
let car2 = new Car("BMW", 2010, "Germany", "K45", "silver");
console.log(car2); 




// class Student
let Student = function (Name, gender, school, course, year) {
    this.name = Name;
  this.gender = gender;
  this.school = school;
  this.course = course;
  this.year = year;
}
// object1
let student1 = new Student("Rose", "female", "CIU", "Nursing", "2010");
console.log(student1);
// object2
let student2 = new Student("Emma", "male", "KIU", "Computer", "2022");
console.log(student2); 



// class Laptop
let Laptop = function (Name, price, intel, Ram, color) {
    this.name = Name;
    this.price = price;
    this.intel = intel;
    this.Ram = Ram;
    this.color = color;
}
// object1
let laptop1 = new Laptop("Hp", 2000000, "15", "8GB", "silver");
console.log(laptop1);
// object2
let laptop2 = new Laptop("Dell", 3000000, "12", "4GB", "black");
console.log(laptop2);




// class Desert
let Desert = function (Type, price, taste, size, color) {
    this.Type = Type;
    this.price = price;
    this.taste = taste;
    this.size = size;
    this.color = color;
}
// object1
let desert1 = new Desert("cake", 2000, "sweet", "medium", "orange");
console.log(desert1);
// object2
let desert2 = new Desert("biscuit", 500, "bitter", "small", "brown");
console.log(desert2);



// class House
let House = function (Type, price, size, location, owner) {
    this.Type = Type;
    this.price = price;
    this.size = size;
    this.location= location;
    this.owner = owner;
}
// object1
let house1 = new House("Mansion", 20000000, "Huge", "Muyenga", "Priscilla");
console.log(house1);
// object2
let house2 = new House("Bungalow", 6000000, "small", "Naalya", "Dan");
console.log(house2);



// class seat
let Seat = function (Type, size, price, color, length) {
    this.Type = Type;
    this.size = size;
    this.price = price;
    this.color = color;
    this.length = length;
}
// object1
let seat1 = new Seat("Chair", "small", 50000, "blue", "short");
console.log(seat1);
// object2
let seat2 = new Seat("Table", "large", 200000, "black", "long");
console.log(seat2);
console.log(seat1.color);