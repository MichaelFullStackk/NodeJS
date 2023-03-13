const fs = require('fs');
const path = require('path');

function minNum(name, arr) {
    const min =  Math.min(...arr);
    fs.writeFileSync(path.join(name, `${path.parse(__filename).name}.txt`), `${path.parse(__filename).name} of ${arr} is ${min}`, 'utf-8');
}
  
module.exports = minNum;