var blueprint   = require ('@onehilltech/blueprint')
  ;

function MockController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (MockController);

MockController.prototype.loginTest = function () {
    return function (req, res) {
        res.status (200).json ({ token: 'abc' });
    };
};


MockController.prototype.messageTest = function () {
    return function (req, res) {
        res.status (200).json ({ msgResp: 'Message Sent!' });
    };
};



module.exports = exports = MockController;
