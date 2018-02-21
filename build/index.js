var express = require('express');

var app = express();

app.use(express.static('build'));

app.get('/*', function(req, res){
    res.sendFile("index.html", {root: __dirname});
});

app.listen(80, function() {
    console.log("Howe's Grocery Frontend App is running at localhost: 80")
});