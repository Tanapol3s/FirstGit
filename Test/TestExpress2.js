var express = require('express');
var routing = express();
routing.get('/', function(req, res) {
    res.send('<H1>Helloworld</H1>');
});
routing.get('/home', function(req, res) {
    res.send('<H1>Helloworld</H1>');
});
routing.use('/Test1/:name', function(req, res, next) {
    console.log('Request : ' + new Date(), req.url, req.method);
    var name = req.params.name;
    res.send('<H1>Test1  --- > '+ name +'</H1>');
});
routing.listen(8081);

