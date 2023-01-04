// @ts-ignore
import { web3 } from "hardhat";
import { ethers } from "hardhat";

async function main() {

    const magic = await ethers.getContractFactory('MagicNum')
    const meaningOfLife = await magic.attach('0x1394F20035F76Fe3F0c2e60072818a64c739A4Fa')

    const byteCode = '69602a60005260206000f3600052600a6016f3'
    const tx = await web3.eth.sendTransaction({from: '0xabd7e5f5490B16264b2FfC368b24F3a4862573B7',
    data: byteCode})
    console.log(tx.contractAddress)

    const tx2 = await meaningOfLife.setSolver('0xB6c4014D61B160422b6269a36066cE74dCd942c3')
    await tx2.wait()
    console.log("Done", await meaningOfLife.solver)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
