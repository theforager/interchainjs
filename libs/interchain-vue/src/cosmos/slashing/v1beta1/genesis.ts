import { Params, ParamsAmino, ValidatorSigningInfo, ValidatorSigningInfoAmino } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the slashing module's genesis state.
 * @name GenesisState
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signingInfos: SigningInfo[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missedBlocks: ValidatorMissedBlocks[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the slashing module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * signing_infos represents a map between validator addresses and their
   * signing infos.
   */
  signing_infos: SigningInfoAmino[];
  /**
   * missed_blocks represents a map between validator addresses and their
   * missed blocks.
   */
  missed_blocks: ValidatorMissedBlocksAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * SigningInfo stores validator signing info of corresponding address.
 * @name SigningInfo
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.SigningInfo
 */
export interface SigningInfo {
  /**
   * address is the validator address.
   */
  address: string;
  /**
   * validator_signing_info represents the signing info of this validator.
   */
  validatorSigningInfo: ValidatorSigningInfo;
}
export interface SigningInfoProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo";
  value: Uint8Array;
}
/**
 * SigningInfo stores validator signing info of corresponding address.
 * @name SigningInfoAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.SigningInfo
 */
export interface SigningInfoAmino {
  /**
   * address is the validator address.
   */
  address: string;
  /**
   * validator_signing_info represents the signing info of this validator.
   */
  validator_signing_info: ValidatorSigningInfoAmino;
}
export interface SigningInfoAminoMsg {
  type: "cosmos-sdk/SigningInfo";
  value: SigningInfoAmino;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 * @name ValidatorMissedBlocks
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export interface ValidatorMissedBlocks {
  /**
   * address is the validator address.
   */
  address: string;
  /**
   * missed_blocks is an array of missed blocks by the validator.
   */
  missedBlocks: MissedBlock[];
}
export interface ValidatorMissedBlocksProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks";
  value: Uint8Array;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 * @name ValidatorMissedBlocksAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export interface ValidatorMissedBlocksAmino {
  /**
   * address is the validator address.
   */
  address: string;
  /**
   * missed_blocks is an array of missed blocks by the validator.
   */
  missed_blocks: MissedBlockAmino[];
}
export interface ValidatorMissedBlocksAminoMsg {
  type: "cosmos-sdk/ValidatorMissedBlocks";
  value: ValidatorMissedBlocksAmino;
}
/**
 * MissedBlock contains height and missed status as boolean.
 * @name MissedBlock
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.MissedBlock
 */
export interface MissedBlock {
  /**
   * index is the height at which the block was missed.
   */
  index: bigint;
  /**
   * missed is the missed status.
   */
  missed: boolean;
}
export interface MissedBlockProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock";
  value: Uint8Array;
}
/**
 * MissedBlock contains height and missed status as boolean.
 * @name MissedBlockAmino
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.MissedBlock
 */
export interface MissedBlockAmino {
  /**
   * index is the height at which the block was missed.
   */
  index: string;
  /**
   * missed is the missed status.
   */
  missed: boolean;
}
export interface MissedBlockAminoMsg {
  type: "cosmos-sdk/MissedBlock";
  value: MissedBlockAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    signingInfos: [],
    missedBlocks: []
  };
}
/**
 * GenesisState defines the slashing module's genesis state.
 * @name GenesisState
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.signingInfos) && (!o.signingInfos.length || SigningInfo.is(o.signingInfos[0])) && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || ValidatorMissedBlocks.is(o.missedBlocks[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.signing_infos) && (!o.signing_infos.length || SigningInfo.isAmino(o.signing_infos[0])) && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || ValidatorMissedBlocks.isAmino(o.missed_blocks[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signingInfos) {
      SigningInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.missedBlocks) {
      ValidatorMissedBlocks.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.signingInfos.push(SigningInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.missedBlocks.push(ValidatorMissedBlocks.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.signingInfos = object.signingInfos?.map(e => SigningInfo.fromPartial(e)) || [];
    message.missedBlocks = object.missedBlocks?.map(e => ValidatorMissedBlocks.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.signingInfos = object.signing_infos?.map(e => SigningInfo.fromAmino(e)) || [];
    message.missedBlocks = object.missed_blocks?.map(e => ValidatorMissedBlocks.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.signingInfos) {
      obj.signing_infos = message.signingInfos.map(e => e ? SigningInfo.toAmino(e) : undefined);
    } else {
      obj.signing_infos = message.signingInfos;
    }
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? ValidatorMissedBlocks.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = message.missedBlocks;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    SigningInfo.registerTypeUrl();
    ValidatorMissedBlocks.registerTypeUrl();
  }
};
function createBaseSigningInfo(): SigningInfo {
  return {
    address: "",
    validatorSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
/**
 * SigningInfo stores validator signing info of corresponding address.
 * @name SigningInfo
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.SigningInfo
 */
