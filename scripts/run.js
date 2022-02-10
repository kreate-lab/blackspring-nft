const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('BlackSpringNFT');
    const nftContract = await nftContractFactory.deploy();

    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
    
    let txn = await nftContract.recordMartyr();
    await txn.wait();

    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();
    txn = await nftContract.recordMartyr();
    await txn.wait();


    txn = await nftContract.tokenURI(0);
    await txn.toString();
    console.log(txn.toString());

    txn = await nftContract.tokenURI(3);
    await txn.toString();
    console.log(txn.toString());

    txn = await nftContract.tokenURI(12);
    await txn.toString();
    console.log(txn.toString());
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();