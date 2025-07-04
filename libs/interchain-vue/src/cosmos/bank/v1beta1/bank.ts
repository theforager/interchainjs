import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the bank module.
 * @name Params
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Params
 */
export interface Params {
  /**
   * Deprecated: Use of SendEnabled in params is deprecated.
   * For genesis, use the newly added send_enabled field in the genesis object.
   * Storage, lookup, and manipulation of this information is now in the keeper.
   * 
   * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
   * @deprecated
   */
  sendEnabled: SendEnabled[];
  defaultSendEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the bank module.
 * @name ParamsAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * Deprecated: Use of SendEnabled in params is deprecated.
   * For genesis, use the newly added send_enabled field in the genesis object.
   * Storage, lookup, and manipulation of this information is now in the keeper.
   * 
   * As of cosmos-sdk 0.47, this only exists for backwards compatibility of genesis files.
   * @deprecated
   */
  send_enabled: SendEnabledAmino[];
  default_send_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/bank/Params";
  value: ParamsAmino;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 * @name SendEnabled
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.SendEnabled
 */
export interface SendEnabled {
  denom: string;
  enabled: boolean;
}
export interface SendEnabledProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.SendEnabled";
  value: Uint8Array;
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 * @name SendEnabledAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.SendEnabled
 */
export interface SendEnabledAmino {
  denom: string;
  enabled: boolean;
}
export interface SendEnabledAminoMsg {
  type: "cosmos-sdk/SendEnabled";
  value: SendEnabledAmino;
}
/**
 * Input models transaction input.
 * @name Input
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Input
 */
export interface Input {
  address: string;
  coins: Coin[];
}
export interface InputProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Input";
  value: Uint8Array;
}
/**
 * Input models transaction input.
 * @name InputAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Input
 */
export interface InputAmino {
  address: string;
  coins: CoinAmino[];
}
export interface InputAminoMsg {
  type: "cosmos-sdk/Input";
  value: InputAmino;
}
/**
 * Output models transaction outputs.
 * @name Output
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Output
 */
export interface Output {
  address: string;
  coins: Coin[];
}
export interface OutputProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Output";
  value: Uint8Array;
}
/**
 * Output models transaction outputs.
 * @name OutputAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Output
 */
