// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4; // <-- version directive

// imports
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestMetadata is ERC721URIStorage, Ownable {
  
  address public contractOwner; // <-- game dev/studio wallet address

  constructor() ERC721("TestMetadata", "TMETA") {
    contractOwner = msg.sender; // <-- the game dev
  }

  /** func to link token to metadata
   *
   */

  function testMetadataURI() public pure returns (string memory) {
    return "ipfs://QmcxkzcWYNWJvHL8Z9ob3NrDqxszYwBaRVXDZdbjFcb9nP/example_metadata_v3.json"; // Contract-level metadata
  }

}