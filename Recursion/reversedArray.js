/**
 * Using Simple For Loop, two pointer concept
 */

// const array = [1,2,3,4,5,6,7];

// let j = array.length - 1;
// for(let i = 0; i < j; i++){
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//     j--;
// }

// console.log(array)

/**
 * Used Recursion two pointer
 */

// const array = [1,2,3,4,5,6,7,8];

// function reverseArray(array,a,b){
//     if(a >= b) return;
//     let temp = array[a];
//     array[a] = array[b];
//     array[b] = temp;
//     reverseArray(array,a+1,b-1);
// }

// reverseArray(array,0,array.length-1);

// console.log(array)

/**
 * Used Recursion with single pointer
 */

const array = [1,2,3,4,5,6,7,8];

function reverseArray(array,a){
    if(a >= array.length / 2) return;
    let temp = array[a];
    array[a] = array[array.length - 1 - a];
    array[array.length - 1 - a] = temp;
    reverseArray(array,a+1);
}

reverseArray(array,0);

console.log(array)