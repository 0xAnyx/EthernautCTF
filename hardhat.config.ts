import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-web3";
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
dotenv.config({ path: __dirname+'/.env' });

// @ts-ignore
// @ts-ignore
const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/69429744deee434b8f15ed20f4a510b0",
      accounts: [process.env.PRIVATE_KEY || ""]
    }
  }
};

export default config;
