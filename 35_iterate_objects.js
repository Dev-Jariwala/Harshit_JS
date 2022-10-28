// How to Iterate Objects

const person = {
  name: "Dev",
  age: 20,
  "person hobbies": ["gym", "valorant", "coding", "reading"]
}

// for in loop

  for(let key in person){
    console.log(`${key} : ${person[key]}`);
  }

// Objects.keys

  // console.log(Object.keys(person));
  for(let key of Object.keys(person)){
    console.log(`${key} : ${person[key]}`);
  }
