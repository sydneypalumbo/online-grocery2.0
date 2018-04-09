
var express = require('express');
const api = express.Router();
const db = require('../db');
const Products = require('../db/models/Products')
const Users = require('../db/models/Users')

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
api.get('/produce', (req, res, next)=>{
  Products.getProduce(function (err, rows){
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
api.get('/users', (req, res, next)=>{
  Users.getAllUsers(function (err, rows){
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
api.post('/user', (req, res, next)=>{
  Users.addUser(req.body, function (err, count){
    if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(req.body);
    }

  });
})
api.put('/add', (req, res, next)=>{
  Users.updateUserAddToCart(req.body, function (err, count){
    if(err)
    {
    res.json(err);
    }
    else
    {
    res.json(req.body);
    }

  });
})
module.exports = api
