// Computational problem with three dynamic flowing functions.
function cube(side) {
    return side;
}
// Total area;lateral area + area of top and base
function totalArea(side) {
    let len = side;

    let totA = (6 * len * len);
    return totA;
}
//volume
function volume(side) {
    let len = side;

    let vol = len ** 3;
    return vol;
}
//Lateral area
function latArea(side) {
    let len = side;
    let latA = 4 * (len * len);
    return latA;
}
// to be displayed onto the console
function displayRes() {
    let totA = totalArea(12);
    let vol = volume(12);
    let latA = latArea(12);
    console.log('A cube of sides *' + cube(12) + '* has: ');
    console.log(`Total Area of ${totA}`);
    console.log(`Volume of ${vol}`);
    console.log(`Lateral Area of ${latA}`);
}

displayRes(); 