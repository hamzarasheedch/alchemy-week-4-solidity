require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config(".env")

const {PRIVATE_KEY_GOERLI_ACCOUNT, GOERLI_RPC_URL} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY_GOERLI_ACCOUNT]
    }
  },
  solidity: {
    version: "0.8.17",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200
    //   }
    // }
  },
};