export const SigningInfo = {
  typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
  aminoType: "cosmos-sdk/SigningInfo",
  is(o: any): o is SigningInfo {
    return o && (o.$typeUrl === SigningInfo.typeUrl || typeof o.address === "string" && ValidatorSigningInfo.is(o.validatorSigningInfo));
  },
  isAmino(o: any): o is SigningInfoAmino {
    return o && (o.$typeUrl === SigningInfo.typeUrl || typeof o.address === "string" && ValidatorSigningInfo.isAmino(o.validator_signing_info));
  },
  encode(message: SigningInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.validatorSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.validatorSigningInfo, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.validatorSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SigningInfo>): SigningInfo {
    const message = createBaseSigningInfo();
    message.address = object.address ?? "";
    message.validatorSigningInfo = object.validatorSigningInfo !== undefined && object.validatorSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.validatorSigningInfo) : undefined;
    return message;
  },
  fromAmino(object: SigningInfoAmino): SigningInfo {
    const message = createBaseSigningInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.validator_signing_info !== undefined && object.validator_signing_info !== null) {
      message.validatorSigningInfo = ValidatorSigningInfo.fromAmino(object.validator_signing_info);
    }
    return message;
  },
  toAmino(message: SigningInfo): SigningInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.validator_signing_info = message.validatorSigningInfo ? ValidatorSigningInfo.toAmino(message.validatorSigningInfo) : ValidatorSigningInfo.toAmino(ValidatorSigningInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: SigningInfoAminoMsg): SigningInfo {
    return SigningInfo.fromAmino(object.value);
  },
  toAminoMsg(message: SigningInfo): SigningInfoAminoMsg {
    return {
      type: "cosmos-sdk/SigningInfo",
      value: SigningInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: SigningInfoProtoMsg): SigningInfo {
    return SigningInfo.decode(message.value);
  },
  toProto(message: SigningInfo): Uint8Array {
    return SigningInfo.encode(message).finish();
  },
  toProtoMsg(message: SigningInfo): SigningInfoProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
      value: SigningInfo.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SigningInfo.typeUrl)) {
      return;
    }
    ValidatorSigningInfo.registerTypeUrl();
  }
};
function createBaseValidatorMissedBlocks(): ValidatorMissedBlocks {
  return {
    address: "",
    missedBlocks: []
  };
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 * @name ValidatorMissedBlocks
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.ValidatorMissedBlocks
 */
export const ValidatorMissedBlocks = {
  typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
  aminoType: "cosmos-sdk/ValidatorMissedBlocks",
  is(o: any): o is ValidatorMissedBlocks {
    return o && (o.$typeUrl === ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missedBlocks) && (!o.missedBlocks.length || MissedBlock.is(o.missedBlocks[0])));
  },
  isAmino(o: any): o is ValidatorMissedBlocksAmino {
    return o && (o.$typeUrl === ValidatorMissedBlocks.typeUrl || typeof o.address === "string" && Array.isArray(o.missed_blocks) && (!o.missed_blocks.length || MissedBlock.isAmino(o.missed_blocks[0])));
  },
  encode(message: ValidatorMissedBlocks, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.missedBlocks) {
      MissedBlock.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorMissedBlocks {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorMissedBlocks();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.missedBlocks.push(MissedBlock.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValidatorMissedBlocks>): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    message.address = object.address ?? "";
    message.missedBlocks = object.missedBlocks?.map(e => MissedBlock.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ValidatorMissedBlocksAmino): ValidatorMissedBlocks {
    const message = createBaseValidatorMissedBlocks();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.missedBlocks = object.missed_blocks?.map(e => MissedBlock.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ValidatorMissedBlocks): ValidatorMissedBlocksAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.missedBlocks) {
      obj.missed_blocks = message.missedBlocks.map(e => e ? MissedBlock.toAmino(e) : undefined);
    } else {
      obj.missed_blocks = message.missedBlocks;
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorMissedBlocksAminoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorMissedBlocksProtoMsg): ValidatorMissedBlocks {
    return ValidatorMissedBlocks.decode(message.value);
  },
  toProto(message: ValidatorMissedBlocks): Uint8Array {
    return ValidatorMissedBlocks.encode(message).finish();
  },
  toProtoMsg(message: ValidatorMissedBlocks): ValidatorMissedBlocksProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
      value: ValidatorMissedBlocks.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ValidatorMissedBlocks.typeUrl)) {
      return;
    }
    MissedBlock.registerTypeUrl();
  }
};
function createBaseMissedBlock(): MissedBlock {
  return {
    index: BigInt(0),
    missed: false
  };
}
/**
 * MissedBlock contains height and missed status as boolean.
 * @name MissedBlock
 * @package cosmos.slashing.v1beta1
 * @see proto type: cosmos.slashing.v1beta1.MissedBlock
 */
export const MissedBlock = {
  typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
  aminoType: "cosmos-sdk/MissedBlock",
  is(o: any): o is MissedBlock {
    return o && (o.$typeUrl === MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
  },
  isAmino(o: any): o is MissedBlockAmino {
    return o && (o.$typeUrl === MissedBlock.typeUrl || typeof o.index === "bigint" && typeof o.missed === "boolean");
  },
  encode(message: MissedBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).int64(message.index);
    }
    if (message.missed === true) {
      writer.uint32(16).bool(message.missed);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MissedBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissedBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int64();
          break;
        case 2:
          message.missed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MissedBlock>): MissedBlock {
    const message = createBaseMissedBlock();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.missed = object.missed ?? false;
    return message;
  },
  fromAmino(object: MissedBlockAmino): MissedBlock {
    const message = createBaseMissedBlock();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.missed !== undefined && object.missed !== null) {
      message.missed = object.missed;
    }
    return message;
  },
  toAmino(message: MissedBlock): MissedBlockAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.missed = message.missed === false ? undefined : message.missed;
    return obj;
  },
  fromAminoMsg(object: MissedBlockAminoMsg): MissedBlock {
    return MissedBlock.fromAmino(object.value);
  },
  toAminoMsg(message: MissedBlock): MissedBlockAminoMsg {
    return {
      type: "cosmos-sdk/MissedBlock",
      value: MissedBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: MissedBlockProtoMsg): MissedBlock {
    return MissedBlock.decode(message.value);
  },
  toProto(message: MissedBlock): Uint8Array {
    return MissedBlock.encode(message).finish();
  },
  toProtoMsg(message: MissedBlock): MissedBlockProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
      value: MissedBlock.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};