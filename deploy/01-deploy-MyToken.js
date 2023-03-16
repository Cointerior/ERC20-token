const { network } = require("hardhat");
const { networkConfig } = require("../hardhat-helper-config");

module.exports = async ({ deployments, getNamedAccounts }) => {
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  const { deploy, log } = deployments;
  const myToken = await deploy("MyToken", {
    from: deployer,
    args: [networkConfig[chainId]["initialSupply"]],
    log: true,
  });
};

module.exports = ["all", "token"];
