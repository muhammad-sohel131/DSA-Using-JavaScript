
// let number = 13;
// let count = 1;

// for(let i = 1; i <= Math.sqrt(number); i++){
//     if(number % i == 0) count++;
// }

// if(count == 2) console.log("This is Prime");   // A prime number has exactly 2 factors - 1 and itself
// else console.log("This is not Prime")

let number = 24;
let isPrime = true;

for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i == 0) isPrime = false;
}

if(isPrime) console.log("This is Prime"); 
else console.log("This is not Prime")