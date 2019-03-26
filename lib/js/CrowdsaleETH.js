var CrowdsaleETH = exports.CrowdsaleETH = {
abi: 
[
  {
    "constant": true,
    "inputs": [],
    "name": "database",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "events",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_database",
        "type": "address"
      },
      {
        "name": "_events",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_assetAddress",
        "type": "address"
      },
      {
        "name": "_investor",
        "type": "address"
      }
    ],
    "name": "buyAssetOrderETH",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_assetAddress",
        "type": "address"
      }
    ],
    "name": "payoutETH",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_assetAddress",
        "type": "address"
      }
    ],
    "name": "refund",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_erc20Token",
        "type": "address"
      }
    ],
    "name": "recoverTokens",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "destroy",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
],
bytecode: 
"0x608060405234801561001057600080fd5b5060405160408061349283398101604052805160209091015160008054600160a060020a03938416600160a060020a0319918216179091556001805493909216921691909117905561342b806100676000396000f3006080604052600436106100695763ffffffff60e060020a60003504166316114acd811461006e57806369fa8a3814610091578063713b563f146100bf57806383197ef0146100f0578063b5f8558c14610105578063dd00da7c1461011a578063fa89401a1461013b575b600080fd5b34801561007a57600080fd5b5061008f600160a060020a036004351661015c565b005b6100ab600160a060020a03600435811690602435166103fc565b604080519115158252519081900360200190f35b3480156100cb57600080fd5b506100d4611505565b60408051600160a060020a039092168252519081900360200190f35b3480156100fc57600080fd5b5061008f611514565b34801561011157600080fd5b506100d4611732565b34801561012657600080fd5b506100ab600160a060020a0360043516611741565b34801561014757600080fd5b506100ab600160a060020a03600435166129de565b60008054604080517f6f776e6572000000000000000000000000000000000000000000000000000000602080830191909152606060020a330260258301528251601981840301815260399092019283905281518594600160a060020a031693633b7bfda09392909182918401908083835b602083106101ec5780518252601f1990920191602091820191016101cd565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561024d57600080fd5b505af1158015610261573d6000803e3d6000fd5b505050506040513d602081101561027757600080fd5b505115156102cf576040805160e560020a62461bcd02815260206004820152600960248201527f4e6f74206f776e65720000000000000000000000000000000000000000000000604482015290519081900360640190fd5b604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051849350600160a060020a038416916370a082319160248083019260209291908290030181600087803b15801561033357600080fd5b505af1158015610347573d6000803e3d6000fd5b505050506040513d602081101561035d57600080fd5b5051604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018390529051919250600160a060020a0384169163a9059cbb916044808201926020929091908290030181600087803b1580156103cb57600080fd5b505af11580156103df573d6000803e3d6000fd5b505050506040513d60208110156103f557600080fd5b5050505050565b600080808034811061040d57600080fd5b60008054604080517f61737365742e6d616e6167657200000000000000000000000000000000000000602080830191909152600160a060020a038b8116606060020a02602d8401528351808403602101815260419093019384905282518c969591909116936304f49a3a9392909182918401908083835b602083106104a35780518252601f199092019160209182019101610484565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561050457600080fd5b505af1158015610518573d6000803e3d6000fd5b505050506040513d602081101561052e57600080fd5b5051600160a060020a0316141561058f576040805160e560020a62461bcd02815260206004820152600d60248201527f496e76616c696420617373657400000000000000000000000000000000000000604482015290519081900360640190fd5b600054604080516000805160206133e0833981519152602080830191909152600160a060020a038b8116606060020a0260328401528351808403602601815260469093019384905282518c95919091169363a855d4ce9392909182918401908083835b602083106106115780518252601f1990920191602091820191016105f2565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561067257600080fd5b505af1158015610686573d6000803e3d6000fd5b505050506040513d602081101561069c57600080fd5b50514211156106f5576040805160e560020a62461bcd02815260206004820152600d60248201527f5061737420646561646c696e6500000000000000000000000000000000000000604482015290519081900360640190fd5b600054604080517f63726f776473616c652e73746172740000000000000000000000000000000000602080830191909152600160a060020a03858116606060020a02602f84015283518084036023018152604390930193849052825194169363a855d4ce93918291908401908083835b602083106107845780518252601f199092019160209182019101610765565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156107e557600080fd5b505af11580156107f9573d6000803e3d6000fd5b505050506040513d602081101561080f57600080fd5b5051421015610868576040805160e560020a62461bcd02815260206004820152601160248201527f4265666f72652073746172742074696d65000000000000000000000000000000604482015290519081900360640190fd5b600054604080516000805160206133a0833981519152602080830191909152600160a060020a038c8116606060020a0260338401528351808403602701815260479093019384905282518d959190911693633b7bfda09392909182918401908083835b602083106108ea5780518252601f1990920191602091820191016108cb565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561094b57600080fd5b505af115801561095f573d6000803e3d6000fd5b505050506040513d602081101561097557600080fd5b5051156109cc576040805160e560020a62461bcd02815260206004820152601360248201527f43726f776473616c652066696e616c697a656400000000000000000000000000604482015290519081900360640190fd5b33600160a060020a0389161480610b3a575060008054604080517f617070726f76616c000000000000000000000000000000000000000000000000602080830191909152600160a060020a038d8116606060020a9081026028850152338102603c8501523002605084015294357fffffffff000000000000000000000000000000000000000000000000000000001660648301528251808303604801815260689092019283905281519490931693633b7bfda0939192918291908401908083835b60208310610aac5780518252601f199092019160209182019101610a8d565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015610b0d57600080fd5b505af1158015610b21573d6000803e3d6000fd5b505050506040513d6020811015610b3757600080fd5b50515b1515610b4557600080fd5b600054604080517f63726f776473616c652e72656d61696e696e6700000000000000000000000000602080830191909152600160a060020a038d8116606060020a0260338401528351808403602701815260479093019384905282518e9b5094169363a855d4ce93918291908401908083835b60208310610bd75780518252601f199092019160209182019101610bb8565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015610c3857600080fd5b505af1158015610c4c573d6000803e3d6000fd5b505050506040513d6020811015610c6257600080fd5b505194503485111561106957600054604080516000805160206133c08339815191526020808301919091528251808303600c018152602c909201928390528151610d9e94610d8194600160a060020a039091169363a855d4ce93909282918401908083835b60208310610ce65780518252601f199092019160209182019101610cc7565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015610d4757600080fd5b505af1158015610d5b573d6000803e3d6000fd5b505050506040513d6020811015610d7157600080fd5b505160649063ffffffff61331616565b610d9234606463ffffffff61333016565b9063ffffffff61335b16565b600054604080517f63726f776473616c652e72656d61696e696e6700000000000000000000000000602080830191909152600160a060020a038e8116606060020a0260338401528351808403602701815260479093019384905282519599509093169363e2a4853a939192918291908401908083835b60208310610e335780518252601f199092019160209182019101610e14565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020610e73348961337090919063ffffffff16565b6040518363ffffffff1660e060020a02815260040180836000191660001916815260200182815260200192505050600060405180830381600087803b158015610ebb57600080fd5b505af1158015610ecf573d6000803e3d6000fd5b5050505085600160a060020a03166340c10f1989866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b158015610f3657600080fd5b505af1158015610f4a573d6000803e3d6000fd5b505050506040513d6020811015610f6057600080fd5b50511515610fb8576040805160e560020a62461bcd02815260206004820152601760248201527f496e766573746f72206d696e74696e67206661696c6564000000000000000000604482015290519081900360640190fd5b6001546040805160e460020a63068b9627028152600160a060020a038b811660248301528c811660448301526064820188905260a06004830152600f60a48301527f417373657420707572636861736564000000000000000000000000000000000060c4830152915191909216916368b962709160e480830192600092919082900301818387803b15801561104c57600080fd5b505af1158015611060573d6000803e3d6000fd5b505050506114f6565b600054604080516000805160206133c08339815191526020808301919091528251808303600c018152602c9092019283905281516110f1946110e094600160a060020a039091169363a855d4ce939092829184019080838360208310610ce65780518252601f199092019160209182019101610cc7565b610d9287606463ffffffff61333016565b600054604080516000805160206133a0833981519152602080830191909152600160a060020a038e8116606060020a0260338401528351808403602701815260479093019384905282519599509093169363abfdcced939192918291908401908083835b602083106111745780518252601f199092019160209182019101611155565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b1580156111e057600080fd5b505af11580156111f4573d6000803e3d6000fd5b505050506000809054906101000a9004600160a060020a0316600160a060020a031663e2b202bf8a60405160200180807f63726f776473616c652e72656d61696e696e670000000000000000000000000081525060130182600160a060020a0316600160a060020a0316606060020a0281526014019150506040516020818303038152906040526040518082805190602001908083835b602083106112aa5780518252601f19909201916020918201910161128b565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561130f57600080fd5b505af1158015611323573d6000803e3d6000fd5b5050505085600160a060020a03166340c10f1989866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561138a57600080fd5b505af115801561139e573d6000803e3d6000fd5b505050506040513d60208110156113b457600080fd5b5051151561140c576040805160e560020a62461bcd02815260206004820152601760248201527f496e766573746f72206d696e74696e67206661696c6564000000000000000000604482015290519081900360640190fd5b336108fc611420348863ffffffff61337016565b6040518115909202916000818181858888f19350505050158015611448573d6000803e3d6000fd5b506001546040805160e460020a63068b9627028152600160a060020a038b811660248301528c811660448301526064820188905260a06004830152600f60a48301527f417373657420707572636861736564000000000000000000000000000000000060c4830152915191909216916368b962709160e480830192600092919082900301818387803b1580156114dd57600080fd5b505af11580156114f1573d6000803e3d6000fd5b505050505b50600198975050505050505050565b600054600160a060020a031681565b600054604080517f6f776e6572000000000000000000000000000000000000000000000000000000602080830191909152606060020a33026025830152825160198184030181526039909201928390528151600160a060020a0390941693633b7bfda093918291908401908083835b602083106115a25780518252601f199092019160209182019101611583565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561160357600080fd5b505af1158015611617573d6000803e3d6000fd5b505050506040513d602081101561162d57600080fd5b50511515611685576040805160e560020a62461bcd02815260206004820152600960248201527f4e6f74206f776e65720000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6001546040805160e460020a63068b9627028152306024820181905233604483015231606482015260a06004820152601660a48201527f43726f776473616c654554482064657374726f7965640000000000000000000060c48201529051600160a060020a03909216916368b962709160e48082019260009290919082900301818387803b15801561171657600080fd5b505af115801561172a573d6000803e3d6000fd5b503392505050ff5b600154600160a060020a031681565b600080600080600080866000809054906101000a9004600160a060020a0316600160a060020a0316633b7bfda08260405160200180806000805160206133a083398151915281525060130182600160a060020a0316600160a060020a0316606060020a0281526014019150506040516020818303038152906040526040518082805190602001908083835b602083106117eb5780518252601f1990920191602091820191016117cc565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561184c57600080fd5b505af1158015611860573d6000803e3d6000fd5b505050506040513d602081101561187657600080fd5b505115156118ce576040805160e560020a62461bcd02815260206004820152601760248201527f43726f776473616c65206e6f742066696e616c697a6564000000000000000000604482015290519081900360640190fd5b600054604080517f63726f776473616c652e70616964000000000000000000000000000000000000602080830191909152600160a060020a038c8116606060020a02602e8401528351808403602201815260429093019384905282518d959190911693633b7bfda09392909182918401908083835b602083106119625780518252601f199092019160209182019101611943565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156119c357600080fd5b505af11580156119d7573d6000803e3d6000fd5b505050506040513d60208110156119ed57600080fd5b505115611a44576040805160e560020a62461bcd02815260206004820152601660248201527f43726f776473616c65206861642070616964206f757400000000000000000000604482015290519081900360640190fd5b600054604080517f63726f776473616c652e70616964000000000000000000000000000000000000602080830191909152600160a060020a038d8116606060020a02602e84015283518084036022018152604290930193849052825194169363abfdcced93918291908401908083835b60208310611ad35780518252601f199092019160209182019101611ab4565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a028252600482015260016024820152915160448084019550600094509092839003019050818387803b158015611b3f57600080fd5b505af1158015611b53573d6000803e3d6000fd5b5050600054604080517f636f6e74726163740000000000000000000000000000000000000000000000006020808301919091527f41737365744d616e6167657246756e647300000000000000000000000000000060288301528251808303601901815260399092019283905281518f9d50600160a060020a03808f1697506340c10f199650909416936304f49a3a93918291908401908083835b60208310611c0c5780518252601f199092019160209182019101611bed565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015611c6d57600080fd5b505af1158015611c81573d6000803e3d6000fd5b505050506040513d6020811015611c9757600080fd5b81019080805190602001909291905050506000809054906101000a9004600160a060020a0316600160a060020a031663a855d4ce8d60405160200180807f61737365742e6d616e61676572546f6b656e730000000000000000000000000081525060130182600160a060020a0316600160a060020a0316606060020a0281526014019150506040516020818303038152906040526040518082805190602001908083835b60208310611d5a5780518252601f199092019160209182019101611d3b565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015611dbb57600080fd5b505af1158015611dcf573d6000803e3d6000fd5b505050506040513d6020811015611de557600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b158015611e3457600080fd5b505af1158015611e48573d6000803e3d6000fd5b505050506040513d6020811015611e5e57600080fd5b50511515611eb6576040805160e560020a62461bcd02815260206004820152601660248201527f4d616e61676572206d696e74696e67206661696c656400000000000000000000604482015290519081900360640190fd5b600054604080517f706c6174666f726d2e77616c6c657400000000000000000000000000000000006020808301919091528251808303600f018152602f909201928390528151600160a060020a03808d16956340c10f19959116936304f49a3a93909282918401908083835b60208310611f415780518252601f199092019160209182019101611f22565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015611fa257600080fd5b505af1158015611fb6573d6000803e3d6000fd5b505050506040513d6020811015611fcc57600080fd5b81019080805190602001909291905050506000809054906101000a9004600160a060020a0316600160a060020a031663a855d4ce8d60405160200180807f61737365742e706c6174666f726d546f6b656e7300000000000000000000000081525060140182600160a060020a0316600160a060020a0316606060020a0281526014019150506040516020818303038152906040526040518082805190602001908083835b6020831061208f5780518252601f199092019160209182019101612070565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156120f057600080fd5b505af1158015612104573d6000803e3d6000fd5b505050506040513d602081101561211a57600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260248301919091525160448083019260209291908290030181600087803b15801561216957600080fd5b505af115801561217d573d6000803e3d6000fd5b505050506040513d602081101561219357600080fd5b505115156121eb576040805160e560020a62461bcd02815260206004820152601760248201527f506c6174666f726d206d696e74696e67206661696c6564000000000000000000604482015290519081900360640190fd5b86600160a060020a0316637d64bcb46040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561222957600080fd5b505af115801561223d573d6000803e3d6000fd5b505050506040513d602081101561225357600080fd5b505115156122ab576040805160e560020a62461bcd02815260206004820152601460248201527f4d696e74696e67206e6f742066696e6973686564000000000000000000000000604482015290519081900360640190fd5b600054604080517f61737365742e6f70657261746f72000000000000000000000000000000000000602080830191909152600160a060020a038d8116606060020a02602e8401528351808403602201815260429093019384905282519416936304f49a3a93918291908401908083835b6020831061233a5780518252601f19909201916020918201910161231b565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561239b57600080fd5b505af11580156123af573d6000803e3d6000fd5b505050506040513d60208110156123c557600080fd5b5051600054604080517f706c6174666f726d2e77616c6c657400000000000000000000000000000000006020828101919091528251808303600f018152602f909201928390528151949a50600160a060020a03909316936304f49a3a939192918291908401908083835b6020831061244e5780518252601f19909201916020918201910161242f565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b1580156124af57600080fd5b505af11580156124c3573d6000803e3d6000fd5b505050506040513d60208110156124d957600080fd5b50519450600160a060020a038616158015906124fd5750600160a060020a03851615155b1515612579576040805160e560020a62461bcd02815260206004820152602360248201527f4f70657261746f72206f7220706c6174666f726d2077616c6c6574206e6f742060448201527f7365740000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b600054604080517f63726f776473616c652e676f616c000000000000000000000000000000000000602080830191909152600160a060020a038d8116606060020a02602e84015283518084036022018152604290930193849052825194169363a855d4ce93918291908401908083835b602083106126085780518252601f1990920191602091820191016125e9565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561266957600080fd5b505af115801561267d573d6000803e3d6000fd5b505050506040513d602081101561269357600080fd5b5051600054604080516000805160206133c08339815191526020828101919091528251808303600c018152602c9092019283905281519498506127a694600160a060020a039094169363a855d4ce93918291908401908083835b6020831061270c5780518252601f1990920191602091820191016126ed565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561276d57600080fd5b505af1158015612781573d6000803e3d6000fd5b505050506040513d602081101561279757600080fd5b5051859063ffffffff61338216565b604051909350600160a060020a0386169084156108fc029085906000818181858888f193505050501580156127df573d6000803e3d6000fd5b50604051600160a060020a0387169085156108fc029086906000818181858888f19350505050158015612816573d6000803e3d6000fd5b50600054604080517f63726f776473616c652e73746172740000000000000000000000000000000000602080830191909152600160a060020a038d8116606060020a02602f84015283518084036023018152604390930193849052825194169363e2b202bf93918291908401908083835b602083106128a65780518252601f199092019160209182019101612887565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561290b57600080fd5b505af115801561291f573d6000803e3d6000fd5b50506001546040805160e460020a63068b9627028152600160a060020a038e811660248301528b81166044830152606482018a905260a06004830152600c60a48301527f4173736574207061796f7574000000000000000000000000000000000000000060c483015291519190921693506368b96270925060e480830192600092919082900301818387803b1580156129b757600080fd5b505af11580156129cb573d6000803e3d6000fd5b5060019c9b505050505050505050505050565b60008054604080517f7061757365640000000000000000000000000000000000000000000000000000602080830191909152606060020a300260268301528251601a818403018152603a90920192839052815185948594600160a060020a0390911693633b7bfda093909282918401908083835b60208310612a715780518252601f199092019160209182019101612a52565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015612ad257600080fd5b505af1158015612ae6573d6000803e3d6000fd5b505050506040513d6020811015612afc57600080fd5b505115612b53576040805160e560020a62461bcd02815260206004820152600f60248201527f436f6e7472616374207061757365640000000000000000000000000000000000604482015290519081900360640190fd5b60008054604080517f61737365742e6d616e6167657200000000000000000000000000000000000000602080830191909152600160a060020a03898116606060020a02602d8401528351808403602101815260419093019384905282518a969591909116936304f49a3a9392909182918401908083835b60208310612be95780518252601f199092019160209182019101612bca565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015612c4a57600080fd5b505af1158015612c5e573d6000803e3d6000fd5b505050506040513d6020811015612c7457600080fd5b5051600160a060020a03161415612cd5576040805160e560020a62461bcd02815260206004820152600d60248201527f496e76616c696420617373657400000000000000000000000000000000000000604482015290519081900360640190fd5b600054604080516000805160206133e0833981519152602080830191909152600160a060020a03898116606060020a0260328401528351808403602601815260469093019384905282518a95919091169363a855d4ce9392909182918401908083835b60208310612d575780518252601f199092019160209182019101612d38565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015612db857600080fd5b505af1158015612dcc573d6000803e3d6000fd5b505050506040513d6020811015612de257600080fd5b50514211612e3a576040805160e560020a62461bcd02815260206004820152600f60248201527f4265666f726520646561646c696e650000000000000000000000000000000000604482015290519081900360640190fd5b600054604080516000805160206133a0833981519152602080830191909152600160a060020a038a8116606060020a0260338401528351808403602701815260479093019384905282518b959190911693633b7bfda09392909182918401908083835b60208310612ebc5780518252601f199092019160209182019101612e9d565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b158015612f1d57600080fd5b505af1158015612f31573d6000803e3d6000fd5b505050506040513d6020811015612f4757600080fd5b505115612f9e576040805160e560020a62461bcd02815260206004820152601360248201527f43726f776473616c652066696e616c697a656400000000000000000000000000604482015290519081900360640190fd5b600054604080516000805160206133e0833981519152602080830191909152600160a060020a038b8116606060020a02603284015283518084036026018152604690930193849052825194169363a855d4ce93918291908401908083835b6020831061301b5780518252601f199092019160209182019101612ffc565b51815160209384036101000a60001901801990921691161790526040805192909401829003822063ffffffff881660e060020a0283526004830152925160248083019650939450929083900301905081600087803b15801561307c57600080fd5b505af1158015613090573d6000803e3d6000fd5b505050506040513d60208110156130a657600080fd5b505115156130b357600080fd5b600054604080516000805160206133e0833981519152602080830191909152600160a060020a038b8116606060020a02603284015283518084036026018152604690930193849052825194169363e2b202bf93918291908401908083835b602083106131305780518252601f199092019160209182019101613111565b5181516020939093036101000a60001901801990911692169190911790526040805191909301819003812063ffffffff871660e060020a0282526004820152915160248084019550600094509092839003019050818387803b15801561319557600080fd5b505af11580156131a9573d6000803e3d6000fd5b505050508694506132b06064610d9261323a6000809054906101000a9004600160a060020a0316600160a060020a031663a855d4ce60405160200180806000805160206133c0833981519152815250600c01905060405160208183030381529060405260405180828051906020019080838360208310610ce65780518252601f199092019160209182019101610cc7565b88600160a060020a03166318160ddd6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561327857600080fd5b505af115801561328c573d6000803e3d6000fd5b505050506040513d60208110156132a257600080fd5b50519063ffffffff61333016565b935084600160a060020a031663eba74e5c856040518263ffffffff1660e060020a0281526004016000604051808303818588803b1580156132f057600080fd5b505af1158015613304573d6000803e3d6000fd5b5060019b9a5050505050505050505050565b60008282018381101561332557fe5b8091505b5092915050565b6000808315156133435760009150613329565b5082820282848281151561335357fe5b041461332557fe5b6000818381151561336857fe5b049392505050565b60008282111561337c57fe5b50900390565b60006133986133918484613330565b606461335b565b9392505050560063726f776473616c652e66696e616c697a656400000000000000000000000000706c6174666f726d2e666565000000000000000000000000000000000000000063726f776473616c652e646561646c696e650000000000000000000000000000a165627a7a723058205d94a08a0af3de253d61c07a51d891ea669ab58d1e67998ce16eb9413a8e0f7a0029"
}