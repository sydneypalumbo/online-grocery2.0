var express = require('express');
var mySql = require('mysql');
var path = require('path');
var products = require('./api/products');

var app = express();

app.use(express.static('build'));

app.listen(80, function() {
    console.log("Howe's Grocery Frontend App is running at localhost: 80")
});

app.use(function(req, res, next) {
    res.locals.connection = mySql.createConnection({
        host: 'grocerydatabase.cfv9glgncba7.us-east-1.rds.amazonaws.com',
        user: 'howesgrocery',
        password: 'GuidingStars123',
        database: 'products'
    });
    res.locals.connection.connect();
    next();
});

app.use('/api/products', products)

//connection.end()