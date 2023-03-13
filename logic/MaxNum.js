const fs = require('fs');
const path = require('path');

function maxNum(name, arr) {
    const max =  Math.max(...arr);
    fs.writeFileSync(path.join(name, `${path.parse(__filename).name}.txt`), `${path.parse(__filename).name} of ${arr} is ${max}`, 'utf-8');
}
  
module.exports = maxNum;