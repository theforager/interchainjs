import { ParamChange, ParamChangeAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequest {
  /**
   * subspace defines the module to query the parameter for.
   */
  subspace: string;
  /**
   * key defines the key of the parameter in the subspace.
   */
  key: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
  /**
   * subspace defines the module to query the parameter for.
   */
  subspace: string;
  /**
   * key defines the key of the parameter in the subspace.
   */
  key: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * param defines the queried parameter.
   */
  param: ParamChange;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * param defines the queried parameter.
   */
  param: ParamChangeAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequest {}
export interface QuerySubspacesRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
  value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequestAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export interface QuerySubspacesRequestAmino {}
export interface QuerySubspacesRequestAminoMsg {
  type: "cosmos-sdk/QuerySubspacesRequest";
  value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponseAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export interface QuerySubspacesResponseAmino {
  subspaces: SubspaceAmino[];
}
export interface QuerySubspacesResponseAminoMsg {
  type: "cosmos-sdk/QuerySubspacesResponse";
  value: QuerySubspacesResponseAmino;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name Subspace
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface Subspace {
  subspace: string;
  keys: string[];
}
export interface SubspaceProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.Subspace";
  value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name SubspaceAmino
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export interface SubspaceAmino {
  subspace: string;
  keys: string[];
}
export interface SubspaceAminoMsg {
  type: "cosmos-sdk/Subspace";
  value: SubspaceAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.subspace = message.subspace === "" ? undefined : message.subspace;
    obj.key = message.key === "" ? undefined : message.key;
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
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    param: ParamChange.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.is(o.param));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isAmino(o.param));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
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
          message.param = ParamChange.decode(reader, reader.uint32());
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
    message.param = object.param !== undefined && object.param !== null ? ParamChange.fromPartial(object.param) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromAmino(object.param);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.param = message.param ? ParamChange.toAmino(message.param) : ParamChange.toAmino(ParamChange.fromPartial({}));
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
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    ParamChange.registerTypeUrl();
  }
};
function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {};
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 * @name QuerySubspacesRequest
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesRequest
 */
export const QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  aminoType: "cosmos-sdk/QuerySubspacesRequest",
  is(o: any): o is QuerySubspacesRequest {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySubspacesRequestAmino {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  encode(_: QuerySubspacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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
  fromPartial(_: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  toAmino(_: QuerySubspacesRequest): QuerySubspacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesRequest",
      value: QuerySubspacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto(message: QuerySubspacesRequest): Uint8Array {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: []
  };
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 * @name QuerySubspacesResponse
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.QuerySubspacesResponse
 */
export const QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  aminoType: "cosmos-sdk/QuerySubspacesResponse",
  is(o: any): o is QuerySubspacesResponse {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.is(o.subspaces[0])));
  },
  isAmino(o: any): o is QuerySubspacesResponseAmino {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isAmino(o.subspaces[0])));
  },
  encode(message: QuerySubspacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e) : undefined);
    } else {
      obj.subspaces = message.subspaces;
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesResponse",
      value: QuerySubspacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesResponseProtoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto(message: QuerySubspacesResponse): Uint8Array {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QuerySubspacesResponse.typeUrl)) {
      return;
    }
    Subspace.registerTypeUrl();
  }
};
function createBaseSubspace(): Subspace {
  return {
    subspace: "",
    keys: []
  };
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 * @name Subspace
 * @package cosmos.params.v1beta1
 * @see proto type: cosmos.params.v1beta1.Subspace
 */
export const Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  aminoType: "cosmos-sdk/Subspace",
  is(o: any): o is Subspace {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isAmino(o: any): o is SubspaceAmino {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  encode(message: Subspace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== "") {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Subspace>): Subspace {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SubspaceAmino): Subspace {
    const message = createBaseSubspace();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: Subspace): SubspaceAmino {
    const obj: any = {};
    obj.subspace = message.subspace === "" ? undefined : message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: SubspaceAminoMsg): Subspace {
    return Subspace.fromAmino(object.value);
  },
  toAminoMsg(message: Subspace): SubspaceAminoMsg {
    return {
      type: "cosmos-sdk/Subspace",
      value: Subspace.toAmino(message)
    };
  },
  fromProtoMsg(message: SubspaceProtoMsg): Subspace {
    return Subspace.decode(message.value);
  },
  toProto(message: Subspace): Uint8Array {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message: Subspace): SubspaceProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};