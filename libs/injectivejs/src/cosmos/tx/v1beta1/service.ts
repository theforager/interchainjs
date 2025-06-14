import { Tx, TxAmino } from "./tx";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../base/query/v1beta1/pagination";
import { TxResponse, TxResponseAmino, GasInfo, GasInfoAmino, Result, ResultAmino } from "../../base/abci/v1beta1/abci";
import { BlockID, BlockIDAmino } from "../../../tendermint/types/types";
import { Block, BlockAmino } from "../../../tendermint/types/block";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** OrderBy defines the sorting order */
export enum OrderBy {
  /**
   * ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
   * to ASC in this case.
   */
  ORDER_BY_UNSPECIFIED = 0,
  /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
  ORDER_BY_ASC = 1,
  /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
  ORDER_BY_DESC = 2,
  UNRECOGNIZED = -1,
}
export const OrderByAmino = OrderBy;
export function orderByFromJSON(object: any): OrderBy {
  switch (object) {
    case 0:
    case "ORDER_BY_UNSPECIFIED":
      return OrderBy.ORDER_BY_UNSPECIFIED;
    case 1:
    case "ORDER_BY_ASC":
      return OrderBy.ORDER_BY_ASC;
    case 2:
    case "ORDER_BY_DESC":
      return OrderBy.ORDER_BY_DESC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderBy.UNRECOGNIZED;
  }
}
export function orderByToJSON(object: OrderBy): string {
  switch (object) {
    case OrderBy.ORDER_BY_UNSPECIFIED:
      return "ORDER_BY_UNSPECIFIED";
    case OrderBy.ORDER_BY_ASC:
      return "ORDER_BY_ASC";
    case OrderBy.ORDER_BY_DESC:
      return "ORDER_BY_DESC";
    case OrderBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 */
export enum BroadcastMode {
  /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
  BROADCAST_MODE_UNSPECIFIED = 0,
  /**
   * BROADCAST_MODE_BLOCK - DEPRECATED: use BROADCAST_MODE_SYNC instead,
   * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
   */
  BROADCAST_MODE_BLOCK = 1,
  /**
   * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
   * for a CheckTx execution response only.
   */
  BROADCAST_MODE_SYNC = 2,
  /**
   * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
   * returns immediately.
   */
  BROADCAST_MODE_ASYNC = 3,
  UNRECOGNIZED = -1,
}
export const BroadcastModeAmino = BroadcastMode;
export function broadcastModeFromJSON(object: any): BroadcastMode {
  switch (object) {
    case 0:
    case "BROADCAST_MODE_UNSPECIFIED":
      return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
    case 1:
    case "BROADCAST_MODE_BLOCK":
      return BroadcastMode.BROADCAST_MODE_BLOCK;
    case 2:
    case "BROADCAST_MODE_SYNC":
      return BroadcastMode.BROADCAST_MODE_SYNC;
    case 3:
    case "BROADCAST_MODE_ASYNC":
      return BroadcastMode.BROADCAST_MODE_ASYNC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BroadcastMode.UNRECOGNIZED;
  }
}
export function broadcastModeToJSON(object: BroadcastMode): string {
  switch (object) {
    case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
      return "BROADCAST_MODE_UNSPECIFIED";
    case BroadcastMode.BROADCAST_MODE_BLOCK:
      return "BROADCAST_MODE_BLOCK";
    case BroadcastMode.BROADCAST_MODE_SYNC:
      return "BROADCAST_MODE_SYNC";
    case BroadcastMode.BROADCAST_MODE_ASYNC:
      return "BROADCAST_MODE_ASYNC";
    case BroadcastMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventRequest
 */
export interface GetTxsEventRequest {
  /**
   * events is the list of transaction event type.
   * Deprecated post v0.47.x: use query instead, which should contain a valid
   * events query.
   * @deprecated
   */
  events: string[];
  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   * @deprecated
   */
  pagination?: PageRequest;
  orderBy: OrderBy;
  /**
   * page is the page number to query, starts at 1. If not provided, will
   * default to first page.
   */
  page: bigint;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: bigint;
  /**
   * query defines the transaction event query that is proxied to Tendermint's
   * TxSearch RPC method. The query must be valid.
   */
  query: string;
}
export interface GetTxsEventRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest";
  value: Uint8Array;
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventRequest
 */
export interface GetTxsEventRequestAmino {
  /**
   * events is the list of transaction event type.
   * Deprecated post v0.47.x: use query instead, which should contain a valid
   * events query.
   * @deprecated
   */
  events: string[];
  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   * @deprecated
   */
  pagination?: PageRequestAmino;
  order_by: OrderBy;
  /**
   * page is the page number to query, starts at 1. If not provided, will
   * default to first page.
   */
  page: string;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: string;
  /**
   * query defines the transaction event query that is proxied to Tendermint's
   * TxSearch RPC method. The query must be valid.
   */
  query: string;
}
export interface GetTxsEventRequestAminoMsg {
  type: "cosmos-sdk/GetTxsEventRequest";
  value: GetTxsEventRequestAmino;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventResponse
 */
export interface GetTxsEventResponse {
  /**
   * txs is the list of queried transactions.
   */
  txs: Tx[];
  /**
   * tx_responses is the list of queried TxResponses.
   */
  txResponses: TxResponse[];
  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   * @deprecated
   */
  pagination?: PageResponse;
  /**
   * total is total number of results available
   */
  total: bigint;
}
export interface GetTxsEventResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse";
  value: Uint8Array;
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventResponse
 */
export interface GetTxsEventResponseAmino {
  /**
   * txs is the list of queried transactions.
   */
  txs: TxAmino[];
  /**
   * tx_responses is the list of queried TxResponses.
   */
  tx_responses: TxResponseAmino[];
  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   * @deprecated
   */
  pagination?: PageResponseAmino;
  /**
   * total is total number of results available
   */
  total: string;
}
export interface GetTxsEventResponseAminoMsg {
  type: "cosmos-sdk/GetTxsEventResponse";
  value: GetTxsEventResponseAmino;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 * @name BroadcastTxRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxRequest
 */
export interface BroadcastTxRequest {
  /**
   * tx_bytes is the raw transaction.
   */
  txBytes: Uint8Array;
  mode: BroadcastMode;
}
export interface BroadcastTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest";
  value: Uint8Array;
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 * @name BroadcastTxRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxRequest
 */
export interface BroadcastTxRequestAmino {
  /**
   * tx_bytes is the raw transaction.
   */
  tx_bytes: string;
  mode: BroadcastMode;
}
export interface BroadcastTxRequestAminoMsg {
  type: "cosmos-sdk/BroadcastTxRequest";
  value: BroadcastTxRequestAmino;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 * @name BroadcastTxResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxResponse
 */
export interface BroadcastTxResponse {
  /**
   * tx_response is the queried TxResponses.
   */
  txResponse?: TxResponse;
}
export interface BroadcastTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse";
  value: Uint8Array;
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 * @name BroadcastTxResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxResponse
 */
export interface BroadcastTxResponseAmino {
  /**
   * tx_response is the queried TxResponses.
   */
  tx_response?: TxResponseAmino;
}
export interface BroadcastTxResponseAminoMsg {
  type: "cosmos-sdk/BroadcastTxResponse";
  value: BroadcastTxResponseAmino;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 * @name SimulateRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateRequest
 */
export interface SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   * @deprecated
   */
  tx?: Tx;
  /**
   * tx_bytes is the raw transaction.
   */
  txBytes: Uint8Array;
}
export interface SimulateRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest";
  value: Uint8Array;
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 * @name SimulateRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateRequest
 */
export interface SimulateRequestAmino {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   * @deprecated
   */
  tx?: TxAmino;
  /**
   * tx_bytes is the raw transaction.
   */
  tx_bytes: string;
}
export interface SimulateRequestAminoMsg {
  type: "cosmos-sdk/SimulateRequest";
  value: SimulateRequestAmino;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 * @name SimulateResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateResponse
 */
export interface SimulateResponse {
  /**
   * gas_info is the information about gas used in the simulation.
   */
  gasInfo?: GasInfo;
  /**
   * result is the result of the simulation.
   */
  result?: Result;
}
export interface SimulateResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse";
  value: Uint8Array;
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 * @name SimulateResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateResponse
 */
export interface SimulateResponseAmino {
  /**
   * gas_info is the information about gas used in the simulation.
   */
  gas_info?: GasInfoAmino;
  /**
   * result is the result of the simulation.
   */
  result?: ResultAmino;
}
export interface SimulateResponseAminoMsg {
  type: "cosmos-sdk/SimulateResponse";
  value: SimulateResponseAmino;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 * @name GetTxRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxRequest
 */
export interface GetTxRequest {
  /**
   * hash is the tx hash to query, encoded as a hex string.
   */
  hash: string;
}
export interface GetTxRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest";
  value: Uint8Array;
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 * @name GetTxRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxRequest
 */
export interface GetTxRequestAmino {
  /**
   * hash is the tx hash to query, encoded as a hex string.
   */
  hash: string;
}
export interface GetTxRequestAminoMsg {
  type: "cosmos-sdk/GetTxRequest";
  value: GetTxRequestAmino;
}
/**
 * GetTxResponse is the response type for the Service.GetTx method.
 * @name GetTxResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxResponse
 */
export interface GetTxResponse {
  /**
   * tx is the queried transaction.
   */
  tx?: Tx;
  /**
   * tx_response is the queried TxResponses.
   */
  txResponse?: TxResponse;
}
export interface GetTxResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse";
  value: Uint8Array;
}
/**
 * GetTxResponse is the response type for the Service.GetTx method.
 * @name GetTxResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxResponse
 */
export interface GetTxResponseAmino {
  /**
   * tx is the queried transaction.
   */
  tx?: TxAmino;
  /**
   * tx_response is the queried TxResponses.
   */
  tx_response?: TxResponseAmino;
}
export interface GetTxResponseAminoMsg {
  type: "cosmos-sdk/GetTxResponse";
  value: GetTxResponseAmino;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * @name GetBlockWithTxsRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export interface GetBlockWithTxsRequest {
  /**
   * height is the height of the block to query.
   */
  height: bigint;
  /**
   * pagination defines a pagination for the request.
   */
  pagination?: PageRequest;
}
export interface GetBlockWithTxsRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * @name GetBlockWithTxsRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export interface GetBlockWithTxsRequestAmino {
  /**
   * height is the height of the block to query.
   */
  height: string;
  /**
   * pagination defines a pagination for the request.
   */
  pagination?: PageRequestAmino;
}
export interface GetBlockWithTxsRequestAminoMsg {
  type: "cosmos-sdk/GetBlockWithTxsRequest";
  value: GetBlockWithTxsRequestAmino;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * @name GetBlockWithTxsResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export interface GetBlockWithTxsResponse {
  /**
   * txs are the transactions in the block.
   */
  txs: Tx[];
  blockId?: BlockID;
  block?: Block;
  /**
   * pagination defines a pagination for the response.
   */
  pagination?: PageResponse;
}
export interface GetBlockWithTxsResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse";
  value: Uint8Array;
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * @name GetBlockWithTxsResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export interface GetBlockWithTxsResponseAmino {
  /**
   * txs are the transactions in the block.
   */
  txs: TxAmino[];
  block_id?: BlockIDAmino;
  block?: BlockAmino;
  /**
   * pagination defines a pagination for the response.
   */
  pagination?: PageResponseAmino;
}
export interface GetBlockWithTxsResponseAminoMsg {
  type: "cosmos-sdk/GetBlockWithTxsResponse";
  value: GetBlockWithTxsResponseAmino;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * @name TxDecodeRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeRequest
 */
export interface TxDecodeRequest {
  /**
   * tx_bytes is the raw transaction.
   */
  txBytes: Uint8Array;
}
export interface TxDecodeRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest";
  value: Uint8Array;
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * @name TxDecodeRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeRequest
 */
export interface TxDecodeRequestAmino {
  /**
   * tx_bytes is the raw transaction.
   */
  tx_bytes: string;
}
export interface TxDecodeRequestAminoMsg {
  type: "cosmos-sdk/TxDecodeRequest";
  value: TxDecodeRequestAmino;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * @name TxDecodeResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeResponse
 */
export interface TxDecodeResponse {
  /**
   * tx is the decoded transaction.
   */
  tx?: Tx;
}
export interface TxDecodeResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse";
  value: Uint8Array;
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * @name TxDecodeResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeResponse
 */
export interface TxDecodeResponseAmino {
  /**
   * tx is the decoded transaction.
   */
  tx?: TxAmino;
}
export interface TxDecodeResponseAminoMsg {
  type: "cosmos-sdk/TxDecodeResponse";
  value: TxDecodeResponseAmino;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * @name TxEncodeRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeRequest
 */
export interface TxEncodeRequest {
  /**
   * tx is the transaction to encode.
   */
  tx?: Tx;
}
export interface TxEncodeRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest";
  value: Uint8Array;
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * @name TxEncodeRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeRequest
 */
export interface TxEncodeRequestAmino {
  /**
   * tx is the transaction to encode.
   */
  tx?: TxAmino;
}
export interface TxEncodeRequestAminoMsg {
  type: "cosmos-sdk/TxEncodeRequest";
  value: TxEncodeRequestAmino;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * @name TxEncodeResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeResponse
 */
export interface TxEncodeResponse {
  /**
   * tx_bytes is the encoded transaction bytes.
   */
  txBytes: Uint8Array;
}
export interface TxEncodeResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse";
  value: Uint8Array;
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * @name TxEncodeResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeResponse
 */
export interface TxEncodeResponseAmino {
  /**
   * tx_bytes is the encoded transaction bytes.
   */
  tx_bytes: string;
}
export interface TxEncodeResponseAminoMsg {
  type: "cosmos-sdk/TxEncodeResponse";
  value: TxEncodeResponseAmino;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export interface TxEncodeAminoRequest {
  aminoJson: string;
}
export interface TxEncodeAminoRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest";
  value: Uint8Array;
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export interface TxEncodeAminoRequestAmino {
  amino_json: string;
}
export interface TxEncodeAminoRequestAminoMsg {
  type: "cosmos-sdk/TxEncodeAminoRequest";
  value: TxEncodeAminoRequestAmino;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export interface TxEncodeAminoResponse {
  aminoBinary: Uint8Array;
}
export interface TxEncodeAminoResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse";
  value: Uint8Array;
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export interface TxEncodeAminoResponseAmino {
  amino_binary: string;
}
export interface TxEncodeAminoResponseAminoMsg {
  type: "cosmos-sdk/TxEncodeAminoResponse";
  value: TxEncodeAminoResponseAmino;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export interface TxDecodeAminoRequest {
  aminoBinary: Uint8Array;
}
export interface TxDecodeAminoRequestProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest";
  value: Uint8Array;
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoRequestAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export interface TxDecodeAminoRequestAmino {
  amino_binary: string;
}
export interface TxDecodeAminoRequestAminoMsg {
  type: "cosmos-sdk/TxDecodeAminoRequest";
  value: TxDecodeAminoRequestAmino;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export interface TxDecodeAminoResponse {
  aminoJson: string;
}
export interface TxDecodeAminoResponseProtoMsg {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse";
  value: Uint8Array;
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoResponseAmino
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export interface TxDecodeAminoResponseAmino {
  amino_json: string;
}
export interface TxDecodeAminoResponseAminoMsg {
  type: "cosmos-sdk/TxDecodeAminoResponse";
  value: TxDecodeAminoResponseAmino;
}
function createBaseGetTxsEventRequest(): GetTxsEventRequest {
  return {
    events: [],
    pagination: undefined,
    orderBy: 0,
    page: BigInt(0),
    limit: BigInt(0),
    query: ""
  };
}
/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventRequest
 */
export const GetTxsEventRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
  aminoType: "cosmos-sdk/GetTxsEventRequest",
  is(o: any): o is GetTxsEventRequest {
    return o && (o.$typeUrl === GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && isSet(o.orderBy) && typeof o.page === "bigint" && typeof o.limit === "bigint" && typeof o.query === "string");
  },
  isAmino(o: any): o is GetTxsEventRequestAmino {
    return o && (o.$typeUrl === GetTxsEventRequest.typeUrl || Array.isArray(o.events) && (!o.events.length || typeof o.events[0] === "string") && isSet(o.order_by) && typeof o.page === "bigint" && typeof o.limit === "bigint" && typeof o.query === "string");
  },
  encode(message: GetTxsEventRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.events) {
      writer.uint32(10).string(v!);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderBy !== 0) {
      writer.uint32(24).int32(message.orderBy);
    }
    if (message.page !== BigInt(0)) {
      writer.uint32(32).uint64(message.page);
    }
    if (message.limit !== BigInt(0)) {
      writer.uint32(40).uint64(message.limit);
    }
    if (message.query !== "") {
      writer.uint32(50).string(message.query);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(reader.string());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderBy = reader.int32() as any;
          break;
        case 4:
          message.page = reader.uint64();
          break;
        case 5:
          message.limit = reader.uint64();
          break;
        case 6:
          message.query = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventRequest>): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.orderBy = object.orderBy ?? 0;
    message.page = object.page !== undefined && object.page !== null ? BigInt(object.page.toString()) : BigInt(0);
    message.limit = object.limit !== undefined && object.limit !== null ? BigInt(object.limit.toString()) : BigInt(0);
    message.query = object.query ?? "";
    return message;
  },
  fromAmino(object: GetTxsEventRequestAmino): GetTxsEventRequest {
    const message = createBaseGetTxsEventRequest();
    message.events = object.events?.map(e => e) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.order_by !== undefined && object.order_by !== null) {
      message.orderBy = object.order_by;
    }
    if (object.page !== undefined && object.page !== null) {
      message.page = BigInt(object.page);
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = BigInt(object.limit);
    }
    if (object.query !== undefined && object.query !== null) {
      message.query = object.query;
    }
    return message;
  },
  toAmino(message: GetTxsEventRequest): GetTxsEventRequestAmino {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map(e => e);
    } else {
      obj.events = message.events;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.order_by = message.orderBy === 0 ? undefined : message.orderBy;
    obj.page = message.page !== BigInt(0) ? message.page?.toString() : undefined;
    obj.limit = message.limit !== BigInt(0) ? message.limit?.toString() : undefined;
    obj.query = message.query === "" ? undefined : message.query;
    return obj;
  },
  fromAminoMsg(object: GetTxsEventRequestAminoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventRequest): GetTxsEventRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventRequest",
      value: GetTxsEventRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventRequestProtoMsg): GetTxsEventRequest {
    return GetTxsEventRequest.decode(message.value);
  },
  toProto(message: GetTxsEventRequest): Uint8Array {
    return GetTxsEventRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventRequest): GetTxsEventRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
      value: GetTxsEventRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetTxsEventRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseGetTxsEventResponse(): GetTxsEventResponse {
  return {
    txs: [],
    txResponses: [],
    pagination: undefined,
    total: BigInt(0)
  };
}
/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 * @name GetTxsEventResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxsEventResponse
 */
export const GetTxsEventResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
  aminoType: "cosmos-sdk/GetTxsEventResponse",
  is(o: any): o is GetTxsEventResponse {
    return o && (o.$typeUrl === GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.is(o.txs[0])) && Array.isArray(o.txResponses) && (!o.txResponses.length || TxResponse.is(o.txResponses[0])) && typeof o.total === "bigint");
  },
  isAmino(o: any): o is GetTxsEventResponseAmino {
    return o && (o.$typeUrl === GetTxsEventResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isAmino(o.txs[0])) && Array.isArray(o.tx_responses) && (!o.tx_responses.length || TxResponse.isAmino(o.tx_responses[0])) && typeof o.total === "bigint");
  },
  encode(message: GetTxsEventResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.txResponses) {
      TxResponse.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    if (message.total !== BigInt(0)) {
      writer.uint32(32).uint64(message.total);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxsEventResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxsEventResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.txResponses.push(TxResponse.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 4:
          message.total = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxsEventResponse>): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.txResponses = object.txResponses?.map(e => TxResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GetTxsEventResponseAmino): GetTxsEventResponse {
    const message = createBaseGetTxsEventResponse();
    message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
    message.txResponses = object.tx_responses?.map(e => TxResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    return message;
  },
  toAmino(message: GetTxsEventResponse): GetTxsEventResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    if (message.txResponses) {
      obj.tx_responses = message.txResponses.map(e => e ? TxResponse.toAmino(e) : undefined);
    } else {
      obj.tx_responses = message.txResponses;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.total = message.total !== BigInt(0) ? message.total?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxsEventResponseAminoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxsEventResponse): GetTxsEventResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxsEventResponse",
      value: GetTxsEventResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxsEventResponseProtoMsg): GetTxsEventResponse {
    return GetTxsEventResponse.decode(message.value);
  },
  toProto(message: GetTxsEventResponse): Uint8Array {
    return GetTxsEventResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxsEventResponse): GetTxsEventResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
      value: GetTxsEventResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetTxsEventResponse.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
    TxResponse.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseBroadcastTxRequest(): BroadcastTxRequest {
  return {
    txBytes: new Uint8Array(),
    mode: 0
  };
}
/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 * @name BroadcastTxRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxRequest
 */
export const BroadcastTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
  aminoType: "cosmos-sdk/BroadcastTxRequest",
  is(o: any): o is BroadcastTxRequest {
    return o && (o.$typeUrl === BroadcastTxRequest.typeUrl || (o.txBytes instanceof Uint8Array || typeof o.txBytes === "string") && isSet(o.mode));
  },
  isAmino(o: any): o is BroadcastTxRequestAmino {
    return o && (o.$typeUrl === BroadcastTxRequest.typeUrl || (o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string") && isSet(o.mode));
  },
  encode(message: BroadcastTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    if (message.mode !== 0) {
      writer.uint32(16).int32(message.mode);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        case 2:
          message.mode = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BroadcastTxRequest>): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    message.mode = object.mode ?? 0;
    return message;
  },
  fromAmino(object: BroadcastTxRequestAmino): BroadcastTxRequest {
    const message = createBaseBroadcastTxRequest();
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    if (object.mode !== undefined && object.mode !== null) {
      message.mode = object.mode;
    }
    return message;
  },
  toAmino(message: BroadcastTxRequest): BroadcastTxRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    obj.mode = message.mode === 0 ? undefined : message.mode;
    return obj;
  },
  fromAminoMsg(object: BroadcastTxRequestAminoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxRequest): BroadcastTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxRequest",
      value: BroadcastTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxRequestProtoMsg): BroadcastTxRequest {
    return BroadcastTxRequest.decode(message.value);
  },
  toProto(message: BroadcastTxRequest): Uint8Array {
    return BroadcastTxRequest.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxRequest): BroadcastTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
      value: BroadcastTxRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseBroadcastTxResponse(): BroadcastTxResponse {
  return {
    txResponse: undefined
  };
}
/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 * @name BroadcastTxResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.BroadcastTxResponse
 */
export const BroadcastTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
  aminoType: "cosmos-sdk/BroadcastTxResponse",
  is(o: any): o is BroadcastTxResponse {
    return o && o.$typeUrl === BroadcastTxResponse.typeUrl;
  },
  isAmino(o: any): o is BroadcastTxResponseAmino {
    return o && o.$typeUrl === BroadcastTxResponse.typeUrl;
  },
  encode(message: BroadcastTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BroadcastTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBroadcastTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BroadcastTxResponse>): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  },
  fromAmino(object: BroadcastTxResponseAmino): BroadcastTxResponse {
    const message = createBaseBroadcastTxResponse();
    if (object.tx_response !== undefined && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message: BroadcastTxResponse): BroadcastTxResponseAmino {
    const obj: any = {};
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: BroadcastTxResponseAminoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: BroadcastTxResponse): BroadcastTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/BroadcastTxResponse",
      value: BroadcastTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: BroadcastTxResponseProtoMsg): BroadcastTxResponse {
    return BroadcastTxResponse.decode(message.value);
  },
  toProto(message: BroadcastTxResponse): Uint8Array {
    return BroadcastTxResponse.encode(message).finish();
  },
  toProtoMsg(message: BroadcastTxResponse): BroadcastTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
      value: BroadcastTxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BroadcastTxResponse.typeUrl)) {
      return;
    }
    TxResponse.registerTypeUrl();
  }
};
function createBaseSimulateRequest(): SimulateRequest {
  return {
    tx: undefined,
    txBytes: new Uint8Array()
  };
}
/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 * @name SimulateRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateRequest
 */
export const SimulateRequest = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
  aminoType: "cosmos-sdk/SimulateRequest",
  is(o: any): o is SimulateRequest {
    return o && (o.$typeUrl === SimulateRequest.typeUrl || o.txBytes instanceof Uint8Array || typeof o.txBytes === "string");
  },
  isAmino(o: any): o is SimulateRequestAmino {
    return o && (o.$typeUrl === SimulateRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
  },
  encode(message: SimulateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txBytes.length !== 0) {
      writer.uint32(18).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateRequest>): SimulateRequest {
    const message = createBaseSimulateRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: SimulateRequestAmino): SimulateRequest {
    const message = createBaseSimulateRequest();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message: SimulateRequest): SimulateRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulateRequestAminoMsg): SimulateRequest {
    return SimulateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateRequest): SimulateRequestAminoMsg {
    return {
      type: "cosmos-sdk/SimulateRequest",
      value: SimulateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateRequestProtoMsg): SimulateRequest {
    return SimulateRequest.decode(message.value);
  },
  toProto(message: SimulateRequest): Uint8Array {
    return SimulateRequest.encode(message).finish();
  },
  toProtoMsg(message: SimulateRequest): SimulateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
      value: SimulateRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SimulateRequest.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
  }
};
function createBaseSimulateResponse(): SimulateResponse {
  return {
    gasInfo: undefined,
    result: undefined
  };
}
/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 * @name SimulateResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.SimulateResponse
 */
export const SimulateResponse = {
  typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
  aminoType: "cosmos-sdk/SimulateResponse",
  is(o: any): o is SimulateResponse {
    return o && o.$typeUrl === SimulateResponse.typeUrl;
  },
  isAmino(o: any): o is SimulateResponseAmino {
    return o && o.$typeUrl === SimulateResponse.typeUrl;
  },
  encode(message: SimulateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gasInfo !== undefined) {
      GasInfo.encode(message.gasInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SimulateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimulateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gasInfo = GasInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = Result.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SimulateResponse>): SimulateResponse {
    const message = createBaseSimulateResponse();
    message.gasInfo = object.gasInfo !== undefined && object.gasInfo !== null ? GasInfo.fromPartial(object.gasInfo) : undefined;
    message.result = object.result !== undefined && object.result !== null ? Result.fromPartial(object.result) : undefined;
    return message;
  },
  fromAmino(object: SimulateResponseAmino): SimulateResponse {
    const message = createBaseSimulateResponse();
    if (object.gas_info !== undefined && object.gas_info !== null) {
      message.gasInfo = GasInfo.fromAmino(object.gas_info);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromAmino(object.result);
    }
    return message;
  },
  toAmino(message: SimulateResponse): SimulateResponseAmino {
    const obj: any = {};
    obj.gas_info = message.gasInfo ? GasInfo.toAmino(message.gasInfo) : undefined;
    obj.result = message.result ? Result.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: SimulateResponseAminoMsg): SimulateResponse {
    return SimulateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: SimulateResponse): SimulateResponseAminoMsg {
    return {
      type: "cosmos-sdk/SimulateResponse",
      value: SimulateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: SimulateResponseProtoMsg): SimulateResponse {
    return SimulateResponse.decode(message.value);
  },
  toProto(message: SimulateResponse): Uint8Array {
    return SimulateResponse.encode(message).finish();
  },
  toProtoMsg(message: SimulateResponse): SimulateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
      value: SimulateResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SimulateResponse.typeUrl)) {
      return;
    }
    GasInfo.registerTypeUrl();
    Result.registerTypeUrl();
  }
};
function createBaseGetTxRequest(): GetTxRequest {
  return {
    hash: ""
  };
}
/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 * @name GetTxRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxRequest
 */
export const GetTxRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
  aminoType: "cosmos-sdk/GetTxRequest",
  is(o: any): o is GetTxRequest {
    return o && (o.$typeUrl === GetTxRequest.typeUrl || typeof o.hash === "string");
  },
  isAmino(o: any): o is GetTxRequestAmino {
    return o && (o.$typeUrl === GetTxRequest.typeUrl || typeof o.hash === "string");
  },
  encode(message: GetTxRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxRequest>): GetTxRequest {
    const message = createBaseGetTxRequest();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: GetTxRequestAmino): GetTxRequest {
    const message = createBaseGetTxRequest();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: GetTxRequest): GetTxRequestAmino {
    const obj: any = {};
    obj.hash = message.hash === "" ? undefined : message.hash;
    return obj;
  },
  fromAminoMsg(object: GetTxRequestAminoMsg): GetTxRequest {
    return GetTxRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxRequest): GetTxRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxRequest",
      value: GetTxRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxRequestProtoMsg): GetTxRequest {
    return GetTxRequest.decode(message.value);
  },
  toProto(message: GetTxRequest): Uint8Array {
    return GetTxRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxRequest): GetTxRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
      value: GetTxRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseGetTxResponse(): GetTxResponse {
  return {
    tx: undefined,
    txResponse: undefined
  };
}
/**
 * GetTxResponse is the response type for the Service.GetTx method.
 * @name GetTxResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetTxResponse
 */
export const GetTxResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
  aminoType: "cosmos-sdk/GetTxResponse",
  is(o: any): o is GetTxResponse {
    return o && o.$typeUrl === GetTxResponse.typeUrl;
  },
  isAmino(o: any): o is GetTxResponseAmino {
    return o && o.$typeUrl === GetTxResponse.typeUrl;
  },
  encode(message: GetTxResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        case 2:
          message.txResponse = TxResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetTxResponse>): GetTxResponse {
    const message = createBaseGetTxResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    return message;
  },
  fromAmino(object: GetTxResponseAmino): GetTxResponse {
    const message = createBaseGetTxResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_response !== undefined && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    return message;
  },
  toAmino(message: GetTxResponse): GetTxResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxResponseAminoMsg): GetTxResponse {
    return GetTxResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxResponse): GetTxResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxResponse",
      value: GetTxResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxResponseProtoMsg): GetTxResponse {
    return GetTxResponse.decode(message.value);
  },
  toProto(message: GetTxResponse): Uint8Array {
    return GetTxResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxResponse): GetTxResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
      value: GetTxResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetTxResponse.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
    TxResponse.registerTypeUrl();
  }
};
function createBaseGetBlockWithTxsRequest(): GetBlockWithTxsRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 * @name GetBlockWithTxsRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export const GetBlockWithTxsRequest = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
  aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
  is(o: any): o is GetBlockWithTxsRequest {
    return o && (o.$typeUrl === GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
  },
  isAmino(o: any): o is GetBlockWithTxsRequestAmino {
    return o && (o.$typeUrl === GetBlockWithTxsRequest.typeUrl || typeof o.height === "bigint");
  },
  encode(message: GetBlockWithTxsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsRequest>): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetBlockWithTxsRequestAmino): GetBlockWithTxsRequest {
    const message = createBaseGetBlockWithTxsRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsRequestAminoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsRequestProtoMsg): GetBlockWithTxsRequest {
    return GetBlockWithTxsRequest.decode(message.value);
  },
  toProto(message: GetBlockWithTxsRequest): Uint8Array {
    return GetBlockWithTxsRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsRequest): GetBlockWithTxsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
      value: GetBlockWithTxsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetBlockWithTxsRequest.typeUrl)) {
      return;
    }
    PageRequest.registerTypeUrl();
  }
};
function createBaseGetBlockWithTxsResponse(): GetBlockWithTxsResponse {
  return {
    txs: [],
    blockId: undefined,
    block: undefined,
    pagination: undefined
  };
}
/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 * @name GetBlockWithTxsResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export const GetBlockWithTxsResponse = {
  typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
  aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
  is(o: any): o is GetBlockWithTxsResponse {
    return o && (o.$typeUrl === GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.is(o.txs[0])));
  },
  isAmino(o: any): o is GetBlockWithTxsResponseAmino {
    return o && (o.$typeUrl === GetBlockWithTxsResponse.typeUrl || Array.isArray(o.txs) && (!o.txs.length || Tx.isAmino(o.txs[0])));
  },
  encode(message: GetBlockWithTxsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      Tx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(18).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockWithTxsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockWithTxsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(Tx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 3:
          message.block = Block.decode(reader, reader.uint32());
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetBlockWithTxsResponse>): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromPartial(e)) || [];
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: GetBlockWithTxsResponseAmino): GetBlockWithTxsResponse {
    const message = createBaseGetBlockWithTxsResponse();
    message.txs = object.txs?.map(e => Tx.fromAmino(e)) || [];
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => e ? Tx.toAmino(e) : undefined);
    } else {
      obj.txs = message.txs;
    }
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockWithTxsResponseAminoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockWithTxsResponseProtoMsg): GetBlockWithTxsResponse {
    return GetBlockWithTxsResponse.decode(message.value);
  },
  toProto(message: GetBlockWithTxsResponse): Uint8Array {
    return GetBlockWithTxsResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockWithTxsResponse): GetBlockWithTxsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
      value: GetBlockWithTxsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GetBlockWithTxsResponse.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
    BlockID.registerTypeUrl();
    Block.registerTypeUrl();
    PageResponse.registerTypeUrl();
  }
};
function createBaseTxDecodeRequest(): TxDecodeRequest {
  return {
    txBytes: new Uint8Array()
  };
}
/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 * @name TxDecodeRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeRequest
 */
