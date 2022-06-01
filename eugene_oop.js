//create class Phone

class Phone{
    constructor (brand,model,ram,rom,os){
        this.brand=brand;
        this.model=model;
        this.ram=ram;
        this.rom=rom;
        this.os=os;
    }
};
let Phone1 = new Phone('Samsung','Galaxy Note 10','6GB','512GB','Android 11');
let Phone2 = new Phone('Samsung','Galaxy S22','6GB','128GB','Android 12');
let Phone3 = new Phone('Google','Pixel 6','6GB','512GB','Android 12');

//create class Laptop

class Laptop{
    constructor (brand,model,ram,rom,os,griphicsCard){
        this.brand=brand;
        this.model=model;
        this.ram=ram;
        this.rom=rom;
        this.os=os;
        this.griphicsCard=griphicsCard;
    }
};
let Laptop1 = new Laptop('Lenovo','Legion','16GB','1TB','Windows 11','Nvidia');
let Laptop2 = new Laptop('Dell','Inspiron','8GB','2TB','Windows 10','AMD');
let Laptop3 = new Laptop('Acer','Nitro 5','20GB','2TB','Windows 10','Nvidia');
let Laptop4 = new Laptop('HP','Pavilion','8GB','1TB','Windows 11','AMD');

//create class game

class Game{
    constructor (title,year,studio,price,device){
        this.title = title;
        this.year = year;
        this.studio = studio;
        this.price = price;
        this.device = device;
    }
};
let game1 = new Game('Far Cry 3','2012','Ubissoft',500,'Playstation');
let game2 = new Game('BLack OPPs2','2016','Treyarch',600,'Xbox');
let game3 = new Game('Need for Speed','2013','EA',300,'Personal computer');

//create class bag

class Bag{
    constructor (brand,nPockets,color,year,edition){
        this.brand = brand;
        this.nPockets = nPockets;
        this.color = color;
        this.year = year;
        this.edition = edition;
    }
};
let bag1 = new Bag('Gucci','6','Black','2018','limited edition',);
let bag2 = new Bag('Nike','4','green','2008','Regular edition',);

//create class headset

class Headset{
    constructor (brand,color,btVersion,year,price){
        this.brand = brand;
        this.color = color;
        this.btVersion = btVersion;
        this.year = year;
        this.price =price;
    }
};
let headset1 = new Headset('Apple','White','4.9','2017',200); 
let headset2 = new Headset('Samsung','Purple','4.9','2017',200);

//create class shoe

class Shoe{
    constructor (brand,model,color,year,edition){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
        this.edition = edition;
    }
};
let shoe1 = new Shoe('Nike','Basketball','Black','2019','Limited Edition');
let shoe2 = new Shoe('Puma','Football','Red','2016','Regular Edition');

//create class truck

class Truck{
    constructor (brand,horsePower,color,year,nWheels){
        this.brand = brand;
        this.horsePower = horsePower;
        this.color = color;
        this.year = year;
        this.nWheels = nWheels;
    }
};
let truck1 = new Truck('Fuso','900','black','2018',4);
let truck2 = new Truck('Isuzu','700','black','2020',6);