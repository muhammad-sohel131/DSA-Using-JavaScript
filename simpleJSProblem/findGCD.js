// let a = 9;
// let b = 24;

// let gcd = 1;
// for(let i =  1; i <= Math.min(a,b); i++){
//     if(a % i === 0 && b % i === 0) gcd = i;
// }

// console.log(`The GCD of ${a} and ${b} === ${gcd}`);
// console.log(`The LCD of ${a} and ${b} === ${a * b / gcd}`)


/**
 * Better approach
 */

let a = 9;
let b = 24;

let tempA = a;
let tempB = b;

while(a > 0 && b > 0){
    if(a > b) a %= b;
    else b %= a;
}


let gcd = a === 0 ? b : a;

console.log(`The GCD of ${tempA} and ${tempB} === ${gcd}`);
console.log(`The LCD of ${tempA} and ${tempB} === ${tempA * tempB / gcd}`)