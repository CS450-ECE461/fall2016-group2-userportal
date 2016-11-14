/**
 * Created by terrabyte on 11/14/16.
 */
var passport      = require ('passport')
    , LocalStrategy = require ('passport-local').Strategy
    ;

module.exports = initPassport;

function initPassport (app) {

    var opts = {name: 'username',password:'password', session: true};
    passport.use (new LocalStrategy (opts, authorize));

    function authorize (username, password, done) {
        var token;

        var userData = {
            "username" : username,
            "password" : password
        };



        request
            .post('35.163.81.202:5000/login')
            .send(userData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        return done (null,false,{message: "Password is incorrect."});
                    }

                    return done (err,false);

                }else {
                    token = resp.body.token;
                }
                return done (null,token);

            });






    }
}