let JSON5 = require("json5")
let fs = require("fs");
let content = fs.readFileSync("./one.json5")
let d = JSON5.parse(content)
let format_content = JSON5.stringify(d, null, 4);
console.log(format_content)
