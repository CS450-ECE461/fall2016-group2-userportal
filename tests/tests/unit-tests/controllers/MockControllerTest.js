/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('MockController', function () {

    describe ('Login Test', function () {

        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('should go to the login page', function (done) {
            request (blueprint.app.server.app)
                .post('/mock/loginTest')
                .send()
                .expect (200, done);
        });
    });


    describe ('Message Test', function () {

        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('should go to the login page', function (done) {
            request (blueprint.app.server.app)
                .post('/mock/messageTest')
                .send()
                .expect (200, done);
        });
    });


});