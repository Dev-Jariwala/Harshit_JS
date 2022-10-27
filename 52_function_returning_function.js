// Function returning function.

function myFunc(){
  function myFunc2(){
    console.log("Hello World!");
  }
  return myFunc2;
}

myFunc()();
// const fun1 = myFunc();
// fun1();
