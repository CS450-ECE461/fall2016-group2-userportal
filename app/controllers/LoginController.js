var blueprint = require ('@onehilltech/blueprint')
    request =  require ('superagent')
;

function LoginController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

///
/// Blueprint authenticated, lets login!
///
LoginController.prototype.login = function () {
    return function (req, res) {
        return res.redirect('/dashboard');
    };
};


///
/// Logs the user from passport and the admin server
///
UserStrategyController.prototype.logout = function () {
    return function (req, res) {
        req.logout ();
        return res.redirect ('/login');
    };
};


module.exports = exports = LoginController;
