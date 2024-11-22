// Javascript Types - number, string, boolean, null, undefined, object, symbol
// Typescript Types - any, unknown, never, void, tuple, enum, array, object, null, undefined, symbol


let sales:number = 20;
let course:string = 'Typescript';
let isPublished:boolean = true;


// ANY TYPE
let level; // when not assigned a value, it is of type any by default

function render(data: any){  // when using function we need to specify the type of the parameter 
    console.log(data);
}


// Array

let nums: number[]= [1,2,3,4,5]; // This means the nums is an number array

console.log(nums.forEach(num => num)); // This will print the numbers in the array


// Tupples

let user:[number,string] = [1,'Aron'] // This means the user is a tuple with a number and a string


// Enums
const enum Size {Small, Medium, Large} // This means the Size is an enum with 3 values
// The values are assigned automatically starting from 0 but we can also assign values manually by using = sign
let smallSize = Size.Small;
console.log(smallSize); // This will print 0


// Functions

function CalculateTax(amount:number, taxRate:number,optional=true):number{
    if(amount>=10000)
        return amount*taxRate;
    console.log(optional);
    return 0;
}// This means the CalculateTax function takes two parameters and returns a number

console.log(CalculateTax(100,0.2)); // The optional parameter is not passed so it will print default value true


// Object Types

// 1st Way
const employee : {
    id: number,
    name: string,
} = 
{
    id: 1,
    name: 'Aron',
}



// 2nd Way
type customObj ={
    name:string,
    age:number
}


let person:customObj = {
    name: 'Aron',
    age: 25
}



