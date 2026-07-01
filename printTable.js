// print the multiplicaton table of any number //

const prompt = require("prompt-sync")();

let num = prompt("Enter any number " );

for(let i = 1; i<= 10; i++){
console.log(num * i);
}