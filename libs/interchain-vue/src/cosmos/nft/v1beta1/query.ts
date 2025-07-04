import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../base/query/v1beta1/pagination";
import { NFT, NFTAmino, Class, ClassAmino } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export interface QueryBalanceRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "cosmos-sdk/QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponse {
  /**
   * amount is the number of all NFTs of a given class owned by the owner
   */
  amount: bigint;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export interface QueryBalanceResponseAmino {
  /**
   * amount is the number of all NFTs of a given class owned by the owner
   */
  amount: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "cosmos-sdk/QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export interface QueryOwnerRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * id is a unique identifier of the NFT
   */
  id: string;
}
export interface QueryOwnerRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest";
  value: Uint8Array;
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export interface QueryOwnerRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * id is a unique identifier of the NFT
   */
  id: string;
}
export interface QueryOwnerRequestAminoMsg {
  type: "cosmos-sdk/QueryOwnerRequest";
  value: QueryOwnerRequestAmino;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export interface QueryOwnerResponse {
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface QueryOwnerResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse";
  value: Uint8Array;
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export interface QueryOwnerResponseAmino {
  /**
   * owner is the owner address of the nft
   */
  owner: string;
}
export interface QueryOwnerResponseAminoMsg {
  type: "cosmos-sdk/QueryOwnerResponse";
  value: QueryOwnerResponseAmino;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export interface QuerySupplyRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest";
  value: Uint8Array;
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export interface QuerySupplyRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "cosmos-sdk/QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export interface QuerySupplyResponse {
  /**
   * amount is the number of all NFTs from the given class
   */
  amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse";
  value: Uint8Array;
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export interface QuerySupplyResponseAmino {
  /**
   * amount is the number of all NFTs from the given class
   */
  amount: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "cosmos-sdk/QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export interface QueryNFTsRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryNFTsRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest";
  value: Uint8Array;
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export interface QueryNFTsRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * owner is the owner address of the nft
   */
  owner: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryNFTsRequestAminoMsg {
  type: "cosmos-sdk/QueryNFTsRequest";
  value: QueryNFTsRequestAmino;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export interface QueryNFTsResponse {
  /**
   * NFT defines the NFT
   */
  nfts: NFT[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryNFTsResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse";
  value: Uint8Array;
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export interface QueryNFTsResponseAmino {
  /**
   * NFT defines the NFT
   */
  nfts: NFTAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryNFTsResponseAminoMsg {
  type: "cosmos-sdk/QueryNFTsResponse";
  value: QueryNFTsResponseAmino;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export interface QueryNFTRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
  /**
   * id is a unique identifier of the NFT
   */
  id: string;
}
export interface QueryNFTRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest";
  value: Uint8Array;
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export interface QueryNFTRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
  /**
   * id is a unique identifier of the NFT
   */
  id: string;
}
export interface QueryNFTRequestAminoMsg {
  type: "cosmos-sdk/QueryNFTRequest";
  value: QueryNFTRequestAmino;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export interface QueryNFTResponse {
  /**
   * owner is the owner address of the nft
   */
  nft?: NFT;
}
export interface QueryNFTResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse";
  value: Uint8Array;
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export interface QueryNFTResponseAmino {
  /**
   * owner is the owner address of the nft
   */
  nft?: NFTAmino;
}
export interface QueryNFTResponseAminoMsg {
  type: "cosmos-sdk/QueryNFTResponse";
  value: QueryNFTResponseAmino;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export interface QueryClassRequest {
  /**
   * class_id associated with the nft
   */
  classId: string;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest";
  value: Uint8Array;
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export interface QueryClassRequestAmino {
  /**
   * class_id associated with the nft
   */
  class_id: string;
}
export interface QueryClassRequestAminoMsg {
  type: "cosmos-sdk/QueryClassRequest";
  value: QueryClassRequestAmino;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export interface QueryClassResponse {
  /**
   * class defines the class of the nft type.
   */
  class?: Class;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse";
  value: Uint8Array;
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export interface QueryClassResponseAmino {
  /**
   * class defines the class of the nft type.
   */
  class?: ClassAmino;
}
export interface QueryClassResponseAminoMsg {
  type: "cosmos-sdk/QueryClassResponse";
  value: QueryClassResponseAmino;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export interface QueryClassesRequest {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest";
  value: Uint8Array;
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequestAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export interface QueryClassesRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
  type: "cosmos-sdk/QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export interface QueryClassesResponse {
  /**
   * class defines the class of the nft type.
   */
  classes: Class[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse";
  value: Uint8Array;
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponseAmino
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export interface QueryClassesResponseAmino {
  /**
   * class defines the class of the nft type.
   */
  classes: ClassAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
  type: "cosmos-sdk/QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}
/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method
 * @name QueryBalanceRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceRequest
 */
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  aminoType: "cosmos-sdk/QueryBalanceRequest",
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: BigInt(0)
  };
}
/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method
 * @name QueryBalanceResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryBalanceResponse
 */
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  aminoType: "cosmos-sdk/QueryBalanceResponse",
  is(o: any): o is QueryBalanceResponse {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}
/**
 * QueryOwnerRequest is the request type for the Query/Owner RPC method
 * @name QueryOwnerRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerRequest
 */
export const QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  aminoType: "cosmos-sdk/QueryOwnerRequest",
  is(o: any): o is QueryOwnerRequest {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryOwnerRequestAmino {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerRequest): QueryOwnerRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerRequest",
      value: QueryOwnerRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}
/**
 * QueryOwnerResponse is the response type for the Query/Owner RPC method
 * @name QueryOwnerResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryOwnerResponse
 */
export const QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  aminoType: "cosmos-sdk/QueryOwnerResponse",
  is(o: any): o is QueryOwnerResponse {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryOwnerResponseAmino {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerResponse): QueryOwnerResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerResponse",
      value: QueryOwnerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}
/**
 * QuerySupplyRequest is the request type for the Query/Supply RPC method
 * @name QuerySupplyRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyRequest
 */
export const QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  aminoType: "cosmos-sdk/QuerySupplyRequest",
  is(o: any): o is QuerySupplyRequest {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.classId === "string");
  },
  isAmino(o: any): o is QuerySupplyRequestAmino {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyRequest): QuerySupplyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyRequest",
      value: QuerySupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0)
  };
}
/**
 * QuerySupplyResponse is the response type for the Query/Supply RPC method
 * @name QuerySupplyResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QuerySupplyResponse
 */
export const QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  aminoType: "cosmos-sdk/QuerySupplyResponse",
  is(o: any): o is QuerySupplyResponse {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QuerySupplyResponseAmino {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== BigInt(0)) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyResponse): QuerySupplyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyResponse",
      value: QuerySupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: undefined
  };
}
/**
 * QueryNFTstRequest is the request type for the Query/NFTs RPC method
 * @name QueryNFTsRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsRequest
 */
export const QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  aminoType: "cosmos-sdk/QueryNFTsRequest",
  is(o: any): o is QueryNFTsRequest {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryNFTsRequestAmino {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryNFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsRequest): QueryNFTsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsRequestAminoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsRequest): QueryNFTsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsRequest",
      value: QueryNFTsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsRequestProtoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.decode(message.value);
  },
  toProto(message: QueryNFTsRequest): Uint8Array {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: undefined
  };
}
/**
 * QueryNFTsResponse is the response type for the Query/NFTs RPC methods
 * @name QueryNFTsResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTsResponse
 */
export const QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  aminoType: "cosmos-sdk/QueryNFTsResponse",
  is(o: any): o is QueryNFTsResponse {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.is(o.nfts[0])));
  },
  isAmino(o: any): o is QueryNFTsResponseAmino {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.isAmino(o.nfts[0])));
  },
  encode(message: QueryNFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsResponse): QueryNFTsResponseAmino {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
    } else {
      obj.nfts = message.nfts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsResponseAminoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsResponse): QueryNFTsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsResponse",
      value: QueryNFTsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsResponseProtoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.decode(message.value);
  },
  toProto(message: QueryNFTsResponse): Uint8Array {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTsResponse.typeUrl)) {
      return;
    }
    NFT.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}
