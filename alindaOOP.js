                      //coded by Martha Alinda
let  Africa = function(culture,population,rivers,nations,wildlife){
    this.culture= culture;
    this.flags= population;
    this.rivers= rivers;
    this.nations= nations;
    this.wildlife=wildlife;
 
 }
 
 let Africa1= new Africa( "Dressing", 300000000, "Nile", "Sudan","Giraffe");
 let Africa2= new Africa( "Staple food", 36000000, "Oakline","Madagascar", "Penguins")
 
 console.log(Africa1.wildlife)
 console.log(Africa2.nations)

 let  House = function(bedrooms,type,color, kitchen, balcony){
    this.bedrooms= bedrooms;
    this.type= type;
    this.color= color;
    this.kitchen= kitchen;
    this.balcony=balcony;
 }
 
 let House1= new House( 8, "castle", "lime", "yes","yes");
 let House2= new House( 4, "bungalow", "Purple", "yes","no")
 
 console.log(House1.balcony)
 console.log(House2.type)

 let  Table = function(type,height,color,width,shape){
    this.type= type;
    this.height= height;
    this.color =color;
    this.width= width;
    this.shape=shape;
 
 }
 
 let Table1= new Table( "wooden", 4, "Baige", 34,"oval");
 let Table2= new Table( "glass", 6, "Turquoise", 45,"rectangular")
 
 console.log(Table1.type)
 console.log(Table2.shape)

 let  hospital = function(name,patients,staff,owner, wards){
    this.name= name;
    this.patients= patients;
    this.staff= staff;
    this.owner= owner;
    this.wards=wards;
 }
 
 let hospital1= new hospital( "Nakasero", 45, 34, "government",7);
 let hospital2= new hospital( "Mengo", 66, 34, "private",9)
 
 console.log(hospital1.wards)
 console.log(hospital2.name)

 let  school = function(name,staff,students,owner,type){
    this.name= name;
    this.staff=staff;
    this.students= students;
    this.owner= owner;
    this.type=type;
 }
 
 let school1= new school( "Kololo SS", 23, 1455, "government", "boarding");
 let school2= new school( "Nakawa SS", 26, 2000, "private", "day")
 
 console.log(school1.students)
 console.log(school2.name)

 let  district = function(name,infrastructure,mp,mayor,population){
    this.name= name;
    this.infrastructure= infrastructure;
    this.mp= mp;
    this.mayor= mayor;
    this.population=population;
 }
 
 let district1= new district( "Mpigi", "yes", "Kamuka", "Sekandi", 23000);
 let district2= new district( "Gulu", "yes", "Odoio", "Opio" , 250000)
 
 console.log(district1.mayor)
 console.log(district2.mp)

 let  Tribe = function(name,leader,dressing,food,language){
    this.name= name;
    this.leader= leader;
    this.dressing= dressing;
    this.food= food;
    this.language=language;
 }
 
 let Tribe1= new Tribe( "Baganda", "kabaka", "kanzu", "matooke","luganda");
 let Tribe2= new Tribe( "Batoro", "Omukama", "TKanzu", "rice","rutoro")
 
 console.log(Tribe1.food)
 console.log(Tribe2.language)