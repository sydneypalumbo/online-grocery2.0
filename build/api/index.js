
var express = require('express');
const api = express.Router();
const db = require('../db');
const Products = require('../db/models/Products')
api.get('/products', (req, res, next)=>{
  Products.getAllProducts(function (err, rows){
    if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(rows);
    }

  });
})
module.exports = api
