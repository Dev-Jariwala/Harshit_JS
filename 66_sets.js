// Sets (it is iterable).
// stores data.
// sets also have its own methods.
// No index base access.
// orders are not gurrented.
// unique items only (no duplicate allowed)

// const numbers = new Set([1, 2, 3]);

// some times we keep sets empty and then add items.

const numbers = new Set();
  numbers.add(1);
  numbers.add(2);
  numbers.add(2); // if we will try to add duplicate it will ignore it.
  const fruits = ["mango", "bannana", "orange", "grapes", "kiwi"];
  numbers.add(fruits);
  numbers.add(fruits);// as said it will ignore duplicates
  // but it will accept clones for example .
  numbers.add([1, 2, 3]);
  numbers.add([1, 2, 3]); // as they have different address in heap.
  
  // has will return true if element is present in set.
  console.log(numbers.has(1));
// console.log(numbers);

// As we learned sets are iterable so we can apply for of loop.
for(let number of numbers){
  console.log(number);
}

const myArray = [1, 2, 3, 3, 3, 4, 4, 5, 5, 5];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);

let length = 0;
for(let element of uniqueElements){
  length++;
}
console.log(length);
