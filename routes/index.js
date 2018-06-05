var express = require('express');
var router = express.Router();
var fs = require("fs")

var json_data = {}

/* GET file content*/
var readfile_data = fs.readFile("/data/test_conf", 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}
	else{
		json_data = JSON.parse(data);
		console.log("username========"+json_data.user_name)
		return data
	}
})

var result_data = JSON.parse(readfile_data)
console.log("result_data username========"+result_data.user_name)

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { user_name: result_data.user_name, 'password': json_data.password })
});

module.exports = router;
