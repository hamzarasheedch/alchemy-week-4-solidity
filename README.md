# Week-4-Solidity-Project


To setup this project you will need ```node & npm or similar yarn etc.```

```shell
# Start by typing in 
npm install
npx hardhat compile

# Create a new .evn file containing 
PRIVATE_KEY_GOERLI_ACCOUNT="YOUR ETH ACCOUNT's PK"
GOERLI_RPC_URL="A VALID GOERLI TESTNET RPC_URL"

npx hardhat run scripts/deploy.js

# In new terminal window type in 
node scripts/eventListener.js

# open another terminal and run 
node scripts/emitEvent.js

# If successfull you will see transcation output in emitEvent.js terminal and in eventListener.js terminal you will see your deployed contract address as a winner
# One can write test as well asserting winner's address is same address of our deployedContract
```
