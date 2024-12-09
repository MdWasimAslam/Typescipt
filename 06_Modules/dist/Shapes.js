"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sqaure = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    //calculate reduis
    doubleRadius(radius) {
        return radius * radius;
    }
}
exports.Circle = Circle;
class Sqaure {
    constructor(width) {
        this.width = width;
    }
}
exports.Sqaure = Sqaure;
