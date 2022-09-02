# ExampleNftUriStorageContract
Create NFT contract

## Initial Setup
Potential not necessary modules must be removed soon.

### Install hardhat-waffle

~~npm install -g @nomiclabs/hardhat-waffle~~

"--save-dev" is necessary to have local installation

>npm install --save-dev @nomiclabs/hardhat-waffle

### Install hardhat-ethers

>npm install -g @nomiclabs/hardhat-ethers ethers # peer dependencies

### Install hardhat-network-helpers

>npm install --save-dev @nomicfoundation/hardhat-network-helpers

### Install openzeppelin contracts

>npm install @openzeppelin/contracts

### Install hardhat gas reporter

>npm install hardhat-gas-reporter

### Install hardhat web3

>npm install hardhat-web3

### Install hardhat deploy

>npm install hardhat-deploy

### Install mocha

>npm install --save-dev mocha

### Install chai

>npm install --save-dev chai

### Install

### Run hardhat init

>npx hardhat init

## Add and edit project files and test them
### Edit hardhat config file
...

### Add contract and test deployment script

### Run test script

>npx hardhat test

## Deploy on bsc testnet
### IMPORTANT: Add your account infos (mnemonic) to the hardhat.config.js!!! 
Otherwise deployment will be made from random address.

### Testnet deploy
You can deploy through a deployment script or through the test script with the option "network tbsc".

>npx hardhat test --network tbsc

### Verify your contract
>npx hardhat verify --network tbsc 0x05b632939796EdA116D1Ee745ed629A9303A0fBc  
>
>Compiled 14 Solidity files successfully
>
>Successfully submitted source code for contract
>
>contracts/TestMetadata.sol:TestMetadata at 0x05b632939796EdA116D1Ee745ed629A9303A0fBc
>
>for verification on the block explorer. Waiting for verification result...
>
>Successfully verified contract TestMetadata on Etherscan.
>
>https://testnet.bscscan.com/address/0x05b632939796EdA116D1Ee745ed629A9303A0fBc#code
>
>PS F:\Workstuff\ProjectGameFiNaticsV1_local\wsContracts_V1> 
