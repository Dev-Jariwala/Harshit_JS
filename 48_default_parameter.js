// default parameter.

function add(a,b){
  return a+b;
}
console.log(add(4));

// earlier we were setting default parameter like this
function addition(a,b){
  if(typeof b==="undefined"){
    b=0;
  }
  return a+b;
}
console.log(addition(4));

// but now it is easier to set default parameter.
function addTwoNum(a,b=0){
  return a+b;
}
console.log(addTwoNum(4));
