var fs = require('fs');
var path = require("path");
//
//Read file
var readMe = fs.readFileSync('./code.txt', 'utf8');
console.log(readMe);

//write file
fs.writeFileSync("./writeFile.txt", readMe);

//create directory
fs.mkdir('TestMkdir', function () {
    console.log("mkdir complete");
});


//delete file, dir
fs.unlinkSync("./writeFile.txt");
fs.rmdirSync("./TestMkdir");

