// const { default: nodeTest } = require('node:test')
// const path = require('path')
// // const createFile = require('./logic/Sum')
// const sum = require('./logic/Sum')

// let array = [1, 2, 3, 4]

// console.log(sum(array));

// const sum = require('./logic/Sum');
// let array = [1, 2, 3, 4];

// console.log('Sum:', sum(array));


const sum = require('./logic/Sum');
const multiply = require('./logic/Multiply');
const minus = require('./logic/Minus');
const divide = require('./logic/Divide');
const maxNum = require('./logic/MaxNum');
const minNum = require('./logic/MinNum');
const arr = [1, 2, 3, 4];



sum(__dirname, arr);
multiply(__dirname, arr);
minus(__dirname, arr);
divide(__dirname, arr);
maxNum(__dirname, arr);
minNum(__dirname, arr);




// const sumResult = sum(arr);
// fs.writeFileSync(
//   path.join('logic', 'Sum.txt'),
//   `Sum of ${arr} is ${sumResult}`,
//   'utf-8'
// );