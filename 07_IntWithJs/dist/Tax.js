"use strict";
/**
 *
 * @param {number} income
 * @returns number
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateTax = CalculateTax;
function CalculateTax(income) {
    let taxRate = 1.1;
    if (income >= 10000)
        return income * taxRate;
    return income;
}
