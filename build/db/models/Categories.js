var db = require ('../../db')

var Categories = {
    getCategories: function(callback){
        return db.query(`SELECT * FROM categories ORDER BY id`, callback)
    },
    getSubcategories: function(callback){
        return db.query(`SELECT * FROM subcategories ORDER BY id`, callback)
    }
}
module.exports= Categories;
