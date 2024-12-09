/**
 * 
 * @param {number} income 
 * @returns number
 */


export function CalculateTax(income){
    let taxRate = 1.1;
    if(income >= 10000)
        return income * taxRate;
    return income;

}