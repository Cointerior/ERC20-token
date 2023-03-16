const { assert } = require("chai");
const { deployments, getNamedAccounts, ethers } = require("hardhat");
const { networkConfig } = require("../../hardhat-helper-config");

let deployer, myToken, initialSupply;
describe("MyToken", () => {
  beforeEach(async () => {
    deployer = (await getNamedAccounts()).deployer;
    await deployments.fixture(["all"]);
    myToken = await ethers.getContract("MyToken", deployer);
    initialSupply = networkConfig[chainId]["initialSupply"];
  });
  describe("constructor", () => {
    it("sets the initialSupply correctly", async () => {
      const response = await myToken.getInitialSupply();
      assert.equal(response.toString(), initialSupply);
    });
  });
});
