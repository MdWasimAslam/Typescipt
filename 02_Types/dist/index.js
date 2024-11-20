"use strict";
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true;
let address = 'USA';
address = 123;
function hello(data) {
    console.log(data);
}
hello('Hello World');
// Arrays in TypeScript
let myArr = [1, 2, 3, 4, 5];
let myArr2 = [1, 2, 3, 4, 5];
console.log(myArr.forEach((item) => item * 2));
// Tuple in TypeScript - fixed number of elements
let myTuple = [1001, 'John'];
// myTuple.push(1002,'Doe');  // Error in TypeScript
console.log(myTuple);
;
let mySize = 3 /* Size.Medium */;
console.log(mySize); // 3
