/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('DefaultController', function () {

    describe ('POST invalid', function () {

        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('should go to the login page', function (done) {
            request (blueprint.app.server.app)
                .post('/')
                .send()
                .end(function(err,res){
                    if (err) {
                        return done (err);
                    }
                    else{
                        if(res.header['location'] == '/login'){
                            return done();
                        }
                    }

                    return done (err);
                });
        });
    });


});