import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Plan specifies information about a planned upgrade and when it should occur.
 * @name Plan
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.Plan
 */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   * @deprecated
   */
  time: Date;
  /**
   * The height at which the upgrade must be performed.
   */
  height: bigint;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   * @deprecated
   */
  upgradedClientState?: Any;
}
export interface PlanProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.Plan";
  value: Uint8Array;
}
/**
 * Plan specifies information about a planned upgrade and when it should occur.
 * @name PlanAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.Plan
 */
export interface PlanAmino {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   * @deprecated
   */
  time: string;
  /**
   * The height at which the upgrade must be performed.
   */
  height: string;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   * @deprecated
   */
  upgraded_client_state?: AnyAmino;
}
export interface PlanAminoMsg {
  type: "cosmos-sdk/Plan";
  value: PlanAmino;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 * @name SoftwareUpgradeProposal
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 * @deprecated
 */
export interface SoftwareUpgradeProposal {
  /**
   * title of the proposal
   */
  title: string;
  /**
   * description of the proposal
   */
  description: string;
  /**
   * plan of the proposal
   */
  plan: Plan;
}
export interface SoftwareUpgradeProposalProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  value: Uint8Array;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 * @name SoftwareUpgradeProposalAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 * @deprecated
 */
export interface SoftwareUpgradeProposalAmino {
  /**
   * title of the proposal
   */
  title: string;
  /**
   * description of the proposal
   */
  description: string;
  /**
   * plan of the proposal
   */
  plan: PlanAmino;
}
export interface SoftwareUpgradeProposalAminoMsg {
  type: "cosmos-sdk/SoftwareUpgradeProposal";
  value: SoftwareUpgradeProposalAmino;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 * @name CancelSoftwareUpgradeProposal
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 * @deprecated
 */
export interface CancelSoftwareUpgradeProposal {
  /**
   * title of the proposal
   */
  title: string;
  /**
   * description of the proposal
   */
  description: string;
}
export interface CancelSoftwareUpgradeProposalProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
  value: Uint8Array;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 * @name CancelSoftwareUpgradeProposalAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 * @deprecated
 */
export interface CancelSoftwareUpgradeProposalAmino {
  /**
   * title of the proposal
   */
  title: string;
  /**
   * description of the proposal
   */
  description: string;
}
export interface CancelSoftwareUpgradeProposalAminoMsg {
  type: "cosmos-sdk/CancelSoftwareUpgradeProposal";
  value: CancelSoftwareUpgradeProposalAmino;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * @name ModuleVersion
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.ModuleVersion
 */
export interface ModuleVersion {
  /**
   * name of the app module
   */
  name: string;
  /**
   * consensus version of the app module
   */
  version: bigint;
}
export interface ModuleVersionProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion";
  value: Uint8Array;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * @name ModuleVersionAmino
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.ModuleVersion
 */
export interface ModuleVersionAmino {
  /**
   * name of the app module
   */
  name: string;
  /**
   * consensus version of the app module
   */
  version: string;
}
export interface ModuleVersionAminoMsg {
  type: "cosmos-sdk/ModuleVersion";
  value: ModuleVersionAmino;
}
function createBasePlan(): Plan {
  return {
    name: "",
    time: new Date(),
    height: BigInt(0),
    info: "",
    upgradedClientState: undefined
  };
}
/**
 * Plan specifies information about a planned upgrade and when it should occur.
 * @name Plan
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.Plan
 */
export const Plan = {
  typeUrl: "/cosmos.upgrade.v1beta1.Plan",
  aminoType: "cosmos-sdk/Plan",
  is(o: any): o is Plan {
    return o && (o.$typeUrl === Plan.typeUrl || typeof o.name === "string" && Timestamp.is(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
  },
  isAmino(o: any): o is PlanAmino {
    return o && (o.$typeUrl === Plan.typeUrl || typeof o.name === "string" && Timestamp.isAmino(o.time) && typeof o.height === "bigint" && typeof o.info === "string");
  },
  encode(message: Plan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Plan {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.height = reader.int64();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Plan>): Plan {
    const message = createBasePlan();
    message.name = object.name ?? "";
    message.time = object.time ?? undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.info = object.info ?? "";
    message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
    return message;
  },
  fromAmino(object: PlanAmino): Plan {
    const message = createBasePlan();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromTimestamp(Timestamp.fromAmino(object.time));
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info;
    }
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    return message;
  },
  toAmino(message: Plan): PlanAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : new Date();
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.info = message.info === "" ? undefined : message.info;
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: PlanAminoMsg): Plan {
    return Plan.fromAmino(object.value);
  },
  toAminoMsg(message: Plan): PlanAminoMsg {
    return {
      type: "cosmos-sdk/Plan",
      value: Plan.toAmino(message)
    };
  },
  fromProtoMsg(message: PlanProtoMsg): Plan {
    return Plan.decode(message.value);
  },
  toProto(message: Plan): Uint8Array {
    return Plan.encode(message).finish();
  },
  toProtoMsg(message: Plan): PlanProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.Plan",
      value: Plan.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseSoftwareUpgradeProposal(): SoftwareUpgradeProposal {
  return {
    title: "",
    description: "",
    plan: Plan.fromPartial({})
  };
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 * @name SoftwareUpgradeProposal
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.SoftwareUpgradeProposal
 * @deprecated
 */
export const SoftwareUpgradeProposal = {
  typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
  aminoType: "cosmos-sdk/SoftwareUpgradeProposal",
  is(o: any): o is SoftwareUpgradeProposal {
    return o && (o.$typeUrl === SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.is(o.plan));
  },
  isAmino(o: any): o is SoftwareUpgradeProposalAmino {
    return o && (o.$typeUrl === SoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Plan.isAmino(o.plan));
  },
  encode(message: SoftwareUpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SoftwareUpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal {
    const message = createBaseSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: SoftwareUpgradeProposalAmino): SoftwareUpgradeProposal {
    const message = createBaseSoftwareUpgradeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : Plan.toAmino(Plan.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: SoftwareUpgradeProposalAminoMsg): SoftwareUpgradeProposal {
    return SoftwareUpgradeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalAminoMsg {
    return {
      type: "cosmos-sdk/SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: SoftwareUpgradeProposalProtoMsg): SoftwareUpgradeProposal {
    return SoftwareUpgradeProposal.decode(message.value);
  },
  toProto(message: SoftwareUpgradeProposal): Uint8Array {
    return SoftwareUpgradeProposal.encode(message).finish();
  },
  toProtoMsg(message: SoftwareUpgradeProposal): SoftwareUpgradeProposalProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(SoftwareUpgradeProposal.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(SoftwareUpgradeProposal.typeUrl, SoftwareUpgradeProposal);
    GlobalDecoderRegistry.registerAminoProtoMapping(SoftwareUpgradeProposal.aminoType, SoftwareUpgradeProposal.typeUrl);
    Plan.registerTypeUrl();
  }
};
function createBaseCancelSoftwareUpgradeProposal(): CancelSoftwareUpgradeProposal {
  return {
    title: "",
    description: ""
  };
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 * @name CancelSoftwareUpgradeProposal
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal
 * @deprecated
 */
export const CancelSoftwareUpgradeProposal = {
  typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
  aminoType: "cosmos-sdk/CancelSoftwareUpgradeProposal",
  is(o: any): o is CancelSoftwareUpgradeProposal {
    return o && (o.$typeUrl === CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  isAmino(o: any): o is CancelSoftwareUpgradeProposalAmino {
    return o && (o.$typeUrl === CancelSoftwareUpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string");
  },
  encode(message: CancelSoftwareUpgradeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelSoftwareUpgradeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelSoftwareUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal {
    const message = createBaseCancelSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: CancelSoftwareUpgradeProposalAmino): CancelSoftwareUpgradeProposal {
    const message = createBaseCancelSoftwareUpgradeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: CancelSoftwareUpgradeProposalAminoMsg): CancelSoftwareUpgradeProposal {
    return CancelSoftwareUpgradeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalAminoMsg {
    return {
      type: "cosmos-sdk/CancelSoftwareUpgradeProposal",
      value: CancelSoftwareUpgradeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CancelSoftwareUpgradeProposalProtoMsg): CancelSoftwareUpgradeProposal {
    return CancelSoftwareUpgradeProposal.decode(message.value);
  },
  toProto(message: CancelSoftwareUpgradeProposal): Uint8Array {
    return CancelSoftwareUpgradeProposal.encode(message).finish();
  },
  toProtoMsg(message: CancelSoftwareUpgradeProposal): CancelSoftwareUpgradeProposalProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
      value: CancelSoftwareUpgradeProposal.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(CancelSoftwareUpgradeProposal.typeUrl)) {
      return;
    }
    GlobalDecoderRegistry.register(CancelSoftwareUpgradeProposal.typeUrl, CancelSoftwareUpgradeProposal);
    GlobalDecoderRegistry.registerAminoProtoMapping(CancelSoftwareUpgradeProposal.aminoType, CancelSoftwareUpgradeProposal.typeUrl);
  }
};
function createBaseModuleVersion(): ModuleVersion {
  return {
    name: "",
    version: BigInt(0)
  };
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * @name ModuleVersion
 * @package cosmos.upgrade.v1beta1
 * @see proto type: cosmos.upgrade.v1beta1.ModuleVersion
 */
export const ModuleVersion = {
  typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
  aminoType: "cosmos-sdk/ModuleVersion",
  is(o: any): o is ModuleVersion {
    return o && (o.$typeUrl === ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
  },
  isAmino(o: any): o is ModuleVersionAmino {
    return o && (o.$typeUrl === ModuleVersion.typeUrl || typeof o.name === "string" && typeof o.version === "bigint");
  },
  encode(message: ModuleVersion, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(16).uint64(message.version);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleVersion {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.version = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ModuleVersion>): ModuleVersion {
    const message = createBaseModuleVersion();
    message.name = object.name ?? "";
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ModuleVersionAmino): ModuleVersion {
    const message = createBaseModuleVersion();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    return message;
  },
  toAmino(message: ModuleVersion): ModuleVersionAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleVersionAminoMsg): ModuleVersion {
    return ModuleVersion.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleVersion): ModuleVersionAminoMsg {
    return {
      type: "cosmos-sdk/ModuleVersion",
      value: ModuleVersion.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleVersionProtoMsg): ModuleVersion {
    return ModuleVersion.decode(message.value);
  },
  toProto(message: ModuleVersion): Uint8Array {
    return ModuleVersion.encode(message).finish();
  },
  toProtoMsg(message: ModuleVersion): ModuleVersionProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion",
      value: ModuleVersion.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};