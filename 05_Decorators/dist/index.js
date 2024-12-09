"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("-------- Decorators --------");
function Component(value) {
    return (constructor) => {
        console.log("Component Decorator Called!");
        constructor.prototype.wasim = "wasim";
        console.log(value);
    };
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component(1)
], ProfileComponent);
//------ Decorator Method -------
console.log("------------- Decorator Method -------------");
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Before');
        const result = original.call(this, '----->', ...args); // Call original method
        if (result !== undefined) {
            console.log(result); // Log result only if it exists
        }
        console.log('After');
    };
}
class Person {
    say(...args) {
        console.log("Hello ", ...args);
    }
}
__decorate([
    Log
], Person.prototype, "say", null);
const person = new Person();
person.say("World", "Wasim");
//------ Accessor Decorator -------
console.log("------------- Accessor Decorator -------------");
function Captilize(target, propertyKey, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const value = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof value === 'string') {
            return value.toUpperCase();
        }
        return value;
    };
}
class Person2 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
__decorate([
    Captilize
], Person2.prototype, "fullName", null);
const person2 = new Person2("wasim", "Aslam");
console.log(person2.fullName);
// ------ Property Decorator -------
console.log("------------- Property Decorator -------------");
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`Property ${propertyName} must be at least ${length} characters long`);
                }
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class User {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], User.prototype, "password", void 0);
const user = new User("wasim");
console.log(user.password);
const watchParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchParameters.push({
        methodName,
        parameterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchParameters);
