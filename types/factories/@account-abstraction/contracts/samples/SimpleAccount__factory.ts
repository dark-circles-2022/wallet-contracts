/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  SimpleAccount,
  SimpleAccountInterface,
} from "../../../../@account-abstraction/contracts/samples/SimpleAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "anOwner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldEntryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "EntryPointChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "exec",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "execBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execFromEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newEntryPoint",
        type: "address",
      },
    ],
    name: "updateEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "aggregator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610fce380380610fce83398101604081905261002f9161008f565b600180546001600160a01b039384166001600160a01b031990911617905560008054919092166c01000000000000000000000000026001600160601b039091161790556100c9565b6001600160a01b038116811461008c57600080fd5b50565b600080604083850312156100a257600080fd5b82516100ad81610077565b60208401519092506100be81610077565b809150509250929050565b610ef6806100d86000396000f3fe6080604052600436106100ab5760003560e01c80638da5cb5b116100645780638da5cb5b14610174578063a9059cbb146101b3578063affed0e0146101d3578063b0d691fe146101f1578063c399ec881461020f578063d0cb75fa1461022457600080fd5b80630565bb67146100b75780630825d1fc146100d95780631b71bb6e1461010c5780634a58db191461012c5780634d44560d1461013457806380c5c7d01461015457600080fd5b366100b257005b600080fd5b3480156100c357600080fd5b506100d76100d2366004610bbf565b610244565b005b3480156100e557600080fd5b506100f96100f4366004610c48565b610293565b6040519081526020015b60405180910390f35b34801561011857600080fd5b506100d7610127366004610caf565b6102da565b6100d76102ee565b34801561014057600080fd5b506100d761014f366004610cd3565b61035f565b34801561016057600080fd5b506100d761016f366004610bbf565b6103db565b34801561018057600080fd5b5060005461019b90600160601b90046001600160a01b031681565b6040516001600160a01b039091168152602001610103565b3480156101bf57600080fd5b506100d76101ce366004610cd3565b6103e3565b3480156101df57600080fd5b506000546001600160601b03166100f9565b3480156101fd57600080fd5b506001546001600160a01b031661019b565b34801561021b57600080fd5b506100f9610426565b34801561023057600080fd5b506100d761023f366004610d44565b6104a9565b61024c6105a9565b61028d848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060392505050565b50505050565b600061029d610673565b6102a88585856106cd565b90506102b76040860186610db0565b90506000036102c9576102c9856107ef565b6102d282610882565b949350505050565b6102e26108cf565b6102eb816108d7565b50565b60006103026001546001600160a01b031690565b6001600160a01b03163460405160006040518083038185875af1925050503d806000811461034c576040519150601f19603f3d011682016040523d82523d6000602084013e610351565b606091505b50509050806102eb57600080fd5b6103676105a9565b6001546001600160a01b031660405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156103bf57600080fd5b505af11580156103d3573d6000803e3d6000fd5b505050505050565b61024c610673565b6103eb6105a9565b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610421573d6000803e3d6000fd5b505050565b600061043a6001546001600160a01b031690565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610480573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a49190610df7565b905090565b6104b16105a9565b8281146104fb5760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b60448201526064015b60405180910390fd5b60005b838110156105a25761059085858381811061051b5761051b610e10565b90506020020160208101906105309190610caf565b600085858581811061054457610544610e10565b90506020028101906105569190610db0565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061060392505050565b8061059a81610e3c565b9150506104fe565b5050505050565b600054600160601b90046001600160a01b03163314806105c857503330145b6106015760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016104f2565b565b600080846001600160a01b0316848460405161061f9190610e55565b60006040518083038185875af1925050503d806000811461065c576040519150601f19603f3d011682016040523d82523d6000602084013e610661565b606091505b5091509150816105a257805160208201fd5b6001546001600160a01b031633146106015760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016104f2565b600080610727846040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905061077761073a610140870187610db0565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506109339050565b600054600160601b90046001600160a01b0390811691161480610798575032155b6107e45760405162461bcd60e51b815260206004820152601860248201527f6163636f756e743a2077726f6e67207369676e6174757265000000000000000060448201526064016104f2565b506000949350505050565b600080546020830135916001600160601b03909116908061080f83610e84565b91906101000a8154816001600160601b0302191690836001600160601b031602179055506001600160601b0316146102eb5760405162461bcd60e51b81526020600482015260166024820152756163636f756e743a20696e76616c6964206e6f6e636560501b60448201526064016104f2565b80156102eb57604051600090339060001990849084818181858888f193505050503d80600081146105a2576040519150601f19603f3d011682016040523d82523d6000602084013e6105a2565b6106016105a9565b6001546040516001600160a01b038084169216907f450909c1478d09248269d4ad4fa8cba61ca3f50faed58c7aedefa51c7f62b83a90600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b60008060006109428585610957565b9150915061094f8161099c565b509392505050565b600080825160410361098d5760208301516040840151606085015160001a61098187828585610ae6565b94509450505050610995565b506000905060025b9250929050565b60008160048111156109b0576109b0610eaa565b036109b85750565b60018160048111156109cc576109cc610eaa565b03610a195760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104f2565b6002816004811115610a2d57610a2d610eaa565b03610a7a5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104f2565b6003816004811115610a8e57610a8e610eaa565b036102eb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104f2565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610b1d5750600090506003610ba1565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610b71573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610b9a57600060019250925050610ba1565b9150600090505b94509492505050565b6001600160a01b03811681146102eb57600080fd5b60008060008060608587031215610bd557600080fd5b8435610be081610baa565b935060208501359250604085013567ffffffffffffffff80821115610c0457600080fd5b818701915087601f830112610c1857600080fd5b813581811115610c2757600080fd5b886020828501011115610c3957600080fd5b95989497505060200194505050565b60008060008060808587031215610c5e57600080fd5b843567ffffffffffffffff811115610c7557600080fd5b85016101608188031215610c8857600080fd5b9350602085013592506040850135610c9f81610baa565b9396929550929360600135925050565b600060208284031215610cc157600080fd5b8135610ccc81610baa565b9392505050565b60008060408385031215610ce657600080fd5b8235610cf181610baa565b946020939093013593505050565b60008083601f840112610d1157600080fd5b50813567ffffffffffffffff811115610d2957600080fd5b6020830191508360208260051b850101111561099557600080fd5b60008060008060408587031215610d5a57600080fd5b843567ffffffffffffffff80821115610d7257600080fd5b610d7e88838901610cff565b90965094506020870135915080821115610d9757600080fd5b50610da487828801610cff565b95989497509550505050565b6000808335601e19843603018112610dc757600080fd5b83018035915067ffffffffffffffff821115610de257600080fd5b60200191503681900382131561099557600080fd5b600060208284031215610e0957600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201610e4e57610e4e610e26565b5060010190565b6000825160005b81811015610e765760208186018101518583015201610e5c565b506000920191825250919050565b60006001600160601b03808316818103610ea057610ea0610e26565b6001019392505050565b634e487b7160e01b600052602160045260246000fdfea26469706673582212202ce9ea7a8be3faaffe87e1465688a1e014380cdb6f5348fcf81b9c96185d16b364736f6c63430008110033";

type SimpleAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleAccount__factory extends ContractFactory {
  constructor(...args: SimpleAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anEntryPoint: PromiseOrValue<string>,
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SimpleAccount> {
    return super.deploy(
      anEntryPoint,
      anOwner,
      overrides || {}
    ) as Promise<SimpleAccount>;
  }
  override getDeployTransaction(
    anEntryPoint: PromiseOrValue<string>,
    anOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anEntryPoint, anOwner, overrides || {});
  }
  override attach(address: string): SimpleAccount {
    return super.attach(address) as SimpleAccount;
  }
  override connect(signer: Signer): SimpleAccount__factory {
    return super.connect(signer) as SimpleAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleAccountInterface {
    return new utils.Interface(_abi) as SimpleAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleAccount {
    return new Contract(address, _abi, signerOrProvider) as SimpleAccount;
  }
}
