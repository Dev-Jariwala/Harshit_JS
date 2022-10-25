// While loop in array

let fruits = ["apple", "mango", "bannana", "grapes", "orange", "kiwi"];
let fruits2 = [];
let i = 0;

while(i<fruits.length){
  fruits2.push(fruits[i].toUpperCase());
  i++;
}
console.log(fruits2);
