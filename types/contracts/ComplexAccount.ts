/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface ComplexAccountInterface extends utils.Interface {
  functions: {
    "addDeposit()": FunctionFragment;
    "addGuardian(address)": FunctionFragment;
    "addSigner(address)": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "exec(address,uint256,bytes)": FunctionFragment;
    "execBatch(address[],bytes[])": FunctionFragment;
    "execFromEntryPoint(address,uint256,bytes)": FunctionFragment;
    "getAllGaurdians()": FunctionFragment;
    "getAllSigners()": FunctionFragment;
    "getDeposit()": FunctionFragment;
    "gethash(address)": FunctionFragment;
    "guardians(uint256)": FunctionFragment;
    "isGuardian(address)": FunctionFragment;
    "isSigner(address)": FunctionFragment;
    "nonce()": FunctionFragment;
    "recoverWallet(address,bytes[])": FunctionFragment;
    "removeGuardian(address)": FunctionFragment;
    "removeSigner(address)": FunctionFragment;
    "signers(uint256)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "updateEntryPoint(address)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,address,uint256)": FunctionFragment;
    "withdrawDepositTo(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDeposit"
      | "addGuardian"
      | "addSigner"
      | "entryPoint"
      | "exec"
      | "execBatch"
      | "execFromEntryPoint"
      | "getAllGaurdians"
      | "getAllSigners"
      | "getDeposit"
      | "gethash"
      | "guardians"
      | "isGuardian"
      | "isSigner"
      | "nonce"
      | "recoverWallet"
      | "removeGuardian"
      | "removeSigner"
      | "signers"
      | "transfer"
      | "updateEntryPoint"
      | "validateUserOp"
      | "withdrawDepositTo"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execBatch",
    values: [PromiseOrValue<string>[], PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "execFromEntryPoint",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllGaurdians",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllSigners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gethash",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "guardians",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "recoverWallet",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "removeGuardian",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeSigner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "signers",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEntryPoint",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDepositTo",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execBatch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execFromEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllGaurdians",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllSigners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gethash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "guardians", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGuardian", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isSigner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "recoverWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeSigner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "signers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDepositTo",
    data: BytesLike
  ): Result;

  events: {
    "EntryPointChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntryPointChanged"): EventFragment;
}

export interface EntryPointChangedEventObject {
  oldEntryPoint: string;
  newEntryPoint: string;
}
export type EntryPointChangedEvent = TypedEvent<
  [string, string],
  EntryPointChangedEventObject
>;

export type EntryPointChangedEventFilter =
  TypedEventFilter<EntryPointChangedEvent>;

export interface ComplexAccount extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ComplexAccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    exec(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    execFromEntryPoint(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllGaurdians(overrides?: CallOverrides): Promise<[string[]]>;

    getAllSigners(overrides?: CallOverrides): Promise<[string[]]>;

    getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;

    gethash(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;

    guardians(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isGuardian(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    recoverWallet(
      _newSigner: PromiseOrValue<string>,
      _signatures: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    signers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    transfer(
      dest: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateEntryPoint(
      newEntryPoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      aggregator: PromiseOrValue<string>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDeposit(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addGuardian(
    _guardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addSigner(
    _signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  exec(
    dest: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execBatch(
    dest: PromiseOrValue<string>[],
    func: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  execFromEntryPoint(
    dest: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    func: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllGaurdians(overrides?: CallOverrides): Promise<string[]>;

  getAllSigners(overrides?: CallOverrides): Promise<string[]>;

  getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

  gethash(
    _newSigner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  guardians(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  isGuardian(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSigner(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  recoverWallet(
    _newSigner: PromiseOrValue<string>,
    _signatures: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeGuardian(
    _guardian: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeSigner(
    _signer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  signers(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  transfer(
    dest: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateEntryPoint(
    newEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    aggregator: PromiseOrValue<string>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawDepositTo(
    withdrawAddress: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDeposit(overrides?: CallOverrides): Promise<void>;

    addGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addSigner(
      _signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    exec(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    execBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    execFromEntryPoint(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllGaurdians(overrides?: CallOverrides): Promise<string[]>;

    getAllSigners(overrides?: CallOverrides): Promise<string[]>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    gethash(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    guardians(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    isGuardian(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWallet(
      _newSigner: PromiseOrValue<string>,
      _signatures: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeSigner(
      _signer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    signers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    transfer(
      dest: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEntryPoint(
      newEntryPoint: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      aggregator: PromiseOrValue<string>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EntryPointChanged(address,address)"(
      oldEntryPoint?: PromiseOrValue<string> | null,
      newEntryPoint?: PromiseOrValue<string> | null
    ): EntryPointChangedEventFilter;
    EntryPointChanged(
      oldEntryPoint?: PromiseOrValue<string> | null,
      newEntryPoint?: PromiseOrValue<string> | null
    ): EntryPointChangedEventFilter;
  };

  estimateGas: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    exec(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    execFromEntryPoint(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllGaurdians(overrides?: CallOverrides): Promise<BigNumber>;

    getAllSigners(overrides?: CallOverrides): Promise<BigNumber>;

    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    gethash(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    guardians(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGuardian(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    recoverWallet(
      _newSigner: PromiseOrValue<string>,
      _signatures: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    signers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transfer(
      dest: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateEntryPoint(
      newEntryPoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      aggregator: PromiseOrValue<string>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDeposit(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exec(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execBatch(
      dest: PromiseOrValue<string>[],
      func: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    execFromEntryPoint(
      dest: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      func: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllGaurdians(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gethash(
      _newSigner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    guardians(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGuardian(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSigner(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverWallet(
      _newSigner: PromiseOrValue<string>,
      _signatures: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeGuardian(
      _guardian: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeSigner(
      _signer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    signers(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transfer(
      dest: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateEntryPoint(
      newEntryPoint: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      aggregator: PromiseOrValue<string>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawDepositTo(
      withdrawAddress: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
