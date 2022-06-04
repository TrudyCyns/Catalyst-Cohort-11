// This is a dynamic function with two parameters (name, position) and the arguments are (Lisa, manager)
// when you return name function employee holds the value.
function employee(name, Position) {
  console.log(" dear " + name, " you are the " + Position);
  return name;
} 
employee("Lisa", "Manager")


// This is a dynamic function with one parameter (rate).
// const sal is the basic salary for employee and the function below includes the tax, paye and a grossSal before the deductions.
// from 0 - 400000 = 0% tax
// from 400000 - 1000000 = 5% tax
// from 1000000 - above = 10% tax
function empSal(rate){
  const sal = 750000;
  let tax = rate / 100 * sal;
  const paye = 3000;
  // This total sal before deductions
  const fnalSal = sal + tax + paye;
  console.log(" your grossSal is " +  fnalSal);
  return fnalSal;

}
// Here the rate of tax was called in the function 
empSal(5)




// This is a dynamic function with one parameter (rate).
// deductions are calculated by adding tax and insurance.
// insurance is a constant.
function deductions(rate) {
  // To calculate tax you devide the rate you called in the function by 100 and multiply it by fnalSal
  let tax = rate/100 * 790500;
  const insurance = 10000;
  const fnaldeductions = tax + insurance;
  console.log(" your deductions are = " + fnaldeductions);
  return fnaldeductions;
}
deductions(10)



// This is a static function and it doesnt have parameters.
function homeSal(){
  // The takehome sal was calculated by subtracting deductions from empSal
let fnalhomeSal = empSal(5) - deductions(10);
  console.log(" your take home salary will be : " + fnalhomeSal);
}
homeSal()