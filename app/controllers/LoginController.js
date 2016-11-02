var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;

function LoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.echoName = function () {
  var self = this;

  return function (req, res) {

    if(req.body.name.length < 5){
      return res.render ('login.pug', {message: "Username not valid"});
    }

    if(req.body.password.length < 5){
      return res.render ('login.pug', {message: "Password not valid"});
    }

    return res.render ('loggedin.pug', {name: req.body.name});
  };
};

module.exports = exports = LoginController;
