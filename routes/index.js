var express = require('express');
var router = express.Router();
var fs = require("fs")

router.get('/*', function(req, res, next) {
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    next();
});

/* GET file content*/
fs.readFile("/data/test_conf", 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}
	var parse_data = JSON.parse(data);
	var cur_date = new Date().toISOString()
	console.log("username11========"+parse_data.user_name + "========date:"+ cur_date)
	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { user_name: parse_data.user_name, 'password': parse_data.password })
	});
})


module.exports = router;
