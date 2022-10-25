// objects inside array.
// very useful in real world applications.

const users = [
  {userId: 1, firstName:'dev', gender: 'male'},
  {userId: 2, firstName:'nikhil', gender: 'male'},
  {userId: 3, firstName:'yug', gender: 'male'},
]
// console.log(users);
for(let user of users){
  console.log(user);
}
for(let user of users){
  console.log(user.userId);
}
for(let user of users){
  console.log(user['firstName']);
}
for(let user of users){
  console.log(user.gender);
}
