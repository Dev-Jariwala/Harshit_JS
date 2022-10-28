// for of loop in array

const fruits = ["apple", "mango", "grapes", "bannana", "kiwi", "orange"];
const fruits2 = [];

for(let fruit of fruits){
  fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);
