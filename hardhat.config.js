require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const QUICKNODE_RPC_URL = process.env.QUICKNODE_RPC_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: QUICKNODE_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};