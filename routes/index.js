var express = require('express');
var router = express.Router();
var fs = require("fs")


/* GET file content*/
	/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", 0);
    res.setHeader('Last-Modified', (new Date()).toUTCString());

    res.render('index')

	// fs.readFile("/data/test_conf", 'utf-8', function(err, data){
	// 	if (err) {
	// 		return console.log(err);
	// 	}
		
	// 	var parse_data = JSON.parse(data);

	// 	console.log("username========"+parse_data.user_name)

	// 	res.render('index', { 
	// 		'user_name': parse_data.user_name, 
	// 		'password': parse_data.password,
	// 		'email': parse_data.email
	// 	})
	// })

	
	
});


module.exports = router;
