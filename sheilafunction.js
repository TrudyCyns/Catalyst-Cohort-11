//Define a dynamic function, give it 4 parameters and arguments.  
function client(name, age, modeOfpayment, residence) 
{
    console.log(name, age, modeOfpayment, residence);
    return name;
};
client("Babara",29,"installement","Entebbe")
client("Martin",31,"installement","Buddo")

// Define a function of a loan, give it rate as the parameter, and assign it an argument.
// Define a new variable which you assign a value of rate multiply by the value of money the client wants.
//Within the funtion assign a constant value for loanFees 10000
// Define a new constant variable called fnal to calculate the difference between the new variable created first and the loanFees
//Display, return the value of fnal and invoke the function.

function loan(rate){
        let takeHome =rate /100 * (10000000)
        const loanFees = 10000
        const fnal = takeHome - loanFees 
        console.log(fnal)
        return fnal;
    }
    loan(10)
    
//Define a function called getVat, assign it a rate parameter, within it, create a new variable to find the rate and loan function
//Display it, and return the value so that it can be used elsewhere.
function getVat(rate){
    let vat = rate/100 * loan(10);
    console.log(vat);
    return vat;
}
getVat(18)

//Define a static function called loanPaid that will show the amount of loan paid out to the client.
//Assign a new variable to get the difference between the loan and getVat functions respectively.
//Display the statement in a string plus the new variable created within the function. 

function loanPaid(){
 let fnalLoan = loan(10) -getVat(18);
 console.log("Babara will take a loan of : " + fnalLoan);
}
loanPaid()


