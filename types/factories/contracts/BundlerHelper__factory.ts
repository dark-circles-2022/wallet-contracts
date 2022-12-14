/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  BundlerHelper,
  BundlerHelperInterface,
} from "../../contracts/BundlerHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expectedPaymentGas",
        type: "uint256",
      },
      {
        internalType: "contract EntryPoint",
        name: "ep",
        type: "address",
      },
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
        internalType: "struct UserOperation[]",
        name: "ops",
        type: "tuple[]",
      },
      {
        internalType: "address payable",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "handleOps",
    outputs: [
      {
        internalType: "uint256",
        name: "paid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "errorReason",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061079d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ecff7f9814610030575b600080fd5b61004361003e3660046102be565b61005b565b604051610052939291906103b5565b60405180910390f35b60003a60608261006b838a6103f3565b6040516307eb652360e21b81529091506001600160a01b038087163191908a1690631fad948c906100a4908b908b908b90600401610486565b600060405180830381600087803b1580156100be57600080fd5b505af19250505080156100cf575060015b610106573d8080156100fd576040519150601f19603f3d011682016040523d82523d6000602084013e610102565b606091505b5092505b61011a816001600160a01b038816316105f3565b9450818510156101805761012d8561018d565b6101368361018d565b61013f8661018d565b60405160200161015193929190610606565b60408051601f198184030181529082905262461bcd60e51b8252610177916004016106a0565b60405180910390fd5b5050955095509592505050565b6060816000036101b45750506040805180820190915260018152600360fc1b602082015290565b8160005b81156101de57806101c8816106ba565b91506101d79050600a836106e9565b91506101b8565b60008167ffffffffffffffff8111156101f9576101f96106fd565b6040519080825280601f01601f191660200182016040528015610223576020820181803683370190505b509050815b851561028d57610239600a87610713565b610244906030610727565b60f81b826102518361073a565b9250828151811061026457610264610751565b60200101906001600160f81b031916908160001a905350610286600a876106e9565b9550610228565b50949350505050565b6001600160a01b03811681146102ab57600080fd5b50565b80356102b981610296565b919050565b6000806000806000608086880312156102d657600080fd5b8535945060208601356102e881610296565b9350604086013567ffffffffffffffff8082111561030557600080fd5b818801915088601f83011261031957600080fd5b81358181111561032857600080fd5b8960208260051b850101111561033d57600080fd5b602083019550809450505050606086013561035781610296565b809150509295509295909350565b60005b83811015610380578181015183820152602001610368565b50506000910152565b600081518084526103a1816020860160208601610365565b601f01601f19169290920160200192915050565b8381528260208201526060604082015260006103d46060830184610389565b95945050505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761040a5761040a6103dd565b92915050565b6000808335601e1984360301811261042757600080fd5b830160208101925035905067ffffffffffffffff81111561044757600080fd5b80360382131561045657600080fd5b9250929050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60408082528181018490526000906060808401600587901b850182018885805b8a8110156105ce57888403605f190185528235368d900361015e190181126104cc578283fd5b8c016101606104eb866104de846102ae565b6001600160a01b03169052565b602080830135818801526105018a840184610410565b838c8a0152610513848a01828461045d565b9350505061052389840184610410565b8884038b8a015261053584828461045d565b608086810135908b015260a080870135908b015260c080870135908b015260e080870135908b015261010080870135908b01529350610120915061057d905081850185610410565b898503838b015261058f85828461045d565b94505050506101406105a381850185610410565b9450888403828a01526105b784868361045d565b9983019998505050949094019350506001016104a6565b5050506001600160a01b038716602087015293506105eb92505050565b949350505050565b8181038181111561040a5761040a6103dd565b7f6469646e27742070617920656e6f7567683a207061696420000000000000000081526000845161063e816018850160208901610365565b6901032bc3832b1ba32b2160b51b6018918401918201528451610668816022840160208901610365565b6901033b0b9a83934b1b2960b51b60229290910191820152835161069381602c840160208801610365565b01602c0195945050505050565b6020815260006106b36020830184610389565b9392505050565b6000600182016106cc576106cc6103dd565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826106f8576106f86106d3565b500490565b634e487b7160e01b600052604160045260246000fd5b600082610722576107226106d3565b500690565b8082018082111561040a5761040a6103dd565b600081610749576107496103dd565b506000190190565b634e487b7160e01b600052603260045260246000fdfea264697066735822122005142dcafd5c4c5fb088f6a171af2e79bee08f880793ac3a8a159ca7e6a37eab64736f6c63430008110033";

type BundlerHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BundlerHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BundlerHelper__factory extends ContractFactory {
  constructor(...args: BundlerHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BundlerHelper> {
    return super.deploy(overrides || {}) as Promise<BundlerHelper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BundlerHelper {
    return super.attach(address) as BundlerHelper;
  }
  override connect(signer: Signer): BundlerHelper__factory {
    return super.connect(signer) as BundlerHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BundlerHelperInterface {
    return new utils.Interface(_abi) as BundlerHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BundlerHelper {
    return new Contract(address, _abi, signerOrProvider) as BundlerHelper;
  }
}
