// let num = 371; // it is armstrong = 3^6 + 7^3 + 1^3 = 371
let num = 35;  // it is not armstrong = 3^3 + 5^3 != 35
let temp = num;
let sum = 0;

while(temp > 0){
    sum += Math.pow(temp%10, 3);
    temp = Math.floor(temp / 10);
}

if(num == sum) console.log("It is Armstrong");
else console.log("It is not Armstrong");