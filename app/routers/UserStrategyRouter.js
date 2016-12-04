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

    '/dashboard/notifications' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@notifications' }
    },

    '/dashboard/compose' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@compose' }
    },

    '/dashboard/compose/close' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeClose' }
    },

    '/dashboard/compose/send' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@composeSend' }
    },

    '/dashboard/contacts' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contacts' }
    },

    '/dashboard/contacts/close' : {
        get  : { view   : 'dashboard.pug' },
        post : { action : 'UserStrategyController@contactsClose'}
    }

};