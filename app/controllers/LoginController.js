var blueprint = require ('@onehilltech/blueprint')
    request =  require ('superagent')
;

function LoginController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

///
/// We are good to go, blueprint let us go to the dashboard!
///
LoginController.prototype.login = function () {
    return function (req, res) {
        return res.redirect('/dashboard');
    };
};


///
/// Logs the user from passport and the admin server
///
LoginController.prototype.logout = function () {
    return function (req, res) {
        req.logout ();
        return res.redirect ('/login');
    };
};

module.exports = exports = LoginController;
