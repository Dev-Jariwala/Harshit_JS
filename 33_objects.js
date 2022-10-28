// Objects -- object is a reference type.
// arrays are good but not sufficient
// for real world data

// Objects store key value pairs
// Objects dont have index

// how to create object
  // const objectName = {key: value, key2: value}; keys are also called as property of object
  // const person = {name:"Dev", age:20};
  const person = {
    name:"Dev",
    age:20,
    hobbies: ["gym", "valorant", "coding", "reading"]
  };

  console.log(person);
  console.log(typeof person);

// how to access data from objects.
  // using Dot Notation.
  console.log(person.name);
  // using Square brackets Notation.
  console.log(person["age"]);
  console.log(person.hobbies);

// how to add key value pair to Objects
  // using Square brackets Notation.
    person["gender"] = "Male";
    console.log(person);
    console.log(person["gender"]);
  // using Dot Notation.
    person.Country = "India";
    console.log(person);
    console.log(person.Country);
