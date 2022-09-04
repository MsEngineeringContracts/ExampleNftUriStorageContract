require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-web3");
require('hardhat-deploy');
require('dotenv').config({ path: require('find-config')('.env') });

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
  	localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
    },
    tbsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      from: process.env.ADDRESS_GFNG_INIT,
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic:  process.env.MNEMONIC_GFNG_INIT}
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      from: process.env.ADDRESS_GFNG_INIT,
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic:  process.env.MNEMONIC_GFNG_INIT}
    },
    tmatic: {
      url: "https://matic-mumbai.chainstacklabs.com",
      from: process.env.ADDRESS_GFNG_INIT,
      chainId: 80001,
      accounts: { mnemonic: process.env.MNEMONIC_GFNG_INIT}
    }
  },
  gasReporter: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      bsc: process.env.BSCSCAN_API_TOKEN,
      bscTestnet: process.env.BSCSCAN_API_TOKEN,
      polygon: process.env.POLYGONSCAN_API_TOKEN,
      polygonMumbai: process.env.POLYGONSCAN_API_TOKEN      
    }
  },
  mocha:{
    timeout: 120000 
  }
};

