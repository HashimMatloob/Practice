const path = require('path')

console.log(__dirname)
console.log(__filename)

const filepath = path.join('Folder','students','names.txt')
console.log(filepath)
 
 console.log(path.parse(filepath))
 console.log(path.extname(filepath))
 console.log(path.dirname(filepath))
  console.log(path.basename(filepath))   
