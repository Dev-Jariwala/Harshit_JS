// Spread Operator.

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// without spread Operator.
  // const newArray = [array1, array2];
// With Spread Operator.
  const newArray = [...array1, ...array2, 89, 69];
  // const newArray = [..."abcdefghijklmnopqrstuvxyz"];
  // const newArray = [..."1234567890"];
  // const newArray = [...1234567890]; // Uncaught TypeError : this is not iterable
  console.log(newArray);

// spread operator in objects.

  // const obj1 = {
  //   key1: "value1",
  //   key2: "value2",
  //   key1: "value69"
  // }
  // console.log(obj1); //as you can see latest value stored in key will be shown .

  const obj1 = {
    key1: "value1",
    key2: "value2"
  }
  const obj2 = {
    key3: "value3",
    key4: "value4",
    key1: "value69"
  }
  // const newObj = {...obj1, ...obj2}; //as you can see key1 value is value69 as we have obj2 after obj1.
  // const newObj = {...obj2, ...obj1}; as you can see kwy1 vlaue is value3 as we have obj1 after obj2.
  // const newObj = {key0: "vlaue0", ...obj1, key59: "value59", ...obj2, key79: "vlaue79"};
  // const newObj = {..."abc"};
  // const newObj = {..."123"};
  const newObj = {...["item1", "item2"]};
  console.log(newObj);
