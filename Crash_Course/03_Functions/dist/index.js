"use strict";
function calculateTax(income, tax) {
    if (income < 10000) {
        return Number(income) * (tax || 1);
    }
    return Number(income) * 0.1;
}
console.log(calculateTax(1000)); // 100
