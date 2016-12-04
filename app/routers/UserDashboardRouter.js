var passport = require ('passport')


module.exports = exports = {
    '/userdashboard' : {
        get  : { view   : 'userdashboard.pug'},
        post : { action : 'UserDashboardController@logout'},
        //use : isLoggedIn
    }
};

function isLoggedIn (req,res,next) {
    /*if (req.isAuthenticated ())
     return next ();
     res.redirect ('/login');*/
}
