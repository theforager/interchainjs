import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 * @name BaseAccount
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.BaseAccount
 */
export interface BaseAccount {
  address: string;
  pubKey?: Any;
  accountNumber: bigint;
  sequence: bigint;
}
export interface BaseAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount";
  value: Uint8Array;
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 * @name BaseAccountAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.BaseAccount
 */
export interface BaseAccountAmino {
  address: string;
  pub_key?: AnyAmino;
  account_number: string;
  sequence: string;
}
export interface BaseAccountAminoMsg {
  type: "cosmos-sdk/BaseAccount";
  value: BaseAccountAmino;
}
/**
 * ModuleAccount defines an account for modules that holds coins on a pool.
 * @name ModuleAccount
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleAccount
 */
export interface ModuleAccount {
  baseAccount?: BaseAccount;
  name: string;
  permissions: string[];
}
export interface ModuleAccountProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount";
  value: Uint8Array;
}
/**
 * ModuleAccount defines an account for modules that holds coins on a pool.
 * @name ModuleAccountAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleAccount
 */
export interface ModuleAccountAmino {
  base_account?: BaseAccountAmino;
  name: string;
  permissions: string[];
}
export interface ModuleAccountAminoMsg {
  type: "cosmos-sdk/ModuleAccount";
  value: ModuleAccountAmino;
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 * @name ModuleCredential
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleCredential
 */
export interface ModuleCredential {
  /**
   * module_name is the name of the module used for address derivation (passed into address.Module).
   */
  moduleName: string;
  /**
   * derivation_keys is for deriving a module account address (passed into address.Module)
   * adding more keys creates sub-account addresses (passed into address.Derive)
   */
  derivationKeys: Uint8Array[];
}
export interface ModuleCredentialProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.ModuleCredential";
  value: Uint8Array;
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 * @name ModuleCredentialAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleCredential
 */
export interface ModuleCredentialAmino {
  /**
   * module_name is the name of the module used for address derivation (passed into address.Module).
   */
  module_name: string;
  /**
   * derivation_keys is for deriving a module account address (passed into address.Module)
   * adding more keys creates sub-account addresses (passed into address.Derive)
   */
  derivation_keys: string[];
}
export interface ModuleCredentialAminoMsg {
  type: "cosmos-sdk/GroupAccountCredential";
  value: ModuleCredentialAmino;
}
/**
 * Params defines the parameters for the auth module.
 * @name Params
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.Params
 */
export interface Params {
  maxMemoCharacters: bigint;
  txSigLimit: bigint;
  txSizeCostPerByte: bigint;
  sigVerifyCostEd25519: bigint;
  sigVerifyCostSecp256k1: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the auth module.
 * @name ParamsAmino
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.Params
 */
export interface ParamsAmino {
  max_memo_characters: string;
  tx_sig_limit: string;
  tx_size_cost_per_byte: string;
  sig_verify_cost_ed25519: string;
  sig_verify_cost_secp256k1: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/auth/Params";
  value: ParamsAmino;
}
function createBaseBaseAccount(): BaseAccount {
  return {
    address: "",
    pubKey: undefined,
    accountNumber: BigInt(0),
    sequence: BigInt(0)
  };
}
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 * @name BaseAccount
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.BaseAccount
 */
export const BaseAccount = {
  typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
  aminoType: "cosmos-sdk/BaseAccount",
  is(o: any): o is BaseAccount {
    return o && (o.$typeUrl === BaseAccount.typeUrl || typeof o.address === "string" && typeof o.accountNumber === "bigint" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is BaseAccountAmino {
    return o && (o.$typeUrl === BaseAccount.typeUrl || typeof o.address === "string" && typeof o.account_number === "bigint" && typeof o.sequence === "bigint");
  },
  encode(message: BaseAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.accountNumber !== BigInt(0)) {
      writer.uint32(24).uint64(message.accountNumber);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(32).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BaseAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.accountNumber = reader.uint64();
          break;
        case 4:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<BaseAccount>): BaseAccount {
    const message = createBaseBaseAccount();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
    message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: BaseAccountAmino): BaseAccount {
    const message = createBaseBaseAccount();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.account_number !== undefined && object.account_number !== null) {
      message.accountNumber = BigInt(object.account_number);
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: BaseAccount): BaseAccountAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BaseAccountAminoMsg): BaseAccount {
    return BaseAccount.fromAmino(object.value);
  },
  toAminoMsg(message: BaseAccount): BaseAccountAminoMsg {
    return {
      type: "cosmos-sdk/BaseAccount",
      value: BaseAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: BaseAccountProtoMsg): BaseAccount {
    return BaseAccount.decode(message.value);
  },
  toProto(message: BaseAccount): Uint8Array {
    return BaseAccount.encode(message).finish();
  },
  toProtoMsg(message: BaseAccount): BaseAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
      value: BaseAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(BaseAccount.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(BaseAccount.typeUrl, BaseAccount);
    GlobalDecoderRegistry.registerAminoProtoMapping(BaseAccount.aminoType, BaseAccount.typeUrl);
  }
};
function createBaseModuleAccount(): ModuleAccount {
  return {
    baseAccount: undefined,
    name: "",
    permissions: []
  };
}
/**
 * ModuleAccount defines an account for modules that holds coins on a pool.
 * @name ModuleAccount
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleAccount
 */
export const ModuleAccount = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
  aminoType: "cosmos-sdk/ModuleAccount",
  is(o: any): o is ModuleAccount {
    return o && (o.$typeUrl === ModuleAccount.typeUrl || typeof o.name === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
  },
  isAmino(o: any): o is ModuleAccountAmino {
    return o && (o.$typeUrl === ModuleAccount.typeUrl || typeof o.name === "string" && Array.isArray(o.permissions) && (!o.permissions.length || typeof o.permissions[0] === "string"));
  },
  encode(message: ModuleAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseAccount !== undefined) {
      BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleAccount {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseAccount = BaseAccount.decode(reader, reader.uint32());
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.permissions.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModuleAccount>): ModuleAccount {
    const message = createBaseModuleAccount();
    message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleAccountAmino): ModuleAccount {
    const message = createBaseModuleAccount();
    if (object.base_account !== undefined && object.base_account !== null) {
      message.baseAccount = BaseAccount.fromAmino(object.base_account);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.permissions = object.permissions?.map(e => e) || [];
    return message;
  },
  toAmino(message: ModuleAccount): ModuleAccountAmino {
    const obj: any = {};
    obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e);
    } else {
      obj.permissions = message.permissions;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleAccountAminoMsg): ModuleAccount {
    return ModuleAccount.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleAccount): ModuleAccountAminoMsg {
    return {
      type: "cosmos-sdk/ModuleAccount",
      value: ModuleAccount.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleAccountProtoMsg): ModuleAccount {
    return ModuleAccount.decode(message.value);
  },
  toProto(message: ModuleAccount): Uint8Array {
    return ModuleAccount.encode(message).finish();
  },
  toProtoMsg(message: ModuleAccount): ModuleAccountProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
      value: ModuleAccount.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(ModuleAccount.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(ModuleAccount.typeUrl, ModuleAccount);
    GlobalDecoderRegistry.registerAminoProtoMapping(ModuleAccount.aminoType, ModuleAccount.typeUrl);
    BaseAccount.registerTypeUrl();
  }
};
function createBaseModuleCredential(): ModuleCredential {
  return {
    moduleName: "",
    derivationKeys: []
  };
}
/**
 * ModuleCredential represents a unclaimable pubkey for base accounts controlled by modules.
 * @name ModuleCredential
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.ModuleCredential
 */
export const ModuleCredential = {
  typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
  aminoType: "cosmos-sdk/GroupAccountCredential",
  is(o: any): o is ModuleCredential {
    return o && (o.$typeUrl === ModuleCredential.typeUrl || typeof o.moduleName === "string" && Array.isArray(o.derivationKeys) && (!o.derivationKeys.length || o.derivationKeys[0] instanceof Uint8Array || typeof o.derivationKeys[0] === "string"));
  },
  isAmino(o: any): o is ModuleCredentialAmino {
    return o && (o.$typeUrl === ModuleCredential.typeUrl || typeof o.module_name === "string" && Array.isArray(o.derivation_keys) && (!o.derivation_keys.length || o.derivation_keys[0] instanceof Uint8Array || typeof o.derivation_keys[0] === "string"));
  },
  encode(message: ModuleCredential, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    for (const v of message.derivationKeys) {
      writer.uint32(18).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleCredential {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleCredential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        case 2:
          message.derivationKeys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModuleCredential>): ModuleCredential {
    const message = createBaseModuleCredential();
    message.moduleName = object.moduleName ?? "";
    message.derivationKeys = object.derivationKeys?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ModuleCredentialAmino): ModuleCredential {
    const message = createBaseModuleCredential();
    if (object.module_name !== undefined && object.module_name !== null) {
      message.moduleName = object.module_name;
    }
    message.derivationKeys = object.derivation_keys?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: ModuleCredential): ModuleCredentialAmino {
    const obj: any = {};
    obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
    if (message.derivationKeys) {
      obj.derivation_keys = message.derivationKeys.map(e => base64FromBytes(e));
    } else {
      obj.derivation_keys = message.derivationKeys;
    }
    return obj;
  },
  fromAminoMsg(object: ModuleCredentialAminoMsg): ModuleCredential {
    return ModuleCredential.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleCredential): ModuleCredentialAminoMsg {
    return {
      type: "cosmos-sdk/GroupAccountCredential",
      value: ModuleCredential.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleCredentialProtoMsg): ModuleCredential {
    return ModuleCredential.decode(message.value);
  },
  toProto(message: ModuleCredential): Uint8Array {
    return ModuleCredential.encode(message).finish();
  },
  toProtoMsg(message: ModuleCredential): ModuleCredentialProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
      value: ModuleCredential.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    maxMemoCharacters: BigInt(0),
    txSigLimit: BigInt(0),
    txSizeCostPerByte: BigInt(0),
    sigVerifyCostEd25519: BigInt(0),
    sigVerifyCostSecp256k1: BigInt(0)
  };
}
/**
 * Params defines the parameters for the auth module.
 * @name Params
 * @package cosmos.auth.v1beta1
 * @see proto type: cosmos.auth.v1beta1.Params
 */
export const Params = {
  typeUrl: "/cosmos.auth.v1beta1.Params",
  aminoType: "cosmos-sdk/x/auth/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxMemoCharacters === "bigint" && typeof o.txSigLimit === "bigint" && typeof o.txSizeCostPerByte === "bigint" && typeof o.sigVerifyCostEd25519 === "bigint" && typeof o.sigVerifyCostSecp256k1 === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_memo_characters === "bigint" && typeof o.tx_sig_limit === "bigint" && typeof o.tx_size_cost_per_byte === "bigint" && typeof o.sig_verify_cost_ed25519 === "bigint" && typeof o.sig_verify_cost_secp256k1 === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxMemoCharacters !== BigInt(0)) {
      writer.uint32(8).uint64(message.maxMemoCharacters);
    }
    if (message.txSigLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.txSigLimit);
    }
    if (message.txSizeCostPerByte !== BigInt(0)) {
      writer.uint32(24).uint64(message.txSizeCostPerByte);
    }
    if (message.sigVerifyCostEd25519 !== BigInt(0)) {
      writer.uint32(32).uint64(message.sigVerifyCostEd25519);
    }
    if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
      writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
          message.maxMemoCharacters = reader.uint64();
          break;
        case 2:
          message.txSigLimit = reader.uint64();
          break;
        case 3:
          message.txSizeCostPerByte = reader.uint64();
          break;
        case 4:
          message.sigVerifyCostEd25519 = reader.uint64();
          break;
        case 5:
          message.sigVerifyCostSecp256k1 = reader.uint64();
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
    message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? BigInt(object.maxMemoCharacters.toString()) : BigInt(0);
    message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? BigInt(object.txSigLimit.toString()) : BigInt(0);
    message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? BigInt(object.txSizeCostPerByte.toString()) : BigInt(0);
    message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt(0);
    message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
      message.maxMemoCharacters = BigInt(object.max_memo_characters);
    }
    if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
      message.txSigLimit = BigInt(object.tx_sig_limit);
    }
    if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
      message.txSizeCostPerByte = BigInt(object.tx_size_cost_per_byte);
    }
    if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
      message.sigVerifyCostEd25519 = BigInt(object.sig_verify_cost_ed25519);
    }
    if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
      message.sigVerifyCostSecp256k1 = BigInt(object.sig_verify_cost_secp256k1);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_memo_characters = message.maxMemoCharacters !== BigInt(0) ? message.maxMemoCharacters?.toString() : undefined;
    obj.tx_sig_limit = message.txSigLimit !== BigInt(0) ? message.txSigLimit?.toString() : undefined;
    obj.tx_size_cost_per_byte = message.txSizeCostPerByte !== BigInt(0) ? message.txSizeCostPerByte?.toString() : undefined;
    obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 !== BigInt(0) ? message.sigVerifyCostEd25519?.toString() : undefined;
    obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 !== BigInt(0) ? message.sigVerifyCostSecp256k1?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/auth/Params",
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
      typeUrl: "/cosmos.auth.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};