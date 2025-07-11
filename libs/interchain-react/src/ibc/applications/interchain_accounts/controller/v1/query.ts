import { Params, ParamsAmino } from "./controller";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { DeepPartial } from "../../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../../registry";
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export interface QueryInterchainAccountRequest {
  owner: string;
  connectionId: string;
}
export interface QueryInterchainAccountRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountRequestAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export interface QueryInterchainAccountRequestAmino {
  owner: string;
  connection_id: string;
}
export interface QueryInterchainAccountRequestAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountRequest";
  value: QueryInterchainAccountRequestAmino;
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export interface QueryInterchainAccountResponse {
  address: string;
}
export interface QueryInterchainAccountResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
  value: Uint8Array;
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountResponseAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export interface QueryInterchainAccountResponseAmino {
  address: string;
}
export interface QueryInterchainAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryInterchainAccountResponse";
  value: QueryInterchainAccountResponseAmino;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params defines the parameters of the module.
   */
  params?: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryInterchainAccountRequest(): QueryInterchainAccountRequest {
  return {
    owner: "",
    connectionId: ""
  };
}
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export const QueryInterchainAccountRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
  aminoType: "cosmos-sdk/QueryInterchainAccountRequest",
  is(o: any): o is QueryInterchainAccountRequest {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connectionId === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountRequestAmino {
    return o && (o.$typeUrl === QueryInterchainAccountRequest.typeUrl || typeof o.owner === "string" && typeof o.connection_id === "string");
  },
  encode(message: QueryInterchainAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.connectionId !== "") {
      writer.uint32(18).string(message.connectionId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.connectionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInterchainAccountRequest>): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    message.owner = object.owner ?? "";
    message.connectionId = object.connectionId ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountRequestAmino): QueryInterchainAccountRequest {
    const message = createBaseQueryInterchainAccountRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountRequestAminoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountRequestProtoMsg): QueryInterchainAccountRequest {
    return QueryInterchainAccountRequest.decode(message.value);
  },
  toProto(message: QueryInterchainAccountRequest): Uint8Array {
    return QueryInterchainAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountRequest): QueryInterchainAccountRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest",
      value: QueryInterchainAccountRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryInterchainAccountResponse(): QueryInterchainAccountResponse {
  return {
    address: ""
  };
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 * @name QueryInterchainAccountResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export const QueryInterchainAccountResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
  aminoType: "cosmos-sdk/QueryInterchainAccountResponse",
  is(o: any): o is QueryInterchainAccountResponse {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryInterchainAccountResponseAmino {
    return o && (o.$typeUrl === QueryInterchainAccountResponse.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryInterchainAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryInterchainAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryInterchainAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryInterchainAccountResponse>): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryInterchainAccountResponseAmino): QueryInterchainAccountResponse {
    const message = createBaseQueryInterchainAccountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryInterchainAccountResponseAminoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryInterchainAccountResponseProtoMsg): QueryInterchainAccountResponse {
    return QueryInterchainAccountResponse.decode(message.value);
  },
  toProto(message: QueryInterchainAccountResponse): Uint8Array {
    return QueryInterchainAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryInterchainAccountResponse): QueryInterchainAccountResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse",
      value: QueryInterchainAccountResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: undefined
  };
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package ibc.applications.interchain_accounts.controller.v1
 * @see proto type: ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};