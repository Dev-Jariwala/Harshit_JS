// block scope

// let and const are block scoped
// var is function scoped.

// what is block?
{

} //this is block

// so when we say that let and const are block scoped
// that means that if i call let and const inside a blocked
// we cannot access it outside of that block scope.
// for example.

{
  const firstName = "Dev";
  let age = 20;
  // we can access it here inside block scope.
  // console.log(firstName, age);
}
// but outside of that block scope if we try to console it will say var not defined.
// console.log(firstName, age);

// But if we had used var instead of let or const we will be able to access it.

{
  var language = "Hindi";
}
console.log(language);// see we can access it out of that block scope.

{
  console.log(language);// even we can access it in another block also
}

// for that reason var is called as function scoped.
// we can access it over any where in the same file
// so our variable is not secure
// thats why developer uses const over let and let over var .
