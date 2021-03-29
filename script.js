'use strict';

//Lesson 21. Массивы и псевдомассивы


const arr = [2, 3, 10, 18, 1];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length);
console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

