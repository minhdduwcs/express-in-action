const fs = require('fs');

const options = { encoding: 'utf-8' };
fs.readFile('./myfile.txt', options, (err, data) => {
  if (err) {
    console.error('Error reading file!');
    return;
  }
  console.log(data.match(/x/gi).length + " letter X's");
});

console.log('Hello, world!');
