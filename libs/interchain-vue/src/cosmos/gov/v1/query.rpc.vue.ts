import { buildUseVueQuery } from "../../../vue-query";
import { QueryConstitutionRequest, QueryConstitutionResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
import { getConstitution, getProposal, getProposals, getVote, getVotes, getParams, getDeposit, getDeposits, getTallyResult } from "./query.rpc.func";
/**
 * Constitution queries the chain's constitution.
 * @name useGetConstitution
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Constitution
 */
export const useGetConstitution = buildUseVueQuery<QueryConstitutionRequest, QueryConstitutionResponse>({
  builderQueryFn: getConstitution,
  queryKeyPrefix: "ConstitutionQuery"
});
/**
 * Proposal queries proposal details based on ProposalID.
 * @name useGetProposal
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposal
 */
export const useGetProposal = buildUseVueQuery<QueryProposalRequest, QueryProposalResponse>({
  builderQueryFn: getProposal,
  queryKeyPrefix: "ProposalQuery"
});
/**
 * Proposals queries all proposals based on given status.
 * @name useGetProposals
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Proposals
 */
export const useGetProposals = buildUseVueQuery<QueryProposalsRequest, QueryProposalsResponse>({
  builderQueryFn: getProposals,
  queryKeyPrefix: "ProposalsQuery"
});
/**
 * Vote queries voted information based on proposalID, voterAddr.
 * @name useGetVote
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Vote
 */
export const useGetVote = buildUseVueQuery<QueryVoteRequest, QueryVoteResponse>({
  builderQueryFn: getVote,
  queryKeyPrefix: "VoteQuery"
});
/**
 * Votes queries votes of a given proposal.
 * @name useGetVotes
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Votes
 */
export const useGetVotes = buildUseVueQuery<QueryVotesRequest, QueryVotesResponse>({
  builderQueryFn: getVotes,
  queryKeyPrefix: "VotesQuery"
});
/**
 * Params queries all parameters of the gov module.
 * @name useGetParams
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Params
 */
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: getParams,
  queryKeyPrefix: "ParamsQuery"
});
/**
 * Deposit queries single deposit information based on proposalID, depositAddr.
 * @name useGetDeposit
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposit
 */
export const useGetDeposit = buildUseVueQuery<QueryDepositRequest, QueryDepositResponse>({
  builderQueryFn: getDeposit,
  queryKeyPrefix: "DepositQuery"
});
/**
 * Deposits queries all deposits of a single proposal.
 * @name useGetDeposits
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.Deposits
 */
export const useGetDeposits = buildUseVueQuery<QueryDepositsRequest, QueryDepositsResponse>({
  builderQueryFn: getDeposits,
  queryKeyPrefix: "DepositsQuery"
});
/**
 * TallyResult queries the tally of a proposal vote.
 * @name useGetTallyResult
 * @package cosmos.gov.v1
 * @see proto service: cosmos.gov.v1.TallyResult
 */
export const useGetTallyResult = buildUseVueQuery<QueryTallyResultRequest, QueryTallyResultResponse>({
  builderQueryFn: getTallyResult,
  queryKeyPrefix: "TallyResultQuery"
});