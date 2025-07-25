import { Deposit, DepositAmino, Vote, VoteAmino, Proposal, ProposalAmino, DepositParams, DepositParamsAmino, VotingParams, VotingParamsAmino, TallyParams, TallyParamsAmino, Params, ParamsAmino } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the gov module's genesis state.
 * @name GenesisState
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.GenesisState
 */
export interface GenesisState {
  /**
   * starting_proposal_id is the ID of the starting proposal.
   */
  startingProposalId: bigint;
  /**
   * deposits defines all the deposits present at genesis.
   */
  deposits: Deposit[];
  /**
   * votes defines all the votes present at genesis.
   */
  votes: Vote[];
  /**
   * proposals defines all the proposals present at genesis.
   */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   * @deprecated
   */
  depositParams?: DepositParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   * @deprecated
   */
  votingParams?: VotingParams;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   * @deprecated
   */
  tallyParams?: TallyParams;
  /**
   * params defines all the paramaters of x/gov module.
   */
  params?: Params;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   */
  constitution: string;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.gov.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the gov module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * starting_proposal_id is the ID of the starting proposal.
   */
  starting_proposal_id: string;
  /**
   * deposits defines all the deposits present at genesis.
   */
  deposits: DepositAmino[];
  /**
   * votes defines all the votes present at genesis.
   */
  votes: VoteAmino[];
  /**
   * proposals defines all the proposals present at genesis.
   */
  proposals: ProposalAmino[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   * @deprecated
   */
  deposit_params?: DepositParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   * @deprecated
   */
  voting_params?: VotingParamsAmino;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   * @deprecated
   */
  tally_params?: TallyParamsAmino;
  /**
   * params defines all the paramaters of x/gov module.
   */
  params?: ParamsAmino;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   * This is an immutable string set in genesis.
   * There are no amendments, to go outside of scope, just fork.
   * constitution is an immutable string in genesis for a chain builder to lay out their vision, ideas and ideals.
   */
  constitution: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/v1/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: undefined,
    votingParams: undefined,
    tallyParams: undefined,
    params: undefined,
    constitution: ""
  };
}
/**
 * GenesisState defines the gov module's genesis state.
 * @name GenesisState
 * @package cosmos.gov.v1
 * @see proto type: cosmos.gov.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.gov.v1.GenesisState",
  aminoType: "cosmos-sdk/v1/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.startingProposalId === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || Deposit.is(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])) && typeof o.constitution === "string");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.starting_proposal_id === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isAmino(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])) && typeof o.constitution === "string");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startingProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        case 8:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.constitution = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.constitution = object.constitution ?? "";
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
      message.startingProposalId = BigInt(object.starting_proposal_id);
    }
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.constitution !== undefined && object.constitution !== null) {
      message.constitution = object.constitution;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.starting_proposal_id = message.startingProposalId !== BigInt(0) ? message.startingProposalId?.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.constitution = message.constitution === "" ? undefined : message.constitution;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/v1/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Deposit.registerTypeUrl();
    Vote.registerTypeUrl();
    Proposal.registerTypeUrl();
    DepositParams.registerTypeUrl();
    VotingParams.registerTypeUrl();
    TallyParams.registerTypeUrl();
    Params.registerTypeUrl();
  }
};