export const TxDecodeRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
  aminoType: "cosmos-sdk/TxDecodeRequest",
  is(o: any): o is TxDecodeRequest {
    return o && (o.$typeUrl === TxDecodeRequest.typeUrl || o.txBytes instanceof Uint8Array || typeof o.txBytes === "string");
  },
  isAmino(o: any): o is TxDecodeRequestAmino {
    return o && (o.$typeUrl === TxDecodeRequest.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
  },
  encode(message: TxDecodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeRequest>): TxDecodeRequest {
    const message = createBaseTxDecodeRequest();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxDecodeRequestAmino): TxDecodeRequest {
    const message = createBaseTxDecodeRequest();
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message: TxDecodeRequest): TxDecodeRequestAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxDecodeRequestAminoMsg): TxDecodeRequest {
    return TxDecodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeRequest): TxDecodeRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeRequest",
      value: TxDecodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeRequestProtoMsg): TxDecodeRequest {
    return TxDecodeRequest.decode(message.value);
  },
  toProto(message: TxDecodeRequest): Uint8Array {
    return TxDecodeRequest.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeRequest): TxDecodeRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeRequest",
      value: TxDecodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxDecodeResponse(): TxDecodeResponse {
  return {
    tx: undefined
  };
}
/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 * @name TxDecodeResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeResponse
 */