export interface OutputAmino {
  address: string;
  coins: CoinAmino[];
}
export interface OutputAminoMsg {
  type: "cosmos-sdk/Output";
  value: OutputAmino;
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 * @name Supply
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export interface Supply {
  total: Coin[];
}
export interface SupplyProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Supply";
  value: Uint8Array;
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 * @name SupplyAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export interface SupplyAmino {
  total: CoinAmino[];
}
export interface SupplyAminoMsg {
  type: "cosmos-sdk/Supply";
  value: SupplyAmino;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 * @name DenomUnit
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomUnit
 */
export interface DenomUnit {
  /**
   * denom represents the string name of the given denom unit (e.g uatom).
   */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /**
   * aliases is a list of string aliases for the given denom
   */
  aliases: string[];
}
export interface DenomUnitProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.DenomUnit";
  value: Uint8Array;
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 * @name DenomUnitAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomUnit
 */
export interface DenomUnitAmino {
  /**
   * denom represents the string name of the given denom unit (e.g uatom).
   */
  denom: string;
  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 10^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   */
  exponent: number;
  /**
   * aliases is a list of string aliases for the given denom
   */
  aliases: string[];
}
export interface DenomUnitAminoMsg {
  type: "cosmos-sdk/DenomUnit";
  value: DenomUnitAmino;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 * @name Metadata
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Metadata
 */
export interface Metadata {
  description: string;
  /**
   * denom_units represents the list of DenomUnit's for a given coin
   */
  denomUnits: DenomUnit[];
  /**
   * base represents the base denom (should be the DenomUnit with exponent = 0).
   */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   */
  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   */
  uri: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   */
  uriHash: string;
}
export interface MetadataProtoMsg {
  typeUrl: "/cosmos.bank.v1beta1.Metadata";
  value: Uint8Array;
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 * @name MetadataAmino
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Metadata
 */
export interface MetadataAmino {
  description: string;
  /**
   * denom_units represents the list of DenomUnit's for a given coin
   */
  denom_units: DenomUnitAmino[];
  /**
   * base represents the base denom (should be the DenomUnit with exponent = 0).
   */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  /**
   * name defines the name of the token (eg: Cosmos Atom)
   */
  name: string;
  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   */
  symbol: string;
  /**
   * URI to a document (on or off-chain) that contains additional information. Optional.
   */
  uri: string;
  /**
   * URIHash is a sha256 hash of a document pointed by URI. It's used to verify that
   * the document didn't change. Optional.
   */
  uri_hash: string;
}
export interface MetadataAminoMsg {
  type: "cosmos-sdk/Metadata";
  value: MetadataAmino;
}
function createBaseParams(): Params {
  return {
    sendEnabled: [],
    defaultSendEnabled: false
  };
}
/**
 * Params defines the parameters for the bank module.
 * @name Params
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Params
 */
export const Params = {
  typeUrl: "/cosmos.bank.v1beta1.Params",
  aminoType: "cosmos-sdk/x/bank/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.sendEnabled) && (!o.sendEnabled.length || SendEnabled.is(o.sendEnabled[0])) && typeof o.defaultSendEnabled === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || Array.isArray(o.send_enabled) && (!o.send_enabled.length || SendEnabled.isAmino(o.send_enabled[0])) && typeof o.default_send_enabled === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.sendEnabled) {
      SendEnabled.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.defaultSendEnabled === true) {
      writer.uint32(16).bool(message.defaultSendEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sendEnabled.push(SendEnabled.decode(reader, reader.uint32()));
          break;
        case 2:
          message.defaultSendEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.sendEnabled = object.sendEnabled?.map(e => SendEnabled.fromPartial(e)) || [];
    message.defaultSendEnabled = object.defaultSendEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.sendEnabled = object.send_enabled?.map(e => SendEnabled.fromAmino(e)) || [];
    if (object.default_send_enabled !== undefined && object.default_send_enabled !== null) {
      message.defaultSendEnabled = object.default_send_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.sendEnabled) {
      obj.send_enabled = message.sendEnabled.map(e => e ? SendEnabled.toAmino(e) : undefined);
    } else {
      obj.send_enabled = message.sendEnabled;
    }
    obj.default_send_enabled = message.defaultSendEnabled === false ? undefined : message.defaultSendEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/bank/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Params.typeUrl)) {
      return;
    }
    SendEnabled.registerTypeUrl();
  }
};
function createBaseSendEnabled(): SendEnabled {
  return {
    denom: "",
    enabled: false
  };
}
/**
 * SendEnabled maps coin denom to a send_enabled status (whether a denom is
 * sendable).
 * @name SendEnabled
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.SendEnabled
 */
export const SendEnabled = {
  typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
  aminoType: "cosmos-sdk/SendEnabled",
  is(o: any): o is SendEnabled {
    return o && (o.$typeUrl === SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
  },
  isAmino(o: any): o is SendEnabledAmino {
    return o && (o.$typeUrl === SendEnabled.typeUrl || typeof o.denom === "string" && typeof o.enabled === "boolean");
  },
  encode(message: SendEnabled, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendEnabled {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendEnabled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SendEnabled>): SendEnabled {
    const message = createBaseSendEnabled();
    message.denom = object.denom ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: SendEnabledAmino): SendEnabled {
    const message = createBaseSendEnabled();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: SendEnabled): SendEnabledAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: SendEnabledAminoMsg): SendEnabled {
    return SendEnabled.fromAmino(object.value);
  },
  toAminoMsg(message: SendEnabled): SendEnabledAminoMsg {
    return {
      type: "cosmos-sdk/SendEnabled",
      value: SendEnabled.toAmino(message)
    };
  },
  fromProtoMsg(message: SendEnabledProtoMsg): SendEnabled {
    return SendEnabled.decode(message.value);
  },
  toProto(message: SendEnabled): Uint8Array {
    return SendEnabled.encode(message).finish();
  },
  toProtoMsg(message: SendEnabled): SendEnabledProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.SendEnabled",
      value: SendEnabled.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseInput(): Input {
  return {
    address: "",
    coins: []
  };
}
/**
 * Input models transaction input.
 * @name Input
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Input
 */
export const Input = {
  typeUrl: "/cosmos.bank.v1beta1.Input",
  aminoType: "cosmos-sdk/Input",
  is(o: any): o is Input {
    return o && (o.$typeUrl === Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isAmino(o: any): o is InputAmino {
    return o && (o.$typeUrl === Input.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: Input, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Input {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInput();
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
  fromPartial(object: DeepPartial<Input>): Input {
    const message = createBaseInput();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: InputAmino): Input {
    const message = createBaseInput();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Input): InputAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: InputAminoMsg): Input {
    return Input.fromAmino(object.value);
  },
  toAminoMsg(message: Input): InputAminoMsg {
    return {
      type: "cosmos-sdk/Input",
      value: Input.toAmino(message)
    };
  },
  fromProtoMsg(message: InputProtoMsg): Input {
    return Input.decode(message.value);
  },
  toProto(message: Input): Uint8Array {
    return Input.encode(message).finish();
  },
  toProtoMsg(message: Input): InputProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Input",
      value: Input.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Input.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseOutput(): Output {
  return {
    address: "",
    coins: []
  };
}
/**
 * Output models transaction outputs.
 * @name Output
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Output
 */
export const Output = {
  typeUrl: "/cosmos.bank.v1beta1.Output",
  aminoType: "cosmos-sdk/Output",
  is(o: any): o is Output {
    return o && (o.$typeUrl === Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.is(o.coins[0])));
  },
  isAmino(o: any): o is OutputAmino {
    return o && (o.$typeUrl === Output.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || Coin.isAmino(o.coins[0])));
  },
  encode(message: Output, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Output {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutput();
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
  fromPartial(object: DeepPartial<Output>): Output {
    const message = createBaseOutput();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: OutputAmino): Output {
    const message = createBaseOutput();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Output): OutputAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: OutputAminoMsg): Output {
    return Output.fromAmino(object.value);
  },
  toAminoMsg(message: Output): OutputAminoMsg {
    return {
      type: "cosmos-sdk/Output",
      value: Output.toAmino(message)
    };
  },
  fromProtoMsg(message: OutputProtoMsg): Output {
    return Output.decode(message.value);
  },
  toProto(message: Output): Uint8Array {
    return Output.encode(message).finish();
  },
  toProtoMsg(message: Output): OutputProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Output",
      value: Output.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Output.typeUrl)) {
      return;
    }
    Coin.registerTypeUrl();
  }
};
function createBaseSupply(): Supply {
  return {
    total: []
  };
}
/**
 * Supply represents a struct that passively keeps track of the total supply
 * amounts in the network.
 * This message is deprecated now that supply is indexed by denom.
 * @name Supply
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Supply
 * @deprecated
 */
export const Supply = {
  typeUrl: "/cosmos.bank.v1beta1.Supply",
  aminoType: "cosmos-sdk/Supply",
  is(o: any): o is Supply {
    return o && (o.$typeUrl === Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || Coin.is(o.total[0])));
  },
  isAmino(o: any): o is SupplyAmino {
    return o && (o.$typeUrl === Supply.typeUrl || Array.isArray(o.total) && (!o.total.length || Coin.isAmino(o.total[0])));
  },
  encode(message: Supply, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Supply {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSupply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Supply>): Supply {
    const message = createBaseSupply();
    message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SupplyAmino): Supply {
    const message = createBaseSupply();
    message.total = object.total?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Supply): SupplyAmino {
    const obj: any = {};
    if (message.total) {
      obj.total = message.total.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total = message.total;
    }
    return obj;
  },
  fromAminoMsg(object: SupplyAminoMsg): Supply {
    return Supply.fromAmino(object.value);
  },
  toAminoMsg(message: Supply): SupplyAminoMsg {
    return {
      type: "cosmos-sdk/Supply",
      value: Supply.toAmino(message)
    };
  },
  fromProtoMsg(message: SupplyProtoMsg): Supply {
    return Supply.decode(message.value);
  },
  toProto(message: Supply): Uint8Array {
    return Supply.encode(message).finish();
  },
  toProtoMsg(message: Supply): SupplyProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Supply",
      value: Supply.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Supply.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(Supply.typeUrl, Supply);
    GlobalDecoderRegistry.registerAminoProtoMapping(Supply.aminoType, Supply.typeUrl);
    Coin.registerTypeUrl();
  }
};
function createBaseDenomUnit(): DenomUnit {
  return {
    denom: "",
    exponent: 0,
    aliases: []
  };
}
/**
 * DenomUnit represents a struct that describes a given
 * denomination unit of the basic token.
 * @name DenomUnit
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.DenomUnit
 */
export const DenomUnit = {
  typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
  aminoType: "cosmos-sdk/DenomUnit",
  is(o: any): o is DenomUnit {
    return o && (o.$typeUrl === DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
  },
  isAmino(o: any): o is DenomUnitAmino {
    return o && (o.$typeUrl === DenomUnit.typeUrl || typeof o.denom === "string" && typeof o.exponent === "number" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string"));
  },
  encode(message: DenomUnit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exponent !== 0) {
      writer.uint32(16).uint32(message.exponent);
    }
    for (const v of message.aliases) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomUnit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exponent = reader.uint32();
          break;
        case 3:
          message.aliases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomUnit>): DenomUnit {
    const message = createBaseDenomUnit();
    message.denom = object.denom ?? "";
    message.exponent = object.exponent ?? 0;
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DenomUnitAmino): DenomUnit {
    const message = createBaseDenomUnit();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    if (object.exponent !== undefined && object.exponent !== null) {
      message.exponent = object.exponent;
    }
    message.aliases = object.aliases?.map(e => e) || [];
    return message;
  },
  toAmino(message: DenomUnit): DenomUnitAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    obj.exponent = message.exponent === 0 ? undefined : message.exponent;
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = message.aliases;
    }
    return obj;
  },
  fromAminoMsg(object: DenomUnitAminoMsg): DenomUnit {
    return DenomUnit.fromAmino(object.value);
  },
  toAminoMsg(message: DenomUnit): DenomUnitAminoMsg {
    return {
      type: "cosmos-sdk/DenomUnit",
      value: DenomUnit.toAmino(message)
    };
  },
  fromProtoMsg(message: DenomUnitProtoMsg): DenomUnit {
    return DenomUnit.decode(message.value);
  },
  toProto(message: DenomUnit): Uint8Array {
    return DenomUnit.encode(message).finish();
  },
  toProtoMsg(message: DenomUnit): DenomUnitProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.DenomUnit",
      value: DenomUnit.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMetadata(): Metadata {
  return {
    description: "",
    denomUnits: [],
    base: "",
    display: "",
    name: "",
    symbol: "",
    uri: "",
    uriHash: ""
  };
}
/**
 * Metadata represents a struct that describes
 * a basic token.
 * @name Metadata
 * @package cosmos.bank.v1beta1
 * @see proto type: cosmos.bank.v1beta1.Metadata
 */
export const Metadata = {
  typeUrl: "/cosmos.bank.v1beta1.Metadata",
  aminoType: "cosmos-sdk/Metadata",
  is(o: any): o is Metadata {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denomUnits) && (!o.denomUnits.length || DenomUnit.is(o.denomUnits[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
  },
  isAmino(o: any): o is MetadataAmino {
    return o && (o.$typeUrl === Metadata.typeUrl || typeof o.description === "string" && Array.isArray(o.denom_units) && (!o.denom_units.length || DenomUnit.isAmino(o.denom_units[0])) && typeof o.base === "string" && typeof o.display === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
  },
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    for (const v of message.denomUnits) {
      DenomUnit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(34).string(message.display);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.uri !== "") {
      writer.uint32(58).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(66).string(message.uriHash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.description = reader.string();
          break;
        case 2:
          message.denomUnits.push(DenomUnit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.base = reader.string();
          break;
        case 4:
          message.display = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.uri = reader.string();
          break;
        case 8:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.description = object.description ?? "";
    message.denomUnits = object.denomUnits?.map(e => DenomUnit.fromPartial(e)) || [];
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    return message;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.denomUnits = object.denom_units?.map(e => DenomUnit.fromAmino(e)) || [];
    if (object.base !== undefined && object.base !== null) {
      message.base = object.base;
    }
    if (object.display !== undefined && object.display !== null) {
      message.display = object.display;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.description = message.description === "" ? undefined : message.description;
    if (message.denomUnits) {
      obj.denom_units = message.denomUnits.map(e => e ? DenomUnit.toAmino(e) : undefined);
    } else {
      obj.denom_units = message.denomUnits;
    }
    obj.base = message.base === "" ? undefined : message.base;
    obj.display = message.display === "" ? undefined : message.display;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/cosmos.bank.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(Metadata.typeUrl)) {
      return;
    }
    DenomUnit.registerTypeUrl();
  }
};