/**
 * Created by terrabyte on 11/5/16.
 */
module.exports = exports = {
    '/mock' : {
        get  : {view   : 'mock.pug'},
        post : {action : 'MockController@mock'}
    },


    '/mock/messageTest' : {
        get  : {view   : 'mock.pug'},
        post : {action : 'MockController@messageTest'}
    }
};