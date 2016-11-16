var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  , request       = require ('superagent')
  ;

function initPassport (app) {

    var opts = {name: 'username',password:'password', session: true};

    function authorize (username, password, done) {
        console.log ('test');
        var token;

        var userData = {
            "username" : username,
            "password" : password
        };

        request
            .post('localhost:5002/mock')
            .send(userData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        return done (null,false,{message: "Password is incorrect."});
                    } else if (err.status == '401') {
                        return done (null,false,{message: "User is not an admin."});
                    }

                    return done (err,false);

                } else {
                    token = resp.body.token;
                }
                return done (null,token);
            });
    }

    passport.use (new LocalStrategy (opts, authorize));
}

module.exports = exports = initPassport;
