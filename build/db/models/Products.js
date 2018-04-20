var db = require ('../../db')

var Products = {
  getCategoryProducts: function(category, subcategory, callback){
    return db.query(`SELECT * FROM products WHERE category=${category} AND subcategory=${subcategory}`, callback)
  }
}
module.exports= Products;