export const TxDecodeResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
  aminoType: "cosmos-sdk/TxDecodeResponse",
  is(o: any): o is TxDecodeResponse {
    return o && o.$typeUrl === TxDecodeResponse.typeUrl;
  },
  isAmino(o: any): o is TxDecodeResponseAmino {
    return o && o.$typeUrl === TxDecodeResponse.typeUrl;
  },
  encode(message: TxDecodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeResponse>): TxDecodeResponse {
    const message = createBaseTxDecodeResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object: TxDecodeResponseAmino): TxDecodeResponse {
    const message = createBaseTxDecodeResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message: TxDecodeResponse): TxDecodeResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxDecodeResponseAminoMsg): TxDecodeResponse {
    return TxDecodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeResponse): TxDecodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeResponse",
      value: TxDecodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeResponseProtoMsg): TxDecodeResponse {
    return TxDecodeResponse.decode(message.value);
  },
  toProto(message: TxDecodeResponse): Uint8Array {
    return TxDecodeResponse.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeResponse): TxDecodeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeResponse",
      value: TxDecodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TxDecodeResponse.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
  }
};
function createBaseTxEncodeRequest(): TxEncodeRequest {
  return {
    tx: undefined
  };
}
/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 * @name TxEncodeRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeRequest
 */
