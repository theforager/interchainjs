import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * @name Proof
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.Proof
 */
export interface Proof {
  total: bigint;
  index: bigint;
  leafHash: Uint8Array;
  aunts: Uint8Array[];
}
/**
 * @name ValueOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ValueOp
 */
export interface ValueOp {
  /**
   * Encoded in ProofOp.Key.
   */
  key: Uint8Array;
  /**
   * To encode in ProofOp.Data
   */
  proof?: Proof;
}
/**
 * @name DominoOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.DominoOp
 */
export interface DominoOp {
  key: string;
  input: string;
  output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 * @name ProofOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOp
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps
 * @name ProofOps
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOps
 */
export interface ProofOps {
  ops: ProofOp[];
}
function createBaseProof(): Proof {
  return {
    total: BigInt(0),
    index: BigInt(0),
    leafHash: new Uint8Array(),
    aunts: []
  };
}
/**
 * @name Proof
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.Proof
 */
export const Proof = {
  typeUrl: "/tendermint.crypto.Proof",
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).int64(message.total);
    }
    if (message.index !== BigInt(0)) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;
        case 2:
          message.index = reader.int64();
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    message.total = object.total !== undefined && object.total !== null ? BigInt(object.total.toString()) : BigInt(0);
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.leafHash = object.leafHash ?? new Uint8Array();
    message.aunts = object.aunts?.map(e => e) || [];
    return message;
  }
};
function createBaseValueOp(): ValueOp {
  return {
    key: new Uint8Array(),
    proof: undefined
  };
}
/**
 * @name ValueOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ValueOp
 */
export const ValueOp = {
  typeUrl: "/tendermint.crypto.ValueOp",
  encode(message: ValueOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValueOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ValueOp>): ValueOp {
    const message = createBaseValueOp();
    message.key = object.key ?? new Uint8Array();
    message.proof = object.proof !== undefined && object.proof !== null ? Proof.fromPartial(object.proof) : undefined;
    return message;
  }
};
function createBaseDominoOp(): DominoOp {
  return {
    key: "",
    input: "",
    output: ""
  };
}
/**
 * @name DominoOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.DominoOp
 */
export const DominoOp = {
  typeUrl: "/tendermint.crypto.DominoOp",
  encode(message: DominoOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== "") {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== "") {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DominoOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DominoOp>): DominoOp {
    const message = createBaseDominoOp();
    message.key = object.key ?? "";
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  }
};
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 * @name ProofOp
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOp
 */
export const ProofOp = {
  typeUrl: "/tendermint.crypto.ProofOp",
  encode(message: ProofOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  }
};
function createBaseProofOps(): ProofOps {
  return {
    ops: []
  };
}
/**
 * ProofOps is Merkle proof defined by the list of ProofOps
 * @name ProofOps
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.ProofOps
 */
export const ProofOps = {
  typeUrl: "/tendermint.crypto.ProofOps",
  encode(message: ProofOps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
    return message;
  }
};