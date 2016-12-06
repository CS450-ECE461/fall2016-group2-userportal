var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  , request       = require ('superagent')
  , testRequest   = require ('supertest')
  ;

function initPassport (app) {

    var opts = {name: 'username',password:'password', session: true};

    function authorize (username, password, done) {
        var token;

        var userData = {
            email: username,
            password: password
        };

        if (process.env.NODE_ENV == 'test') {
          testRequest
              .post(app.configs.apiserver.baseuri + '/mock/loginTest')
              .send(userData)
              .end(function (err, resp) {
                if (err) {
                  if (err.status == '400') {
                    return done(null, false, {message: "Password is incorrect."});
                  }

                  return done(err, false);

                } else {
                  token = resp.body.token;
                }

                return done(null, token);
              });
        } else {
          request
              .post(app.configs.apiserver.baseuri + '/login')
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

    passport.use (new LocalStrategy (opts, authorize));
}

module.exports = exports = initPassport;
