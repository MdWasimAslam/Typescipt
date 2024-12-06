"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let keyObj1 = new KeyValuePair('2', "Banana");
let keyObj2 = new KeyValuePair(1, "Banana");
let keyObj3 = new KeyValuePair('any', "Banana");
console.log(keyObj1);
console.log(keyObj2);
console.log(keyObj3);
console.log("---------- Generic Functions ----------");
function wrapInArray(value) {
    return [value];
}
console.log(wrapInArray('apple'));
console.log("---------- Generic Interfaces ----------");
function fetchData(url) {
    return { data: null, error: null };
}
let result = fetchData('uri');
console.log(result.data);
console.log("---------- Generic Contraints ----------");
function echo(value) {
    return value;
}
console.log(echo({ name: 'harry' }));
