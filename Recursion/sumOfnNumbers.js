/**
 * Functional Way
 */

let n = 10;
function sum(n){
    if(n === 0) return 0;
    return n + sum(n-1);
}

console.log(`Sum of first N numbers ${sum(n)}`);


/**
 * Parameterized Way
 */

// function sum(n,result){
//     if(n < 1){
//         console.log(`The sum is ${result}`);
//         return;
//     }
//     sum(n-1,result+n);
// }

// sum(10,0);