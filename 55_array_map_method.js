// Map Method in array . (Very Imp)**
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// using map method
const myFunc = function(number) {
  return number * number;
}
const arr = numbers.map(myFunc);
console.log(arr);

// Using forEach loop
const myFunction = function(number) {
  console.log(number * number);
}
numbers.forEach(myFunction);

const users = [
  {firstName: "Dev", age: 20},
  {firstName: "Nikhil", age: 21},
  {firstName: "Yug", age: 19},
  {firstName: "Yash", age: 20},
]

const userNames = users.map((user)=>{return user.firstName});
console.log(userNames);

// so here we learned that array.map returns values in array
// so we have to store it in variable and console.log it.
