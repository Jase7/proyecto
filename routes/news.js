var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res, next) {

	if (req.session.user) {

		res.render('news', {
			user: req.session.user
		});
	}	

	else if (req.cookies.user) {

		res.render('news', {
			user: req.cookies.user
		})
	}	

	else {
		res.redirect('/');
	}
  		
});

module.exports = router;