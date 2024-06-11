// Make a program to calculate the value of a trip.

// You will have 3 variables:
// 1 - Fuel price;
// 2 - Average fuel consumption of the car per KM;
// 3 - Distance in KM of the trip;

// Print in the console the value that will be spent to make this trip.

const fuelPrice = 4.5;

const averageFuelConsumption = 12;

const distance = 320;

let total = (distance / averageFuelConsumption) * fuelPrice;

console.log(`O gasto total da viagem é ${total}`);
