'use strict';

'57. Методы перебора массивов';


// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Volodimir'];

// const shortNames = names.filter(item => item.length < 5);

// console.log(shortNames);



// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);



// every/some

// const some = [4, 5, 6];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));



// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current, 3);

// console.log(result);


// const arr = ['apple', 'pear', 'plum'];

// const result = arr.reduce((sum, current) => `${sum}, ${current}`);

// console.log(result);




const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === "persone")
.map(item => item[0]);

console.log(newArr);