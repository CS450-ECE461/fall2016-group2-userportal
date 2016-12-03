/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('LoginController', function () {

    describe ('POST invalid', function () {

        before (function (done) {
            blueprint.testing.createApplicationAndStart (appPath, done)
        });

        it ('should login successfully with invalid credentials', function (done) {
            request (blueprint.app.server.app)
               .post('/login')
               .send()
               .end(function(err,res){
                  if (err) {
                      return done(err);
                  }

                   if(res.header['location'] == '/login'){
                       return done();
                   }

                   return done(new Error('invalid location'));
               });
        });
    });



    describe ('POST valid', function () {

        it ('should login successfully with invalid credentials', function (done) {
            request (blueprint.app.server.app)
                .post('/login')
                .send()
                .end(function(err,res){
                    if (err) {
                        return done(err);
                    }

                    if(res.header['location'] == '/dashboard'){
                        return done();
                    }

                    return done(new Error('invalid location'));
                });
        });
    });


});