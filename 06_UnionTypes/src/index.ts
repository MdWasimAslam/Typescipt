function kmToMiles(km: number | string): number {  // Unions are varibales that are more than one type
    if (typeof km === 'string') {
        km = Number(km);
    }
    return km * 0.621371;
}

console.log(kmToMiles('10')); // 6.21371