export const TxEncodeRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
  aminoType: "cosmos-sdk/TxEncodeRequest",
  is(o: any): o is TxEncodeRequest {
    return o && o.$typeUrl === TxEncodeRequest.typeUrl;
  },
  isAmino(o: any): o is TxEncodeRequestAmino {
    return o && o.$typeUrl === TxEncodeRequest.typeUrl;
  },
  encode(message: TxEncodeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = Tx.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeRequest>): TxEncodeRequest {
    const message = createBaseTxEncodeRequest();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    return message;
  },
  fromAmino(object: TxEncodeRequestAmino): TxEncodeRequest {
    const message = createBaseTxEncodeRequest();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message: TxEncodeRequest): TxEncodeRequestAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxEncodeRequestAminoMsg): TxEncodeRequest {
    return TxEncodeRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeRequest): TxEncodeRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeRequest",
      value: TxEncodeRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeRequestProtoMsg): TxEncodeRequest {
    return TxEncodeRequest.decode(message.value);
  },
  toProto(message: TxEncodeRequest): Uint8Array {
    return TxEncodeRequest.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeRequest): TxEncodeRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeRequest",
      value: TxEncodeRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(TxEncodeRequest.typeUrl)) {
      return;
    }
    Tx.registerTypeUrl();
  }
};
function createBaseTxEncodeResponse(): TxEncodeResponse {
  return {
    txBytes: new Uint8Array()
  };
}
/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 * @name TxEncodeResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeResponse
 */
