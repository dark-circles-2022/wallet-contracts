// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

import "./ComplexAccount.sol";

contract Deployer {
    mapping(address => address) public SCWs; // EOA => SCW

    function deployAccount(
        address[] memory _signers,
        address[] memory _guardians
    ) public returns (address) {
        address scw = address(
            new ComplexAccount(IEntryPoint(address(this)), _signers, _guardians)
        );
        SCWs[msg.sender] = scw;
        return scw;
    }
}
