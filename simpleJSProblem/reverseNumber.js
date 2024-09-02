
/**
 * General Procedure
 */

// let num = 221002173;
// let reverseNum = 0;

// while(num > 0){
//     let reminder = num % 10;
//     reverseNum = reverseNum * 10 + reminder;
//     num = Math.floor(num / 10);
// }

// console.log(`The reversed number is ${reverseNum}`);


/***********************
 * Using Builtin function 
 * *************************/

let num = 221002173;
num = num.toString();  // return a string
num = num.split('');   // return a array of characters
num.reverse();   // return the reverse array
num = num.join('');    // return string

let reversedNumber = parseInt(num);

console.log(`The reversed number is ${reversedNumber}`);

