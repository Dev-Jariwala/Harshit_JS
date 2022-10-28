// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
// We can not do this while using const
// this makes our array safe so we will use const only to create array from now on.
// fruits = ["orange", "grapes"];

fruits.push("banana");
console.log(fruits);
