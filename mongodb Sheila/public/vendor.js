let focusFirst=()=>{
    const first = document.registration.firstName.focus();
    return true; 

}

/*let valFirstName = ()=> {
    let userName = document.registration.firstName;
    
    let firstLen = userName.value.length;
    if (firstLen == 0 || firstLen < 4 || firstLen >= 12){
        userName.style.border = '3px solid red';
        userName.focus();
    }
    }
    */
   let valFirstName = (min, max, inputField, errormessage) =>{
    if(inputField.value.length < min || inputField.value.length >= max){
        errormessage.innerHTML = 'Must be 3-12 characters';
        errormessage.style.color = 'red';
        errormessage.style.fontSize = '11px';
        inputField.focus();
        return false;
    }else{
        errormessage.innerHTML = '';
        
        return true;
    }
   }
   let valSurName = (min, max, inputField, errorsec) =>{
       if(inputField.value.length < min || inputField.value.length >= max){
           errorsec.innerHTML = 'must be 4-12 characters';
           errorsec.style.color = 'red';
           errorsec.style.fontSize ='11px';
           inputField.focus();
           return false;
       }
       else{ 
           errorsec.innerHTML = '';
           return true;
       }
   }

// let valSurName = () => {
//     let uname = document.registration.surname;
//     let secondLen = uname.value.length;
//     if( secondLen == 0 || secondLen < 4 || secondLen >= 12) {
//         uname.style.border ='3px solid red';
//         uname.focus();
//     }

// }

// let valCont = () =>{
//     let num = document.registration.contact_num;
//     let conLen = num.value.length;
//     if ( conLen == 0 || conLen < 4 || conLen >=12 ) {
//         num.style.border = '4px solid red';
//         num.focus();
//     }
// }
let valCont = (contactField, contacterror)=>{
    let contactFormat = /[0-9]/;
    if(contactField.value.match(contactFormat) && contactField.value.length == 10){
        contacterror.innerHTML = '';
        return true;
    }else{
        contacterror.innerHTML = 'Enter valid phone number';
        contacterror.style.color = 'red';
        contacterror.style.fontSize = '11px';
        contactField.focus();
        return false;
        
    }
}


// let valNin = (NINInput, errormessage)=>{

// }

let valKin = (min, max, inputField, kinerror) =>{
    if(inputField.value.length < min || inputField.value.length >= max){
        kinerror.innerHTML = 'Must be 5-12 characters';
        kinerror.style.color = 'red';
        kinerror.style.fontSize = '11px';
        inputField.focus();
        return false;
    }else{
        kinerror.innerHTML = '';
        
        return true;
    }
   }
   let valNin = (NINinput, ninerror) =>{
       let validnin = /^[A-Z0-9]+$/i;
    if(NINinput.value.match(validnin) && NINinput.value.length == 14){
        ninerror.innerHTML = '';

        return true;
    }else{
      
        ninerror.innerHTML = 'Enter valid NIN number';
        ninerror.style.color = 'red';
        ninerror.style.fontSize = '11px';
        NINinput.focus();

        return false;
    }
   }