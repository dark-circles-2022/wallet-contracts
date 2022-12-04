import { ethers } from 'hardhat'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'

async function main() {
  const accounts = await ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }

  const currentTimestampInSeconds = Math.round(Date.now() / 1000)
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS

  const lockedAmount = ethers.utils.parseEther('1')

  const EntryPoint = await ethers.getContractFactory('EntryPoint')
  const entryPoint = await EntryPoint.deploy(unlockTime, { value: lockedAmount })

  await entryPoint.deployed()

  console.log(`Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${entryPoint.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
