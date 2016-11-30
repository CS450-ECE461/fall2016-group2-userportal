var blueprint = require ('@onehilltech/blueprint'),
    util      = require ('util');

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

        messages.push(['Rob','Welcome','Welcome to Google.','10 hours']);
        messages.push(['Tim','You are fired.','Bob we are sorry to say, but we have to let you go.','12 hours']);

        return res.render('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'false', 'messages': messages });
    };
};


///
/// This supplies the user with the message generation view (compose)
///
UserStrategyController.prototype.compose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'true', 'contactsList': 'false'});
    };
};

UserStrategyController.prototype.composeClose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'false'});
    };
};


///
/// This supplies the user with the contacts view
///
UserStrategyController.prototype.contacts = function () {
    return function (req, res) {
        var contact = ['Name','Company','Business Title'];
        var contacts = [];
        contacts.push(contact);

        contacts.push(['Rob','Google','Software Engineer']);
        contacts.push(['Tim','Amazon','Software Analyst']);

        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'true', 'contacts': contacts });
    };
};

UserStrategyController.prototype.contactsClose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'mainObj': 'notifications', 'composeMessage': 'false', 'contactsList': 'false'});
    };
};


module.exports = exports = UserStrategyController;