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
                  if (!err) {
                      if(res.header['location'] === '/login'){
                          return done();
                      }
                      else{
                          return done(err);
                      }
                  }
                  else{
                      return done (err);
                  }

               });
        });
    });



    describe ('POST valid', function () {

        it ('should login successfully with invalid credentials', function (done) {
            request (blueprint.app.server.app)
                .post('/login')
                .send()
                .end(function(err,res){
                    if (!err) {
                        if(res.header['location'] === '/dashboad'){
                            return done();
                        }
                        else{
                            return done(err);
                        }
                    }
                    else{
                        return done (err);
                    }



                });
        });
    });


});