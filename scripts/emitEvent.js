const ethers = require("ethers");
const IntermediateContract = require("../artifacts/contracts/IntermediateContract.sol/IntermediateContract.json")
const {contractAddress} = require("../deployedContractAddress")
require('dotenv').config(".env")
const {PRIVATE_KEY_GOERLI_ACCOUNT, GOERLI_RPC_URL} = process.env

const provider = new ethers.providers.StaticJsonRpcProvider(GOERLI_RPC_URL)
const signer = new ethers.Wallet(PRIVATE_KEY_GOERLI_ACCOUNT, provider)

const main = async function() {
    const intermediateContract = new ethers.Contract(contractAddress, IntermediateContract.abi, signer)

    const tx = await intermediateContract.emitWinner();
    console.log("Transaction Response", tx);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});