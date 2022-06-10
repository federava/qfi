/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AccQueueQuinaryInterface extends utils.Interface {
  functions: {
    "calcMinHeight()": FunctionFragment;
    "enqueue(uint256)": FunctionFragment;
    "fill()": FunctionFragment;
    "getMainRoot(uint256)": FunctionFragment;
    "getSmallSRTroot()": FunctionFragment;
    "getSrIndices()": FunctionFragment;
    "getSubRoot(uint256)": FunctionFragment;
    "hash2(uint256[2])": FunctionFragment;
    "hash3(uint256[3])": FunctionFragment;
    "hash4(uint256[4])": FunctionFragment;
    "hash5(uint256[5])": FunctionFragment;
    "hashLeftRight(uint256,uint256)": FunctionFragment;
    "hashLevelLeaf(uint256,uint256)": FunctionFragment;
    "insertSubTree(uint256)": FunctionFragment;
    "merge(uint256)": FunctionFragment;
    "mergeSubRoots(uint256)": FunctionFragment;
    "numLeaves()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "sha256Hash(uint256[])": FunctionFragment;
    "subTreesMerged()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treeMerged()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calcMinHeight",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enqueue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fill", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getMainRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSmallSRTroot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSrIndices",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSubRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hash2",
    values: [[BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash3",
    values: [[BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash4",
    values: [[BigNumberish, BigNumberish, BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLevelLeaf",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertSubTree",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "merge", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "mergeSubRoots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "numLeaves", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sha256Hash",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "subTreesMerged",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "treeMerged",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calcMinHeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enqueue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMainRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSmallSRTroot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSrIndices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSubRoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash3", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash4", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLevelLeaf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insertSubTree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "merge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mergeSubRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "numLeaves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sha256Hash", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "subTreesMerged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treeMerged", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AccQueueQuinary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccQueueQuinaryInterface;

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
    calcMinHeight(overrides?: CallOverrides): Promise<[BigNumber]>;

    enqueue(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMainRoot(
      _depth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getSubRoot(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLevelLeaf(
      _level: BigNumberish,
      _leaf: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    insertSubTree(
      _subRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    merge(
      _depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    mergeSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    numLeaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    subTreesMerged(overrides?: CallOverrides): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treeMerged(overrides?: CallOverrides): Promise<[boolean]>;
  };

  calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

  enqueue(
    _leaf: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fill(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMainRoot(
    _depth: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

  getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

  getSubRoot(
    _index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash2(
    array: [BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash3(
    array: [BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash4(
    array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hash5(
    array: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLeftRight(
    _left: BigNumberish,
    _right: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLevelLeaf(
    _level: BigNumberish,
    _leaf: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  insertSubTree(
    _subRoot: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  merge(
    _depth: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  mergeSubRoots(
    _numSrQueueOps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sha256Hash(
    array: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  subTreesMerged(overrides?: CallOverrides): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treeMerged(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(_leaf: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    fill(overrides?: CallOverrides): Promise<void>;

    getMainRoot(
      _depth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    getSrIndices(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;

    getSubRoot(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLevelLeaf(
      _level: BigNumberish,
      _leaf: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insertSubTree(
      _subRoot: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    merge(_depth: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    mergeSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subTreesMerged(overrides?: CallOverrides): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treeMerged(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    calcMinHeight(overrides?: CallOverrides): Promise<BigNumber>;

    enqueue(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMainRoot(
      _depth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<BigNumber>;

    getSrIndices(overrides?: CallOverrides): Promise<BigNumber>;

    getSubRoot(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLevelLeaf(
      _level: BigNumberish,
      _leaf: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insertSubTree(
      _subRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    merge(
      _depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    mergeSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    numLeaves(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    subTreesMerged(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treeMerged(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calcMinHeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enqueue(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fill(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMainRoot(
      _depth: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSmallSRTroot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSrIndices(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSubRoot(
      _index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash2(
      array: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash3(
      array: [BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash4(
      array: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLevelLeaf(
      _level: BigNumberish,
      _leaf: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insertSubTree(
      _subRoot: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    merge(
      _depth: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    mergeSubRoots(
      _numSrQueueOps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    numLeaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sha256Hash(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    subTreesMerged(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treeMerged(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
