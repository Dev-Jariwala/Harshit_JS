// rest parameter.

function add(a,b,...c){
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is `, c);
}
add(1,2,3,4,5,6);
// rest parameters can stored in variable as array using spread operator.

function addAll(...allnum){
  let sum=0;
  for(let num of allnum){
    sum = sum + num;
  }
  return sum;
}
console.log(addAll(1,2,3,4,5));

// So this is how we can save rest parameters in variable as array using spread operator.
