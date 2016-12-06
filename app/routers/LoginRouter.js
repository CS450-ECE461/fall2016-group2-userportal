var passport = require ('passport')
    , isLoggedIn = require ('../middleware/isLoggedIn')
    ;

module.exports = exports = {
    '/login' : {
        get  : { view   : 'login.pug' },
        post : {
          before : [ passport.authenticate ('local', {failureRedirect: '/login'}) ],
          action : 'LoginController@login'
        }
    },

    '/logout' : {
        use: isLoggedIn,
        get  : { view   : 'login.pug' },
        post : {
            action : 'LoginController@logout'
        }
    }
};
