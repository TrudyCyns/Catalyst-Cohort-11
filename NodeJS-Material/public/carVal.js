//validating car tracking form
let validation3 = () =>{


    let nplate = document.cars.numberPlate;
    let currentDate = document.cars.today;
    let carType = document.cars.carType;
    let washer = document.cars.washer;
    let toa = document.cars.time;
    let color = document.cars.color;
    let package = document.cars.package;
  //errors
  let errornplate = document.getElementById('errornplate');
  let errorDate = document.getElementById('errorDate');
  let errorType= document.getElementById('errorType');
  let errorWasher = document.getElementById('errorWasher');
  let errorTime = document.getElementById('errorTime');
  let errorColor = document.getElementById('errorColor');
  let errorPackage = document.getElementById('errorPackage');


  //regular expressions
  let nPlateVal = /^([A-Z]{3}.*[\s\.]*[0-9]{3}[A-Z]{1})$/

   //if statements
   //number plate validation
   if(nplate.value.length < 7){
    nplate.style.borderBottom = '2px solid coral';
    errornplate.innerHTML = 'fill in valid plate number'
    errornplate.style = 'font-size:15px; color:maroon;'
    return false;
   }
  if(!nplate.value.match(nPlateVal)){
    nplate.style.borderBottom = '2px solid coral';
    errornplate.innerHTML = 'fill in valid plate number format'
    errornplate.style = 'font-size:15px; color:maroon;'
    return false;
  } 
  else{
    nplate.style.border = '2px solid green';
    errornplate.innerHTML = '';
  }
  //date validation
  if(currentDate.value == ""){
    currentDate.style.borderBottom = '2px solid coral';
    errorDate.innerHTML = 'select date'
    errorDate.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    currentDate.style.border = '2px solid green';
    errorDate.innerHTML = '';
  }
  //type of car validation
  if(carType.value == 'CarType'){
    carType.style.borderBottom = '2px solid coral';
    errorType.innerHTML = 'select car type'
    errorType.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    carType.style.border = '2px solid green';
    errorType.innerHTML = '';
  }
  //validating washer
  if(washer.value == ''){
    washer.style.borderBottom = '2px solid coral';
    errorWasher.innerHTML = 'select a washer'
    errorWasher.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    washer.style.border = '2px solid green';
    errorWasher.innerHTML = '';
  }
  //validating time of arrival
  if(toa.value.length==''){
    toa.style.borderBottom = '2px solid coral';
    errorTime.innerHTML = 'fill in valid time'
    errorTime.style = 'font-size:15px; color:maroon;'
    return false;
  } 
  else{
    toa.style.border = '2px solid green';
    errorTime.innerHTML = '';
  }
  //car color validation
  if(color.value==''){
    color.style.borderBottom = '2px solid coral';
    errorColor.innerHTML = 'fill in color of car'
    errorColor.style = 'font-size:15px; color:maroon; '
    return false;
  } 
  else{
    color.style.border = '2px solid green';
    errorColor.innerHTML = '';
  }
  //validating package
  if(package.value=='package'){
    package.style.borderBottom = '2px solid coral';
    errorPackage.innerHTML = 'select package'
    errorPackage.style = 'font-size:15px; color:maroon; '
    return false;
  } 
  else{
    package.style.border = '2px solid green';
    errorPackage.innerHTML = '';
  }
  return true
  } 
      
  