const { ethers, upgrades } = require("hardhat");

async function main() {
    const [Deployer]=await ethers.getSigners();
    console.log("Deployer Contract Address:",Deployer.address);
    const BOX = await ethers.getContractFactory("Box");
    const box = await upgrades.deployProxy(BOX,[33],{ initializer: 'Initializer' });
    await box.deployed();
    console.log("Box address:", box.address);
    saveFrontendFiles(box,"Box");
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
    .catch(error => {
        console.error(error)
        process.exit(1)
    })