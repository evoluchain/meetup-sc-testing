var TestToken = artifacts.require("./TestToken.sol")

contract('ERC20', function (accounts) {

    it("should create an instance", function () {
        return TestToken.new(10000, 'Brouzouf', 1, 'BRX', {from: accounts[0]})
            .then(function (instance) {
                return instance.balanceOf.call(accounts[0])
            })

            .then(function (result) {
                assert.strictEqual(result.toNumber(), 10000)
            })
    })

    it.skip("should be alive", function() {
        // Here your test
    })

    it.skip('should create an Event - simple for testing', function () {
        return TestToken.new(10000, 'Brouzouf', 1, 'BRX', {from: accounts[0]})
            .then(function (instance) {
                return instance.transfer(accounts[1], 500)
            })

            .then(function (result) {
                assert.equal(result.logs.length, 1, "Wrong number of events")
                assert.equal(result.logs[0].event, "Transfer", "Expected Transfer event")
                assert.equal(result.logs[0].args._value.valueOf(), 500)
            })
    })

    it.skip("should fail when trying to transfer 10001 to accounts[1] with accounts[0] having 10000", function() {
        var instance
        return TestToken.new(10000, 'Simon Bucks', 1, 'SBX', {from: accounts[0]})
            .then(function(result) {
                instance = result
                return instance.transfer.call(accounts[1], 10001, {from: accounts[0]})
        }).then(function (result) {
                console.log('result', result)
                assert.isFalse(result)
        })
    })

    it.skip('should the receiver actually have 100', function(){
        // Here your test
    })

})