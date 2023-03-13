// const fs = require('fs')
// function createFile(name, arr){
//     // decode.txt
//     // fs.writeFileSync('decode.txt' , 'My name is decode' , 'utf-8')
//     let summ = 0;
//     for(let i of arr){
//         summ += i;
//     }
//     fs.writeFileSync(path.join('logic' ,`${name}.txt`) , `Sum of ${arr} is ${summ}` , 'utf-8')
// }
// module.exports = createFile

// const fs = require('fs')
// const path = require('path')

// function createFile(name, arr){
//     let summ = 0;
//     for(let i of arr){
//         summ += i;
//     }
//     fs.writeFileSync(path.join(__dirname, 'logic', `${name}.txt`), `Sum of ${arr} is ${summ}`, 'utf-8')
// }

// module.exports = createFile;


const fs = require('fs');
const path = require('path');

function sum(name, arr) {
  const summ = arr.reduce((acc, curr) => acc + curr, 0);

  fs.writeFileSync(path.join(name, `${path.parse(__filename).name}.txt`), `${path.parse(__filename).name} of ${arr} is ${summ}`, 'utf-8');
}

module.exports = sum;