// Advance Types

function greet(name: unknown): string {
  if (typeof name === "string") {
    return "Hello, " + name.toUpperCase();
  }
  return 'Hello, ' + name;
}

// Never Type

function processEvents(): never {
  // never return anything
  while (true) {
    // Read message from the queue
  }
}
// processEvents();

console.log("Hello World");

function reject(message: string): never {
  throw new Error(message);
}

// reject('Something went wrong!');
console.log("Hello World");

// Type Aliases

// Defining the type of employee object
const employee: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30,
};

// better way to define the type
type employeeAlias = {
  name: string;
  age: number;
};

const employee1: employeeAlias = {
  name: "John",
  age: 30,
};



// Union Type

function kmToMiles(distance: number | string): number {  // --> | is used to define the union type which can be either number or string
  if (typeof distance === "string") {
    distance = parseFloat(distance);
  }
  return distance / 1.6;
}



// Intersection Type

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};


// Intersection type
type ElevatedEmployee = Admin & Employee

// ElevatedEmployee is a type that has all the properties of Admin and Employee types
const elevatedEmployee: ElevatedEmployee = {
    name: "John",
    privileges: ["create-post", "delete-post"],
    startDate: new Date('2020-01-01T00:00:00.000Z')
}



// Literal Type  -->  It is a type that represents a single value from the provided set of values.
type quantityValues =  50 | 100;
const quantity : quantityValues = 100;



// Nullable Type

function checkIfNull(name: string | null): string {
  if (name) {
    return 'Hey, ' + name;
  }
  return 'Hey, Stranger';
}



// Optional Chaining
// Optional chaining is a feature that allows you to access nested properties without crashing the application if the property

const user = {
  name: 'John',
  address: {
    street: 'Main Street',
    city: 'New York'
  }
}

// If the street property is not present in the address object, it will throw an error
console.log(user.address.street); // Output: Main Street

// Even if the street property is not present in the address object, it will not throw an error
console.log(user?.address?.street); // Output: Main Street




// Nullish Coalescing
// Nullish coalescing is a feature that allows you to provide a default value if the value is null or undefined.


let speed:number | null = null;
let ride = {
    speed: speed ?? 60  // double question mark is used to provide the default value if the value is null or undefined
}




