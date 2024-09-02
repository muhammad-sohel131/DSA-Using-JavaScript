
/**
 * Using Normal Procedure
 */

// let num = 22100122; // this is palindrome number
let num = 221002173; // this is not palindrome number
let reversedNumber = 0;
let temp = num;

while(temp > 0){
    let reminder = temp % 10;
    reversedNumber = reversedNumber * 10 + reminder;
    temp = Math.floor(temp / 10);
}

if(reversedNumber === num) console.log("This is Palindrome");
else console.log("This is not palindrome");

/**
 * Using Builtin Method
 */

// let num = 22122;
// let temp = num;

// let isPalindrome = num.toString().endsWith(num.toString().split('').reverse().join(''));

// console.log(isPalindrome)

