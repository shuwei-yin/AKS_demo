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

    var parse_data = JSON.parse(data);
	var cur_date = new Date().toISOString()

	fs.readFile("/data/test_conf", 'utf-8', function(err, data){
		if (err) {
			return console.log(err);
		}
		
		console.log("username11========"+parse_data.user_name + "========date:"+ cur_date)
	})
	
	res.render('index', { user_name: parse_data.user_name, 'password': parse_data.password })
	
});


module.exports = router;
