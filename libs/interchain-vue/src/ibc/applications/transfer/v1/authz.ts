import { Coin, CoinAmino } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * Allocation defines the spend limit for a particular port and channel
 * @name Allocation
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.Allocation
 */
export interface Allocation {
  /**
   * the port on which the packet will be sent
   */
  sourcePort: string;
  /**
   * the channel by which the packet will be sent
   */
  sourceChannel: string;
  /**
   * spend limitation on the channel
   */
  spendLimit: Coin[];
  /**
   * allow list of receivers, an empty allow list permits any receiver address
   */
  allowList: string[];
  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   */
  allowedPacketData: string[];
}
export interface AllocationProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.Allocation";
  value: Uint8Array;
}
/**
 * Allocation defines the spend limit for a particular port and channel
 * @name AllocationAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.Allocation
 */
export interface AllocationAmino {
  /**
   * the port on which the packet will be sent
   */
  source_port: string;
  /**
   * the channel by which the packet will be sent
   */
  source_channel: string;
  /**
   * spend limitation on the channel
   */
  spend_limit: CoinAmino[];
  /**
   * allow list of receivers, an empty allow list permits any receiver address
   */
  allow_list: string[];
  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   */
  allowed_packet_data: string[];
}
export interface AllocationAminoMsg {
  type: "cosmos-sdk/Allocation";
  value: AllocationAmino;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 * @name TransferAuthorization
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.TransferAuthorization
 */
export interface TransferAuthorization {
  /**
   * port and channel amounts
   */
  allocations: Allocation[];
}
export interface TransferAuthorizationProtoMsg {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization";
  value: Uint8Array;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 * @name TransferAuthorizationAmino
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.TransferAuthorization
 */
export interface TransferAuthorizationAmino {
  /**
   * port and channel amounts
   */
  allocations: AllocationAmino[];
}
export interface TransferAuthorizationAminoMsg {
  type: "cosmos-sdk/TransferAuthorization";
  value: TransferAuthorizationAmino;
}
function createBaseAllocation(): Allocation {
  return {
    sourcePort: "",
    sourceChannel: "",
    spendLimit: [],
    allowList: [],
    allowedPacketData: []
  };
}
/**
 * Allocation defines the spend limit for a particular port and channel
 * @name Allocation
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.Allocation
 */
export const Allocation = {
  typeUrl: "/ibc.applications.transfer.v1.Allocation",
  aminoType: "cosmos-sdk/Allocation",
  is(o: any): o is Allocation {
    return o && (o.$typeUrl === Allocation.typeUrl || typeof o.sourcePort === "string" && typeof o.sourceChannel === "string" && Array.isArray(o.spendLimit) && (!o.spendLimit.length || Coin.is(o.spendLimit[0])) && Array.isArray(o.allowList) && (!o.allowList.length || typeof o.allowList[0] === "string") && Array.isArray(o.allowedPacketData) && (!o.allowedPacketData.length || typeof o.allowedPacketData[0] === "string"));
  },
  isAmino(o: any): o is AllocationAmino {
    return o && (o.$typeUrl === Allocation.typeUrl || typeof o.source_port === "string" && typeof o.source_channel === "string" && Array.isArray(o.spend_limit) && (!o.spend_limit.length || Coin.isAmino(o.spend_limit[0])) && Array.isArray(o.allow_list) && (!o.allow_list.length || typeof o.allow_list[0] === "string") && Array.isArray(o.allowed_packet_data) && (!o.allowed_packet_data.length || typeof o.allowed_packet_data[0] === "string"));
  },
  encode(message: Allocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourcePort !== "") {
      writer.uint32(10).string(message.sourcePort);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.allowList) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.allowedPacketData) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Allocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllocation();
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
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.allowList.push(reader.string());
          break;
        case 5:
          message.allowedPacketData.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Allocation>): Allocation {
    const message = createBaseAllocation();
    message.sourcePort = object.sourcePort ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.allowList = object.allowList?.map(e => e) || [];
    message.allowedPacketData = object.allowedPacketData?.map(e => e) || [];
    return message;
  },
  fromAmino(object: AllocationAmino): Allocation {
    const message = createBaseAllocation();
    if (object.source_port !== undefined && object.source_port !== null) {
      message.sourcePort = object.source_port;
    }
    if (object.source_channel !== undefined && object.source_channel !== null) {
      message.sourceChannel = object.source_channel;
    }
    message.spendLimit = object.spend_limit?.map(e => Coin.fromAmino(e)) || [];
    message.allowList = object.allow_list?.map(e => e) || [];
    message.allowedPacketData = object.allowed_packet_data?.map(e => e) || [];
    return message;
  },
  toAmino(message: Allocation): AllocationAmino {
    const obj: any = {};
    obj.source_port = message.sourcePort === "" ? undefined : message.sourcePort;
    obj.source_channel = message.sourceChannel === "" ? undefined : message.sourceChannel;
    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.spend_limit = message.spendLimit;
    }
    if (message.allowList) {
      obj.allow_list = message.allowList.map(e => e);
    } else {
      obj.allow_list = message.allowList;
    }
    if (message.allowedPacketData) {
      obj.allowed_packet_data = message.allowedPacketData.map(e => e);
    } else {
      obj.allowed_packet_data = message.allowedPacketData;
    }
    return obj;
  },
  fromAminoMsg(object: AllocationAminoMsg): Allocation {
    return Allocation.fromAmino(object.value);
  },
  toAminoMsg(message: Allocation): AllocationAminoMsg {
    return {
      type: "cosmos-sdk/Allocation",
      value: Allocation.toAmino(message)
    };
  },
  fromProtoMsg(message: AllocationProtoMsg): Allocation {
    return Allocation.decode(message.value);
  },
  toProto(message: Allocation): Uint8Array {
    return Allocation.encode(message).finish();
  },
  toProtoMsg(message: Allocation): AllocationProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.Allocation",
      value: Allocation.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Allocation.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseTransferAuthorization(): TransferAuthorization {
  return {
    allocations: []
  };
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 * @name TransferAuthorization
 * @package ibc.applications.transfer.v1
 * @see proto type: ibc.applications.transfer.v1.TransferAuthorization
 */
export const TransferAuthorization = {
  typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
  aminoType: "cosmos-sdk/TransferAuthorization",
  is(o: any): o is TransferAuthorization {
    return o && (o.$typeUrl === TransferAuthorization.typeUrl || Array.isArray(o.allocations) && (!o.allocations.length || Allocation.is(o.allocations[0])));
  },
  isAmino(o: any): o is TransferAuthorizationAmino {
    return o && (o.$typeUrl === TransferAuthorization.typeUrl || Array.isArray(o.allocations) && (!o.allocations.length || Allocation.isAmino(o.allocations[0])));
  },
  encode(message: TransferAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allocations) {
      Allocation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransferAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allocations.push(Allocation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TransferAuthorization>): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TransferAuthorizationAmino): TransferAuthorization {
    const message = createBaseTransferAuthorization();
    message.allocations = object.allocations?.map(e => Allocation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TransferAuthorization): TransferAuthorizationAmino {
    const obj: any = {};
    if (message.allocations) {
      obj.allocations = message.allocations.map(e => e ? Allocation.toAmino(e) : undefined);
    } else {
      obj.allocations = message.allocations;
    }
    return obj;
  },
  fromAminoMsg(object: TransferAuthorizationAminoMsg): TransferAuthorization {
    return TransferAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: TransferAuthorization): TransferAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/TransferAuthorization",
      value: TransferAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: TransferAuthorizationProtoMsg): TransferAuthorization {
    return TransferAuthorization.decode(message.value);
  },
  toProto(message: TransferAuthorization): Uint8Array {
    return TransferAuthorization.encode(message).finish();
  },
  toProtoMsg(message: TransferAuthorization): TransferAuthorizationProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.TransferAuthorization",
      value: TransferAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TransferAuthorization.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(TransferAuthorization.typeUrl, TransferAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(TransferAuthorization.aminoType, TransferAuthorization.typeUrl);
    Allocation.registerTypeUrl();
  }
};