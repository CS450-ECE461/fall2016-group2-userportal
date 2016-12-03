/**
 * Created by terrabyte on 11/30/16.
 */

var blueprint = require ('@onehilltech/blueprint')
    , request   = require ('supertest')
    , expect    = require ('chai').expect;

var requirePath = '../../../app/';


var appPath = (requirePath + "controllers/LoginController");

describe ('LoginController', function () {

    describe ('POST', function () {

        it ('should login successfully with valid credentials', function (done) {
           request (blueprint.app.server.app)
               .post('/login')
               .send()
        });

    });

});