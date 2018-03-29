# MyBit Smart-Contracts

## Overview
The MyBit smart-contract system is built to allow the decentralized crowdfunding of assets and distribution of revenue to users of the platform. It allows for users to buy and sell shares of already funded assets. To interact with the smart-contracts users must burn a set amount of MyBit Tokens, which will grant them lifetime access to different levels of functionality within the platform. All contracts are built to be upgradeable by storing long-term data in a simple storage contract, while short-term data and complex logic is handled in their own respective contracts. The contracts can be upgraded at any time without losing access to the valuable long-term data. To upgrade a contract the owners will go through a multi-signature process that requires them to agree on the address of the replacing contract. All critical functions that may result in the movement of Ether/MyBit or important data changes can be paused/unpaused by the owners of the platform. The platform is currently written to have 3 owners, and all critical functions require a 2/3 consensus agreement on which function parameters to use. Using this consensus agreement removes the risk involved with having one Ethereum wallet having control over the whole platform, while still allowing contracts to have failsafe measures. All contracts are written in Solidity, and scale with usage so that more users won't increase gas costs, and each user is required to pay their own gas costs according to usage. 

