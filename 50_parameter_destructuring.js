// parameter destructuring.
const person = {
  firstName: "Dev",
  gender: "male",
  age: 20
}

// function printDetails (obj){
//   console.log(obj.firstName);
//   console.log(obj.gender);
// }

// using parameter destructuring
function printDetails({firstName, gender, age}){
  console.log(firstName);
  console.log(gender);
  console.log(age);
}
printDetails(person);
