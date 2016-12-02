var blueprint = require ('@onehilltech/blueprint'),
    util      = require ('util'),
    request   = require('superagent');

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
/// Logs the user from passport and the admin server
///
UserStrategyController.prototype.logout = function () {
    return function (req, res) {
        req.logout ();
        return res.redirect ('/login');
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
/// This supplies the user with the notification view
///
UserStrategyController.prototype.notifications = function () {
    return function (req, res) {
        var message = ['Sender','Title','Message', 'Time Remaining'];
        var messages = [];
        messages.push(message);

        messages.push(['rob@iupui.edu','Welcome','Welcome to Google.','10 hours']);
        messages.push(['bob@iupui.edu','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        res.render('dashboard.pug', { 'mainObj': 'notifications', 'messages': messages });
    };
};


///
/// This supplies the user with the message generation view (compose)
///
UserStrategyController.prototype.compose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'composeMessage': 'true'});
    };
};

UserStrategyController.prototype.composeClose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'composeMessage': 'false'});
    };
};

UserStrategyController.prototype.composeSend = function () {
    return function (req, res) {

        messageData = [];

        var title = "Test Title";
        var contacts = [];
        contacts.push("test@iupui.edu");
        var message = "Hi there how is your day, what are you up to?";
        var dt = Date.now();

        messageData.push(title);
        messageData.push(contacts);
        messageData.push(message);
        messageData.push(dt);

        var msgResponse;

        //'35.163.81.202:5000/v1/messages'
        request
            .post('localhost:5002/mock/messageTest')
            .send(messageData)
            .end(function (err, resp) {
                if(err) {
                    if (err.status == '400') {
                        return done (null,false,{message: "Error Sending Message"});
                    }

                    return done (err,false);

                } else {
                    msgResponse = resp.body.msgResp;
                    console.log(msgResponse);
                }
            });

        return res.render ('dashboard.pug', { 'composeMessage': 'false'});
    };
};


///
/// This supplies the user with the contacts view
///
UserStrategyController.prototype.contacts = function () {
    return function (req, res) {
        var contact = ['Name', 'Contact Address', 'Company', 'Business Title'];
        var contacts = [];
        contacts.push(contact);

        contacts.push(['Rob', 'rob@iupui.edu', 'Google', 'Software Engineer']);
        contacts.push(['Tim', 'tim@iupui.edu', 'Amazon', 'Software Analyst']);

        res.render('dashboard.pug', { 'mainObj': 'contacts', 'contacts': contacts });
    };
};


module.exports = exports = UserStrategyController;