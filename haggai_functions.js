/*
This program analyzes an investment made on compound interest terms. 
 -the user is expected to input the values of: principal, annual compound interest rate as 
 a percentage (not converted to decimal), and duration of investment in months.
 -the program then outputs the:
            * amount invested
            * duration of investment in months (and year(s))
            * interest earned
            * value of investment at maturity. 
*/

//Definition of a function that conerts duration in months to years
function toYears(months){
    let years = months/12;
    return years;
}

//Definition of a function that computes compound interest.
function getCompInt(princ, rate, dur){
    let compInt = (princ*(1+(rate/100))**dur) - princ;
    return compInt;
}

/*
Definition of a function with three parameters (principal, interest rate, and duration).
It computes and/or displays to the console the values of Principal, duration in months and years,
interest earned, and value of investment at maturity.
*/
function analyseInv(principal, rate, duration){
    console.log("Amount invested: " +principal);
    let years = toYears(duration);
    console.log("Duration of investment: " +duration +" months [" +years +" year(s)]");
    let intEarned = getCompInt(principal, rate, years);
    console.log("Interest earned: " +intEarned);
    let totalVal = principal + intEarned;
    console.log("Value of investment at maturity: " +totalVal);
}

/*
invoking the function analyseInv() to test the program.
passing (1000, 10, 24) as the arguments,
expected results are:
                Amount invested: 1000
                Duration of investment: 24 months [2 year(s)]      
                Interest earned: 210
                Value of investment at maturity: 1210
*/

analyseInv(1000, 10, 24);