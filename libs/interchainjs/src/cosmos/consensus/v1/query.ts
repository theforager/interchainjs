import { ConsensusParams, ConsensusParamsAmino } from "../../../tendermint/types/params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 * @name QueryParamsRequest
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.consensus.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 * @name QueryParamsRequestAmino
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 * @name QueryParamsResponse
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params are the tendermint consensus params stored in the consensus module.
   * Please note that `params.version` is not populated in this response, it is
   * tracked separately in the x/upgrade module.
   */
  params?: ConsensusParams;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.consensus.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 * @name QueryParamsResponseAmino
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params are the tendermint consensus params stored in the consensus module.
   * Please note that `params.version` is not populated in this response, it is
   * tracked separately in the x/upgrade module.
   */
  params?: ConsensusParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 * @name QueryParamsRequest
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/cosmos.consensus.v1.QueryParamsRequest",
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
      typeUrl: "/cosmos.consensus.v1.QueryParamsRequest",
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
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 * @name QueryParamsResponse
 * @package cosmos.consensus.v1
 * @see proto type: cosmos.consensus.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/cosmos.consensus.v1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      ConsensusParams.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = ConsensusParams.decode(reader, reader.uint32());
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
    message.params = object.params !== undefined && object.params !== null ? ConsensusParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = ConsensusParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? ConsensusParams.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.consensus.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryParamsResponse.typeUrl)) {
      return;
    }
    ConsensusParams.registerTypeUrl();
  }
};