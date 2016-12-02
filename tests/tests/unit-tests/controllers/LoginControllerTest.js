/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var requirePath = '../../../app/';


var appPath = (requirePath + "controllers/LoginController");

describe ('LoginController', function () {
    before (function (done) {
        blueprint.testing.createApplicationAndStart (appPath, done)
    });

    describe ('/login', function () {
        describe ('GET', function () {
            it ('should get all messages in the database', function (done) {


            });
        });
    });
});