/**
 * QueryNFTRequest is the request type for the Query/NFT RPC method
 * @name QueryNFTRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTRequest
 */
export const QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  aminoType: "cosmos-sdk/QueryNFTRequest",
  is(o: any): o is QueryNFTRequest {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryNFTRequestAmino {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryNFTRequest): QueryNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest {
    return QueryNFTRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTRequest): QueryNFTRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTRequest",
      value: QueryNFTRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}
/**
 * QueryNFTResponse is the response type for the Query/NFT RPC method
 * @name QueryNFTResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryNFTResponse
 */
export const QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  aminoType: "cosmos-sdk/QueryNFTResponse",
  is(o: any): o is QueryNFTResponse {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNFTResponseAmino {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  encode(message: QueryNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = object.nft !== undefined && object.nft !== null ? NFT.fromPartial(object.nft) : undefined;
    return message;
  },
  fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromAmino(object.nft);
    }
    return message;
  },
  toAmino(message: QueryNFTResponse): QueryNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? NFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse {
    return QueryNFTResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTResponse): QueryNFTResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTResponse",
      value: QueryNFTResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse {
    return QueryNFTResponse.decode(message.value);
  },
  toProto(message: QueryNFTResponse): Uint8Array {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryNFTResponse.typeUrl)) {
      return;
    }
    NFT.registerTypeUrl();
  }
};
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}
/**
 * QueryClassRequest is the request type for the Query/Class RPC method
 * @name QueryClassRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassRequest
 */
export const QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  aminoType: "cosmos-sdk/QueryClassRequest",
  is(o: any): o is QueryClassRequest {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.classId === "string");
  },
  isAmino(o: any): o is QueryClassRequestAmino {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassRequest): QueryClassRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassRequest",
      value: QueryClassRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}
/**
 * QueryClassResponse is the response type for the Query/Class RPC method
 * @name QueryClassResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassResponse
 */
export const QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  aminoType: "cosmos-sdk/QueryClassResponse",
  is(o: any): o is QueryClassResponse {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClassResponseAmino {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    message.class = object.class !== undefined && object.class !== null ? Class.fromPartial(object.class) : undefined;
    return message;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassResponse): QueryClassResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassResponse",
      value: QueryClassResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassResponse.typeUrl)) {
      return;
    }
    Class.registerTypeUrl();
  }
};
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
/**
 * QueryClassesRequest is the request type for the Query/Classes RPC method
 * @name QueryClassesRequest
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesRequest
 */
export const QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  aminoType: "cosmos-sdk/QueryClassesRequest",
  is(o: any): o is QueryClassesRequest {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClassesRequestAmino {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesRequest): QueryClassesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesRequest",
      value: QueryClassesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassesRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
/**
 * QueryClassesResponse is the response type for the Query/Classes RPC method
 * @name QueryClassesResponse
 * @package cosmos.nft.v1beta1
 * @see proto type: cosmos.nft.v1beta1.QueryClassesResponse
 */
export const QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  aminoType: "cosmos-sdk/QueryClassesResponse",
  is(o: any): o is QueryClassesResponse {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.is(o.classes[0])));
  },
  isAmino(o: any): o is QueryClassesResponseAmino {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isAmino(o.classes[0])));
  },
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesResponse): QueryClassesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesResponse",
      value: QueryClassesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(QueryClassesResponse.typeUrl)) {
      return;
    }
    Class.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};