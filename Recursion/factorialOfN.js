/**
 * Find Factorial of a Number in Functional Way
 */

// let number = 4;

// function fact(n){
//     if(n <= 1) return 1;
//     return n * fact(n-1);
// }

// console.log(`Factorial of ${number} is ${fact(number)}`);


/**
 * Parameterized Way
 */

let number = 4;
function fact(i,factorial){
    if(i <= 1){
        return factorial;
    }

    return fact(i-1, factorial * i);
}

const factorial = fact(4,1);
console.log(`The Factorial of ${number} is ${factorial}`);