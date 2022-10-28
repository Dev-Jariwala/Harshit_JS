// array destructuring.
const myArray = ["value1", "value2", "value3", "value4", "value5", "value6", "value7"];

// let v1 = myArray[0];
// let v2 = myArray[1];
// let v3 = myArray[2];
//
// console.log("value of v1", v1);
// console.log("value of v2", v2);
// console.log("value of v3", v3);


let [v1, v2,, v3, ...myArray2] = myArray; //adding one extra time coma will skip one value in array.
console.log("value of v1", v1);
console.log("value of v2", v2);
console.log("value of v3", v3);

// what if i want values from index 2 in another array.
  // let myArray2 = myArray.slice(2);
  console.log(myArray2);
  // same thing can be done while destructuring using spread operator.
