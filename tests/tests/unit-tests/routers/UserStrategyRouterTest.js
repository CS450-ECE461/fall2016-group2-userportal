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
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/home', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/logout', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/notifications', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/compose', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/contacts', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });


    describe ('/dashboard/compose/close', function () {
        describe ('GET', function () {
            it ('check if this router routed correctly', function (done) {
                request (blueprint.app.server.app)
                    .get ('/dashboard')
                    .expect (200, done);
            });
        });
    });
});
