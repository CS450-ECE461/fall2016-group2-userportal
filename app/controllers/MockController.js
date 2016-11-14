var blueprint = require ('@onehilltech/blueprint')
request   = require ('superagent')
    , util      = require ('util')
;

function MockController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (MockController);

MockController.prototype.apiServerLogin = function () {
    return function (req, res) {

        return res.redirect('/userdashboard');

    };
};


module.exports = exports = MockController;