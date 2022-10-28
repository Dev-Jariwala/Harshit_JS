// template string

let age = 20;
let firstName = "dev";

// what if I want to make string like this
// "My name is Dev and my age is 20"

// This is Way number 1.
// let aboutMe = "My name is " + firstName + " and my age is " + age;
// console.log(aboutMe);

// This is way number 2
let aboutMe = `My name is ${firstName} and my age is ${age}`;
console.log(aboutMe);
