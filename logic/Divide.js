const fs = require('fs');
const path = require('path');

function divide(name, arr) {
    const div =  Math.max(...arr) / Math.min(...arr);
    fs.writeFileSync(path.join(name, `${path.parse(__filename).name}.txt`), `${path.parse(__filename).name} of ${arr} is ${div}`, 'utf-8');
}
  
module.exports = divide;