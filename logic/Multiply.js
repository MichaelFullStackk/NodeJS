const fs = require('fs');
const path = require('path');

function multiply(name, arr) {
    const mul =  arr.reduce((acc, curr) => acc * curr, 1);
    fs.writeFileSync(path.join(name, `${path.parse(__filename).name}.txt`), `${path.parse(__filename).name} of ${arr} is ${mul}`, 'utf-8');
}
  
module.exports = multiply;