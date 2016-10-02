var express = require('express');
var app = express();
var port = 3000; 

app.get('/', function (req,res,next) {
    res.send("Our simple stripe app works!"); //Type in quirky message
})

app.listen(port, function () {
    console.log("Magic happens at port " + port);
})