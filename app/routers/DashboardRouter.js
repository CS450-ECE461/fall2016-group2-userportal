var passport = require ('passport')
  , isLoggedIn = require ('../middleware/isLoggedIn')
  ;


module.exports = exports = {
    '/dashboard' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug'},
        post : { action : 'DashboardController@init' }
    },

    '/dashboard/messages' : {
        use: isLoggedIn,
        get: { action : 'DashboardController@messages' }
    },

    '/dashboard/compose/send' : {
        use: isLoggedIn,
        get  : { view   : 'dashboard.pug' },
        post : { action : 'DashboardController@send' }
    },

    '/dashboard/contacts' : {
        use: isLoggedIn,
        get: { action : 'DashboardController@contacts' }
    },
    
    '/dashboard/userInfo' : {
		use: isLoggedIn,
		get: {action : 'DashboardController@userInfo' }
	}
};
