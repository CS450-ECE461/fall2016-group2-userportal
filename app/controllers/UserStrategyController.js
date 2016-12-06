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
          .post(blueprint.app.configs.apiserver.baseuri + route)
          .set('Authorization', 'bearer ' + token)
          .end(function (err, resp) {
            if(err) {
              if (err.status == '400') {
                return done (null,false,{message: "Error Sending Message"});
              }
            } else {
              var messages = resp.body.messages;
              res.render('dashboard.pug', { 'mainObj': 'notifications', 'messages': messages });
            }
          });
    };
};


///
/// This supplies the user with the message generation view (compose) as a pop up
///
UserStrategyController.prototype.compose = function () {
    return function (req, res) {
        var message = ['Sender','Title','Message', 'Time Remaining'];
        var messages = [];
        messages.push(message);

        messages.push(['Rob','Welcome','Welcome to Google.','10 hours']);
        messages.push(['Tim','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'true',
            'contactsList': 'false', 'messages': messages});
    };
};


//
// This closes the message generation view (compose) pop up
//
UserStrategyController.prototype.composeClose = function () {
    return function (req, res) {
        var message = ['Sender','Title','Message', 'Time Remaining'];
        var messages = [];
        messages.push(message);

        messages.push(['Rob','Welcome','Welcome to Google.','10 hours']);
        messages.push(['Tim','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
            'contactsList': 'false', 'messages': messages});
    };
};


//
// This supplies the user with the message sending view
//
UserStrategyController.prototype.composeSend = function () {
    return function (req, res) {

        var token = req.user;
        var contact = "test@iupui.edu";
        var dt = Date.now()+10000;
        var title = "Test Title";
        var message = "Hi there how is your day, what are you up to?";

        var messageData = {
            message: {
                sender_email: 'sender@testmail.com',
                receiver_email: contact,
                received: false,
                viewed: false,
                expireAt: dt,
                title: title,
                content: message
            }
        };


        var msgResponse;

        //'35.163.81.202:5000/v1/messages'
        //'localhost:5002/mock/messageTest'
        request
            .post('localhost:5000/v1/messages')
            .set('Authorization', 'bearer'+token)
            .send(messageData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        console.log('we got a 400');
                        //return done (null,false,{message: "Error Sending Message"});
                    }

                    return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
                        'contactsList': 'false'});

                } else {
                    msgResponse = resp.body.msgResp;
                    console.log(msgResponse);
                }
            });




        //close the message and contacts list
        return res.render ('dashboard.pug', {  'composeMessage': 'false',
            'contactsList': 'false'});


    };
};


///
/// This supplies the user with the contacts view as a pop up
///
UserStrategyController.prototype.contacts = function () {
    return function (req, res) {

        //'35.163.81.202:5000/v1/messages'
        //'localhost:5002/mock/messageTest'
        /*
         request
         .post('35.163.81.202:5000/v1/messages')
         .set('Authorization', 'bearer'+token)
         .end(function (err, resp) {
         if(err) {
         if (err.status == '400') {
         console.log('we got a 400');
         //return done (null,false,{message: "Error Sending Message"});
         }

         console.log(err);

         } else {
         msgResponse = resp.body.msgResp;
         console.log(msgResponse);
         }
         });
         */

        //before
        var contact = ['Name', 'Contact Address', 'Company', 'Business Title'];
        var contacts = [];
        contacts.push(contact);

        contacts.push(['Rob', 'rob@iupui.edu', 'Google', 'Software Engineer']);
        contacts.push(['Tim', 'tim@iupui.edu', 'Amazon', 'Software Analyst']);

        var message = ['Sender','Title','Message', 'Time Remaining'];
        var messages = [];
        messages.push(message);

        messages.push(['Rob','Welcome','Welcome to Google.','10 hours']);
        messages.push(['Tim','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false',
            'contactsList': 'true', 'messages': messages, 'contacts': contacts });
    };
};


//
// This closes the contacts view pop up
//
UserStrategyController.prototype.contactsClose = function () {
    return function (req, res) {
        var message = ['Sender','Title','Message', 'Time Remaining'];
        var messages = [];
        messages.push(message);

        messages.push(['Rob','Welcome','Welcome to Google.','10 hours']);
        messages.push(['Tim','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'false', 'messages': messages});
    };
};

module.exports = exports = UserStrategyController;