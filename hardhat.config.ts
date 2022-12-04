import '@nomiclabs/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'
import 'hardhat-deploy'
import * as dotenv from 'dotenv'
dotenv.config()

import { HardhatUserConfig } from 'hardhat/config'
import { NetworkUserConfig } from 'hardhat/src/types/config'

const infuraUrl = (name: string): string => `https://${name}.infura.io/v3/${process.env.INFURA_ID}`

const mnemonic = process.env.MNEMONIC
function getNetwork(url: string): NetworkUserConfig {
  return {
    url,
    accounts: {
      mnemonic,
    },
  }
}

function getInfuraNetwork(name: string): NetworkUserConfig {
  return getNetwork(infuraUrl(name))
}

const config: HardhatUserConfig = {
  typechain: {
    outDir: 'types',
    target: 'ethers-v5',
  },
  networks: {
    localhost: {
      url: 'http://localhost:8545/',
    },
    goerli: getInfuraNetwork('goerli'),
    mumbai: getInfuraNetwork('polygon-mumbai'),
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: { enabled: true },
    },
  },
}

export default config
