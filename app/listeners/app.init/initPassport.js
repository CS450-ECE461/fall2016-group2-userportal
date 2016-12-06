var passport      = require ('passport')
  , LocalStrategy = require ('passport-local').Strategy
  , request       = require ('superagent')
  ;

function initPassport (app) {

    var opts = {name: 'username', password:'password', session: true};

    function authorize (username, password, done) {
        var token;

        var userData = {
            email: username,
            password: password
        };

        var route = '/login';
        if (process.env.NODE_ENV == 'test') {
          route = '/mock/loginTest';
        }

        request
            .post(app.configs.apiserver.baseuri + route)
            .send(userData)
            .end(function (err, resp) {
              if (err) {
                if (err.status == '400') {
                  return done(null, false, {message: 'Password is incorrect.'});
                }

                return done(err, false);

              } else {
                token = resp.body.token;
              }

              return done(null, token);
            });
    }

    passport.use (new LocalStrategy (opts, authorize));
}

module.exports = exports = initPassport;
