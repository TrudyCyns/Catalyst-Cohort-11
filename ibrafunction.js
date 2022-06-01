//Assignment
/*Define a function named bankBal and assign it a paramater deposit
Declare a variable bankBal and assign it a value deposit
Return the bankBal variable.*/
function bankBal(deposit) {
  let bankBal = deposit;
  return bankBal;
}

/*Define a function calInterest with parameter rate
Declare a variable intPaid which calculates the interest paid on the deposit
Declare a variable fnBal that adds the interest paid to the intial deposit
Return the fnBal variable*/
function calInterest(rate) {
  const bankInt = rate;
  let bal = bankBal(3000000);
  let intPaid = (rate / 100) * bal;
  let fnBal = intPaid + bal;
  return fnBal;
}
calInterest();

//This function calculates the final bank balance after subtracting the bank surcharge
function bankChrge(rate) {
  const bankRate = rate;
  let bal = bankBal(3000000);
  let surcharge = (rate / 100) * bal;
  let fnBal = calInterest(15);
  let netAccBal = fnBal - surcharge;
  return netAccBal;
}

function netBal() {
  console.log("Net Account Balance before bank charges is: ", +calInterest(15));
  console.log("Net Account Balance after bank charges is: ", +bankChrge(3));
}
netBal();
