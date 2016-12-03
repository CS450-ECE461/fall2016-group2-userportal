/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var appPath = require ('../../../fixtures/appPath');

describe ('LoginController', function () {

    before (function (done) {
        blueprint.testing.createApplicationAndStart (appPath, done)
    });

    describe ('POST', function () {

        it ('should login successfully with valid credentials', function (done) {

            request (blueprint.app.server.app)
               .post('/login')
               .send()
               .end(function(err,res){
                  if (err) { return done (err); }

                  console.log(res.redirect.value);

                  return done();
                  //expect().to.equal (something);
               });
        });
    });


});