// Arrays .
// orderd collection of items.

let fruits = ["apple", "mango", "banana", "grapes", "kiwi"];
let number = [1,2,3,4,5];
let mixed = ["string", null , undefined, 0, false];
console.log(number);
console.log(mixed);
console.log(fruits[0]);

let cars = ["bmw", "tata", "ev", "fortuner"];
console.log(cars);
cars[1] = "lamborgini";
console.log(cars);

console.log(typeof cars);

let obj = {};

console.log(Array.isArray(cars));
console.log(Array.isArray(obj));
