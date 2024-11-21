"use strict";
function kmToMiles(km) {
    if (typeof km === 'string') {
        km = parseInt(km);
    }
    return km * 0.621371;
}
console.log(kmToMiles('10')); // 6.21371
