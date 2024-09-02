// let num = 221002173;

// let count = 1;
// while(num >= 10){
//     count++;
//     num /= 10;
// }

// console.log("There is " +  count + " digits in the number");

/****************************  using typecasting *********************/

let num = 221002173;
let count = num ? 0 : 1; 

while(num > 0){
    count++;
    num = parseInt(num / 10);
}

console.log(`There is ${count} digit in the number`);


/********************        Using Logarithm function     *******************/

// let num = 221002173;

// console.log(`There is ${Math.floor(Math.log10(num)) + 1} digit in the number`);