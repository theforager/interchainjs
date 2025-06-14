import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 * @name LegacyAminoPubKey
 * @package cosmos.crypto.multisig
 * @see proto type: cosmos.crypto.multisig.LegacyAminoPubKey
 */
export interface LegacyAminoPubKey {
  threshold: number;
  publicKeys: Any[];
}
function createBaseLegacyAminoPubKey(): LegacyAminoPubKey {
  return {
    threshold: 0,
    publicKeys: []
  };
}
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 * @name LegacyAminoPubKey
 * @package cosmos.crypto.multisig
 * @see proto type: cosmos.crypto.multisig.LegacyAminoPubKey
 */
export const LegacyAminoPubKey = {
  typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
  aminoType: "tendermint/PubKeyMultisigThreshold",
  encode(message: LegacyAminoPubKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== 0) {
      writer.uint32(8).uint32(message.threshold);
    }
    for (const v of message.publicKeys) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LegacyAminoPubKey {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyAminoPubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.uint32();
          break;
        case 2:
          message.publicKeys.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LegacyAminoPubKey>): LegacyAminoPubKey {
    const message = createBaseLegacyAminoPubKey();
    message.threshold = object.threshold ?? 0;
    message.publicKeys = object.publicKeys?.map(e => Any.fromPartial(e)) || [];
    return message;
  }
};