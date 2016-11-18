var blueprint = require ('@onehilltech/blueprint')
  ;

function LoginController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.login = function () {
    return function (req, res) {
        return res.redirect('/userdashboard');
    };
};


module.exports = exports = LoginController;
