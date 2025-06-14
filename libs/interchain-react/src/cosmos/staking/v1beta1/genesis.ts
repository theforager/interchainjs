import { Params, ParamsAmino, Validator, ValidatorAmino, Delegation, DelegationAmino, UnbondingDelegation, UnbondingDelegationAmino, Redelegation, RedelegationAmino } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * GenesisState defines the staking module's genesis state.
 * @name GenesisState
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of related to deposit.
   */
  params: Params;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  lastTotalPower: Uint8Array;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  lastValidatorPowers: LastValidatorPower[];
  /**
   * validators defines the validator set at genesis.
   */
  validators: Validator[];
  /**
   * delegations defines the delegations active at genesis.
   */
  delegations: Delegation[];
  /**
   * unbonding_delegations defines the unbonding delegations active at genesis.
   */
  unbondingDelegations: UnbondingDelegation[];
  /**
   * redelegations defines the redelegations active at genesis.
   */
  redelegations: Redelegation[];
  /**
   * exported defines a bool to identify whether the chain dealing with exported or initialized genesis.
   */
  exported: boolean;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the staking module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of related to deposit.
   */
  params: ParamsAmino;
  /**
   * last_total_power tracks the total amounts of bonded tokens recorded during
   * the previous end block.
   */
  last_total_power: string;
  /**
   * last_validator_powers is a special index that provides a historical list
   * of the last-block's bonded validators.
   */
  last_validator_powers: LastValidatorPowerAmino[];
  /**
   * validators defines the validator set at genesis.
   */
  validators: ValidatorAmino[];
  /**
   * delegations defines the delegations active at genesis.
   */
  delegations: DelegationAmino[];
  /**
   * unbonding_delegations defines the unbonding delegations active at genesis.
   */
  unbonding_delegations: UnbondingDelegationAmino[];
  /**
   * redelegations defines the redelegations active at genesis.
   */
  redelegations: RedelegationAmino[];
  /**
   * exported defines a bool to identify whether the chain dealing with exported or initialized genesis.
   */
  exported: boolean;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * LastValidatorPower required for validator set update logic.
 * @name LastValidatorPower
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.LastValidatorPower
 */
export interface LastValidatorPower {
  /**
   * address is the address of the validator.
   */
  address: string;
  /**
   * power defines the power of the validator.
   */
  power: bigint;
}
export interface LastValidatorPowerProtoMsg {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower";
  value: Uint8Array;
}
/**
 * LastValidatorPower required for validator set update logic.
 * @name LastValidatorPowerAmino
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.LastValidatorPower
 */
