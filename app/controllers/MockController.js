var blueprint   = require ('@onehilltech/blueprint')
  ;

function MockController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (MockController);

MockController.prototype.mock = function () {
    return function (req, res) {
        console.log('we hit the mock router');
        res.status (200).json ({ token: 'abc' });
    };
};


module.exports = exports = MockController;
