//validating registration page
let validation2 = () =>{


    let fullname = document.register.fullnames;
    let gender = document.register.Gender;
    let dob = document.register.dob;
    let residence = document.register.res;
    let nin = document.register.nin;
    let zwash = document.register.zwash;
  //errors
  let errornames = document.getElementById('errornames');
  let errorgender = document.getElementById('errorgender');
  let errordob= document.getElementById('errordob');
  let errornin = document.getElementById('errornin');
  let errores = document.getElementById('errores');
  let errorza = document.getElementById('errorza');


  //regular expressions
  let nameReg = /^[A-Z]([a-z'-.]+ [A-Z][a-z'-.]+)$/
  let zawashIdReg  = /^Zwash([0-9]{3})$/;
  let nationalIdReg  = /^[A-Z]{2}[0-9A-Z]{12}$/; 
   
  //if statements
   //fullname validation
  if(fullname.value.length < 8 ){
    fullname.style.borderBottom = '2px solid coral';
    errornames.innerHTML = 'fill in valid names'
    errornames.style = 'font-size:15px; color:maroon;'
    return false;
  } 
  if(!fullname.value.match(nameReg)){
    fullname.style.borderBottom = '2px solid coral';
    errornames.innerHTML = 'fill in valid names'
    errornames.style = 'font-size:15px; color:maroon;'
    return false;
  } 
  else{
    fullname.style.border = '2px solid green';
    errornames.innerHTML = '';
  }
  //gender validation
  if(gender.value == "gender"){
    gender.style.borderBottom = '2px solid coral';
    errorgender.innerHTML = 'select your gender'
    errorgender.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    gender.style.border = '2px solid green';
    errorgender.innerHTML = '';
  }
  //validating date of birth.
  if(dob.value == ''){
    dob.style.borderBottom = '2px solid coral';
    errordob.innerHTML = 'fill in valid date of birth'
    errordob.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    dob.style.border = '2px solid green';
    errordob.innerHTML = '';
  }
  //validating residence.
  if(residence.value == ''){
    residence.style.borderBottom = '2px solid coral';
    errores.innerHTML = 'fill in residence'
    errores.style = 'font-size:15px; color:maroon;'
    return false;
  } else{
    residence.style.border = '2px solid green';
    errores.innerHTML = '';
  }
  //validating national id number.
  if(nin.value.length<11){
    nin.style.borderBottom = '2px solid coral';
    errornin.innerHTML = 'fill in valid NIN'
    errornin.style = 'font-size:15px; color:maroon;'
    return false;
  } 
  if(!nin.value.match(nationalIdReg)){
    nin.style.borderBottom = '2px solid coral';
    errornin.innerHTML = 'fill in valid NIN'
    errornin.style = 'font-size:15px; color:maroon;'
    return false;
  }
  else{
    nin.style.border = '2px solid green';
    errornin.innerHTML = '';
  }
  //validating workers' id.
  if(zwash.value.length<8){
    zwash.style.borderBottom = '2px solid coral';
    errorza.innerHTML = 'fill in valid employee Id'
    errorza.style = 'font-size:15px; color:maroon; '
    return false;
  } 
  if(!zwash.value.match(zawashIdReg)){
    zwash.style.borderBottom = '2px solid coral';
    errorza.innerHTML = 'fill in valid employee Id'
    errorza.style = 'font-size:15px; color:maroon; '
    return false;
  }
  else{
    zwash.style.border = '2px solid green';
    errorza.innerHTML = '';
  
  }
  
  return true
  } 
      
  