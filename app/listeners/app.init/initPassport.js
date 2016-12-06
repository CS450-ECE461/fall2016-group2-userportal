var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  , request       = require ('superagent')
  ;

function initPassport (app) {

    var opts = {name: 'username',password:'password', session: true};

    function authorize (username, password, done) {
        var token;

        /*
        var userData = {
            "username" : username,
            "password" : password
        };
        */


        var userData = {
            "username" : "test@test.com",
            "password" : "password"
        };

        //needs to hit
        //localhost:5002/mock/loginTest
        //http://35.165.94.204:5000/login

        request
            .post('35.165.94.204:5000/login')
            .send(userData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        console.log('uh oh we got a 400 for login');
                        return done (null,false,{message: "Password is incorrect."});
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
