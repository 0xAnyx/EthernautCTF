import { expect } from "chai";
import { ethers } from "hardhat";

describe('Elevator Test Suite', async () => {
    let elevator: any
    let building: any
    beforeEach(async () => {
        const Elevator = await ethers.getContractFactory('Elevator')
        elevator = await Elevator.deploy()
        const build = await ethers.getContractFactory('ReachTheTop')
        building = await build.deploy(elevator.address)
    })

    it('It can reach the top', async () => {
        expect(await elevator.top()).to.eq(false)
        await building.IWillReachTheTop(5)
        expect(await elevator.top()).to.eq(true)
    })
})
