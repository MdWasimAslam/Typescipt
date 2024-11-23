"use strict";
// Advance Types
function greet(name) {
    if (typeof name === "string") {
        return "Hello, " + name.toUpperCase();
    }
    return 'Hello, ' + name;
}
// Never Type
function processEvents() {
    // never return anything
    while (true) {
        // Read message from the queue
    }
}
// processEvents();
console.log("Hello World");
function reject(message) {
    throw new Error(message);
}
// reject('Something went wrong!');
console.log("Hello World");
// Type Aliases
// Defining the type of employee object
const employee = {
    name: "John",
    age: 30,
};
const employee1 = {
    name: "John",
    age: 30,
};
