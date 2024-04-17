// making calculator in TypeScript

var prompt =  require("prompt-sync")();

let n1 = parseInt(prompt ("enter your first number value:"));
let n2 = parseInt(prompt("enter your second number value:"));

let operator =( prompt("enter operator (+, -, *, %):"));

if (operator = "+"){
    console.log(`the answer of ${n1}${operator} ${n2} = ${n1+n2}`);
  }
 
  if (operator = "-"){
    console.log(`the answer of ${n1}${operator} ${n2} = ${n1-n2}`);
  }
 
  if (operator = "*"){
    console.log(`the answer of ${n1}${operator} ${n2} = ${n1*n2}`);
  }
   
  if (operator = "%"){
    console.log(`the answer of ${n1}${operator} ${n2} = ${n1%n2}`);
  } else {
    console.log("please select correct operator")
  }
   
export {};