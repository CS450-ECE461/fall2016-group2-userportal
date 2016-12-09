var blueprint = require ('@onehilltech/blueprint'),
    request   = require('superagent')
    ;

function UserStrategyController () {
    blueprint.BaseController.call (this);
}

blueprint.controller (UserStrategyController);


///
/// This method checks the user session before proceeding
///
UserStrategyController.prototype.dashboardInit = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', {message: 'Welcome to the dashboard!'});
    };
};


///
/// This supplies the user with the default view
///
UserStrategyController.prototype.home = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'list': 'Main view'});
    };
};


///
/// This supplies the user with the notifications view as a main tab
///
UserStrategyController.prototype.notifications = function () {
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
              var list = [];
              for (var i = 0; i < messages.length; i++) {
                  list[i] = {content: messages[i].content };
              }
              res.render('dashboard.pug', { 'mainObj': 'notifications', 'messages': list });
            }
          });
    };
};


///
/// This supplies the user with the message generation view (compose) as a pop up
///
UserStrategyController.prototype.compose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'true',
            'contactsList': 'false', 'messages': []});
    };
};


//
// This closes the message generation view (compose) pop up
//
UserStrategyController.prototype.composeClose = function () {
    return function (req, res) {

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
            'contactsList': 'false', 'messages': []});
    };
};


//
// This supplies the user with the message sending view
//
UserStrategyController.prototype.composeSend = function () {
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

                    return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
                        'contactsList': 'false'});

                } else {
                  var messages = resp.body;

                  return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', messages: messages,
                    'contactsList': 'false'});
                }
            });
    };
};


///
/// This supplies the user with the contacts view as a pop up
///
UserStrategyController.prototype.contacts = function () {
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

               console.log(contacts);

               return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
                 'contactsList': 'true', 'messages': [], 'contacts': contacts });
            }
         });
    };
};


//
// This closes the contacts view pop up
//
UserStrategyController.prototype.contactsClose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'false', 'messages': []});
    };
};

module.exports = exports = UserStrategyController;
