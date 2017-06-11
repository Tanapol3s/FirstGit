//pipe = อ่านและเขียนข้อมูลไปพร้อม ๆ กัน

var fs = require('fs');
var reader = fs.createReadStream('code.txt');
var writer = fs.createWriteStream('file1.txt');

reader.pipe(writer);

writer.on('finish', function() {
    console.log("read write finish");
});
