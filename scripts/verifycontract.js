const { run } = require("hardhat");

async function main() {
//add the contract address that you deployed in the prev steps
  const contractAddress = "0x07bc2329da3D5f73be6183Fae001045Ed4352757"; //line 5

  try {
    await run("verify:verify",{
      address: contractAddress,
      constructorArguments: [],
      contract: "contracts/test.sol:CryptoCrafters",
    });
  } catch (error) {
    if (error.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });