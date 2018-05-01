var db = require ('../index')

var Products = {
  getCategoryProducts: function(category, subcategory, offset, callback){
    return db.query(`SELECT * FROM products WHERE category=${category} AND subcategory=${subcategory} ORDER BY id LIMIT 48 OFFSET ${offset}`, callback)
  },
  searchProducts: function(search, callback){
    return db.query(`SELECT * FROM products WHERE name LIKE "%${search}%"`, callback)
  }
}
module.exports= Products;
