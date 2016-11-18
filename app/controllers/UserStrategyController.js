var blueprint = require ('@onehilltech/blueprint')
    , util      = require ('util')
    ;

function UserStrategyController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (UserStrategyController);

UserStrategyController.prototype.logout = function () {
    return function (req, res) {
        req.logout ();
        return res.redirect ('/login');
    };
};

module.exports = exports = UserStrategyController;