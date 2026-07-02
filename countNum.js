// count how many number are divisivble by 7 between 1 and 100 //

let count = 0; 

for(let i = 0; i<= 100; i++){
    if( i % 7 == 0){
        count++;
    }
}
  console.log(count)