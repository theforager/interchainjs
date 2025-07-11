import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * EventSend is emitted on Msg/Send
 * @name EventSend
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventSend
 */
export interface EventSend {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * sender is the address of the owner of nft
   */
  sender: string;
  /**
   * receiver is the receiver address of nft
   */
  receiver: string;
}
export interface EventSendProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventSend";
  value: Uint8Array;
}
/**
 * EventSend is emitted on Msg/Send
 * @name EventSendAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventSend
 */
export interface EventSendAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * sender is the address of the owner of nft
   */
  sender: string;
  /**
   * receiver is the receiver address of nft
   */
  receiver: string;
}
export interface EventSendAminoMsg {
  type: "cosmos-sdk/EventSend";
  value: EventSendAmino;
}
/**
 * EventMint is emitted on Mint
 * @name EventMint
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventMint
 */
export interface EventMint {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface EventMintProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventMint";
  value: Uint8Array;
}
/**
 * EventMint is emitted on Mint
 * @name EventMintAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventMint
 */
export interface EventMintAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface EventMintAminoMsg {
  type: "cosmos-sdk/EventMint";
  value: EventMintAmino;
}
/**
 * EventBurn is emitted on Burn
 * @name EventBurn
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventBurn
 */
export interface EventBurn {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface EventBurnProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn";
  value: Uint8Array;
}
/**
 * EventBurn is emitted on Burn
 * @name EventBurnAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventBurn
 */
export interface EventBurnAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * id is a unique identifier of the nft
   */
  id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface EventBurnAminoMsg {
  type: "cosmos-sdk/EventBurn";
  value: EventBurnAmino;
}
function createBaseEventSend(): EventSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
/**
 * EventSend is emitted on Msg/Send
 * @name EventSend
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventSend
 */
export const EventSend = {
  typeUrl: "/cosmos.nft.v1beta1.EventSend",
  aminoType: "cosmos-sdk/EventSend",
  is(o: any): o is EventSend {
    return o && (o.$typeUrl === EventSend.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  isAmino(o: any): o is EventSendAmino {
    return o && (o.$typeUrl === EventSend.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.sender === "string" && typeof o.receiver === "string");
  },
  encode(message: EventSend, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSend {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventSend>): EventSend {
    const message = createBaseEventSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromAmino(object: EventSendAmino): EventSend {
    const message = createBaseEventSend();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    return message;
  },
  toAmino(message: EventSend): EventSendAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    return obj;
  },
  fromAminoMsg(object: EventSendAminoMsg): EventSend {
    return EventSend.fromAmino(object.value);
  },
  toAminoMsg(message: EventSend): EventSendAminoMsg {
    return {
      type: "cosmos-sdk/EventSend",
      value: EventSend.toAmino(message)
    };
  },
  fromProtoMsg(message: EventSendProtoMsg): EventSend {
    return EventSend.decode(message.value);
  },
  toProto(message: EventSend): Uint8Array {
    return EventSend.encode(message).finish();
  },
  toProtoMsg(message: EventSend): EventSendProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventSend",
      value: EventSend.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventMint(): EventMint {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
/**
 * EventMint is emitted on Mint
 * @name EventMint
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventMint
 */
export const EventMint = {
  typeUrl: "/cosmos.nft.v1beta1.EventMint",
  aminoType: "cosmos-sdk/EventMint",
  is(o: any): o is EventMint {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventMintAmino {
    return o && (o.$typeUrl === EventMint.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: EventMint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventMint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventMint>): EventMint {
    const message = createBaseEventMint();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventMintAmino): EventMint {
    const message = createBaseEventMint();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventMint): EventMintAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventMintAminoMsg): EventMint {
    return EventMint.fromAmino(object.value);
  },
  toAminoMsg(message: EventMint): EventMintAminoMsg {
    return {
      type: "cosmos-sdk/EventMint",
      value: EventMint.toAmino(message)
    };
  },
  fromProtoMsg(message: EventMintProtoMsg): EventMint {
    return EventMint.decode(message.value);
  },
  toProto(message: EventMint): Uint8Array {
    return EventMint.encode(message).finish();
  },
  toProtoMsg(message: EventMint): EventMintProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventMint",
      value: EventMint.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseEventBurn(): EventBurn {
  return {
    classId: "",
    id: "",
    owner: ""
  };
}
/**
 * EventBurn is emitted on Burn
 * @name EventBurn
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.EventBurn
 */
export const EventBurn = {
  typeUrl: "/cosmos.nft.v1beta1.EventBurn",
  aminoType: "cosmos-sdk/EventBurn",
  is(o: any): o is EventBurn {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is EventBurnAmino {
    return o && (o.$typeUrl === EventBurn.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.owner === "string");
  },
  encode(message: EventBurn, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBurn {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurn();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<EventBurn>): EventBurn {
    const message = createBaseEventBurn();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: EventBurnAmino): EventBurn {
    const message = createBaseEventBurn();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: EventBurn): EventBurnAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: EventBurnAminoMsg): EventBurn {
    return EventBurn.fromAmino(object.value);
  },
  toAminoMsg(message: EventBurn): EventBurnAminoMsg {
    return {
      type: "cosmos-sdk/EventBurn",
      value: EventBurn.toAmino(message)
    };
  },
  fromProtoMsg(message: EventBurnProtoMsg): EventBurn {
    return EventBurn.decode(message.value);
  },
  toProto(message: EventBurn): Uint8Array {
    return EventBurn.encode(message).finish();
  },
  toProtoMsg(message: EventBurn): EventBurnProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.EventBurn",
      value: EventBurn.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};