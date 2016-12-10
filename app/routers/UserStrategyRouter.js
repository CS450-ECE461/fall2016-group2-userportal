var passport = require ('passport')
  , isLoggedIn = require ('../middleware/isLoggedIn')
  ;


module.exports = exports = {
    '/dashboard' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug'},
        post : { action : 'UserStrategyController@dashboardInit' }
    },


    '/dashboard/home' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@home' }
    },

    '/dashboard/messages' : {
        use: isLoggedIn,
        get: { action : 'UserStrategyController@messages' }
    },

    '/dashboard/compose/send' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@send' }
    },

    '/dashboard/contacts' : {
        use: isLoggedIn,
        get: { action : 'UserStrategyController@contacts' }
    }
};