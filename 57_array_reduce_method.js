// Reduce Method in Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const sum = numbers.reduce((accumulator, currentValue)=>{
  return accumulator + currentValue;
});
// This is how reduce works

// accumulator + currentValue = sum
//    1        +      2       = 3
//    3        +      3       = 6
//    6        +      4       = 10
//    10       +      5       = 15
//    15       +      6       = 21
//    21       +      7       = 28
//    28       +      8       = 36
//    36       +      9       = 45
//    45       +      0       = 45
console.log(sum);

const userCart = [
  {productId: 1, product: "mobile", price: 20000},
  {productId: 2, product: "tv", price: 25000},
  {productId: 3, product: "AC", price: 35000},
  {productId: 4, product: "Washing Machine", price: 22000},
]
const totalCost = userCart.reduce((totalprice, currentProduct)=>{
  return totalprice + currentProduct.price;
},0);
console.log(totalCost);
