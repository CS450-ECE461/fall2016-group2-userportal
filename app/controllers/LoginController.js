var blueprint = require ('@onehilltech/blueprint'),
    request   = require('superagent'),
    util      = require ('util')
  ;

function LoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.echoName = function () {
  var self = this;

  return function (req, res) {

    var userData = {
      username: req.body.username,
      password: req.body.password
    }

    //preliminary checks before sending to the api server
    if(userData.username.length < 5){
      return res.render ('login.pug', {message: "Username not valid"});
    }

    if(userData.password.length < 5){
      return res.render ('login.pug', {message: "Password not valid"});
    }

    //api server requests
    request
        .post('localhost:5000/login')
        .send(userData)
        //.set('Authorization', 'bearer ' + access_token)
        .end(function (err, res) {
          if (err) {
            console.log(err);
            return res.render ('login.pug', {message: "We ran into the following error: " + err.toString()});
          } else {
            console.log (res.token);
            return res.render ('loggedin.pug', {name: req.body.name});
          }
        });

  };
};

module.exports = exports = LoginController;
