let sales:number = 123_456_789;
let course:string = 'TypeScript';
let isPublished:boolean = true;

let address:any = 'USA';
address = 123;


function hello(data:any){
    console.log(data);
}

hello('Hello World');

// Arrays in TypeScript
let myArr:number[]= [1,2,3,4,5];
let myArr2:Array<number> = [1,2,3,4,5];

console.log(myArr.forEach((item)=>item*2));


// Tuple in TypeScript - fixed number of elements
let myTuple:[number,string] = [1001,'John'];
// myTuple.push(1002,'Doe');  // Error in TypeScript

console.log(myTuple);


// Enum in TypeScript
const enum Size {Small=2,Medium,Large};

let mySize:Size = Size.Medium;
console.log(mySize); // 3









