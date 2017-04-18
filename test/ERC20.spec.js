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

    it('should create an Event - simple for testing', function () {
        return TestToken.new(10000, 'Brouzouf', 1, 'BRX', {from: accounts[0]})
            .then(function (instance) {
                return instance.transfer(accounts[1], 500)
            })

            .then(function (result) {
                assert.equal(result.logs.length, 1, "More than 1 event")
                assert.equal(result.logs[0].event, "Transfer", "Expected Transfer event")
                assert.equal(result.logs[0].args._value.valueOf(), 500)
            })
    })

    it.skip('should create an Event - disconnected from instance call', function () {
        return TestToken.new(10000, 'Brouzouf', 1, 'BRX', {from: accounts[0]})
            .then(function (instance) {
                instance.transfer(accounts[1], 500)
                return instance.Transfer()
            })

            .then(function (watcher) {
                watcher.get(function (error, events) {
                    assert.equal(events.length, 1, "Not 1 event")
                    assert.equal(events[0].event, "Transfer", "Expected Transfer event")
                    assert.equal(events[0].args._value.valueOf(), 500)
                })
            })
    })

})