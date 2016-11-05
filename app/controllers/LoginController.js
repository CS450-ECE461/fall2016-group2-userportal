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

    //preliminary checks before sending to the api server
    if(req.body.username.length < 5){
      return res.render ('login.pug', {message: "Username not valid"});
    }

    if(req.body.password.length < 5){
       return res.render ('login.pug', {message: "Password not valid"});
    }




      var userData = {
          username: req.body.username,
          password: req.body.password
      }

      //api server requests
      request
          .post('localhost:5000/login')
          .send(userData)
          //.set('Authorization', 'bearer ' + access_token)
          .end(function (err, res) {
              if (err) {
                  console.log(err);
              } else {
                  console.log (res.token);
                  return res.render ('loggedin.pug', {name: req.body.name});
              }
          });


    return res.render ('login.pug', {message: "Error logging in." + req.body.user});
  };
};

module.exports = exports = LoginController;
