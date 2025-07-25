import { buildUseVueQuery } from "../../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryDenomsRequest, QueryDenomsResponse, QueryDenomRequest, QueryDenomResponse, QueryDenomHashRequest, QueryDenomHashResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query";
import { getParams, getDenoms, getDenom, getDenomHash, getEscrowAddress, getTotalEscrowForDenom } from "./query.rpc.func";
/**
 * Params queries all parameters of the ibc-transfer module.
 * @name useGetParams
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Denoms queries all denominations
 * @name useGetDenoms
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Denoms
 */
export const useGetDenoms = buildUseVueQuery<QueryDenomsRequest, QueryDenomsResponse>({
  builderQueryFn: getDenoms,
  queryKeyPrefix: "DenomsQuery"
});
/**
 * Denom queries a denomination
 * @name useGetDenom
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.Denom
 */
export const useGetDenom = buildUseVueQuery<QueryDenomRequest, QueryDenomResponse>({
  builderQueryFn: getDenom,
  queryKeyPrefix: "DenomQuery"
});
/**
 * DenomHash queries a denomination hash information.
 * @name useGetDenomHash
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.DenomHash
 */
export const useGetDenomHash = buildUseVueQuery<QueryDenomHashRequest, QueryDenomHashResponse>({
  builderQueryFn: getDenomHash,
  queryKeyPrefix: "DenomHashQuery"
});
/**
 * EscrowAddress returns the escrow address for a particular port and channel id.
 * @name useGetEscrowAddress
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.EscrowAddress
 */
export const useGetEscrowAddress = buildUseVueQuery<QueryEscrowAddressRequest, QueryEscrowAddressResponse>({
  builderQueryFn: getEscrowAddress,
  queryKeyPrefix: "EscrowAddressQuery"
});
/**
 * TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.
 * @name useGetTotalEscrowForDenom
 * @package ibc.applications.transfer.v1
 * @see proto service: ibc.applications.transfer.v1.TotalEscrowForDenom
 */
export const useGetTotalEscrowForDenom = buildUseVueQuery<QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse>({
  builderQueryFn: getTotalEscrowForDenom,
  queryKeyPrefix: "TotalEscrowForDenomQuery"
});