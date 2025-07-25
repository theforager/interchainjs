import { buildUseQuery } from "../../../react-query";
import { QueryWasmxParamsRequest, QueryWasmxParamsResponse, QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse, QueryModuleStateRequest, QueryModuleStateResponse } from "./query";
import { getWasmxParams, getContractRegistrationInfo, getWasmxModuleState } from "./query.rpc.func";
/**
 * Retrieves wasmx params
 * @name useGetWasmxParams
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.WasmxParams
 */
export const useGetWasmxParams = buildUseQuery<QueryWasmxParamsRequest, QueryWasmxParamsResponse>({
  builderQueryFn: getWasmxParams,
  queryKeyPrefix: "WasmxParamsQuery"
});
/**
 * Retrieves contract registration info
 * @name useGetContractRegistrationInfo
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.ContractRegistrationInfo
 */
export const useGetContractRegistrationInfo = buildUseQuery<QueryContractRegistrationInfoRequest, QueryContractRegistrationInfoResponse>({
  builderQueryFn: getContractRegistrationInfo,
  queryKeyPrefix: "ContractRegistrationInfoQuery"
});
/**
 * Retrieves the entire wasmx module's state
 * @name useGetWasmxModuleState
 * @package injective.wasmx.v1
 * @see proto service: injective.wasmx.v1.WasmxModuleState
 */
export const useGetWasmxModuleState = buildUseQuery<QueryModuleStateRequest, QueryModuleStateResponse>({
  builderQueryFn: getWasmxModuleState,
  queryKeyPrefix: "WasmxModuleStateQuery"
});