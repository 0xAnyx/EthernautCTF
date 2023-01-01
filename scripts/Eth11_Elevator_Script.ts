// @ts-ignore
import { ethers } from "hardhat";

async function main() {
    const Elevator = await ethers.getContractFactory('Elevator')
    const elevator = await Elevator.attach("0xBF5A0f47D1e61C8507DCdF7a1AF6f53AD7Fc4941")

    const building = await ethers.getContractFactory('ReachTheTop')
    const build = await building.deploy(elevator.address)
    await build.deployed()

    let tx = await build.IWillReachTheTop(5)
    await tx.wait()
    console.log("Did we reach top floor?", await elevator.top())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
