var db = require ('../index')

var Users = {
  getAllUsers: function(callback){
    return db.query("SELECT * FROM users limit 50",callback);
  },
  addUserAction: function(User, callback){
    return db.query("INSERT into users values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        ['default', User.sessionID, User.actionType, User.cartPrice, User.cartItemCount, User.cartTotalStarpoints,
          User.search, User.quantity, User.name, User.size, User.servingSize, User.servings, User.caloriesFromFat,
          User.calories, User.totalFat, User.saturatedFat, User.transFat, User.polyFat, User.monoFat, User.cholesterol,
          User.sodium, User.potassium, User.carbs, User.fiber, User.sugar, User.protein, User.vitamins, User.ingredients,
          User.allergens, User.price, User.category, User.subcategory, User.starpoints], callback)
  }
}
module.exports= Users;
