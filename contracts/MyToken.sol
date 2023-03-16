// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 private immutable i_initialSupply;

    constructor(uint256 initialSupply) ERC20("MyToken", "OT") {
        i_initialSupply = initialSupply;
        _mint(msg.sender, initialSupply);
    }

    function getInitialSupply() public view returns (uint256) {
        return i_initialSupply;
    }
}
