// booleans and comparison Operators

// boolean data types stores one out of two values true or false;

// Comparison operators > , < , >= , <= , == , === , != , !== .
  let num1 = 7;
  let num2 = 3;
  console.log(num1>num2); // true;
  console.log(num1<num2); //false;

  console.log(num1>=7); //true if num1 is grater than or equal to 7.
  console.log(num1<=7); //true if num1 is lower than or equal to 7.


//                             == VS ===

  let num3 = "7";
  console.log(num1==num3); //true only if num3 is equal to num1 else false.

  console.log(num3,typeof num3);
  console.log(num1,typeof num1);
  // but as we can see num3 is string and num1 is number still it shows true.
  // as because == sign only check value inside variable not data type
  // thats why its showing true even if num1 and num3 are not same as data type wise.

  // so if we want true only when value as well as data type both are same
  // then we should use === comparison operator

  console.log(num1===num3); //false as value is same but data type is not same.

  let num4 = 7;
  console.log(num1===num4); // true as value as well as data type both are same.

//                               != VS !===

  console.log(num1!=num2); //true because num1 is not equal to num2.
  console.log(num1!=num3); //false as value of num1 and num3 are same.

  // here != comparison operator also checks only value not datatype
  // for that reason only even if num1 and num3 are not same as datatype wise.
  console.log(num1!==num3); //true because value is same but datatypes of num1 and num3 are not same.

  console.log(num1!==num4); //false becasuse value and datatype both are same/
