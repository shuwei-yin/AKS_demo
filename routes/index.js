var express = require('express');
var router = express.Router();
var fs = require("fs")

var json_data = {}

/* GET file content*/
fs.readFileSync("/data/test_conf", 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}
	else{
		json_data = JSON.parse(data);
	}

})

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { user_name: json_data.user_name, 'password': json_data.password })
});

module.exports = router;
