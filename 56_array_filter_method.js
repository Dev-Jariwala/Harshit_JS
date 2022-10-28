// Filter method in array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const isEven = function(number){
  return number%2===0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

// So here we learned that array.filter take callback function
// that returns bolean values and returns all true values in array formate
// so we have to store it in variable and console.log it .
