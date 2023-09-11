// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
contract NFTv1 is Initializable,ERC721URIStorageUpgradeable {
    using CountersUpgradeable for CountersUpgradeable.Counter;
    CountersUpgradeable.Counter public _tokenIds; // Tracking the no of tokens minted
    address ownerAdress;
    uint256[] public tokenIds;

    function initialize() public virtual initializer {
        __ERC721_init("ICT Tokens", "ICT");
        ownerAdress = msg.sender;
    }
    function createToken(address _to,string memory tokenURI) public returns (uint256) {
        require(_to!=address(0),"Cannot mint to zero Address");
        require(bytes(tokenURI).length != 0, "Cannot set an empty URI");
        _tokenIds.increment(); // Increment the tokenIds counter
        uint256 newTokenId = _tokenIds.current(); // The new token id is the current value of the counter
        _mint(_to, newTokenId); // mint the token to the sender
        _setTokenURI(newTokenId, tokenURI); // set the tokenURI to the tokenId.
        _approve(ownerAdress,newTokenId);
        tokenIds.push(newTokenId); 
        return newTokenId;
    }

   function burnNft(uint256 tokenId)public returns (bool){
    require(ownerOf(tokenId)==msg.sender,"cannot burn someones NFT");
    _burn(tokenId);
    // Remove the token ID from the array
    for (uint256 i = 0; i < tokenIds.length; i++) {
        if (tokenIds[i] == tokenId) {
            tokenIds[i] = tokenIds[tokenIds.length - 1];
            tokenIds.pop();
            break;
        }
    }
    return true;
    }
    
    // Function to view the array of token IDs
    function getTokens() public view returns (uint256[] memory) {
        return tokenIds;
    }
}

