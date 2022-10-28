// splice method in array.

// Alert it will change the orignal array so make changes in clone one other wise you will lose data.

// array.splice(start, delete, insert);
const myArray = ["item1", "item2", "item3"];

// delete.
// console.log(myArray.splice(1,1));
// console.log(myArray);

// insert.
// myArray.splice(3,0,"item4","item5");
// console.log(myArray);

// insert and delete both together.
console.log(myArray.splice(0,3,"Item", "Item1", "Item2"));
console.log(myArray);
