import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
  }
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
  }
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
  }
};