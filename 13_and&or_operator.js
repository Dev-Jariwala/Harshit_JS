// and & or operator

// to check if driver is 18+ and have driving liecense

let age=18;
let liecense=true;

if(age>=18 && liecense){
  console.log("driver is eligible to drive car");
}else{
  console.log("driver is not eligible to drive car");
}

// if person has any one identity card from adhar card or pan card he is allowed in show.

let adharCard = false;
let panCard = true;

if(adharCard || panCard){
  console.log("Allowed to show");
}else{
  console.log("Sorry Boss");
}
