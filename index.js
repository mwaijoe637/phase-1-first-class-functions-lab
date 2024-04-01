// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));







const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));







const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];







function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    };
}
const fareQuadrupler = createFareMultiplier(4);
console.log(fareQuadrupler(10));









const fareDoubler = createFareMultiplier(2);

console.log(fareDoubler(10));







const fareTripler = createFareMultiplier(3);

console.log(fareTripler(12));







function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));






