// nested if else.
// means ifelse inside if or else


let winNum = 19;

let yourNum=Number(prompt("Gusse a number"));

if(yourNum === 19){
  console.log("Victory, You gussed exect winning number!");
}else {
  if (yourNum<19) {
    console.log("Too Low");
  }else{
    console.log("Too High");
  }
}
