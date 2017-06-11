var fs = require('fs');
var data = '123456798231354657987432134657987462132';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'utf8');
writerStream.end();

writerStream.on('finish', function() {
    console.log("write finish");
});
