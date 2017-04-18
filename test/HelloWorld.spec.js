var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld - demo', function (accounts) {

    it("should create an instance", function () {
        return HelloWorld.deployed()
            .then(function (instance) {
                return instance.balanceOf.call(accounts[0]);
            })
            .then(function (balance) {
                assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
            });
    });

    it('should create an Event', function () {
        var instance;

        return HelloWorld.deployed()
            .then(function (_instance) {
                instance = _instance;
                return   instance.transfer(accounts[1], 500)
            })

            .then(function (result) {
                assert.equal(result.logs[0].event, "Transfer", "Expected Transfer event")
                assert.equal(result.logs[0].args.value.valueOf(), 500)
            });
    });

});