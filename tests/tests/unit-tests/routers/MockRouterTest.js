/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect
    ;

var appPath = require ('../../../fixtures/appPath');


describe ('MockRouter', function () {

    before (function (done) {
        blueprint.testing.createApplicationAndStart (appPath, done)
    });

    describe ('/mock/loginTest', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/login')
                    .expect (200, done);
            });
        });
    });


    describe ('/mock/messageTest', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/login')
                    .expect (200, done);
            });
        });
    });
});
