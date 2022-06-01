/*
1) Get any real-world problem that can be solved using a JS function, and solve it using at least 3 functions.
Problem:
    A commercial farm has both Male and Female employees; the company policy says only the Male employees should work out in the Field, whereas both Male and Female employees can work in the Office.
    However, Field work pays 20% less than the standard Office job at this company. Moreover, the Male employees working Office jobs earn 5% more than their Female counter-parts.
    I will create a JS Function that should recieve employee information, calculate employee Salary based on Role and Gender, and finally account for PAYE and NSSF rates.
*/

/*The function "Emplyee" is a dynamic one, which receives the arguments set
for the parameters "rol" and "gend", and then returns their values (in form of an Array) when called upon.*/
function Emplyee(rol,gend){
    let gender = gend,
        role = rol;
    return [gender,role];
}

/*The function "EmpSal" is a static function that defines the variables "field", "office", and "OfficeM" respectively.
The function "EmpSal" then assigns values to these variables and returns them to other functions,
- on the basis of the criteria defined according to an if/elseIf/else statement returning values from function "Emplyee" in form of an array.*/
function EmpSal(){
    const field = 200000;
    const office = 240000;
    const OfficeM = 252000;
    if (Emplyee(gender="female"))
    {return office;
    }
    else if (Emplyee(gender="male",role="field"))
    {return field;
    }
    else (Emplyee(gender="male",role="office"))
    {return OfficeM;
    }

}
/*The function EmpNSSF is a dynamic one. It defines the "nssf" of an employee based on the "rate" provided,
as well as the value returned from the function "EmpSal()".*/
function EmpNSSF(rate){
    let pay = EmpSal();
    let nssf = (rate/100)*pay;
    return nssf;
}

/*The function EmpPAYF is a dynamic one. It defines the "paye" of an employee based on the "rate" provided,
as well as the value returned from the function "EmpSal()".*/
function EmpPAYE(rate){
    let pay = EmpSal();
    let paye = (rate/100)*pay;
    return paye;
}

/*The function "FnalSal" is a static function that defines the final salary of a given employee,
based on the values returned from the functions preceding it.
When called upon, it should provide the final salary of a given employee based on their role and gender, less "paye" and "nssf".*/
function FnalSal(){
    let FnalSal = EmpSal()-[EmpNSSF(10)+EmpPAYE(8)]
    console.log("Dominic "+Emplyee[male,field]+" earns "+FnalSal);
}
FnalSal()


/* 2) Write 7 classes with atleast 5 properties and their corresponding parameters; and derive at least 2 objects from each class.*/

function Lake(Name,WidthKm,DepthM,VolumeKm3){
    this.Name=Name;
    this.Width=WidthKm;
    this.Depth=DepthM;
    this.Volume=VolumeKm3;
}
let Lake1 = new Lake ("Victoria","337Km","81M","2424Km3");
let Lake2 = new Lake ("Kyoga","41.5Km","5.7M","unknown");
console.log(Lake1);

function Mount(Nam,Peak,HeightM,Nature){
    this.Nam=Nam;
    this.Peak=Peak;
    this.HeightM=HeightM;
    this.Nature=Nature;
}
let Mount1 = new Mount("Rwenzori","Margherita","5,109M","Block");
let Mount2 = new Mount("Kilimanjaro","Kibo","5895M","Dormant-Volcano");
console.log(Mount2);

function Hospital(Nam,YrsExst,numdocs,city){
    this.Nam=Nam;
    this.YrsExst=YrsExst;
    this.numdocs=numdocs;
    this.city=city;
}
let Hospital1 = new Hospital("IHK","30","100","K'la");
let Hospital2 = new Hospital("Mengo","100","180","K'la");
console.log(Hospital);

function School(Nam,NoStuds,NoTeachr,NoClRms){
    this.Nam=Nam;
    this.NoStuds=NoStuds;
    this.NoTeachr=NoTeachr;
    this.NoClRms=NoClRms;
}
let School1 = new School("Lohana","700","40","30");
let School2 = new School("Refactory","30","10","3");
console.log(School1);

function swimPool(widthM,depthM,finish,access){
    this.widthM=widthM;
    this.depthM=depthM;
    this.finish=finish;
    this.access=access;
}
let swimPool1 = new swimPool("20","10","textured-rock","private");
console.log(swimPool1);

function SupMrkt(Nam,Locatn,NofTills,NofClerks){
    this.Nam=Nam;
    this.Locatn=Locatn;
    this.NofTills=NofTills;
    this.NofClerks=NofClerks;
}
let SupMrkt1 = new SupMrkt ("TMT","Muyenga","3","10");
let SupMrkt2 = new SupMrkt ("Cynibel","Bunga","4","10");
console.log(SupMrkt2);

function Cinema(Nam,NofSeats,ScrnSize){
    this.Nam=Nam;
    this.NofSeats=NofSeats;
    this.ScrnSize=ScrnSize;
}
let Cinema1 = new Cinema("Cinemax","80","12.5M");
let Cinema2 = new Cinema("Cineplex","60","10M");
console.log(Cinema1);