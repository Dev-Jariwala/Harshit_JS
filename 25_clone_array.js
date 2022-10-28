
// how to clone array

  let array1 = ["item1", "item2"];

  // Here if we change array1 array2 will also change and we dont want it
  // we dont want array1===array2
    // let array2 = array1;
    // console.log(array1===array2);
    // console.log("array1",array1);
    // console.log("array2",array2);
    // array1.push("item3");
    // console.log("After pushing item3");
    // console.log("array1",array1);
    // console.log("array2",array2);

  // we can achive array1===array2 = false by 3 ways
  // no.1 (NOT good way becoz what if we have 1000s of elemet in array1)
    // This method is never used for cloning so this is not a method of cloning;
    // let array2 = ["item1", "item2"];
  // no.2 (good way of cloning)
    // let array2 = array1.slice(0);
  // no.3 (another good way of cloning)
    // let array2 = [].concat(array1);
  // no.4 Spread Operator(New way)
    let array2 = [...array1];
  console.log(array1===array2);
  console.log("array1",array1);
  console.log("array2",array2);
  array1.push("item3");
  console.log("After pushing item3");
  console.log("array1",array1);
  console.log("array2",array2);
