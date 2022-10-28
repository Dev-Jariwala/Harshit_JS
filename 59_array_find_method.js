// Find method in array.
const animals = ["tiger", "lion", "dog", "cat", "cow", "buffalow"];

// console.log(animals.filter((animal)=>animal.length===3));
console.log(animals.find((animal)=>animal.length===3));

const users = [
  {userId: 1, firstName: "Dev", age: 20},
  {userId: 2, firstName: "Nikhil", age: 21},
  {userId: 3, firstName: "Yug", age: 19},
  {userId: 4, firstName: "Yash", age: 20},
]

console.log(users.filter((user)=>user.userId===3));
console.log(users.find((user)=>user.userId===3));

// so here we learned that find will take a callback function which returns bolean result
// and will find the first true condition

// filter will give all true result in array.
// but find will return first true condition from array.
