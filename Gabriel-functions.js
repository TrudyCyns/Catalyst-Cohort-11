//defining age function which returns age
function age(birthYear) {
  return 2022 - birthYear;
}

//defining discountRate function which returns the discount percentage according to age
function discountRate(age) {
  if (age < 12) {
    return 50;
  } else if (age >= 12 && age <= 18) {
    return 20;
  } else {
    return 10;
  }
}


//defining function customerBill which 
//calculates a customers final bill after dicounts

function customerBill(rate, bill) {
  //declaring discount rate
  let discount = rate / 100;

  return console.log ('Your ticket price is :',bill - discount * bill);
}

//invoking customerBill function which logs out final ticket price
customerBill(discountRate(age(2014)), 10000);
