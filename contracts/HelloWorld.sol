pragma solidity ^0.4.8;

contract HelloWorld {

    mapping(address => uint) balances;

    event Transfer(address indexed from, address indexed to, uint value);

    function HelloWorld() public {
    		balances[tx.origin] = 10000;
    }

    function transfer(address _to, uint _value) public {
        balances[msg.sender] = balances[msg.sender] - _value;
        balances[_to] = balances[_to] + _value;
        Transfer(msg.sender, _to, _value);
    }

    function balanceOf(address _owner) public returns(uint balance) {
        return balances[_owner];
    }

}
