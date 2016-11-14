var passport = require ('passport')

function isLoggedIn (req,res,next) {
  if (req.isAuthenticated ())
    return next ();

  res.redirect ('/login');

}

module.exports = exports = {
  '/userdashboard' : {
    use: isLoggedIn,
    get  : { view   : 'userdashboard.pug'},
    post : { action : 'UserDashboardController@logout'}
  }
};