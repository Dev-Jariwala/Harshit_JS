// falsy values

// 1). false
// 2). null
// 3). ""
// 4). undefined
// 5). 0

// any thing else then above 5 falsy values are truthy values.


let value = "";

if(value){
  console.log(value + " is truthy");
}else{
  console.log("falsy value");
}
