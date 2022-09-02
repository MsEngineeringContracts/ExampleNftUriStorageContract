const { expect } = require("chai");
const hre = require("hardhat");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require("@nomicfoundation/hardhat-network-helpers");

describe("DeployTestMetadata", function () {
  it("Should create the TestMetadata URI storage contract", async function () {
    const NewTestMetadata = await hre.ethers.getContractFactory("TestMetadata");
    const newTestMetadata = await NewTestMetadata.deploy();
    await newTestMetadata.deployed();
    const newTestMetadataAddress = await newTestMetadata.address;
    const newTestMetadataOwner = await newTestMetadata.contractOwner();
    const newTestMetadataUri = await newTestMetadata.testMetadataURI();
    console.log("TestMetadata deployed to:", newTestMetadataAddress);
    console.log("TestMetadata owner:", newTestMetadataOwner);
    console.log("TestMetadata URI:", newTestMetadataUri);
    expect(newTestMetadataAddress > 0);
    expect(newTestMetadataOwner != null);
    expect(newTestMetadataUri != null);
    await readIpfsJson(newTestMetadataUri);
  });
});

const readIpfsJson = async (_dataUrl) => {
  // could be _mintAmount instead(?) i.e. 1 is just temp hardcoded
  const _gateUrl = "https://ipfs.io/ipfs/";
  let _cid = "";
  let _path = "";
  let _fileQuery = "";
  let _url = "";

  const _urlSplit = _dataUrl.split('/');
  _urlSplit.forEach(element => {
    if(element.includes("ipfs://"))
    {
      console.log("Remove ipfs://");
      element = "";
    }
    else
    if(element.includes("Qm"))
    {
      _cid = element + "/";
      console.log("Assign CID: " + _cid);
    }
    else
    if(element.includes(".json"))
    {
      //_fileQuery = "?filename=" + element;
      _fileQuery = element;
      console.log("Create file query: " + _fileQuery);
    }
    else
    if((!element.includes("ipfs")) && (element.length > 0))
    {
      _path += element + "/";
      console.log("Add path: " + _path);
    }
  });
  _url = _gateUrl + _cid + _path + _fileQuery;
  console.log("Link created: " + _url);

  const response = await fetch(_url);
  const data = await response.json();
  console.log(data);
};