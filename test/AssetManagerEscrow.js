var bn = require('bignumber.js');
bn.config({ EXPONENTIAL_AT: 80 });

const AssetManagerEscrow = artifacts.require("./roles/AssetManagerEscrow.sol");
const Database = artifacts.require("./database/Database.sol");
const Events = artifacts.require("./database/Events.sol");
const ContractManager = artifacts.require("./database/ContractManager.sol");
const DivToken = artifacts.require("./tokens/ERC20/DividendToken.sol");
const MyBitToken = artifacts.require("./tokens/ERC20/MyBitToken.sol");
const HashFunctions = artifacts.require("./test/HashFunctions.sol");
const Operators = artifacts.require("./roles/Operators.sol");
const Platform = artifacts.require("./ecosystem/Platform.sol");
const API = artifacts.require("./database/API.sol");

const ETH = bn(10**18);
let tokenPerAccount;

contract('AssetManager Escrow', async(accounts) => {
  const owner = accounts[0];
  const user1 = accounts[1];
  const user2 = accounts[2];
  const user3 = accounts[3];
  const assetManager = accounts[6];
  const operator = accounts[5];
  const tokenHolders = [user1, user2, user3];

  let divToken;
  let burnToken
  let db;
  let events;
  let cm;
  let api;
  let hash;
  let escrow;
  let platform;
  let operators;

  let assetManagerEscrowID;
  let operatorID;
  let assetAddress;
  let assetURI = 'NewAsset';

  it('Deploy hash contract', async() => {
    hash = await HashFunctions.new();
  });

  it('Deploy database contract', async() => {
    db = await Database.new([owner], true);
  });

  it('Deploy Events', async() => {
    events = await Events.new(db.address);
  });

  it('Deploy contract manager contract', async() => {
    cm = await ContractManager.new(db.address, events.address);
    await db.enableContractManagement(cm.address);
    await cm.addContract('Owner', owner);
  });

  it('Deploy api', async() => {
    api = await API.new(db.address);
    await cm.addContract('API', api.address);
  });

  it("Deploy standard token", async() => {
    burnToken = await MyBitToken.new('MyB', 'MYB', bn(10000).times(ETH).toString());
  });

  it("Transfer token to assetManager", async() => {
    await burnToken.transfer(assetManager, bn(100).times(ETH).toString());
    assetManagerBalance = await burnToken.balanceOf(assetManager);
    assert.equal(assetManagerBalance, bn(100).times(ETH).toString());
  });

  it('Deploy platform', async() => {
    platform = await Platform.new(db.address, events.address);
    await cm.addContract('Platform', platform.address);
    await platform.setPlatformWallet(owner);
    await platform.setPlatformToken(burnToken.address);
  });

  it('Deploy assetManager escrow', async() => {
    escrow = await AssetManagerEscrow.new(db.address, events.address);
    await cm.addContract('AssetManagerEscrow', escrow.address);
  });

  it('Set operator', async() => {
    operators = await Operators.new(db.address, events.address);
    await cm.addContract('Operators', operators.address);
    let block = await web3.eth.getBlock('latest');
    await operators.registerOperator(operator, 'Operator', 'Asset Type');
    let logs = await events.getPastEvents('LogOperator', {filter: {messageID: web3.utils.sha3('Operator registered'), origin: owner}, fromBlock: block.number});
    operatorID = logs[0].args.operatorID;
  });

  it("Deploy asset token", async() => {
    divToken = await DivToken.new(assetURI, owner);
    assetAddress = divToken.address;
  });

  it("Lock escrow", async() => {
    let escrowAmount = bn(2).times(ETH);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await burnToken.approve(escrow.address, escrowAmount.toString(), {from:assetManager});
    let block = await web3.eth.getBlock('latest');
    await escrow.lockEscrow(assetAddress, assetManager, escrowAmount.toString(), {from:assetManager});
    let logs = await events.getPastEvents('LogEscrow', {filter: {messageID: web3.utils.sha3('Escrow locked'), origin: assetManager}, fromBlock: block.number});
    assetManagerEscrowID = logs[0].args.escrowID;
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(diff.eq(escrowAmount), true);
  });

  //Funding deadline is passed but didn't raise enough funds
  it("Unlock escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2)), true);
  });

  it("Lock escrow", async() => {
    let escrowAmount = bn(2).times(ETH);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    let assetManagerID = await api.getAssetManagerEscrowID(assetAddress, assetManager);
    await burnToken.approve(escrow.address, escrowAmount, {from:assetManager});
    await escrow.lockEscrow(assetAddress, assetManager, escrowAmount, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceBefore).minus(balanceAfter);
    assert.equal(bn(await api.getAssetManagerEscrow(assetManagerID)).eq(escrowAmount), true);
    assert.equal(diff.eq(escrowAmount), true);
  });

  it("Fail to lock escrow", async() => {
    let err;
    //Fail because asset already exists
    try{
      await escrow.lockEscrow(assetAddress, assetManager, bn(2).times(ETH), {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Finish funding", async() => {
    let finishHash = await hash.stringAddress("crowdsale.finalized", assetAddress);
    await db.setBool(finishHash, true);
    let amountHash = await hash.stringAddress("crowdsale.goal", assetAddress);
    await db.setUint(amountHash, bn(12).times(ETH).toString());
  });

  it("Spread tokens to users", async() => {
    let userBalance;
    let totalSupply = bn(12).times(ETH);
    tokenPerAccount = totalSupply.div(tokenHolders.length).integerValue();   // TODO: getting error with bignumber.js here
    for (var i = 0; i < tokenHolders.length; i++) {
      //console.log(accounts[i]);
      await divToken.mint(tokenHolders[i], tokenPerAccount.toString());
      userBalance = await divToken.balanceOf(tokenHolders[i]);
      assert.equal(bn(userBalance).eq(tokenPerAccount), true);
    }
    let currentSupply = await divToken.totalSupply();
    assert.equal(await divToken.balanceOf(owner), 0);
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because no ROI yet
    try{
      tx = await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
      console.log(tx);
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Pay half ROI", async() => {
    await divToken.issueDividends({from:operator, value:bn(6).times(ETH).toString()});
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because wrong user
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:operator});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to unlock escrow", async() => {
    let err;
    //Fail because funding not complete
    let fundingHash = await hash.stringAddress('crowdsale.deadline', assetAddress);
    let block = await web3.eth.getBlock('latest');
    let currentTime = bn(block.timestamp);
    console.log(currentTime);
    await db.setUint(fundingHash, currentTime.plus(10));
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
    await db.setUint(fundingHash, currentTime.minus(10));
  });


  it("Unlock half escrow", async() => {
    let assetManagerID = await api.getAssetManagerEscrowID(assetAddress, assetManager);
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    console.log(bn(await api.getAssetManagerEscrowRemaining(assetManagerID)).toString());
    assert.equal(bn(await api.getAssetManagerEscrowRemaining(assetManagerID)).eq(ETH), true);
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    console.log(diff);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock more escrow without further income", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Pay under a quarter of ROI", async() => {
    await divToken.issueDividends({from:operator, value: 1*ETH});
    let roi = await api.getAssetROI(assetAddress);
    assert.equal(bn(roi).lt(75), true);
  });


  it("Fail to unlock more escrow without further income", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });


  it("Pay rest of ROI", async() => {
    await divToken.issueDividends({from:operator, value:bn(5).times(ETH)});
    assert.equal(bn(await divToken.assetIncome()).eq(12*ETH), true);
  });

  it("Unlock rest of escrow", async() => {
    let balanceBefore = await burnToken.balanceOf(assetManager);
    await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    let balanceAfter = await burnToken.balanceOf(assetManager);
    let diff = bn(balanceAfter).minus(balanceBefore);
    assert.equal(diff.isEqualTo(bn(ETH).multipliedBy(2).dividedBy(2)), true);
  });

  it("Fail to unlock escrow after 100% ROI", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("More ROI !! ", async() => {
    await divToken.issueDividends({from:operator, value:bn(4).times(ETH).toString()});
    assert.equal(bn(await divToken.assetIncome()).eq(16*ETH), true);
  });

  it("Fail to unlock escrow after 150% ROI", async() => {
    let err;
    try{
      await escrow.unlockEscrow(assetAddress, assetManager, {from:assetManager});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it("Fail to burn", async() => {
    let err;
    //Fail because not owner
    try{
      await escrow.burnEscrow(assetAddress, {from:user1});
    } catch(e){
      err = e;
    }
    assert.notEqual(err, undefined);
  });

  it('Return ether to operator (So we do not have to restart ganache!)', async() => {
    let amount = 2*ETH/tokenHolders.length;
    for (var i = 0; i < tokenHolders.length; i++) {
      await web3.eth.sendTransaction({from:tokenHolders[i], to:operator, value:amount})
    }
  });

});