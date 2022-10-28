// Every method in Array.
const numbers = [2, 4, 6, 8, 0];

console.log(numbers.every((number)=>number%2===0));

// every method will take a callback function which returns true or false (boolean).
// And will also return true or false (boolean) as a result.

const products = [
  {productId: 1, product: "mobile", price: 20000},
  {productId: 2, product: "tv", price: 25000},
  {productId: 3, product: "AC", price: 35000},
  {productId: 4, product: "Washing Machine", price: 22000},
]

console.log(products.every((product)=>product.price < 40000));
