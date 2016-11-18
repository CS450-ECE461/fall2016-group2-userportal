var passport = require ('passport')


module.exports = exports = {
    '/dashboard' : {
        get  : { view   : 'dashboard.pug'},
        post : { action : 'UserStrategyController@dashboardInit' }
    },


    '/dashboard/home' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@home' }
    },


    '/dashboard/logout' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@logout' }
    },


    '/dashboard/notificationsTab' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@notificationsTab' }
    },


    '/dashboard/composeTab' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeTab' }
    },


    '/dashboard/contactsTab' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contactsTab' }
    }

};

