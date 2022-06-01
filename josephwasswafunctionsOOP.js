// Dynamic Functions which determine if a user can be promoted or not depending their details
// It has parameters age,name and salary, if age and salary are meeting requiremants above 18 years and greater than 100 it runs the above code.
// Change varaibles form here, person being a variable.
// Parameters of salaryscale(name, age, salary) are to be changed here for different tests to be done on code.

let Person = salaryscale("JIMMY JONES", 35, 3000000); // variable person with parameters to be changed to test the code
let Currentyear = new Date().getFullYear(); // year of 2022
// Function called salary scale variables name, age,salary which returns name and computes the new salary if it meets the parameters
function salaryscale(name, age, salary) {
  if (age >= 18 && age < 60) {
    const newsalary = Math.round(salary * 1.15);
    console.log(
      "\n\t Dear ",
      name,
      " of Age ",
      age,
      "  your current salary is ",
      salary,
      " and your new salary will be ",
      newsalary,
      " in the next promotion."
    );
    return { name, age, newsalary };
  } else if (age >= 60) {
    const newsalary = salary;
    console.log(
      "\n\t Dear ",
      name,
      " of Age ",
      age,
      " your salary scale is ",
      salary,
      " . There will be no salary increment only Pension."
    );
    return { name, age, newsalary };
  } else {
    const newsalary = salary;
    console.log(
      "\n\t" +
        name +
        ", You are underage (below 18 years) please wait for working Age.\n\t "
    );
    return { name, age, newsalary };
  }
}
// Function to return year of birth ,variables of salaryscale input here. returns user age,prints year of birth to console
//  variable Yob is also the year of birth
function yearofbirth() {
  const age = Person.age;
  const name = Person.name;
  const salary = Person.newsalary;
  if (age >= 18) {
    const Yob = Currentyear - age;
    console.log(
      "\n\t Year of birth : ",
      name,
      " You were born in the year of ",
      Yob,
      "\n\t"
    );
    console.log(
      "\t Your projected salary will be ",
      salary,
      " in next financial year \n\t"
    );
    return age;
  } else {
    return age;
  }
}
let promoyear = Currentyear + 1; // variable assigns promoyear to addition of current year +1
let age = yearofbirth(); // assign variable age to function yearofbirth() return value.
// Function called promotion which prints out the year of next promotion and the year of retirement for a worker it uses the age property from salary scale to copute its values
function Promotion() {
  if (age >= 18) {
    const RtrAge = 60 - age;
    if (RtrAge > 0) {
      let Rtryear = RtrAge + Currentyear;
      console.log(
        "\t Promotion status: Eligible, Your next promotion will be in financial year of June ",
        promoyear,
        "\n\t"
      );
      console.log(
        "\t You will retire in the financial year of June ",
        Rtryear,
        " and you have ",
        RtrAge,
        " years left to work. \n\t"
      );
    } else {
      console.log(
        "\t Promotion status: Ineligible, You are already 60 years and above, Only pension pending .\n\t"
      );
    }
    return age;
  } else {
    return age;
  }
}
let status = age; // variable status to determine when the pension will be paid out if eligible.
// Function called pension status to determine when pension will be paid to user
function Pension(status) {
  if (status >= 60) {
    console.log(
      "\t Pension status: Your Pension will be paid out in the year of ",
      promoyear,
      "\n"
    );
  } else {
    return status;
  }
}
// function to print out the pension status
function print() {
  Pension(status);
}
Promotion(); // function call for promotion function
print(); // function call for print function
