// array shift and unshift
  let fruits = ["apple", "mango", "banana", "grapes", "kiwi"];
  console.log(fruits);

// unshift.
  fruits.unshift("carrot");
  console.log(fruits);
  let addedFruit= fruits.unshift("orange");
  console.log(fruits);
  console.log("Added Fruit is: "+ addedFruit);
  console.log(fruits[0]);

// shift.
  fruits.shift();
  console.log(fruits);
  let removedFruit=fruits.shift();
  console.log(fruits);
  console.log("removed fruit is: "+ removedFruit);
