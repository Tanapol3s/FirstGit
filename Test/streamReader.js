var fs = require('fs');
var readStream = fs.createReadStream('code.txt');
var data = '';

readStream.setEncoding('utf8');
readStream.on('data', function(txt) {
    data += txt;
});

readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function(err) {
    console.log(err.stack);
});