import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { StoreCodeAuthorization, StoreCodeAuthorizationProtoMsg, ContractExecutionAuthorization, ContractExecutionAuthorizationProtoMsg, ContractMigrationAuthorization, ContractMigrationAuthorizationProtoMsg } from "../../../cosmwasm/wasm/v1/authz";
import { ContractExecutionCompatAuthorization, ContractExecutionCompatAuthorizationProtoMsg } from "../../../injective/wasmx/v1/authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, toTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorization {
  /**
   * Msg, identified by it's type URL, to grant unrestricted permissions to execute
   */
  msg: string;
}
export interface GenericAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization";
  value: Uint8Array;
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export interface GenericAuthorizationAmino {
  /**
   * Msg, identified by it's type URL, to grant unrestricted permissions to execute
   */
  msg: string;
}
export interface GenericAuthorizationAminoMsg {
  type: "cosmos-sdk/GenericAuthorization";
  value: GenericAuthorizationAmino;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name Grant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface Grant {
  authorization?: GenericAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | ContractExecutionCompatAuthorization | Any | undefined;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: Date;
}
export interface GrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.Grant";
  value: Uint8Array;
}
export type GrantEncoded = Omit<Grant, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | StoreCodeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | ContractExecutionCompatAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name GrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export interface GrantAmino {
  authorization?: AnyAmino;
  /**
   * time when the grant will expire and will be pruned. If null, then the grant
   * doesn't have a time expiration (other conditions  in `authorization`
   * may apply to invalidate the grant)
   */
  expiration?: string;
}
export interface GrantAminoMsg {
  type: "cosmos-sdk/Grant";
  value: GrantAmino;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorization {
  granter: string;
  grantee: string;
  authorization?: GenericAuthorization | StoreCodeAuthorization | ContractExecutionAuthorization | ContractMigrationAuthorization | ContractExecutionCompatAuthorization | Any | undefined;
  expiration?: Date;
}
export interface GrantAuthorizationProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization";
  value: Uint8Array;
}
export type GrantAuthorizationEncoded = Omit<GrantAuthorization, "authorization"> & {
  authorization?: GenericAuthorizationProtoMsg | StoreCodeAuthorizationProtoMsg | ContractExecutionAuthorizationProtoMsg | ContractMigrationAuthorizationProtoMsg | ContractExecutionCompatAuthorizationProtoMsg | AnyProtoMsg | undefined;
};
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorizationAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export interface GrantAuthorizationAmino {
  granter: string;
  grantee: string;
  authorization?: AnyAmino;
  expiration?: string;
}
export interface GrantAuthorizationAminoMsg {
  type: "cosmos-sdk/GrantAuthorization";
  value: GrantAuthorizationAmino;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItem
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItem {
  /**
   * msg_type_urls contains the list of TypeURL of a sdk.Msg.
   */
  msgTypeUrls: string[];
}
export interface GrantQueueItemProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem";
  value: Uint8Array;
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItemAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export interface GrantQueueItemAmino {
  /**
   * msg_type_urls contains the list of TypeURL of a sdk.Msg.
   */
  msg_type_urls: string[];
}
export interface GrantQueueItemAminoMsg {
  type: "cosmos-sdk/GrantQueueItem";
  value: GrantQueueItemAmino;
}
function createBaseGenericAuthorization(): GenericAuthorization {
  return {
    msg: ""
  };
}
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 * @name GenericAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GenericAuthorization
 */
export const GenericAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
  aminoType: "cosmos-sdk/GenericAuthorization",
  is(o: any): o is GenericAuthorization {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  isAmino(o: any): o is GenericAuthorizationAmino {
    return o && (o.$typeUrl === GenericAuthorization.typeUrl || typeof o.msg === "string");
  },
  encode(message: GenericAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msg !== "") {
      writer.uint32(10).string(message.msg);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenericAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenericAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenericAuthorization>): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    message.msg = object.msg ?? "";
    return message;
  },
  fromAmino(object: GenericAuthorizationAmino): GenericAuthorization {
    const message = createBaseGenericAuthorization();
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    return message;
  },
  toAmino(message: GenericAuthorization): GenericAuthorizationAmino {
    const obj: any = {};
    obj.msg = message.msg === "" ? undefined : message.msg;
    return obj;
  },
  fromAminoMsg(object: GenericAuthorizationAminoMsg): GenericAuthorization {
    return GenericAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GenericAuthorization): GenericAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/GenericAuthorization",
      value: GenericAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: GenericAuthorizationProtoMsg): GenericAuthorization {
    return GenericAuthorization.decode(message.value);
  },
  toProto(message: GenericAuthorization): Uint8Array {
    return GenericAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GenericAuthorization): GenericAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
      value: GenericAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenericAuthorization.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(GenericAuthorization.typeUrl, GenericAuthorization);
    GlobalDecoderRegistry.registerAminoProtoMapping(GenericAuthorization.aminoType, GenericAuthorization.typeUrl);
  }
};
function createBaseGrant(): Grant {
  return {
    authorization: undefined,
    expiration: undefined
  };
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 * @name Grant
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.Grant
 */
export const Grant = {
  typeUrl: "/cosmos.authz.v1beta1.Grant",
  aminoType: "cosmos-sdk/Grant",
  is(o: any): o is Grant {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  isAmino(o: any): o is GrantAmino {
    return o && o.$typeUrl === Grant.typeUrl;
  },
  encode(message: Grant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(10).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Grant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.authorization = object.authorization !== undefined && object.authorization !== null ? GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: GrantAmino): Grant {
    const message = createBaseGrant();
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: Grant): GrantAmino {
    const obj: any = {};
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAminoMsg): Grant {
    return Grant.fromAmino(object.value);
  },
  toAminoMsg(message: Grant): GrantAminoMsg {
    return {
      type: "cosmos-sdk/Grant",
      value: Grant.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantProtoMsg): Grant {
    return Grant.decode(message.value);
  },
  toProto(message: Grant): Uint8Array {
    return Grant.encode(message).finish();
  },
  toProtoMsg(message: Grant): GrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.Grant",
      value: Grant.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Grant.typeUrl)) {
      return;
    }
    GenericAuthorization.registerTypeUrl();
    StoreCodeAuthorization.registerTypeUrl();
    ContractExecutionAuthorization.registerTypeUrl();
    ContractMigrationAuthorization.registerTypeUrl();
    ContractExecutionCompatAuthorization.registerTypeUrl();
  }
};
function createBaseGrantAuthorization(): GrantAuthorization {
  return {
    granter: "",
    grantee: "",
    authorization: undefined,
    expiration: undefined
  };
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 * @name GrantAuthorization
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantAuthorization
 */
export const GrantAuthorization = {
  typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
  aminoType: "cosmos-sdk/GrantAuthorization",
  is(o: any): o is GrantAuthorization {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  isAmino(o: any): o is GrantAuthorizationAmino {
    return o && (o.$typeUrl === GrantAuthorization.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string");
  },
  encode(message: GrantAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.authorization !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.authorization), writer.uint32(26).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantAuthorization {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantAuthorization();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.authorization = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 4:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantAuthorization>): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.authorization = object.authorization !== undefined && object.authorization !== null ? GlobalDecoderRegistry.fromPartial(object.authorization) : undefined;
    message.expiration = object.expiration ?? undefined;
    return message;
  },
  fromAmino(object: GrantAuthorizationAmino): GrantAuthorization {
    const message = createBaseGrantAuthorization();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = GlobalDecoderRegistry.fromAminoMsg(object.authorization);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromTimestamp(Timestamp.fromAmino(object.expiration));
    }
    return message;
  },
  toAmino(message: GrantAuthorization): GrantAuthorizationAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.authorization = message.authorization ? GlobalDecoderRegistry.toAminoMsg(message.authorization) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(toTimestamp(message.expiration)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GrantAuthorizationAminoMsg): GrantAuthorization {
    return GrantAuthorization.fromAmino(object.value);
  },
  toAminoMsg(message: GrantAuthorization): GrantAuthorizationAminoMsg {
    return {
      type: "cosmos-sdk/GrantAuthorization",
      value: GrantAuthorization.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantAuthorizationProtoMsg): GrantAuthorization {
    return GrantAuthorization.decode(message.value);
  },
  toProto(message: GrantAuthorization): Uint8Array {
    return GrantAuthorization.encode(message).finish();
  },
  toProtoMsg(message: GrantAuthorization): GrantAuthorizationProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
      value: GrantAuthorization.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GrantAuthorization.typeUrl)) {
      return;
    }
    GenericAuthorization.registerTypeUrl();
    StoreCodeAuthorization.registerTypeUrl();
    ContractExecutionAuthorization.registerTypeUrl();
    ContractMigrationAuthorization.registerTypeUrl();
    ContractExecutionCompatAuthorization.registerTypeUrl();
  }
};
function createBaseGrantQueueItem(): GrantQueueItem {
  return {
    msgTypeUrls: []
  };
}
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 * @name GrantQueueItem
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.GrantQueueItem
 */
