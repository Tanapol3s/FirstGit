var http = require('http');
var myuser = {
    "name" : "test name",
    "job" : "test job",
    "age" : 80
 };

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'application/json'}); 
    res.end(JSON.stringify(myuser));
}).listen(8081, '127.0.0.1');