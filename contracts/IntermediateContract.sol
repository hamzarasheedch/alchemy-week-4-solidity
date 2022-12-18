// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}

contract IntermediateContract {
    address payable public owner;
    address public deployedContractAddress;
    constructor(address _deployedContractAddress) payable {
        owner = payable(msg.sender);
        deployedContractAddress = _deployedContractAddress;
    }
    function emitWinner() public onlyOwner{
        Contract(deployedContractAddress).attempt();
    }

    modifier onlyOwner {
      require(msg.sender == owner);
      _;
   }
}
