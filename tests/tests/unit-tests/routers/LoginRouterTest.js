/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect
    ;

var appPath = require ('../../../fixtures/appPath');


describe ('LoginRouter', function () {

    before (function (done) {
        blueprint.testing.createApplicationAndStart (appPath, done)
    });

    describe ('/', function () {
        describe ('POST', function () {
            it ('should get all messages in the database', function (done) {
                request (blueprint.app.server.app)
                    .get ('/login')
                    .expect (200, done);
            });
        });
    });
});
