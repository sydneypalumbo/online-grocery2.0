var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.locals.connection.query(`SELECT * FROM products LIMIT 100`, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "products": results}));
    });
});

module.exports = router