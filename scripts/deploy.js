const { ethers } = require("hardhat");

async function main() {
  // Grab the contract factory
  const nftcontract = await ethers.getContractFactory("CryptoCrafters");

  // Start deployment, returning a promise that resolves to a contract object
  const nft = await nftcontract.deploy(); // Instance of the contract
  await nft.deployed();
  console.log("NFT Token deployed to:", nft.address);
  saveFrontendFiles(nft,"CryptoCrafters");
}

function saveFrontendFiles(contract, name) {
  const fs = require("fs");
  const contractsDir = `${__dirname}/../contractsData`;

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const addressFilePath = `${contractsDir}/${name}-address.json`;
  const artifactFilePath = `${contractsDir}/${name}.json`;

  fs.writeFileSync(
    addressFilePath,
    JSON.stringify({ address: contract.address }, null, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    artifactFilePath,
    JSON.stringify(contractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });