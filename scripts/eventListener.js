const ethers = require("ethers");
require('dotenv').config(".env")
const {GOERLI_RPC_URL} = process.env

const provider = new ethers.providers.StaticJsonRpcProvider(GOERLI_RPC_URL)
const contractABI = require("../Contract.json")

const main = async function() {
    const contractInstance = new ethers.Contract("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502", contractABI, provider)
    contractInstance.on("Winner", (address) => {
        console.log("Congrats..! You won", address);
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});