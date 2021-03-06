var artifacts = require('./lib/index.js');
var mybitContracts = require('./networks/mybit/Contracts.js');
var ropstenContracts = require('./networks/ropsten/Contracts.js')

module.exports = {
  artifacts : artifacts,
  addresses : {
    mybit : mybitContracts,
    ropsten : ropstenContracts,
  }
};
