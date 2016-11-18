var passport = require ('passport')


module.exports = exports = {
    '/dashboard' : {
        get  : { view   : 'dashboard.pug'},
        post : { action : 'UserStrategyController@logout'},
        //use : isLoggedIn
    }
};

function isLoggedIn (req,res,next) {
    /*if (req.isAuthenticated ())
     return next ();
     res.redirect ('/login');*/
}
