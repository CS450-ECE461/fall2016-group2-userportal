var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;

function LoggedInController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoggedInController);

LoggedInController.prototype.echoName = function () {
  var self = this;

  return function (req, res) {
    return res.render ('loggedin.pug', {name: req.body.name, password: req.body.password});
  };
};

module.exports = exports = LoggedInController;
