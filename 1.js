var a = 30; 
console.log("Value is: ", a);
a = "Hello"; 
console.log("After Reassigning: ", a);

let str = "Full Stack Development"; 
console.log("String: ", str);
str = true; 
console.log("After Reassigning: ", str);


const bool = false; 
console.log("Constant Value :", bool);
// bool = 100; // Error

console.log("Hoisted var:", hoistedVar); 
var hoistedVar = "Hoisted with var";

{
  let blockScoped = "Block Scoped";
  console.log("Inside block:", blockScoped);
}
// console.log("Outside block:", blockScoped); // Error: blockScoped is not defined
