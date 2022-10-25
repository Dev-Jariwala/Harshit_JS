// How to concatenate array.

  let array1 = ["item1", "item2"];
  let array2 = ["item3", "item4"];
  // let array3 = array1.slice(0).concat(array2, "item5", "item6");
  // let array3 = [].concat(array1, array2, "item5", "item6");
  let array3 = [...array1, ...array2, "item5", "item6"];

  // let array3 = ["item0"].concat(array1.slice(0).concat(array2, "item5", "item6"));
  // let array3 = ["item"].concat("item0", array1, array2, "item5", "item6");
  // let array3 = ["item0",...array1, ...array2, "item5", "item6"];
  console.log(array3);
