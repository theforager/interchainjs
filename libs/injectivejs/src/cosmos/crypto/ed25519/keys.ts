import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 * @name PubKey
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PubKey
 */
export interface PubKey {
  key: Uint8Array;
}
export interface PubKeyProtoMsg {
  typeUrl: "/cosmos.crypto.ed25519.PubKey";
  value: Uint8Array;
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 * @name PubKeyAmino
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PubKey
 */
export interface PubKeyAmino {
  key: string;
}
export interface PubKeyAminoMsg {
  type: "tendermint/PubKeyEd25519";
  value: PubKeyAmino;
}
/**
 * PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 * @name PrivKey
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PrivKey
 */
export interface PrivKey {
  key: Uint8Array;
}
export interface PrivKeyProtoMsg {
  typeUrl: "/cosmos.crypto.ed25519.PrivKey";
  value: Uint8Array;
}
/**
 * PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 * @name PrivKeyAmino
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PrivKey
 */
export interface PrivKeyAmino {
  key: string;
}
export interface PrivKeyAminoMsg {
  type: "tendermint/PrivKeyEd25519";
  value: PrivKeyAmino;
}
function createBasePubKey(): PubKey {
  return {
    key: new Uint8Array()
  };
}
/**
 * PubKey is an ed25519 public key for handling Tendermint keys in SDK.
 * It's needed for Any serialization and SDK compatibility.
 * It must not be used in a non Tendermint key context because it doesn't implement
 * ADR-28. Nevertheless, you will like to use ed25519 in app user level
 * then you must create a new proto message and follow ADR-28 for Address construction.
 * @name PubKey
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PubKey
 */
export const PubKey = {
  typeUrl: "/cosmos.crypto.ed25519.PubKey",
  aminoType: "tendermint/PubKeyEd25519",
  is(o: any): o is PubKey {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is PubKeyAmino {
    return o && (o.$typeUrl === PubKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PubKeyAmino): PubKey {
    const message = createBasePubKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PubKey): PubKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PubKeyAminoMsg): PubKey {
    return PubKey.fromAmino(object.value);
  },
  toAminoMsg(message: PubKey): PubKeyAminoMsg {
    return {
      type: "tendermint/PubKeyEd25519",
      value: PubKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PubKeyProtoMsg): PubKey {
    return PubKey.decode(message.value);
  },
  toProto(message: PubKey): Uint8Array {
    return PubKey.encode(message).finish();
  },
  toProtoMsg(message: PubKey): PubKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.ed25519.PubKey",
      value: PubKey.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBasePrivKey(): PrivKey {
  return {
    key: new Uint8Array()
  };
}
/**
 * PrivKey defines a ed25519 private key.
 * NOTE: ed25519 keys must not be used in SDK apps except in a tendermint validator context.
 * @name PrivKey
 * @package cosmos.crypto.ed25519
 * @see proto type: cosmos.crypto.ed25519.PrivKey
 */
export const PrivKey = {
  typeUrl: "/cosmos.crypto.ed25519.PrivKey",
  aminoType: "tendermint/PrivKeyEd25519",
  is(o: any): o is PrivKey {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is PrivKeyAmino {
    return o && (o.$typeUrl === PrivKey.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: PrivKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PrivKeyAmino): PrivKey {
    const message = createBasePrivKey();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    return message;
  },
  toAmino(message: PrivKey): PrivKeyAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    return obj;
  },
  fromAminoMsg(object: PrivKeyAminoMsg): PrivKey {
    return PrivKey.fromAmino(object.value);
  },
  toAminoMsg(message: PrivKey): PrivKeyAminoMsg {
    return {
      type: "tendermint/PrivKeyEd25519",
      value: PrivKey.toAmino(message)
    };
  },
  fromProtoMsg(message: PrivKeyProtoMsg): PrivKey {
    return PrivKey.decode(message.value);
  },
  toProto(message: PrivKey): Uint8Array {
    return PrivKey.encode(message).finish();
  },
  toProtoMsg(message: PrivKey): PrivKeyProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.ed25519.PrivKey",
      value: PrivKey.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};