export interface LastValidatorPowerAmino {
  /**
   * address is the address of the validator.
   */
  address: string;
  /**
   * power defines the power of the validator.
   */
  power: string;
}
export interface LastValidatorPowerAminoMsg {
  type: "cosmos-sdk/LastValidatorPower";
  value: LastValidatorPowerAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    lastTotalPower: new Uint8Array(),
    lastValidatorPowers: [],
    validators: [],
    delegations: [],
    unbondingDelegations: [],
    redelegations: [],
    exported: false
  };
}
/**
 * GenesisState defines the staking module's genesis state.
 * @name GenesisState
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.staking.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && (o.lastTotalPower instanceof Uint8Array || typeof o.lastTotalPower === "string") && Array.isArray(o.lastValidatorPowers) && (!o.lastValidatorPowers.length || LastValidatorPower.is(o.lastValidatorPowers[0])) && Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.is(o.delegations[0])) && Array.isArray(o.unbondingDelegations) && (!o.unbondingDelegations.length || UnbondingDelegation.is(o.unbondingDelegations[0])) && Array.isArray(o.redelegations) && (!o.redelegations.length || Redelegation.is(o.redelegations[0])) && typeof o.exported === "boolean");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && (o.last_total_power instanceof Uint8Array || typeof o.last_total_power === "string") && Array.isArray(o.last_validator_powers) && (!o.last_validator_powers.length || LastValidatorPower.isAmino(o.last_validator_powers[0])) && Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])) && Array.isArray(o.delegations) && (!o.delegations.length || Delegation.isAmino(o.delegations[0])) && Array.isArray(o.unbonding_delegations) && (!o.unbonding_delegations.length || UnbondingDelegation.isAmino(o.unbonding_delegations[0])) && Array.isArray(o.redelegations) && (!o.redelegations.length || Redelegation.isAmino(o.redelegations[0])) && typeof o.exported === "boolean");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.lastTotalPower.length !== 0) {
      writer.uint32(18).bytes(message.lastTotalPower);
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unbondingDelegations) {
      UnbondingDelegation.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.lastTotalPower = reader.bytes();
          break;
        case 3:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 4:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 6:
          message.unbondingDelegations.push(UnbondingDelegation.decode(reader, reader.uint32()));
          break;
        case 7:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 8:
          message.exported = reader.bool();
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lastTotalPower = object.lastTotalPower ?? new Uint8Array();
    message.lastValidatorPowers = object.lastValidatorPowers?.map(e => LastValidatorPower.fromPartial(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.unbondingDelegations = object.unbondingDelegations?.map(e => UnbondingDelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromPartial(e)) || [];
    message.exported = object.exported ?? false;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.last_total_power !== undefined && object.last_total_power !== null) {
      message.lastTotalPower = bytesFromBase64(object.last_total_power);
    }
    message.lastValidatorPowers = object.last_validator_powers?.map(e => LastValidatorPower.fromAmino(e)) || [];
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    message.delegations = object.delegations?.map(e => Delegation.fromAmino(e)) || [];
    message.unbondingDelegations = object.unbonding_delegations?.map(e => UnbondingDelegation.fromAmino(e)) || [];
    message.redelegations = object.redelegations?.map(e => Redelegation.fromAmino(e)) || [];
    if (object.exported !== undefined && object.exported !== null) {
      message.exported = object.exported;
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    obj.last_total_power = message.lastTotalPower ? base64FromBytes(message.lastTotalPower) : "";
    if (message.lastValidatorPowers) {
      obj.last_validator_powers = message.lastValidatorPowers.map(e => e ? LastValidatorPower.toAmino(e) : undefined);
    } else {
      obj.last_validator_powers = message.lastValidatorPowers;
    }
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    if (message.unbondingDelegations) {
      obj.unbonding_delegations = message.unbondingDelegations.map(e => e ? UnbondingDelegation.toAmino(e) : undefined);
    } else {
      obj.unbonding_delegations = message.unbondingDelegations;
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? Redelegation.toAmino(e) : undefined);
    } else {
      obj.redelegations = message.redelegations;
    }
    obj.exported = message.exported === false ? undefined : message.exported;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
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
      typeUrl: "/cosmos.staking.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    LastValidatorPower.registerTypeUrl();
    Validator.registerTypeUrl();
    Delegation.registerTypeUrl();
    UnbondingDelegation.registerTypeUrl();
    Redelegation.registerTypeUrl();
  }
};
function createBaseLastValidatorPower(): LastValidatorPower {
  return {
    address: "",
    power: BigInt(0)
  };
}
/**
 * LastValidatorPower required for validator set update logic.
 * @name LastValidatorPower
 * @package cosmos.staking.v1beta1
 * @see proto type: cosmos.staking.v1beta1.LastValidatorPower
 */
export const LastValidatorPower = {
  typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
  aminoType: "cosmos-sdk/LastValidatorPower",
  is(o: any): o is LastValidatorPower {
    return o && (o.$typeUrl === LastValidatorPower.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
  },
  isAmino(o: any): o is LastValidatorPowerAmino {
    return o && (o.$typeUrl === LastValidatorPower.typeUrl || typeof o.address === "string" && typeof o.power === "bigint");
  },
  encode(message: LastValidatorPower, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LastValidatorPower>): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LastValidatorPowerAmino): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    return message;
  },
  toAmino(message: LastValidatorPower): LastValidatorPowerAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LastValidatorPowerAminoMsg): LastValidatorPower {
    return LastValidatorPower.fromAmino(object.value);
  },
  toAminoMsg(message: LastValidatorPower): LastValidatorPowerAminoMsg {
    return {
      type: "cosmos-sdk/LastValidatorPower",
      value: LastValidatorPower.toAmino(message)
    };
  },
  fromProtoMsg(message: LastValidatorPowerProtoMsg): LastValidatorPower {
    return LastValidatorPower.decode(message.value);
  },
  toProto(message: LastValidatorPower): Uint8Array {
    return LastValidatorPower.encode(message).finish();
  },
  toProtoMsg(message: LastValidatorPower): LastValidatorPowerProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.LastValidatorPower",
      value: LastValidatorPower.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};