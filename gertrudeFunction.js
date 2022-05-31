// Computational problem with three dynamic flowing functions.

// Total Area, Lateral Area and Volume of a cube.

// A function taking side as parameter
function cube(side) {
    return side;
}
// Area of cube, excluding the base and top.
function latArea(side) {
    let len = side;

    let latA = 4 * (len * len);
    return latA;
}
// Lateral Area + area of base and top = Total Area.
function totArea(side) {
    let len = side;

    let totA = (6 * len * len);
    return totA;
}
// Volume of cube
function volume(side) {
    let len = side;
    vol = len ** 3;
    return vol;
}
// Function to display onto console.
function displayRes() {
    let latA = latArea(10);
    let totA = totArea(10);
    let vol = volume(10);
    console.log('A cube of sides *' + cube(10) + '* has: ');
    console.log(`Lateral Area of ${latA}`);
    console.log(`Total Area of ${totA}`);
    console.log(`Volume of ${vol}`);
}

displayRes();