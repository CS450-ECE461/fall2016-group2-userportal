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
        return res.render ('dashboard.pug', { 'list': 'Notifications view'});
    };
};


///
/// This supplies the user with the message generation view (compose)
///
UserStrategyController.prototype.compose = function () {
    return function (req, res) {
        return res.render ('dashboard.pug', { 'list': 'Compose view'});
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



        res.render('dashboard.pug', { 'mainObj': 'contacts', 'contacts': contacts });
    };
};


module.exports = exports = UserStrategyController;