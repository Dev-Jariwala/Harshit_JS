// for in loop in array.

const fruits = ["apple", "mango", "grapes", "bannana", "kiwi", "orange"];
const fruits2 = [];

for(let index in fruits){
  fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);
