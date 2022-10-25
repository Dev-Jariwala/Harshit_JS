// 1) trim()
// 2) toUpperCase()
// 3) toLowerCase()
// 4) slice()

// 1) ------------ string.trim() --------------------------------

let firstName = "     dev     ";

console.log(firstName.length);

// firstName.trim() will not change existing string, it will give new string which does not have spaces.
firstName.trim();
console.log(firstName);
console.log(firstName.length);


// So we can save this new string created by .trim() to new string variable.
let newString = firstName.trim();
console.log(newString);
console.log(newString.length);

// Or we can save it to same existing one like below
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

// 2) ----------------------string.toUpperCase()--------------------------

// firstName.toUpperCase will also give new string
// so we can store it in existing one or new string
// for example
firstName = firstName.toUpperCase();

console.log(firstName);


// 3) ----------------------string.toLowerCase()--------------------------

// firstName.toLowerCase will also give new string
// so we can store it in existing one or new string
// for example
firstName = firstName.toLowerCase();

console.log(firstName);

// 4) ----------------------string.slice()--------------------------

let lastName = "Jariwala";

// firstName.slice() will also give new string
// so we can store it in existing one or new string
// for example
lastName = lastName.slice(0,lastName.length);
// Here .slice() takes two input "starting index" and "ending index"
// It will slice string from "starting index" to "ending index" exclucive of "ending index".

// So accoriding to code lastName will be printed from "0th index" to "lastName.length-1" <-- Because it is exclusive of "ending index".
console.log(lastName);
