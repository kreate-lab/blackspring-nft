const { expect } = require("chai");
const { ethers } = require("hardhat");
const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace");

describe("NFT", function() {
    it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
        const nftContractFactory = await ethers.getContractFactory("BlackSpringNFT");
        const nftContract = await nftContractFactory.deploy();
        const arhash = "likGp394kb4qvI9GrZ_xnfJFVU33AgItFFjqUcg9JvQ";
        await nftContract.deployed();
        let txn = await nftContract.recordMartyr(arhash);
        await txn.wait();

        expect(await nftContract.tokenURI(0).to.equal("ar://"+arhash));
    });
});