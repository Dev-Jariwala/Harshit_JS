// for loop.

// Here also we want to print number from 0 to 9.

for(var i = 0;i<=9;i++){
  console.log(i);
}
console.log(`Current value of i is : ${i}`); //if we have used let i=0 we wont be able to use it outside of for loop

// Finding sum of first N natural number.

let num=10;
let sum=0;
for(var i=0;i<=num;i++){
  sum = sum + i;
}
console.log(`Sum of first ${num} Natural Number is : ${sum}`);

// good way of doing this is (n*(n+1))/2 ;
