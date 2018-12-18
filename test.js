var assert = require('assert');

describe('Basic Mocha String Test',function(){
it('Should return number of character in a string',function(){
 assert.equal("Hello".length,5);
});

it('Should return first character of the string',function(){
assert.equal("Hello".charAt(0),'H');
});



});
