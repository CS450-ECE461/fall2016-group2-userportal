/**
 * Created by terrabyte on 11/5/16.
 */
module.exports = exports = {
    '/mock/loginTest' : {
        get  : {view   : 'mock.pug'},
        post : {action : 'MockController@loginTest'}
    },


    '/mock/messageTest' : {
        get  : {view   : 'mock.pug'},
        post : {action : 'MockController@messageTest'}
    }
};