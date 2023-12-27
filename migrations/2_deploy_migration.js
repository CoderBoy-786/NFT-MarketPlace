const AsifNFT = artifacts.require("AsifNFT");

module.exports = async (deployer) => {

  const accounts = await web3.eth.getAccounts()
  
  await deployer.deploy(AsifNFT, 'Manu NFT', 'MNT', 10, accounts[1]);
};