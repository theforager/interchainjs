import { buildUseVueQuery } from "../../../vue-query";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeRequest, TxEncodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxDecodeAminoRequest, TxDecodeAminoResponse } from "./service";
import { getSimulate, getTx, getBroadcastTx, getTxsEvent, getBlockWithTxs, getTxDecode, getTxEncode, getTxEncodeAmino, getTxDecodeAmino } from "./service.rpc.func";
/**
 * Simulate simulates executing a transaction for estimating gas usage.
 * @name useGetSimulate
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.Simulate
 */
export const useGetSimulate = buildUseVueQuery<SimulateRequest, SimulateResponse>({
  builderQueryFn: getSimulate,
  queryKeyPrefix: "SimulateQuery"
});
/**
 * GetTx fetches a tx by hash.
 * @name useGetTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTx
 */
export const useGetTx = buildUseVueQuery<GetTxRequest, GetTxResponse>({
  builderQueryFn: getTx,
  queryKeyPrefix: "GetTxQuery"
});
/**
 * BroadcastTx broadcast transaction.
 * @name useGetBroadcastTx
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.BroadcastTx
 */
export const useGetBroadcastTx = buildUseVueQuery<BroadcastTxRequest, BroadcastTxResponse>({
  builderQueryFn: getBroadcastTx,
  queryKeyPrefix: "BroadcastTxQuery"
});
/**
 * GetTxsEvent fetches txs by event.
 * @name useGetTxsEvent
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetTxsEvent
 */
export const useGetTxsEvent = buildUseVueQuery<GetTxsEventRequest, GetTxsEventResponse>({
  builderQueryFn: getTxsEvent,
  queryKeyPrefix: "GetTxsEventQuery"
});
/**
 * GetBlockWithTxs fetches a block with decoded txs.
 * @name useGetBlockWithTxs
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.GetBlockWithTxs
 */
export const useGetBlockWithTxs = buildUseVueQuery<GetBlockWithTxsRequest, GetBlockWithTxsResponse>({
  builderQueryFn: getBlockWithTxs,
  queryKeyPrefix: "GetBlockWithTxsQuery"
});
/**
 * TxDecode decodes the transaction.
 * @name useGetTxDecode
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.TxDecode
 */
export const useGetTxDecode = buildUseVueQuery<TxDecodeRequest, TxDecodeResponse>({
  builderQueryFn: getTxDecode,
  queryKeyPrefix: "TxDecodeQuery"
});
/**
 * TxEncode encodes the transaction.
 * @name useGetTxEncode
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.TxEncode
 */
export const useGetTxEncode = buildUseVueQuery<TxEncodeRequest, TxEncodeResponse>({
  builderQueryFn: getTxEncode,
  queryKeyPrefix: "TxEncodeQuery"
});
/**
 * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
 * @name useGetTxEncodeAmino
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.TxEncodeAmino
 */
export const useGetTxEncodeAmino = buildUseVueQuery<TxEncodeAminoRequest, TxEncodeAminoResponse>({
  builderQueryFn: getTxEncodeAmino,
  queryKeyPrefix: "TxEncodeAminoQuery"
});
/**
 * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
 * @name useGetTxDecodeAmino
 * @package cosmos.tx.v1beta1
 * @see proto service: cosmos.tx.v1beta1.TxDecodeAmino
 */
export const useGetTxDecodeAmino = buildUseVueQuery<TxDecodeAminoRequest, TxDecodeAminoResponse>({
  builderQueryFn: getTxDecodeAmino,
  queryKeyPrefix: "TxDecodeAminoQuery"
});