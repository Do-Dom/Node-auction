exports.isLoggedIn = (req, res, next) => {
	if(req. isAuthenticated()) {
		next();
	} else {
		req.flash('loginError', 'need to login');
		res.redirect('/');
	}
};

exports.isNotLoggedIn = (req, res, next) => {
	if(!req.isAuthenticated()) {
		next();
	} else {
		res.redirect('/');
	}
};

