/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect
    ;

var appPath = require ('../../../fixtures/appPath');


describe ('DefaultRouter', function () {

    before (function (done) {
        blueprint.testing.createApplicationAndStart (appPath, done)
    });

    describe ('/dashboard', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/home', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/logout', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/notifications', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/compose', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/contacts', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/compose/close', function () {
        describe ('POST', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });
});
