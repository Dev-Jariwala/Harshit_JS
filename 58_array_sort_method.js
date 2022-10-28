// Sort Method in Arrays

const numbers = [40, 100, 1, 5, 25, 10];
// var temp;
// for(let i = 1; i<numbers.length;i++){
//   // console.log(numbers[i]);
//   for(let j = 0; j<i; j++){
//     if(numbers[j]>numbers[i]){
//       temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;
//     }
//   }
// }

// numbers.sort();
// numbers.sort((a,b)=>a-b);
//
// console.log(numbers);

const products = [
  {productId: 1, product: "mobile", price: 20000},
  {productId: 2, product: "tv", price: 25000},
  {productId: 3, product: "AC", price: 35000},
  {productId: 4, product: "Washing Machine", price: 22000},
]
console.log(products);
// low to high
// products.sort((a,b)=>{
//   return a.price - b.price;
// });
// console.log(products);
// using this directly will change original array.
// so to secure original array
// we will store changes in clone of the original array

// As we have learned to clone array using array.slice(0) we will use it

// low to high
const lowToHigh = products.slice(0).sort((a,b)=>a.price-b.price);
console.log(lowToHigh);

// high to low.
const highTolow = products.slice(0).sort((a,b)=>b.price-a.price);
console.log(highTolow);
