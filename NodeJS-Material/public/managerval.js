let managerVal = ()=>{
    
    //getting input fields by form name and field name
    let fnames = document.manager.fnames;
    let email = document.manager.email;
    let phone = document.manager.phonenumber;
    let psw = document.manager.password;

    //getting our errors
    let errorFnames = document.getElementById('error1');
    let errorEmail = document.getElementById('error2');
    let errorPhn = document.getElementById('error3');
    let errorPsw = document.getElementById('error4');

    //regular expressions
    let emailVal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordval = /^[0-9a-zA-Z]+$/;
    let fnameReg = /^[a-zA-Z].*[\s\.]*$/;

    //validating names
    if(fnames.value.length<8){
    fnames.style.borderBottom = "2px solid coral"
    errorFnames.innerHTML = "Full Names should contain atlleast 8 characters!"
    return false
    }
    if(!fnames.value.match(fnameReg)){
        fnames.style.borderBottom = "2px solid coral"
        errorFnames.innerHTML = "Full Names should only have alphabetic characters!"
        return false
        }else{
            fnames.style.border = "1px solid green"
            errorFnames.innerHTML = ""
        }
    //validating email
    if(email.value==""){
        email.style.borderBottom = "2px solid coral"
        errorEmail.innerHTML = "Email address is required!"
        return false
        }
        if(!email.value.match(emailVal)){
            email.style.borderBottom = "2px solid coral"
            errorEmail.innerHTML = "input correct Email format!"
            return false
            }else{
                email.style.border = "1px solid green"
                errorEmail.innerHTML = ""
            }

    //validating phone number
    if(phone.value.length<10){
        phone.style.borderBottom = "2px solid coral"
        errorPhn.innerHTML = "Fill in valid phone number"
        return false
        }
        else{
        phone.style.border = "1px solid green"
        errorPhn.innerHTML = ""
        }

//validating password
    if(psw.value.length<4){
        psw.style.borderBottom = "2px solid coral"
        errorPsw.innerHTML = "Password contains atleast 4 characters!"
        return false
        }
        if(!psw.value.match(passwordval)){
         psw.style.borderBottom = "2px solid coral"
        errorPsw.innerHTML = "input valid password"
        return false
        }
         else{
        psw.style.border = "1px solid green"
        errorPsw.innerHTML = ""
         }
        return true

}