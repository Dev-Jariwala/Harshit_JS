// Some method in Array.

const numbers = [1, 3, 5, 7, 9, 0];

// if(numbers.find((number)=>number%2===0)){
//   console.log(true);
// }else{
//   console.log(false);
// }

console.log(numbers.some((number)=>number%2===0));

// some method will take callback function which returns boolean result
// and if any one condition gets true some function will return true
// and if it does not find any values true it will result false.

const products = [
  {productId: 1, product: "mobile", price: 20000},
  {productId: 2, product: "tv", price: 25000},
  {productId: 3, product: "AC", price: 35000},
  {productId: 4, product: "Mackbook", price: 250000},
]

console.log(products.some((product)=>product.price > 100000));
