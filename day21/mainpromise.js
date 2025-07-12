import fs from "fs/promises"
let a = await fs.readFile("dm.txt")
console.log(a.toString());
