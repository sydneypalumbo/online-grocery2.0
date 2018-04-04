var db = require ('../../db')

var Users = {
  getAllUsers: function(callback){
    return db.query("SELECT * FROM users limit 50",callback);
  },
  addUser: function(User, callback){
    console.log(User.sessionID)
    return db.query("INSERT into users values(?,?,?,?,?,?)", ['default', User.sessionID, null, null, null, null], callback)
  },
  updateUserClicks: function(User, callback){
    return db.query("UPDATE users set clicked=? where sessionID=?", [User.clicked, User.sessionID], callback)
  },
  updateUserAddToCart: function(User, callback){
    return db.query("UPDATE users set addedToCart=? where sessionID=?", [User.addedToCart, User.sessionID], callback)
  },
  updateUserDeletedFromCart: function(User, callback){
    return db.query("UPDATE users set deletedFromCart=? where sessionID=?", [User.deletedFromCart, User.sessionID], callback)
  },
  updateUserCheckout: function(User, callback){
    return db.query("UPDATE users set checkout=? where sessionID=?", [User.checkout, User.sessionID], callback)
  }
}
module.exports= Users;
