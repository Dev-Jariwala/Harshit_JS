// functions.
// we can asign a work to function which we will need to do repeatedly.

// for example if we want to print happy birthday song repeatedly.
// console.log("happy birthday to you.............");
// console.log("happy birthday to you.............");
// console.log("happy birthday to you.............");

// lets use function to do this work
function singHappyBirthday() {
  console.log("happy birthday to you..............");
}
// this is how we call a function.
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

// suppose if we want to sum two numbers repeatedly
// so lets create a function for it.

function add(num1, num2) {
  console.log(num1 + num2)
  return num1 + num2;
}
// var returnedValue = add(25, 50);
// console.log(returnedValue);
//
// add();
// console.log(undefined+undefined); // undefined + undefined returns NaN means not a number.

// isEven function which will take one input number and will return true if its even or false.

function isEven(num) {
  // if(num%2 === 0){
  //   return true;
  // }else{
  //   return false;
  // }
  // return num % 2 === 0 ? true : false;
  return num % 2 === 0;
}
// console.log(isEven(54));

// This function will take string as an input and will return its first value.
function firstCharacterOfString(str){
  // return str.slice(0,1);
  return str[0];
}
// console.log(firstCharacterOfString("Dev Jariwala"));

// this function will take two input array and target of index of array
// if target is present inside array then return it.
const fruits = ["apple", "bannana", "orange", "kiwi", "grapes"];
// function iOfArray(arr, i){
//   return i<arr.length ? arr[i] : "Not Found";
// }
// console.log(iOfArray(fruits, 6));

function findTarget(arr, t){
  for(let i = 0; i<arr.length; i++){
    if(t === arr[i]){
      return i;
    }
  }
  return "Not Found";
}
console.log(findTarget(fruits, "grapes"));
