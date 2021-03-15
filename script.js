'use strict';

//Lesson 17. Методы и свойства строк и чисел

const str = 'teSt';


// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'some fruit';

console.log(fruit.indexOf('q'));


const logg = 'Hello world!';

// console.log(logg.slice(6, 12));

// console.log(logg.substring(12, 6));

console.log(logg.substr(6, 6));


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));