// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Maleficent is ERC20 {
    constructor() ERC20("Evil", "MAL") {
        _mint(msg.sender, 1000 * (10* uint256(decimals())));
    }
}