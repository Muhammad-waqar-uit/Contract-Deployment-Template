/** @type import('hardhat/config').HardhatUserConfig */
// hardhat.config.js
require("dotenv").config();
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-etherscan");
module.exports = {
  solidity: "0.8.19",
 networks:{ polygon:{
  url: process.env.ALCHEMY_API_KEY||"",
  accounts: [process.env.PrivateKey],
  },
  
},
etherscan: {
  apiKey: {
    polygonMumbai: process.env.POLYGONSCAN_KEY,
  },
},
};