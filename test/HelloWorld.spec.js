var HelloWorld = artifacts.require("./HelloWorld.sol")

contract('HelloWorld - demo', function (accounts) {

    it("should create an instance", function () {
        return HelloWorld.deployed()
            .then(function (instance) {
                return instance.balanceOf.call(accounts[0])
            })
            
            .then(function (balance) {
                assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account")
            })
    })

    it('should create an Event - simple for testing', function () {
        return HelloWorld.deployed()
            .then(function (instance) {
                return instance.transfer(accounts[1], 500)
            })

            .then(function (result) {
                assert.equal(result.logs.length, 1, "Wrong number of events")
                assert.equal(result.logs[0].event, "Transfer", "Expected Transfer event")
                assert.equal(result.logs[0].args.value.valueOf(), 500)
            })
    })

    it('should create an Event - disconnected from instance call', function () {
        return HelloWorld.deployed()
            .then(function (instance) {
                instance.transfer(accounts[1], 500)
                return instance.Transfer()
            })

            .then(function (watcher) {
                watcher.get(function(error, events){
                    assert.equal(events.length, 1, "Wrong number of events")
                    assert.equal(events[0].event, "Transfer", "Expected Transfer event")
                    assert.equal(events[0].args.value.valueOf(), 500)
                })
            })
    })

})