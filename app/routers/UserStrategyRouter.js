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

    '/dashboard/notifications' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@notifications' }
    },

    '/dashboard/compose' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@compose' }
    },

    '/dashboard/compose/close' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeClose' }
    },

    '/dashboard/compose/send' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeSend' }
    },

    '/dashboard/contacts' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contacts' }
    },

    '/dashboard/contacts/close' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contactsClose'}
    }

};