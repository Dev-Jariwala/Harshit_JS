// string concatenation

let firstName = "Dev";
let lastName = "Jariwala";

let fullName = firstName + " " + lastName;

console.log(fullName);

// What if we have two numbers in string ?

let string1 = "17";
let string2 = "10";

let newStr = string1 + string2;

// As string1 and string2 are strings numbers will not get add but they will be printed together as a new string.
console.log(newStr);
console.log(typeof newStr);

// So if we want to add two string as number we can do it by Number(string)
newStr = Number(string1) + Number(string2);
console.log(newStr);
console.log(typeof newStr);
