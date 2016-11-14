var blueprint = require ('@onehilltech/blueprint')
  , util      = require ('util')
  ;

function UserDashboardController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (UserDashboardController);

UserDashboardController.prototype.logout = function () {
  var self = this;

  return function (req, res) {
    return res.render ('login.pug', {message: "You have successfully logged out."});
  };
};

module.exports = exports = UserDashboardController;
