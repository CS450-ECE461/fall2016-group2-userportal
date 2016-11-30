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


    '/dashboard/notifications' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@notifications' }
    },


    '/dashboard/compose' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@compose' }
    },


    '/dashboard/contacts' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contacts' }
    },


    '/dashboard/compose/close' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeClose' }
    },

    '/dashboard/contacts/close' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contactsClose'}
    }

};

