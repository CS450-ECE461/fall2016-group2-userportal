var blueprint = require ('@onehilltech/blueprint'),
    request   = require('superagent'),
    util      = require ('util')
  ;

function LoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.login = function () {
    var self = this;

    return function (req, res) {

        var token;


        var userData = {
            "username": req.body.name,
            "password": req.body.password
        }

        //api server requests
        request
            .post('localhost:5000/login')
            .send(userData)
            .end(function (err, resp) {
                if (err) {
                    console.log(err);
                } else {
                    token = resp.body.token;
                    console.log(token);
                }

                if(token){
                    return res.render('loggedin.pug', {});
                }
                else{
                    return res.render('login.pug', {message: "Error authenticating account."});
                }
            });
    };
};

module.exports = exports = LoginController;




