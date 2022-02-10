// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BlackSpringNFT is ERC721URIStorage, Ownable, Pausable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    event NewBlackSpringNFTMinted(address sender, uint256 tokenId);

    constructor() ERC721 ("Black Spring - Rest in Power", "BLKSPR") {
        
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);

        require(!paused(), "ERC721Pausable: token transfer while paused");
    }

    function stopTransfers() onlyOwner public {
        _pause();
    }

    function allowTransfers() onlyOwner public {
        _unpause();
    }

    function _toString(uint256 value) internal pure returns (string memory) {
        require(value <= 99999, "Max capacity reached");
        bytes memory buffer = "00000";
        uint256 length = 5;

        while (value != 0) {
            length--;
            buffer[length] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    function recordMartyr() onlyOwner public {
        uint256 newItemId = _tokenIds.current();

        //string memory finalTokenUri = _prepareTokenURI(name, description, arhash, attributes);
        string memory finalTokenUri = string(abi.encodePacked("https://blackspring-nft.web.app/metadata/", _toString(newItemId), ".json"));

        _safeMint(msg.sender, newItemId);
        
        // Update your URI!!!
        _setTokenURI(newItemId, finalTokenUri);
        _tokenIds.increment();

        emit NewBlackSpringNFTMinted(msg.sender, newItemId);
    }
}