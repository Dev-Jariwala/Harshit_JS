// callback function.

function myFunc2(name){
  console.log("inside myFunc2");
  console.log(`Name is ${name}`);
}
function myFunc(callback){
  console.log("inside myFunc");
  callback("Dev");
}
myFunc(myFunc2);
