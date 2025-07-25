import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * PublicKey defines the keys available for use with Validators
 * @name PublicKey
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.PublicKey
 */
export interface PublicKey {
  ed25519?: Uint8Array;
  secp256k1?: Uint8Array;
}
function createBasePublicKey(): PublicKey {
  return {
    ed25519: undefined,
    secp256k1: undefined
  };
}
/**
 * PublicKey defines the keys available for use with Validators
 * @name PublicKey
 * @package tendermint.crypto
 * @see proto type: tendermint.crypto.PublicKey
 */
export const PublicKey = {
  typeUrl: "/tendermint.crypto.PublicKey",
  encode(message: PublicKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ed25519 !== undefined) {
      writer.uint32(10).bytes(message.ed25519);
    }
    if (message.secp256k1 !== undefined) {
      writer.uint32(18).bytes(message.secp256k1);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PublicKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePublicKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ed25519 = reader.bytes();
          break;
        case 2:
          message.secp256k1 = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<PublicKey>): PublicKey {
    const message = createBasePublicKey();
    message.ed25519 = object.ed25519 ?? undefined;
    message.secp256k1 = object.secp256k1 ?? undefined;
    return message;
  }
};