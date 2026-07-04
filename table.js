// print multiplication table of any number //


const prompt = require("prompt-sync")();
let num = prompt("ENTER number: ");

for(let i = 1; i<=10; i++){

    console.log(`${num} x ${i} = ${num * i}`);

}