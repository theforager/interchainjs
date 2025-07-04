import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, Params, ParamsAmino } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial } from "../../../../helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 * @name MsgTransfer
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransfer
 */
export interface MsgTransfer {
  /**
   * the port on which the packet will be sent
   */
  sourcePort: string;
  /**
   * the channel by which the packet will be sent
   */
  sourceChannel: string;
  /**
   * token to be transferred
   */
  token: Coin;
  /**
   * the sender address
   */
  sender: string;
  /**
   * the recipient address on the destination chain
   */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
   * If you are sending with IBC v2 protocol, timeout_timestamp must be set, and timeout_height must be omitted.
   */
  timeoutHeight: Height;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
   * If you are sending with IBC v2 protocol, timeout_timestamp must be set.
   */
  timeoutTimestamp: bigint;
  /**
   * optional memo
   */
  memo: string;
  /**
   * optional encoding
   */
  encoding: string;
}
export interface MsgTransferProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
  value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 * @name MsgTransferAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransfer
 */
export interface MsgTransferAmino {
  /**
   * the port on which the packet will be sent
   */
  source_port: string;
  /**
   * the channel by which the packet will be sent
   */
  source_channel: string;
  /**
   * token to be transferred
   */
  token: CoinAmino;
  /**
   * the sender address
   */
  sender: string;
  /**
   * the recipient address on the destination chain
   */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
   * If you are sending with IBC v2 protocol, timeout_timestamp must be set, and timeout_height must be omitted.
   */
  timeout_height: HeightAmino;
  /**
   * Timeout timestamp in absolute nanoseconds since unix epoch.
   * If you are sending with IBC v1 protocol, either timeout_height or timeout_timestamp must be set.
   * If you are sending with IBC v2 protocol, timeout_timestamp must be set.
   */
  timeout_timestamp: string;
  /**
   * optional memo
   */
  memo: string;
  /**
   * optional encoding
   */
  encoding: string;
}
export interface MsgTransferAminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: MsgTransferAmino;
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 * @name MsgTransferResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransferResponse
 */
export interface MsgTransferResponse {
  /**
   * sequence number of the transfer packet sent
   */
  sequence: bigint;
}
export interface MsgTransferResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse";
  value: Uint8Array;
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 * @name MsgTransferResponseAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransferResponse
 */
export interface MsgTransferResponseAmino {
  /**
   * sequence number of the transfer packet sent
   */
  sequence: string;
}
export interface MsgTransferResponseAminoMsg {
  type: "cosmos-sdk/MsgTransferResponse";
  value: MsgTransferResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * signer address
   */
  signer: string;
  /**
   * params defines the transfer parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * signer address
   */
  signer: string;
  /**
   * params defines the transfer parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    sourcePort: "",
    sourceChannel: "",
    token: Coin.fromPartial({}),
    sender: "",
    receiver: "",
    timeoutHeight: Height.fromPartial({}),
    timeoutTimestamp: BigInt(0),
    memo: "",
    encoding: ""
  };
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 * @name MsgTransfer
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransfer
 */
export const MsgTransfer = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
  aminoType: "cosmos-sdk/MsgTransfer",
  is(o: any): o is MsgTransfer {
    return o && (o.$typeUrl === MsgTransfer.typeUrl || typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && Coin.is(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && Height.is(o.timeoutHeight) && typeof o.timeoutTimestamp === "bigint" && typeof o.memo === "string" && typeof o.encoding === "string");
  },
  isAmino(o: any): o is MsgTransferAmino {
    return o && (o.$typeUrl === MsgTransfer.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && Coin.isAmino(o.token) && typeof o.sender === "string" && typeof o.receiver === "string" && Height.isAmino(o.timeout_height) && typeof o.timeout_timestamp === "bigint" && typeof o.memo === "string" && typeof o.encoding === "string");
  },
  encode(message: MsgTransfer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeoutHeight !== undefined) {
      Height.encode(message.timeoutHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(56).uint64(message.timeoutTimestamp);
    }
    if (message.memo !== "") {
      writer.uint32(66).string(message.memo);
    }
    if (message.encoding !== "") {
      writer.uint32(74).string(message.encoding);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourcePort = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeoutHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 8:
          message.memo = reader.string();
          break;
        case 9:
          message.encoding = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Height.fromPartial(object.timeoutHeight) : undefined;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? BigInt(object.timeoutTimestamp.toString()) : BigInt(0);
    message.memo = object.memo ?? "";
    message.encoding = object.encoding ?? "";
    return message;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    const message = createBaseMsgTransfer();
    if (object.source_port !== undefined && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    if (object.token !== undefined && object.token !== null) {
      message.token = Coin.fromAmino(object.token);
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.timeout_height !== undefined && object.timeout_height !== null) {
      message.timeoutHeight = Height.fromAmino(object.timeout_height);
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo;
    }
    if (object.encoding !== undefined && object.encoding !== null) {
      message.encoding = object.encoding;
    }
    return message;
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
    obj.token = message.token ? Coin.toAmino(message.token) : Coin.toAmino(Coin.fromPartial({}));
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.timeout_height = message.timeoutHeight ? Height.toAmino(message.timeoutHeight) : {};
    obj.timeout_timestamp = message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    obj.memo = message.memo === "" ? undefined : message.memo;
    obj.encoding = message.encoding === "" ? undefined : message.encoding;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransfer",
      value: MsgTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgTransfer.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
    Height.registerTypeUrl();
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {
    sequence: BigInt(0)
  };
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 * @name MsgTransferResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgTransferResponse
 */
export const MsgTransferResponse = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
  aminoType: "cosmos-sdk/MsgTransferResponse",
  is(o: any): o is MsgTransferResponse {
    return o && (o.$typeUrl === MsgTransferResponse.typeUrl || typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is MsgTransferResponseAmino {
    return o && (o.$typeUrl === MsgTransferResponse.typeUrl || typeof o.sequence === "bigint");
  },
  encode(message: MsgTransferResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgTransferResponseAmino): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferResponse): MsgTransferResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferResponse",
      value: MsgTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParams
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
  aminoType: "cosmos-sdk/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponse
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};