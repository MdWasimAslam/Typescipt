"use strict";
// Javascript Types - number, string, boolean, null, undefined, object, symbol
// Typescript Types - any, unknown, never, void, tuple, enum, array, object, null, undefined, symbol
let sales = 20;
let course = 'Typescript';
let isPublished = true;
// ANY TYPE
let level; // when not assigned a value, it is of type any by default
function render(data) {
    console.log(data);
}
// Array
let nums = [1, 2, 3, 4, 5]; // This means the nums is an number array
console.log(nums.forEach(num => num)); // This will print the numbers in the array
// Tupples
let user = [1, 'Aron']; // This means the user is a tuple with a number and a string
// The values are assigned automatically starting from 0 but we can also assign values manually by using = sign
let smallSize = 0 /* Size.Small */;
console.log(smallSize); // This will print 0
// Functions
function CalculateTax(amount, taxRate, optional = 10) {
    if (amount >= 10000)
        return amount * taxRate;
    return 0;
} // This means the CalculateTax function takes two parameters and returns a number
console.log(CalculateTax(100, 0.2)); // This will print 20
