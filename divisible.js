// find the sum of numbers divisible  by 5 //


const prompt = require ("prompt-sync")();

let num = prompt("ENTER number: ");
let sum = 0;
for(let i = 0; i<= num; i++){
   
     if(i % 5 == 0){
         sum += i;
     }

}console.log(sum)