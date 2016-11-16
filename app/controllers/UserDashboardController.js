var blueprint = require ('@onehilltech/blueprint')
    , util      = require ('util')
    ;

function UserDashboardController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (UserDashboardController);

UserDashboardController.prototype.logout = function () {
  return function (req, res) {
    req.logout ();
    return res.redirect ('/login');
  };
};

module.exports = exports = UserDashboardController;