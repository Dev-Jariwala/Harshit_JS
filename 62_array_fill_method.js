// fill method in array.

// Alert it will change the orignal array so make changes in clone one other wise you will lose data.


// we can create new array like this .
const myArray = new Array(10).fill(0);
console.log(myArray);

// we can change values using fill in array like this.
const myArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myArray2);
myArray2.fill(0,4,7);
console.log(myArray2);

// fill method take input as
// array.fill(value, start, end)
