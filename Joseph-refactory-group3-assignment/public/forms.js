const formFocus = () =>{
    let vendorFocus = document.regForm.firstname.focus();
    return true;
}

const val_fName = ()=>{
    let fName = document.regForm.firstname;
    let fNameLen = fName.value.length
    let thisForm = document.getElementById('firstname');
    let par = document.getElementById('para1');
    const letters = /^[A-Za-z\s]+$/;

    if ( fNameLen == 0 || fNameLen < 5 || fNameLen >= 15 )
    {
        thisForm.style.backgroundColor = '#FEEAE8';
        par.textContent = "Name must have 5-12 characters!"
        par.style.color = 'red';
        fName.focus();
        // alert("Enter valid name!");
        

    }
    else if (!fName.value.match(letters)){
        fName.style.border = '3px solid red'
        thisForm.style.backgroundColor = '#FEEAE8';
        par.textContent = "Name must only contatin words!"
        par.style.color = 'red';
        fName.focus();
    
    }
    else{
        par.textContent = "✔️"
        par.style.color = 'green';
    }
}

const val_Lname = () =>{
    let lName = document.regForm.lastname;
    let lNameLen = lName.value.length
    // let thisForm = document.getElementById('firstname');
    let par2 = document.getElementById('para2');
    const letters = /^[A-Za-z\s]+$/;

    if ( lNameLen == 0 || lNameLen < 5 || lNameLen >= 15 )
    {
        // thisForm.style.backgroundColor = '#FEEAE8';
        par2.textContent = "Name must have 5-12 characters!"
        par2.style.color = 'red';
        lName.focus();
        // alert("Enter valid name!");
        

    }
    else if (!lName.value.match(letters)){
        lName.style.border = '3px solid red'
        // thisForm.style.backgroundColor = '#FEEAE8';
        par2.textContent = "Name must only contatin words!"
        par2.style.color = 'red';
        lName.focus();
    
    }
    else{
        par2.textContent = "✔️"
        par2.style.color = 'green';
    }
}

// validate business
const val_business = ()=>{
    let bizName = document.regForm.businessName;
    let bizNameLen = bizName.value.length;
    let par3 = document.getElementById('para3');
    const letters = /^[A-Za-z\s\d]+$/;

    if (bizNameLen == 0 || bizNameLen < 4 || bizNameLen >= 12){
        bizName.style.backgroundColor = '#FEEAE8'
        par3.textContent = "Business name must have 4-12 characters!"
        par3.style.color = 'red';
        bizName.focus();
    }
    else if (!bizName.value.match(letters))
    {
        par3.textContent = "Business name must be Aplha numeric!"
        par3.style.color = 'red';
        bizName.focus();
    }
    else{
        par3.textContent = "✔️"
        par3.style.color = 'green';
    }
}

// validate contact

let val_contact =() => {
    let telContact = document.regForm.phone;
    let phoneLen = telContact.value.length;
    let par4 = document.getElementById('para4');
    const numbers = /^[\d]+$/;

    if (phoneLen !== 10 || !telContact.value.match(numbers) ){
        par4.textContent = "Enter correct phone number!"
        par4.style.color = 'red';
        telContact.focus();
    }
    else{
        par4.textContent = "✔️"
        par4.style.color = 'green';
    }
}

// validate email
let val_email = ()=>{
    let bizEmail = document.regForm.email;
    let userEmail = bizEmail.value;
    let emailLen = bizEmail.value.length;
    let par5 = document.getElementById('para5');

    var atposition = userEmail.indexOf("@"); 
    var dotposition = userEmail.lastIndexOf(".");

    if (userEmail == null | userEmail == ""){
        par5.textContent = "Email can't be empty"
        par5.style.color = 'red';
        userEmail.focus();

    }
    else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=userEmail.length){
        par5.textContent = "Enter correct email address"
        par5.style.color = 'red';
        userEmail.focus();
    }
    else{
        par5.textContent = "✔️"
        par5.style.color = 'green';
    }

}

// validate address
// stree address validation

let val_street = () =>{
    let bStreet = document.regForm.street;
    let streetLen = bStreet.value.length; 

    let par6 = document.getElementById('para6');
    const letters = /^[A-Za-z\s\d]+$/;

    if (streetLen == 0 || streetLen < 4 || streetLen >= 12){
        bStreet.style.backgroundColor = '#FEEAE8'
        par6.textContent = "Business street must have 4-12 characters!"
        par6.style.color = 'red';
        bStreet.focus();
    }
    else if (!bStreet.value.match(letters))
    {
        par6.textContent = "Business street must be Aplha numeric!"
        par6.style.color = 'red';
        bizName.focus();
    }
    else{
        par6.textContent = "✔️"
        par6.style.color = 'green';
    }
}

// validate plot
let val_plot = ()=>{
    let plotNum = document.regForm.plotNumber;
    let plotLen = plotNum.value.length;
    let par7 = document.getElementById('para7');
    const numbers = /^[\d]+$/;

    if (plotLen ==  0 || !plotNum.value.match(numbers) ){
        par7.textContent = "Plot number must only be figures!"
        par7.style.color = 'red';
        
    }
    else{
        par7.textContent = "✔️"
        par7.style.color = 'green';
    }

}


// validate city input
const val_city = () =>{
let cityName = document.regForm.city;
let cityLen = cityName.value.length;
let par8 = document.getElementById('para8');
const letters = /^[A-Za-z\s]+$/;

if ( cityLen == 0 || cityLen < 3 || cityLen >= 15 )
{
    // thisForm.style.backgroundColor = '#FEEAE8';
    par8.textContent = "Name must have 3-12 characters!"
    par8.style.color = 'red';
    cityName.focus();
    // alert("Enter valid name!");
    

}
else if (!cityName.value.match(letters)){
    cityName.style.border = '3px solid red'
    // thisForm.style.backgroundColor = '#FEEAE8';
    par8.textContent = "Name must only contatin words!"
    par8.style.color = 'red';
    

}
else{
    par8.textContent = "✔️"
    par8.style.color = 'green';
}

}

// validate region
let val_region = ()=>{
    let bizRegion = document.regForm.biz_region.value;
    let par9 = document.getElementById('para9');

    
    if (bizRegion == "default") {
        par9.textContent = 'Select your region!'
        par9.style.color = 'red';
        
   }
   
   else{
    par9.textContent = "✔️"
    par9.style.color = 'green';
   }
}

// validate business category
let biz_category = ()=>{
    let bizCat = document.regForm.businessType.value;
    let par10 = document.getElementById('para10');

    
    if (bizCat == "Default") {
        par10.textContent = 'Select your business category!'
        par10.style.color = 'red';
        
   }
   
   else{
    par10.textContent = "✔️"
    par10.style.color = 'green';
   }
}

// validate business description
let biz_desc = () =>{
    const bizDescription = document.regForm.description;

    let par11 = document.getElementById('para11');
    const letters = /^[A-Za-z\s]+$/;

    if ( bizDescription.value == "" || bizDescription.value.length >= 100 )
    {
       
        par11.textContent = "Describe your business, keep it short"
        par11.style.color = 'red';
        
        

    }
    else if (!bizDescription.value.match(letters)){
        bizDescription.style.border = '3px solid red'
        
        par11.textContent = "No special characters allowed!"
        par11.style.color = 'red';
        
    
    }
    else{
        par11.textContent = "✔️"
        par11.style.color = 'green';
    }
}