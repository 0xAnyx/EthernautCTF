// @ts-ignore
import { web3 } from "hardhat";
import { ethers } from "hardhat";

async function main() {

    const hack = await ethers.getContractFactory('Enigma')
    const codex = await hack.deploy('0xEa2150B6fD5BF6Aa297bE6c6869c4D2CEA076c39')

    await codex.hackCodex()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
