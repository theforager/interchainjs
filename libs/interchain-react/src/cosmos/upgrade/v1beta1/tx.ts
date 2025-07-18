import { Plan, PlanAmino } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * @name MsgSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgrade {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * plan is the upgrade plan.
   */
  plan: Plan;
}
export interface MsgSoftwareUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * @name MsgSoftwareUpgradeAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export interface MsgSoftwareUpgradeAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
  /**
   * plan is the upgrade plan.
   */
  plan: PlanAmino;
}
export interface MsgSoftwareUpgradeAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgrade";
  value: MsgSoftwareUpgradeAmino;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * @name MsgSoftwareUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponse {}
export interface MsgSoftwareUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * @name MsgSoftwareUpgradeResponseAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export interface MsgSoftwareUpgradeResponseAmino {}
export interface MsgSoftwareUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgradeResponse";
  value: MsgSoftwareUpgradeResponseAmino;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * @name MsgCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgrade {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
  value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * @name MsgCancelUpgradeAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export interface MsgCancelUpgradeAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless overwritten).
   */
  authority: string;
}
export interface MsgCancelUpgradeAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgrade";
  value: MsgCancelUpgradeAmino;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * @name MsgCancelUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponse {}
export interface MsgCancelUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * @name MsgCancelUpgradeResponseAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export interface MsgCancelUpgradeResponseAmino {}
export interface MsgCancelUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgradeResponse";
  value: MsgCancelUpgradeResponseAmino;
}
function createBaseMsgSoftwareUpgrade(): MsgSoftwareUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({})
  };
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 * @name MsgSoftwareUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export const MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  aminoType: "cosmos-sdk/MsgSoftwareUpgrade",
  is(o: any): o is MsgSoftwareUpgrade {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.is(o.plan));
  },
  isAmino(o: any): o is MsgSoftwareUpgradeAmino {
    return o && (o.$typeUrl === MsgSoftwareUpgrade.typeUrl || typeof o.authority === "string" && Plan.isAmino(o.plan));
  },
  encode(message: MsgSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : Plan.toAmino(Plan.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeAminoMsg): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.decode(message.value);
  },
  toProto(message: MsgSoftwareUpgrade): Uint8Array {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgSoftwareUpgrade.typeUrl)) {
      return;
    }
    Plan.registerTypeUrl();
  }
};
function createBaseMsgSoftwareUpgradeResponse(): MsgSoftwareUpgradeResponse {
  return {};
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 * @name MsgSoftwareUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export const MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  aminoType: "cosmos-sdk/MsgSoftwareUpgradeResponse",
  is(o: any): o is MsgSoftwareUpgradeResponse {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSoftwareUpgradeResponseAmino {
    return o && o.$typeUrl === MsgSoftwareUpgradeResponse.typeUrl;
  },
  encode(_: MsgSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
  fromPartial(_: DeepPartial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeResponseAminoMsg): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgSoftwareUpgradeResponse): Uint8Array {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelUpgrade(): MsgCancelUpgrade {
  return {
    authority: ""
  };
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 * @name MsgCancelUpgrade
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export const MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  aminoType: "cosmos-sdk/MsgCancelUpgrade",
  is(o: any): o is MsgCancelUpgrade {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is MsgCancelUpgradeAmino {
    return o && (o.$typeUrl === MsgCancelUpgrade.typeUrl || typeof o.authority === "string");
  },
  encode(message: MsgCancelUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgCancelUpgrade): MsgCancelUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeAminoMsg): MsgCancelUpgrade {
    return MsgCancelUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: MsgCancelUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeProtoMsg): MsgCancelUpgrade {
    return MsgCancelUpgrade.decode(message.value);
  },
  toProto(message: MsgCancelUpgrade): Uint8Array {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCancelUpgradeResponse(): MsgCancelUpgradeResponse {
  return {};
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 * @name MsgCancelUpgradeResponse
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export const MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  aminoType: "cosmos-sdk/MsgCancelUpgradeResponse",
  is(o: any): o is MsgCancelUpgradeResponse {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCancelUpgradeResponseAmino {
    return o && o.$typeUrl === MsgCancelUpgradeResponse.typeUrl;
  },
  encode(_: MsgCancelUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
  fromPartial(_: DeepPartial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  toAmino(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeResponseAminoMsg): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgCancelUpgradeResponse): Uint8Array {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};