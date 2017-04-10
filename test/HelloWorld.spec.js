var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld - demo', function(accounts){

    it("should create an instance", function() {
        return HelloWorld.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
        });
    });

});