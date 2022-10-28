// difference between dot and brackets in objects
const key = "email";
const person = {
  name: "Dev",
  age: 20,
  "person hobbies": ["gym", "reading", "coding", "valorant"]
}
person[key] = "devjariwala.j@gmail.com";
console.log(person);
console.log(person["person hobbies"]);
