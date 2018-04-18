var db = require ('../../db')

var Products = {
  getCategoryProducts: function(category, callback){
    return db.query(`SELECT * FROM products WHERE category=${category} LIMIT 50`, callback)
  }
}
module.exports= Products;
