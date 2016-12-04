/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('UserStrategyController', function () {

    describe ('dashboard init', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard')
                .send()
                .expect(200,done);
        });
    });


    describe ('dashboard home', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/home')
                .send()
                .expect(200,done);
        });
    });


    describe ('dashboard notifications', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/notifications')
                .send()
                .expect(200,done);
        });
    });


    describe ('dashboard compose', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/compose')
                .send()
                .expect(200,done);
        });
    });


    describe ('dashboard contacts', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/contacts')
                .send()
                .expect(200,done);
        });
    });


    describe (' close', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/compose/close')
                .send()
                .expect(200,done);
        });
    });


    describe ('dashboard compose', function () {
        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('dashboardINIT', function (done) {
            request (blueprint.app.server.app)
                .post('/dashboard/compose')
                .send()
                .expect(200,done);
        });
    });

});