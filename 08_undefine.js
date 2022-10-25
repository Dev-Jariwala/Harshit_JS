//------------------------- Undefine--------------------------------------------

let firstName;
console.log(typeof firstName);

//------------------------- Null------------------------------------------------

let myVariable = null;
console.log(typeof myVariable);

// This will return object which is bug in JavaScript
// they are not fixing it becoz old code written on this bug basics
// will have to changed and frameWorks will also suffer.


// -------------------------BigInt----------------------------------------------

let myNumber = 1232838750425720847582;
// there is some limit to store a number in number variable \
console.log(myNumber);
// we can check that max safe integer value by below code
console.log(Number.MAX_SAFE_INTEGER);

// So to store grater number we use BigInt
// We can declare BigInt by two ways.

let myBigInt = 1232838750425720847582n;
let sameBigInt = BigInt(1232838750425720847582);

console.log(myBigInt, typeof myBigInt);

// if we try to math between number and bigint it will give error to do math with bigint using other bigint only.
// console.log(myBigInt + myNumber);

// we can also store small values in myBigInt
let bigInt1 = 123n;
let bigInt2 = BigInt(12);

console.log(bigInt1 + bigInt2);
