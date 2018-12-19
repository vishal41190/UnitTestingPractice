var assert =require ('assert');
var loginController = require('../controllers/loginController');
describe('Testing funtion',function(){
it('Should return true if valid user id',function(){

var isValid = loginController.isValidUserId(['abc123','xyz32'],'abc123');
assert.equal(isValid,true);
});

    it('Should return true if valid user ID ASYNC',function(done){
        loginController.isValidUserASYNCId(['abc123','xyz32'],'abc123',function(isValid){
            assert.equal(isValid,true);
            done();
        });
    });
});