export const TxEncodeResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
  aminoType: "cosmos-sdk/TxEncodeResponse",
  is(o: any): o is TxEncodeResponse {
    return o && (o.$typeUrl === TxEncodeResponse.typeUrl || o.txBytes instanceof Uint8Array || typeof o.txBytes === "string");
  },
  isAmino(o: any): o is TxEncodeResponseAmino {
    return o && (o.$typeUrl === TxEncodeResponse.typeUrl || o.tx_bytes instanceof Uint8Array || typeof o.tx_bytes === "string");
  },
  encode(message: TxEncodeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.txBytes.length !== 0) {
      writer.uint32(10).bytes(message.txBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeResponse>): TxEncodeResponse {
    const message = createBaseTxEncodeResponse();
    message.txBytes = object.txBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxEncodeResponseAmino): TxEncodeResponse {
    const message = createBaseTxEncodeResponse();
    if (object.tx_bytes !== undefined && object.tx_bytes !== null) {
      message.txBytes = bytesFromBase64(object.tx_bytes);
    }
    return message;
  },
  toAmino(message: TxEncodeResponse): TxEncodeResponseAmino {
    const obj: any = {};
    obj.tx_bytes = message.txBytes ? base64FromBytes(message.txBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxEncodeResponseAminoMsg): TxEncodeResponse {
    return TxEncodeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeResponse): TxEncodeResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeResponse",
      value: TxEncodeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeResponseProtoMsg): TxEncodeResponse {
    return TxEncodeResponse.decode(message.value);
  },
  toProto(message: TxEncodeResponse): Uint8Array {
    return TxEncodeResponse.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeResponse): TxEncodeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeResponse",
      value: TxEncodeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxEncodeAminoRequest(): TxEncodeAminoRequest {
  return {
    aminoJson: ""
  };
}
/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export const TxEncodeAminoRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
  aminoType: "cosmos-sdk/TxEncodeAminoRequest",
  is(o: any): o is TxEncodeAminoRequest {
    return o && (o.$typeUrl === TxEncodeAminoRequest.typeUrl || typeof o.aminoJson === "string");
  },
  isAmino(o: any): o is TxEncodeAminoRequestAmino {
    return o && (o.$typeUrl === TxEncodeAminoRequest.typeUrl || typeof o.amino_json === "string");
  },
  encode(message: TxEncodeAminoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeAminoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeAminoRequest>): TxEncodeAminoRequest {
    const message = createBaseTxEncodeAminoRequest();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object: TxEncodeAminoRequestAmino): TxEncodeAminoRequest {
    const message = createBaseTxEncodeAminoRequest();
    if (object.amino_json !== undefined && object.amino_json !== null) {
      message.aminoJson = object.amino_json;
    }
    return message;
  },
  toAmino(message: TxEncodeAminoRequest): TxEncodeAminoRequestAmino {
    const obj: any = {};
    obj.amino_json = message.aminoJson === "" ? undefined : message.aminoJson;
    return obj;
  },
  fromAminoMsg(object: TxEncodeAminoRequestAminoMsg): TxEncodeAminoRequest {
    return TxEncodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeAminoRequestProtoMsg): TxEncodeAminoRequest {
    return TxEncodeAminoRequest.decode(message.value);
  },
  toProto(message: TxEncodeAminoRequest): Uint8Array {
    return TxEncodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeAminoRequest): TxEncodeAminoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoRequest",
      value: TxEncodeAminoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxEncodeAminoResponse(): TxEncodeAminoResponse {
  return {
    aminoBinary: new Uint8Array()
  };
}
/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 * @name TxEncodeAminoResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export const TxEncodeAminoResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
  aminoType: "cosmos-sdk/TxEncodeAminoResponse",
  is(o: any): o is TxEncodeAminoResponse {
    return o && (o.$typeUrl === TxEncodeAminoResponse.typeUrl || o.aminoBinary instanceof Uint8Array || typeof o.aminoBinary === "string");
  },
  isAmino(o: any): o is TxEncodeAminoResponseAmino {
    return o && (o.$typeUrl === TxEncodeAminoResponse.typeUrl || o.amino_binary instanceof Uint8Array || typeof o.amino_binary === "string");
  },
  encode(message: TxEncodeAminoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxEncodeAminoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxEncodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxEncodeAminoResponse>): TxEncodeAminoResponse {
    const message = createBaseTxEncodeAminoResponse();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxEncodeAminoResponseAmino): TxEncodeAminoResponse {
    const message = createBaseTxEncodeAminoResponse();
    if (object.amino_binary !== undefined && object.amino_binary !== null) {
      message.aminoBinary = bytesFromBase64(object.amino_binary);
    }
    return message;
  },
  toAmino(message: TxEncodeAminoResponse): TxEncodeAminoResponseAmino {
    const obj: any = {};
    obj.amino_binary = message.aminoBinary ? base64FromBytes(message.aminoBinary) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxEncodeAminoResponseAminoMsg): TxEncodeAminoResponse {
    return TxEncodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxEncodeAminoResponseProtoMsg): TxEncodeAminoResponse {
    return TxEncodeAminoResponse.decode(message.value);
  },
  toProto(message: TxEncodeAminoResponse): Uint8Array {
    return TxEncodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message: TxEncodeAminoResponse): TxEncodeAminoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxEncodeAminoResponse",
      value: TxEncodeAminoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxDecodeAminoRequest(): TxDecodeAminoRequest {
  return {
    aminoBinary: new Uint8Array()
  };
}
/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoRequest
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export const TxDecodeAminoRequest = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
  aminoType: "cosmos-sdk/TxDecodeAminoRequest",
  is(o: any): o is TxDecodeAminoRequest {
    return o && (o.$typeUrl === TxDecodeAminoRequest.typeUrl || o.aminoBinary instanceof Uint8Array || typeof o.aminoBinary === "string");
  },
  isAmino(o: any): o is TxDecodeAminoRequestAmino {
    return o && (o.$typeUrl === TxDecodeAminoRequest.typeUrl || o.amino_binary instanceof Uint8Array || typeof o.amino_binary === "string");
  },
  encode(message: TxDecodeAminoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aminoBinary.length !== 0) {
      writer.uint32(10).bytes(message.aminoBinary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeAminoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoBinary = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeAminoRequest>): TxDecodeAminoRequest {
    const message = createBaseTxDecodeAminoRequest();
    message.aminoBinary = object.aminoBinary ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TxDecodeAminoRequestAmino): TxDecodeAminoRequest {
    const message = createBaseTxDecodeAminoRequest();
    if (object.amino_binary !== undefined && object.amino_binary !== null) {
      message.aminoBinary = bytesFromBase64(object.amino_binary);
    }
    return message;
  },
  toAmino(message: TxDecodeAminoRequest): TxDecodeAminoRequestAmino {
    const obj: any = {};
    obj.amino_binary = message.aminoBinary ? base64FromBytes(message.aminoBinary) : undefined;
    return obj;
  },
  fromAminoMsg(object: TxDecodeAminoRequestAminoMsg): TxDecodeAminoRequest {
    return TxDecodeAminoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeAminoRequestProtoMsg): TxDecodeAminoRequest {
    return TxDecodeAminoRequest.decode(message.value);
  },
  toProto(message: TxDecodeAminoRequest): Uint8Array {
    return TxDecodeAminoRequest.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeAminoRequest): TxDecodeAminoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoRequest",
      value: TxDecodeAminoRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseTxDecodeAminoResponse(): TxDecodeAminoResponse {
  return {
    aminoJson: ""
  };
}
/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 * @name TxDecodeAminoResponse
 * @package cosmos.tx.v1beta1
 * @see proto type: cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export const TxDecodeAminoResponse = {
  typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
  aminoType: "cosmos-sdk/TxDecodeAminoResponse",
  is(o: any): o is TxDecodeAminoResponse {
    return o && (o.$typeUrl === TxDecodeAminoResponse.typeUrl || typeof o.aminoJson === "string");
  },
  isAmino(o: any): o is TxDecodeAminoResponseAmino {
    return o && (o.$typeUrl === TxDecodeAminoResponse.typeUrl || typeof o.amino_json === "string");
  },
  encode(message: TxDecodeAminoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.aminoJson !== "") {
      writer.uint32(10).string(message.aminoJson);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDecodeAminoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDecodeAminoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aminoJson = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<TxDecodeAminoResponse>): TxDecodeAminoResponse {
    const message = createBaseTxDecodeAminoResponse();
    message.aminoJson = object.aminoJson ?? "";
    return message;
  },
  fromAmino(object: TxDecodeAminoResponseAmino): TxDecodeAminoResponse {
    const message = createBaseTxDecodeAminoResponse();
    if (object.amino_json !== undefined && object.amino_json !== null) {
      message.aminoJson = object.amino_json;
    }
    return message;
  },
  toAmino(message: TxDecodeAminoResponse): TxDecodeAminoResponseAmino {
    const obj: any = {};
    obj.amino_json = message.aminoJson === "" ? undefined : message.aminoJson;
    return obj;
  },
  fromAminoMsg(object: TxDecodeAminoResponseAminoMsg): TxDecodeAminoResponse {
    return TxDecodeAminoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseAminoMsg {
    return {
      type: "cosmos-sdk/TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDecodeAminoResponseProtoMsg): TxDecodeAminoResponse {
    return TxDecodeAminoResponse.decode(message.value);
  },
  toProto(message: TxDecodeAminoResponse): Uint8Array {
    return TxDecodeAminoResponse.encode(message).finish();
  },
  toProtoMsg(message: TxDecodeAminoResponse): TxDecodeAminoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.tx.v1beta1.TxDecodeAminoResponse",
      value: TxDecodeAminoResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};