import { buildUseVueQuery } from "../../../../vue-query";
import { GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse, ABCIQueryRequest, ABCIQueryResponse } from "./query";
import { getGetNodeInfo, getGetSyncing, getGetLatestBlock, getGetBlockByHeight, getGetLatestValidatorSet, getGetValidatorSetByHeight, getABCIQuery } from "./query.rpc.func";
/**
 * GetNodeInfo queries the current node info.
 * @name useGetGetNodeInfo
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetNodeInfo
 */
export const useGetGetNodeInfo = buildUseVueQuery<GetNodeInfoRequest, GetNodeInfoResponse>({
  builderQueryFn: getGetNodeInfo,
  queryKeyPrefix: "GetNodeInfoQuery"
});
/**
 * GetSyncing queries node syncing.
 * @name useGetGetSyncing
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetSyncing
 */
export const useGetGetSyncing = buildUseVueQuery<GetSyncingRequest, GetSyncingResponse>({
  builderQueryFn: getGetSyncing,
  queryKeyPrefix: "GetSyncingQuery"
});
/**
 * GetLatestBlock returns the latest block.
 * @name useGetGetLatestBlock
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestBlock
 */
export const useGetGetLatestBlock = buildUseVueQuery<GetLatestBlockRequest, GetLatestBlockResponse>({
  builderQueryFn: getGetLatestBlock,
  queryKeyPrefix: "GetLatestBlockQuery"
});
/**
 * GetBlockByHeight queries block for given height.
 * @name useGetGetBlockByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetBlockByHeight
 */
export const useGetGetBlockByHeight = buildUseVueQuery<GetBlockByHeightRequest, GetBlockByHeightResponse>({
  builderQueryFn: getGetBlockByHeight,
  queryKeyPrefix: "GetBlockByHeightQuery"
});
/**
 * GetLatestValidatorSet queries latest validator-set.
 * @name useGetGetLatestValidatorSet
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetLatestValidatorSet
 */
export const useGetGetLatestValidatorSet = buildUseVueQuery<GetLatestValidatorSetRequest, GetLatestValidatorSetResponse>({
  builderQueryFn: getGetLatestValidatorSet,
  queryKeyPrefix: "GetLatestValidatorSetQuery"
});
/**
 * GetValidatorSetByHeight queries validator-set at a given height.
 * @name useGetGetValidatorSetByHeight
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.GetValidatorSetByHeight
 */
export const useGetGetValidatorSetByHeight = buildUseVueQuery<GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse>({
  builderQueryFn: getGetValidatorSetByHeight,
  queryKeyPrefix: "GetValidatorSetByHeightQuery"
});
/**
 * ABCIQuery defines a query handler that supports ABCI queries directly to the
 * application, bypassing Tendermint completely. The ABCI query must contain
 * a valid and supported path, including app, custom, p2p, and store.
 * @name useGetABCIQuery
 * @package cosmos.base.tendermint.v1beta1
 * @see proto service: cosmos.base.tendermint.v1beta1.ABCIQuery
 */
export const useGetABCIQuery = buildUseVueQuery<ABCIQueryRequest, ABCIQueryResponse>({
  builderQueryFn: getABCIQuery,
  queryKeyPrefix: "ABCIQueryQuery"
});