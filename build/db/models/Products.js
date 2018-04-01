var db = require ('../../db')

var Products = {
  getAllProducts: function(callback){
    return db.query("(SELECT * FROM products WHERE category=3 LIMIT 52) UNION (SELECT * FROM products WHERE category=4 LIMIT 52) UNION (SELECT * FROM products WHERE category=5 LIMIT 52) UNION (SELECT * FROM products WHERE category=6 LIMIT 52) UNION (SELECT * FROM products WHERE category=7 LIMIT 52) UNION (SELECT * FROM products WHERE category=8 LIMIT 52)",callback);
  },
  getProduce: function(callback){
    return ("select * from task where category=4 limit 50")
  }
}
module.exports= Products;
