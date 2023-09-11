// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Box {
    uint val;

    function Initializer(uint _val) external {
        val = _val;
    }
}