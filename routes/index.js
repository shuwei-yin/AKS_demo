var express = require('express');
var router = express.Router();
var fs = require("fs")


/* GET file content*/
fs.readFile("/data/test_conf", 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}
	var parse_data = JSON.parse(data);
	console.log("username11========"+parse_data.user_name)
	/* GET home page. */
	router.get('/', function(req, res, next) {
		res.render('index', { user_name: parse_data.user_name, 'password': parse_data.password })
	});
})


module.exports = router;
