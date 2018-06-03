var express = require('express');
var router = express.Router();
var fs = require("fs")

var fs_output_data = ""

/* GET file content*/
fs.readFile("./test_conf", 'utf-8', function(err, data){
	if (err) {
		return console.log(err);
	}
	else{
		fs_output_data = data;
	}

})

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { name: 'Li Shan', 'fs_output_data': fs_output_data })
});

module.exports = router;
