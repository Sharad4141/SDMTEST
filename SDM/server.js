var express = require ('express');
var app = express();
var path = require ('path');

app.use(experss.static(path.join(__dirname,public)));

app.get('/', function(req,resp){
    resp.sendFile(path.join(__dirname+'/index.html'));
})
app.listen(1000);