// Primitive VS Reference Data Type

// Primitive type.

  let num1 = 6;
  let num2 = num1;
  console.log("num1",num1);
  console.log("num2",num2);
  num1++;
  console.log("after incrementing num1");
  console.log("num1",num1);
  console.log("num2",num2);

// Reference Data Type.

  let array1 = ["item1","item2"];
  let array2 = array1;
  console.log("array1",array1);
  console.log("array2",array2);
  array1.push("item3");
  console.log("after pushing in array1");
  console.log("array1",array1);
  console.log("array2",array2);

// this all happens because primitive type gets store in stack
// and refrence type gets store in heap and its address is store in stack as pointer
