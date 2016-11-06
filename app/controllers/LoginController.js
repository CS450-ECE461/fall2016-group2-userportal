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

        //preliminary checks
        if(req.body.name.length < 5){
            return res.render ('login.pug', {message: "Username not valid"});
        }

        if(req.body.password.length < 3){
            return res.render ('login.pug', {message: "Password not valid"});
        }

        var token;


        var userData = {
            "username": "djpeck",
            "password": "test"
        }

        //api server requests
        request
            .post('localhost:5000/login')
            .send(userData)
            //.set('Authorization', 'bearer ' + access_token)
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
                    return res.render('login.pug', {message : "Error authenticating account."});
                }
            });

    };
};

module.exports = exports = LoginController;




