import { IdentifiedChannel, IdentifiedChannelAmino, PacketState, PacketStateAmino } from "./channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
/**
 * GenesisState defines the ibc channel submodule's genesis state.
 * @name GenesisState
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.GenesisState
 */
export interface GenesisState {
  channels: IdentifiedChannel[];
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  sendSequences: PacketSequence[];
  recvSequences: PacketSequence[];
  ackSequences: PacketSequence[];
  /**
   * the sequence for the next generated channel identifier
   */
  nextChannelSequence: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.channel.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ibc channel submodule's genesis state.
 * @name GenesisStateAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.GenesisState
 */
export interface GenesisStateAmino {
  channels: IdentifiedChannelAmino[];
  acknowledgements: PacketStateAmino[];
  commitments: PacketStateAmino[];
  receipts: PacketStateAmino[];
  send_sequences: PacketSequenceAmino[];
  recv_sequences: PacketSequenceAmino[];
  ack_sequences: PacketSequenceAmino[];
  /**
   * the sequence for the next generated channel identifier
   */
  next_channel_sequence: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 * @name PacketSequence
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketSequence
 */
export interface PacketSequence {
  portId: string;
  channelId: string;
  sequence: bigint;
}
export interface PacketSequenceProtoMsg {
  typeUrl: "/ibc.core.channel.v1.PacketSequence";
  value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 * @name PacketSequenceAmino
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketSequence
 */
export interface PacketSequenceAmino {
  port_id: string;
  channel_id: string;
  sequence: string;
}
export interface PacketSequenceAminoMsg {
  type: "cosmos-sdk/PacketSequence";
  value: PacketSequenceAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    channels: [],
    acknowledgements: [],
    commitments: [],
    receipts: [],
    sendSequences: [],
    recvSequences: [],
    ackSequences: [],
    nextChannelSequence: BigInt(0)
  };
}
/**
 * GenesisState defines the ibc channel submodule's genesis state.
 * @name GenesisState
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.is(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || PacketState.is(o.receipts[0])) && Array.isArray(o.sendSequences) && (!o.sendSequences.length || PacketSequence.is(o.sendSequences[0])) && Array.isArray(o.recvSequences) && (!o.recvSequences.length || PacketSequence.is(o.recvSequences[0])) && Array.isArray(o.ackSequences) && (!o.ackSequences.length || PacketSequence.is(o.ackSequences[0])) && typeof o.nextChannelSequence === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.channels) && (!o.channels.length || IdentifiedChannel.isAmino(o.channels[0])) && Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || PacketState.isAmino(o.receipts[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || PacketSequence.isAmino(o.send_sequences[0])) && Array.isArray(o.recv_sequences) && (!o.recv_sequences.length || PacketSequence.isAmino(o.recv_sequences[0])) && Array.isArray(o.ack_sequences) && (!o.ack_sequences.length || PacketSequence.isAmino(o.ack_sequences[0])) && typeof o.next_channel_sequence === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.channels) {
      IdentifiedChannel.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.recvSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ackSequences) {
      PacketSequence.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.nextChannelSequence !== BigInt(0)) {
      writer.uint32(64).uint64(message.nextChannelSequence);
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
          message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
          break;
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 6:
          message.recvSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 7:
          message.ackSequences.push(PacketSequence.decode(reader, reader.uint32()));
          break;
        case 8:
          message.nextChannelSequence = reader.uint64();
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
    message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.recvSequences = object.recvSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.ackSequences = object.ackSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    message.nextChannelSequence = object.nextChannelSequence !== undefined && object.nextChannelSequence !== null ? BigInt(object.nextChannelSequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.channels = object.channels?.map(e => IdentifiedChannel.fromAmino(e)) || [];
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromAmino(e)) || [];
    message.sendSequences = object.send_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.recvSequences = object.recv_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    message.ackSequences = object.ack_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    if (object.next_channel_sequence !== undefined && object.next_channel_sequence !== null) {
      message.nextChannelSequence = BigInt(object.next_channel_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.channels) {
      obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
    } else {
      obj.channels = message.channels;
    }
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.receipts = message.receipts;
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.send_sequences = message.sendSequences;
    }
    if (message.recvSequences) {
      obj.recv_sequences = message.recvSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.recv_sequences = message.recvSequences;
    }
    if (message.ackSequences) {
      obj.ack_sequences = message.ackSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.ack_sequences = message.ackSequences;
    }
    obj.next_channel_sequence = message.nextChannelSequence !== BigInt(0) ? message.nextChannelSequence?.toString() : undefined;
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
      typeUrl: "/ibc.core.channel.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    IdentifiedChannel.registerTypeUrl();
    PacketState.registerTypeUrl();
    PacketSequence.registerTypeUrl();
  }
};
function createBasePacketSequence(): PacketSequence {
  return {
    portId: "",
    channelId: "",
    sequence: BigInt(0)
  };
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 * @name PacketSequence
 * @package ibc.core.channel.v1
 * @see proto type: ibc.core.channel.v1.PacketSequence
 */
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v1.PacketSequence",
  aminoType: "cosmos-sdk/PacketSequence",
  is(o: any): o is PacketSequence {
    return o && (o.$typeUrl === PacketSequence.typeUrl || typeof o.portId === "string" && typeof o.channelId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is PacketSequenceAmino {
    return o && (o.$typeUrl === PacketSequence.typeUrl || typeof o.port_id === "string" && typeof o.channel_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(24).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PacketSequenceAmino): PacketSequence {
    const message = createBasePacketSequence();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PacketSequence): PacketSequenceAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence {
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence {
    return PacketSequence.decode(message.value);
  },
  toProto(message: PacketSequence): Uint8Array {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};