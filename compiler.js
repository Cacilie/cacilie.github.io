const fs = require("fs");
const pug = require('pug');

const compiledFunction = pug.compileFile('./templates/home.pug');

fs.writeFileSync("./build/index.html", compiledFunction());
