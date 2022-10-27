// array.foreach()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// function myFunc(number, index){
//   console.log(`Index is ${index} and number is ${number}`);
// }
// for(let number in numbers){
//   myFunc(numbers[number], number);
// }

// numbers.forEach(function(number, index){
//   console.log(`Index is ${index} and number is ${number}`);
// });

// numbers.forEach((number, index) => {
//   console.log("Index is ",index," ",number + " * 3 = "+number*3);
// });

const users = [
  {firstName: "Dev", age: 20},
  {firstName: "Nikhil", age: 21},
  {firstName: "Yug", age: 19},
  {firstName: "Yash", age: 20},
]

// users.forEach(function(user){
//   console.log(user.firstName);
//   console.log(user.age);
// });

users.forEach((user)=>{
    console.log(user.firstName);
    console.log(user.age);
});
