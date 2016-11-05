var blueprint = require ('@onehilltech/blueprint'),
    request   = require('superagent'),
    util      = require ('util')
  ;

function LoginController () {
  blueprint.BaseController.call (this);
}

blueprint.controller (LoginController);

LoginController.prototype.echoName = function () {
    var self = this;

    return function (req, res) {

        //preliminary checks
        if(req.body.name.length < 5){
            return res.render ('login.pug', {message: "Username not valid"});
        }

        if(req.body.password.length < 5){
            return res.render ('login.pug', {message: "Password not valid"});
        }


        var userData = {
            "user" : {
                "username"  : "djpeck",
                "password"  : "test",
                "email"     : "djpeck@iupui.edu",
                "job_title" : "Software Engineer"
            }
        }

        //api server requests
        request
            .post('localhost:5000/dev/users')
            .send(userData)
            //.set('Authorization', 'bearer ' + access_token)
            .end(function (err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log (res.token);
                    return res.render ('loggedin.pug', {});
                }
            });

        return res.render ('login.pug', {message: "Error logging in."});
    };
};

module.exports = exports = LoginController;




