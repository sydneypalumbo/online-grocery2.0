var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.locals.connection.query(`(SELECT * FROM products WHERE category=3 LIMIT 52) UNION (SELECT * FROM products WHERE category=4 LIMIT 52) UNION (SELECT * FROM products WHERE category=5 LIMIT 52) UNION (SELECT * FROM products WHERE category=6 LIMIT 52) UNION (SELECT * FROM products WHERE category=7 LIMIT 52) UNION (SELECT * FROM products WHERE category=8 LIMIT 52)`, function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify({"status": 200, "error": null, "products": results}));
    });
});

module.exports = router