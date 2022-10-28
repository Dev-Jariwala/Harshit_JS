// nested destructuring
const users = [
  {userId: 1, firstName:'dev', gender: 'male'},
  {userId: 2, firstName:'nikhil', gender: 'male'},
  {userId: 3, firstName:'yug', gender: 'male'},
]
// const [user1, user2, user3] = users;
// console.log(user1);
const [{firstName: user1firstName, userId: user1userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(user1userId);
console.log(user3gender);
