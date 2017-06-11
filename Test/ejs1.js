var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('page1.html');
});
app.listen(8081);