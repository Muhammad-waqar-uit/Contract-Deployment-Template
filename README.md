# Sample Deployment and verification template

```shell
npx hardhat compile
npx hardhat run scripts/deploy.js --network polygon
npx hardhat run scripts/verifycontract.js --network polygon
```
# Contract-Deployment-Template

-For verification purposes, you will receive a contract address that you should copy and then paste into the "verificationcontract.js" file where the "contract address" variable is defined.

- Additionally, you need to specify the contract file along with the contract name as follows: contract: "contracts/test.sol:CryptoCrafters". In this example, "CryptoCrafters" is the contract name, and "test.sol" is the file where the contract is located.

- You will also find the ABI and contract address inside the "contractData" folder, eliminating the need to search for them in the "artifacts" directory.

- When deploying, remember to update the "deploy.js" file with the correct artifact name in both the "getcontractfactory" and "SaveContractFiles" sections.
