// lexical scope.



// This is Global Scope.
const myVar = "value1";
// here it will find the myVar as value1 and console.log it in myFunc2.

function myApp() {
  // And when it will also not find myVar in myApp
  // again it will try to fetch it from myApps lexical scope
  // which is global scope
  function myFunc() {
    // const myVar = "value2";
    // when it will not find the myVar in myFunc.
    // it will check it in lexical scope of myFunc.
    // which is myApp.
    function myFunc2() {
      console.log("inside myFunc", myVar);
      // here it will try to find myVar in myFunc2
      // when it wont get it in myFunc2 it will
      // check in the lexical scope of myFunc2
      // which is myFunc.
    }
    myFunc2();
  }
  myFunc();
}
myApp();

// Here we learnd that lexical scope of myFunc2 is myFunc.
// lexical scope of myFunc is myApp.
// lexical scope of myApp is Global scope.
// which is global to all to axcess it any where.
