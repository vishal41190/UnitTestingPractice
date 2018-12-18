var assert =require ('assert');
var loginController = require('../controllers/loginController');
describe('Testing funtion',function(){
it('Should return trur if valid user id',function(){

var isValid = loginController.isValidUserId(['abc123','xyz32'],'abc123')
assert.equal(isValid,true);
});

});