export const GrantQueueItem = {
  typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
  aminoType: "cosmos-sdk/GrantQueueItem",
  is(o: any): o is GrantQueueItem {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msgTypeUrls) && (!o.msgTypeUrls.length || typeof o.msgTypeUrls[0] === "string"));
  },
  isAmino(o: any): o is GrantQueueItemAmino {
    return o && (o.$typeUrl === GrantQueueItem.typeUrl || Array.isArray(o.msg_type_urls) && (!o.msg_type_urls.length || typeof o.msg_type_urls[0] === "string"));
  },
  encode(message: GrantQueueItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.msgTypeUrls) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GrantQueueItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantQueueItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrls.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GrantQueueItem>): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msgTypeUrls?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantQueueItemAmino): GrantQueueItem {
    const message = createBaseGrantQueueItem();
    message.msgTypeUrls = object.msg_type_urls?.map(e => e) || [];
    return message;
  },
  toAmino(message: GrantQueueItem): GrantQueueItemAmino {
    const obj: any = {};
    if (message.msgTypeUrls) {
      obj.msg_type_urls = message.msgTypeUrls.map(e => e);
    } else {
      obj.msg_type_urls = message.msgTypeUrls;
    }
    return obj;
  },
  fromAminoMsg(object: GrantQueueItemAminoMsg): GrantQueueItem {
    return GrantQueueItem.fromAmino(object.value);
  },
  toAminoMsg(message: GrantQueueItem): GrantQueueItemAminoMsg {
    return {
      type: "cosmos-sdk/GrantQueueItem",
      value: GrantQueueItem.toAmino(message)
    };
  },
  fromProtoMsg(message: GrantQueueItemProtoMsg): GrantQueueItem {
    return GrantQueueItem.decode(message.value);
  },
  toProto(message: GrantQueueItem): Uint8Array {
    return GrantQueueItem.encode(message).finish();
  },
  toProtoMsg(message: GrantQueueItem): GrantQueueItemProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
      value: GrantQueueItem.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};