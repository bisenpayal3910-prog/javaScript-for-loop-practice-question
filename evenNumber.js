const prompt = require ("prompt-sync")();

for(let i = 1; i<=100; i++){
    if( i % 2 == 0){
       console.log("even number ", i)
    }else if(i% 2 != 0){
        console.log("odd number ", i)
    }

}