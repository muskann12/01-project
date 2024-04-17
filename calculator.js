"use strict";
// making calculator in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = prompt("prompt-sync")();
var n1 = parseInt(prompt("enter your first number value:"));
var n2 = parseInt(prompt("enter your second number value:"));
var operator = (prompt("enter operator (+, -, *, %):"));
if (operator = "+") {
    console.log("the answer of ".concat(n1).concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
if (operator = "-") {
    console.log("the answer of ".concat(n1).concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
if (operator = "*") {
    console.log("the answer of ".concat(n1).concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
if (operator = "%") {
    console.log("the answer of ".concat(n1).concat(operator, " ").concat(n2, " = ").concat(n1 % n2));
}
else {
    console.log("please select correct operator");
}
