// @ts-ignore
import { getContractAddress } from "@ethersproject/address";
import { ethers } from "hardhat";

async function main() {
    const lostAddress = getContractAddress({
        from: "0xdB8C9667f40334c492667Ca2f35020be87b873CD",
        nonce: 1
    })

    console.log("Lost Address:-", lostAddress)

    const attack = await ethers.getContractFactory('RecoverAddress')
    const recover = await attack.deploy()
    await recover.deployed()

    let tx = await recover.recoverEth(lostAddress)
    await tx.wait()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
