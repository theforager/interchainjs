import { Params, ParamsAmino, Metadata, MetadataAmino, SendEnabled, SendEnabledAmino } from "./bank";
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial } from "../../../helpers";
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisState
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.GenesisState
 */
export interface GenesisState {
  /**
   * params defines all the parameters of the module.
   */
  params: Params;
  /**
   * balances is an array containing the balances of all the accounts.
   */
  balances: Balance[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */
  supply: Coin[];
  /**
   * denom_metadata defines the metadata of the different coins.
   */
  denomMetadata: Metadata[];
  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   */
  sendEnabled: SendEnabled[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * params defines all the parameters of the module.
   */
  params: ParamsAmino;
  /**
   * balances is an array containing the balances of all the accounts.
   */
  balances: BalanceAmino[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */
  supply: CoinAmino[];
  /**
   * denom_metadata defines the metadata of the different coins.
   */
  denom_metadata: MetadataAmino[];
  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   */
  send_enabled: SendEnabledAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 * @name Balance
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Balance
 */
export interface Balance {
  /**
   * address is the address of the balance holder.
   */
  address: string;
  /**
   * coins defines the different coins this balance holds.
   */
  coins: Coin[];
}
export interface BalanceProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Balance";
  value: Uint8Array;
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 * @name BalanceAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Balance
 */
export interface BalanceAmino {
  /**
   * address is the address of the balance holder.
   */
  address: string;
  /**
   * coins defines the different coins this balance holds.
   */
  coins: CoinAmino[];
}
export interface BalanceAminoMsg {
  type: "cosmos-sdk/Balance";
  value: BalanceAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    balances: [],
    supply: [],
    denomMetadata: [],
    sendEnabled: []
  };
}
/**
 * GenesisState defines the bank module's genesis state.
 * @name GenesisState
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/cosmos.bank.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.balances) && (!o.balances.length || Balance.is(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || Coin.is(o.supply[0])) && Array.isArray(o.denomMetadata) && (!o.denomMetadata.length || Metadata.is(o.denomMetadata[0])) && Array.isArray(o.sendEnabled) && (!o.sendEnabled.length || SendEnabled.is(o.sendEnabled[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.balances) && (!o.balances.length || Balance.isAmino(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || Coin.isAmino(o.supply[0])) && Array.isArray(o.denom_metadata) && (!o.denom_metadata.length || Metadata.isAmino(o.denom_metadata[0])) && Array.isArray(o.send_enabled) && (!o.send_enabled.length || SendEnabled.isAmino(o.send_enabled[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.denomMetadata) {
      Metadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.balances.push(Balance.decode(reader, reader.uint32()));
          break;
        case 3:
          message.supply.push(Coin.decode(reader, reader.uint32()));
          break;
        case 4:
          message.denomMetadata.push(Metadata.decode(reader, reader.uint32()));
          break;
        case 5:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
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
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.denomMetadata = object.denomMetadata?.map(e => Metadata.fromPartial(e)) || [];
    message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.balances = object.balances?.map(e => Balance.fromAmino(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromAmino(e)) || [];
    message.denomMetadata = object.denom_metadata?.map(e => Metadata.fromAmino(e)) || [];
    message.sendEnabled = object.send_enabled?.map(e => SendEnabled.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    if (message.balances) {
      obj.balances = message.balances.map(e => e ? Balance.toAmino(e) : undefined);
    } else {
      obj.balances = message.balances;
    }
    if (message.supply) {
      obj.supply = message.supply.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.supply = message.supply;
    }
    if (message.denomMetadata) {
      obj.denom_metadata = message.denomMetadata.map(e => e ? Metadata.toAmino(e) : undefined);
    } else {
      obj.denom_metadata = message.denomMetadata;
    }
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map(e => e ? SendEnabled.toAmino(e) : undefined);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
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
      typeUrl: "/cosmos.bank.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(GenesisState.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
    Balance.registerTypeUrl();
    Coin.registerTypeUrl();
    Metadata.registerTypeUrl();
    SendEnabled.registerTypeUrl();
  }
};
function createBaseBalance(): Balance {
  return {
    address: "",
    coins: []
  };
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 * @name Balance
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Balance
 */
export const Balance = {
  typeUrl: "/cosmos.bank.v1beta1.Balance",
  aminoType: "cosmos-sdk/Balance",
  is(o: any): o is Balance {
    return o && (o.$typeUrl === Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isAmino(o: any): o is BalanceAmino {
    return o && (o.$typeUrl === Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: Balance, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Balance {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BalanceAmino): Balance {
    const message = createBaseBalance();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Balance): BalanceAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: BalanceAminoMsg): Balance {
    return Balance.fromAmino(object.value);
  },
  toAminoMsg(message: Balance): BalanceAminoMsg {
    return {
      type: "cosmos-sdk/Balance",
      value: Balance.toAmino(message)
    };
  },
  fromProtoMsg(message: BalanceProtoMsg): Balance {
    return Balance.decode(message.value);
  },
  toProto(message: Balance): Uint8Array {
    return Balance.encode(message).finish();
  },
  toProtoMsg(message: Balance): BalanceProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Balance",
      value: Balance.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Balance.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};