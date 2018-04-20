var express = require('express');
const api = express.Router();
const db = require('../db');
const Products = require('../db/models/Products')
const Users = require('../db/models/Users')
const Categories = require('../db/models/Categories')

api.get('/categories', (req, res, next)=>{
  Categories.getCategories(function (err, rows){
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
api.get('/subcategories', (req, res, next)=>{
  Categories.getSubcategories(function (err, rows){
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
api.get('/category', (req, res, next)=>{
  Products.getCategoryProducts(req.query.category, req.query.subcategory, function (err, rows){
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
  Users.addUserAction(req.body, function (err, count){
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
