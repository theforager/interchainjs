import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * Module is the config object of the circuit module.
 * @name Module
 * @package cosmos.circuit.module.v1
 * @see proto type: cosmos.circuit.module.v1.Module
 */
export interface Module {
  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   */
  authority: string;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.circuit.module.v1.Module";
  value: Uint8Array;
}
/**
 * Module is the config object of the circuit module.
 * @name ModuleAmino
 * @package cosmos.circuit.module.v1
 * @see proto type: cosmos.circuit.module.v1.Module
 */
export interface ModuleAmino {
  /**
   * authority defines the custom module authority. If not set, defaults to the governance module.
   */
  authority: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
function createBaseModule(): Module {
  return {
    authority: ""
  };
}
/**
 * Module is the config object of the circuit module.
 * @name Module
 * @package cosmos.circuit.module.v1
 * @see proto type: cosmos.circuit.module.v1.Module
 */
export const Module = {
  typeUrl: "/cosmos.circuit.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.authority === "string");
  },
  isAmino(o: any): o is ModuleAmino {
    return o && (o.$typeUrl === Module.typeUrl || typeof o.authority === "string");
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.circuit.module.v1.Module",
      value: Module.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};