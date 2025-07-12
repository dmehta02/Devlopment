const fs = require("fs")

console.log(fs);
fs.writeFile("dm2.css","color:red",()=>{console.log('hi')}
)
console.log('ho');
fs.appendFile("dm.html",'hi2',(err)=>{})