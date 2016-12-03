/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('UserStrategyController', function () {

    describe ('POST', function () {

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


});