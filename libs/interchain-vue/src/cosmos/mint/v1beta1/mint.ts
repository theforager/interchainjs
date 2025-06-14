import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@interchainjs/math";
import { DeepPartial } from "../../../helpers";
/**
 * Minter represents the minting state.
 * @name Minter
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export interface Minter {
  /**
   * current annual inflation rate
   */
  inflation: string;
  /**
   * current annual expected provisions
   */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.Minter";
  value: Uint8Array;
}
/**
 * Minter represents the minting state.
 * @name MinterAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export interface MinterAmino {
  /**
   * current annual inflation rate
   */
  inflation: string;
  /**
   * current annual expected provisions
   */
  annual_provisions: string;
}
export interface MinterAminoMsg {
  type: "cosmos-sdk/Minter";
  value: MinterAmino;
}
/**
 * Params defines the parameters for the x/mint module.
 * @name Params
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export interface Params {
  /**
   * type of coin to mint
   */
  mintDenom: string;
  /**
   * maximum annual change in inflation rate
   */
  inflationRateChange: string;
  /**
   * maximum inflation rate
   */
  inflationMax: string;
  /**
   * minimum inflation rate
   */
  inflationMin: string;
  /**
   * goal of percent bonded atoms
   */
  goalBonded: string;
  /**
   * expected blocks per year
   */
  blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.mint.v1beta1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/mint module.
 * @name ParamsAmino
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export interface ParamsAmino {
  /**
   * type of coin to mint
   */
  mint_denom: string;
  /**
   * maximum annual change in inflation rate
   */
  inflation_rate_change: string;
  /**
   * maximum inflation rate
   */
  inflation_max: string;
  /**
   * minimum inflation rate
   */
  inflation_min: string;
  /**
   * goal of percent bonded atoms
   */
  goal_bonded: string;
  /**
   * expected blocks per year
   */
  blocks_per_year: string;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/x/mint/Params";
  value: ParamsAmino;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    annualProvisions: ""
  };
}
/**
 * Minter represents the minting state.
 * @name Minter
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Minter
 */
export const Minter = {
  typeUrl: "/cosmos.mint.v1beta1.Minter",
  aminoType: "cosmos-sdk/Minter",
  is(o: any): o is Minter {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.inflation === "string" && typeof o.annualProvisions === "string");
  },
  isAmino(o: any): o is MinterAmino {
    return o && (o.$typeUrl === Minter.typeUrl || typeof o.inflation === "string" && typeof o.annual_provisions === "string");
  },
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflation !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Minter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.inflation !== undefined && object.inflation !== null) {
      message.inflation = object.inflation;
    }
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation = message.inflation === "" ? undefined : Decimal.fromUserInput(message.inflation, 18).atomics;
    obj.annual_provisions = message.annualProvisions === "" ? undefined : Decimal.fromUserInput(message.annualProvisions, 18).atomics;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  toAminoMsg(message: Minter): MinterAminoMsg {
    return {
      type: "cosmos-sdk/Minter",
      value: Minter.toAmino(message)
    };
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/cosmos.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflationRateChange: "",
    inflationMax: "",
    inflationMin: "",
    goalBonded: "",
    blocksPerYear: BigInt(0)
  };
}
/**
 * Params defines the parameters for the x/mint module.
 * @name Params
 * @package cosmos.mint.v1beta1
 * @see proto type: cosmos.mint.v1beta1.Params
 */
export const Params = {
  typeUrl: "/cosmos.mint.v1beta1.Params",
  aminoType: "cosmos-sdk/x/mint/Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mintDenom === "string" && typeof o.inflationRateChange === "string" && typeof o.inflationMax === "string" && typeof o.inflationMin === "string" && typeof o.goalBonded === "string" && typeof o.blocksPerYear === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.mint_denom === "string" && typeof o.inflation_rate_change === "string" && typeof o.inflation_max === "string" && typeof o.inflation_min === "string" && typeof o.goal_bonded === "string" && typeof o.blocks_per_year === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflationRateChange !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
    }
    if (message.inflationMax !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
    }
    if (message.inflationMin !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.inflationMin, 18).atomics);
    }
    if (message.goalBonded !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.goalBonded, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(48).uint64(message.blocksPerYear);
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
          message.mintDenom = reader.string();
          break;
        case 2:
          message.inflationRateChange = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.inflationMin = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.goalBonded = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 6:
          message.blocksPerYear = reader.uint64();
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
    message.mintDenom = object.mintDenom ?? "";
    message.inflationRateChange = object.inflationRateChange ?? "";
    message.inflationMax = object.inflationMax ?? "";
    message.inflationMin = object.inflationMin ?? "";
    message.goalBonded = object.goalBonded ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.inflation_rate_change !== undefined && object.inflation_rate_change !== null) {
      message.inflationRateChange = object.inflation_rate_change;
    }
    if (object.inflation_max !== undefined && object.inflation_max !== null) {
      message.inflationMax = object.inflation_max;
    }
    if (object.inflation_min !== undefined && object.inflation_min !== null) {
      message.inflationMin = object.inflation_min;
    }
    if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
      message.goalBonded = object.goal_bonded;
    }
    if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
      message.blocksPerYear = BigInt(object.blocks_per_year);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.inflation_rate_change = Decimal.fromUserInput(message.inflationRateChange, 18).atomics ?? "";
    obj.inflation_max = Decimal.fromUserInput(message.inflationMax, 18).atomics ?? "";
    obj.inflation_min = Decimal.fromUserInput(message.inflationMin, 18).atomics ?? "";
    obj.goal_bonded = Decimal.fromUserInput(message.goalBonded, 18).atomics ?? "";
    obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/mint/Params",
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
      typeUrl: "/cosmos.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};