//------First Class------
//define a parameters
let house = function(type, owner, village, nor, cost )
{
    //define properties
    this.type = type;
    this.owner = owner;
    this.village = village;
    this.nor = nor;
    this.cost = cost;
}
//define arguments/values
let house1 = new house("bangalo","Richard","Kayunga","5rooms","500,000ugx");
let house2 = new house("bangalo","Richard","Kayunga","5rooms","600,000ugx");
let house3 = new house("bangalo","Richard","Kayunga","5rooms","500,000ugx");
let house4 = new house("bangalo","Richard","Kayunga","5rooms","250,000ugx");
let house5 = new house("bangalo","Richard","Kayunga","5rooms","1000,000ugx");
let house6 = new house("bangalo","Richard","Kayunga","5rooms","100,000,000ugx");
let house7 = new house("bangalo","Richard","Kayunga","5rooms","250,000ugx");
//invoking the function
console.log(house1.cost);
console.log(house2.cost);
console.log(house3.cost);
console.log(house4.cost);
console.log(house5.cost);
console.log(house6.cost);
console.log(house7.cost);


//-----Second Class----
let land = function(location, owner, content, size, type )
{
    this.location = location;
    this.owner = owner;
    this.content = content;
    this.size = size;
    this.type = type;
}
let land1 = new land("luweero","Ozzy","plantain","50x100meters","plot");
console.log(land1.size);


//------Third Class-----
let container = function(type, size, capacity, price, con)
{
    this.type = type;
    this.size = size;
    this.capacity = capacity;
    this.price = price;
    this.con = con;
}
let container1 = new container("shipping","4x8meters","1ton","2Million","C0025");
console.log(container1.con);


//------Fourth Class-----
let room = function(type, size, capacity, price, rn)
{
    this.type = type;
    this.size = size;
    this.capacity = capacity;
    this.price = price;
    this.rn = rn;
}
let room1 = new room("warehouse","4x8meters","300bikes",".5M/month","Rm005");
console.log(room1.rn);


//------Fifth Class-----
let school = function(type, size, capacity, price, index_no)
{
    this.type = type;
    this.size = size;
    this.capacity = capacity;
    this.price = price;
    this.index_no = index_no;
}
let school1 = new school("shipping","7acres","1000students","2Million","U/123/C587");
console.log(school1.index_no);


//------Sixth Class-----
let vehicle = function(type, nos, capacity, price, ven)
{
    this.type = type;
    this.nos = nos;
    this.capacity = capacity;
    this.price = price;
    this.ven = ven;
}
let vehicle1 = new vehicle("Van","13seats","14passagers","50Million","UAX 430D");
console.log(vehicle1.ven);


//------Seventh Class-----
let boat = function(type, size, capacity, price, bon)
{
    this.type = type;
    this.size = size;
    this.capacity = capacity;
    this.price = price;
    this.bon = bon;
}
let boat1 = new boat("shipping","4x8meters","1ton","2Million","BC025UG");
console.log(boat1.bon);