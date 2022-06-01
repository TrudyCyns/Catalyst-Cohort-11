
//function calculating area
//returning radius

const calArea = radius => 3.14 * radius**2;
    
    
//function returned value and value is stored in a variable area
const area = calArea(5);
console.log(area);


//returning total 
const bill = function(products, tax){
    let total = 0;
    for (let i =0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2))