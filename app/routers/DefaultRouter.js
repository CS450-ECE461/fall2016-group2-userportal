/**
 * Created by terrabyte on 11/5/16.
 */
module.exports = exports = {
    '/default' : {
        get  : { view   : 'default.pug' },
        post : { action : 'DefaultController@echoName'},
    }
};