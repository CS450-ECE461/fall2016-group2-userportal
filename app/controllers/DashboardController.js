var blueprint = require ('@onehilltech/blueprint'),
    request   = require('superagent')
    ;

function DashboardController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (DashboardController);


///
/// This method checks the user session before proceeding
///
DashboardController.prototype.init = function () {
    return function (req, res) {
        return res.render ('dashboard.pug');
    };
};

///
/// This supplies the user with the messages view as a main tab
///
DashboardController.prototype.messages = function () {
    return function (req, res) {
        var token = req.user;

        var route = '/v1/messages';
        if (process.env.NODE_ENV == 'test') {
            route = '/mock/messageTest';
        }

        request
          .get (blueprint.app.configs.apiserver.baseuri + route)
          .set ('Authorization', 'bearer ' + token)
          .end (function (err, resp) {
            if(err) {
              if (err.status == '400') {
                //return done (null,false,{message: "Error Sending Message"});
              }
            } else {
              var messages = resp.body.messages;
              res.json (messages);
            }
          });
    };
};

//
// This supplies the user with the message sending view
//
DashboardController.prototype.send = function () {
    return function (req, res) {

        var token = req.user;
        var contact = 'danieljpeck93@gmail.com';
        var dt = Date.now()+10000;
        var title = "Demo Day!!!";
        var message = "Hey that was a pretty cool demo, right??";

        var messageData = {
            message: {
                sender_email: 'danieljpeck93@gmail.com',
                receiver_email: contact,
                received: false,
                viewed: false,
                //expireAt: dt,
                title: title,
                content: message
            }
        };

        var route = '/v1/messages';
        if (process.env.NODE_ENV == 'test') {
          route = '/mock/messageTest';
        }

        request
            .post(blueprint.app.configs.apiserver.baseuri + route)
            .set('Authorization', 'bearer ' + token)
            .send(messageData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        //return done (null,false,{message: "Error Sending Message"});
                    }
                } else {
                  var message = resp.body;

                  return res.json (message);
                }
            });
    };
};


///
/// This supplies the user with the contacts view as a pop up
///
DashboardController.prototype.contacts = function () {
    return function (req, res) {
        var token = req.user;

        var route = '/v1/organizations/users';
        if (process.env.NODE_ENV == 'test') {
            route = '/mock/contactTest';
        }

        request
         .get (blueprint.app.configs.apiserver.baseuri + route)
         .set ('Authorization', 'bearer ' + token)
         .end (function (err, resp) {
             if (err) {
                 if (err.status == '400') {
                   console.log('we got a 400');
                   //return done (null,false,{message: "Error Sending Message"});
                 }
             } else {
               var contacts = resp.body;
               return res.json (contacts);
            }
         });
    };
};

DashboardController.prototype.userInfo = function () {
    return function (req, res) {
        var token = req.user;
        var route = '/v1/users/profile';
        if (process.env.NODE_ENV == 'test') {
            route = '/mock/userInfo';
        }

        request
         .get (blueprint.app.configs.apiserver.baseuri + route)
         .set ('Authorization', 'bearer ' + token)
         .end (function (err, resp) {
             if (err) {
                 if (err.status == '400') {
                   console.log('we got a 400');
                   //return done (null,false,{message: "Error Sending Message"});
                 }
                 else
					console.log(err.status);
             } else {
               var userInfo = resp.body;

               return res.json (userInfo);
            }
         });
    };
};

module.exports = exports = DashboardController;
