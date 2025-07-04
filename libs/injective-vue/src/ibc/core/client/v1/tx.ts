import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { Plan, PlanAmino } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Params, ParamsAmino } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClient {
  /**
   * light client state
   */
  clientState?: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgCreateClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient";
  value: Uint8Array;
}
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export interface MsgCreateClientAmino {
  /**
   * light client state
   */
  client_state?: AnyAmino;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state?: AnyAmino;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgCreateClientAminoMsg {
  type: "cosmos-sdk/MsgCreateClient";
  value: MsgCreateClientAmino;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponse {
  clientId: string;
}
export interface MsgCreateClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse";
  value: Uint8Array;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export interface MsgCreateClientResponseAmino {
  client_id: string;
}
export interface MsgCreateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateClientResponse";
  value: MsgCreateClientResponseAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 * @name MsgUpdateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClient {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * client message to update the light client
   */
  clientMessage?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpdateClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient";
  value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 * @name MsgUpdateClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export interface MsgUpdateClientAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * client message to update the light client
   */
  client_message?: AnyAmino;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpdateClientAminoMsg {
  type: "cosmos-sdk/MsgUpdateClient";
  value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponse {}
export interface MsgUpdateClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export interface MsgUpdateClientResponseAmino {}
export interface MsgUpdateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientResponse";
  value: MsgUpdateClientResponseAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClient {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * upgraded client state
   */
  clientState?: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState?: Any;
  /**
   * proof that old chain committed to new client
   */
  proofUpgradeClient: Uint8Array;
  /**
   * proof that old chain committed to new consensus state
   */
  proofUpgradeConsensusState: Uint8Array;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpgradeClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient";
  value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export interface MsgUpgradeClientAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * upgraded client state
   */
  client_state?: AnyAmino;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state?: AnyAmino;
  /**
   * proof that old chain committed to new client
   */
  proof_upgrade_client: string;
  /**
   * proof that old chain committed to new consensus state
   */
  proof_upgrade_consensus_state: string;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgUpgradeClientAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClient";
  value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponse {}
export interface MsgUpgradeClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse";
  value: Uint8Array;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export interface MsgUpgradeClientResponseAmino {}
export interface MsgUpgradeClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClientResponse";
  value: MsgUpgradeClientResponseAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 * @name MsgSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 * @deprecated
 */
export interface MsgSubmitMisbehaviour {
  /**
   * client unique identifier
   */
  clientId: string;
  /**
   * misbehaviour used for freezing the light client
   */
  misbehaviour?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 * @name MsgSubmitMisbehaviourAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 * @deprecated
 */
export interface MsgSubmitMisbehaviourAmino {
  /**
   * client unique identifier
   */
  client_id: string;
  /**
   * misbehaviour used for freezing the light client
   */
  misbehaviour?: AnyAmino;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviour";
  value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponse {}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export interface MsgSubmitMisbehaviourResponseAmino {}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
  value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgRecoverClient defines the message used to recover a frozen or expired client.
 * @name MsgRecoverClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClient
 */
export interface MsgRecoverClient {
  /**
   * the client identifier for the client to be updated if the proposal passes
   */
  subjectClientId: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substituteClientId: string;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgRecoverClientProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClient";
  value: Uint8Array;
}
/**
 * MsgRecoverClient defines the message used to recover a frozen or expired client.
 * @name MsgRecoverClientAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClient
 */
export interface MsgRecoverClientAmino {
  /**
   * the client identifier for the client to be updated if the proposal passes
   */
  subject_client_id: string;
  /**
   * the substitute client identifier for the client which will replace the subject
   * client
   */
  substitute_client_id: string;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgRecoverClientAminoMsg {
  type: "cosmos-sdk/MsgRecoverClient";
  value: MsgRecoverClientAmino;
}
/**
 * MsgRecoverClientResponse defines the Msg/RecoverClient response type.
 * @name MsgRecoverClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClientResponse
 */
export interface MsgRecoverClientResponse {}
export interface MsgRecoverClientResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse";
  value: Uint8Array;
}
/**
 * MsgRecoverClientResponse defines the Msg/RecoverClient response type.
 * @name MsgRecoverClientResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClientResponse
 */
export interface MsgRecoverClientResponseAmino {}
export interface MsgRecoverClientResponseAminoMsg {
  type: "cosmos-sdk/MsgRecoverClientResponse";
  value: MsgRecoverClientResponseAmino;
}
/**
 * MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal
 * @name MsgIBCSoftwareUpgrade
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgrade
 */
export interface MsgIBCSoftwareUpgrade {
  plan: Plan;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgradedClientState?: Any;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgIBCSoftwareUpgradeProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade";
  value: Uint8Array;
}
/**
 * MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal
 * @name MsgIBCSoftwareUpgradeAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgrade
 */
export interface MsgIBCSoftwareUpgradeAmino {
  plan: PlanAmino;
  /**
   * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
   * This will make the chain commit to the correct upgraded (self) client state
   * before the upgrade occurs, so that connecting chains can verify that the
   * new upgraded client is valid by verifying a proof on the previous version
   * of the chain. This will allow IBC connections to persist smoothly across
   * planned chain upgrades. Correspondingly, the UpgradedClientState field has been
   * deprecated in the Cosmos SDK to allow for this logic to exist solely in
   * the 02-client module.
   */
  upgraded_client_state?: AnyAmino;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgIBCSoftwareUpgradeAminoMsg {
  type: "cosmos-sdk/MsgIBCSoftwareUpgrade";
  value: MsgIBCSoftwareUpgradeAmino;
}
/**
 * MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.
 * @name MsgIBCSoftwareUpgradeResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse
 */
export interface MsgIBCSoftwareUpgradeResponse {}
export interface MsgIBCSoftwareUpgradeResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.
 * @name MsgIBCSoftwareUpgradeResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse
 */
export interface MsgIBCSoftwareUpgradeResponseAmino {}
export interface MsgIBCSoftwareUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse";
  value: MsgIBCSoftwareUpgradeResponseAmino;
}
/**
 * MsgUpdateParams defines the sdk.Msg type to update the client parameters.
 * @name MsgUpdateParams
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * signer address
   */
  signer: string;
  /**
   * params defines the client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams defines the sdk.Msg type to update the client parameters.
 * @name MsgUpdateParamsAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * signer address
   */
  signer: string;
  /**
   * params defines the client parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the MsgUpdateParams response type.
 * @name MsgUpdateParamsResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the MsgUpdateParams response type.
 * @name MsgUpdateParamsResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgDeleteClientCreator defines a message to delete the client creator of a client
 * @name MsgDeleteClientCreator
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreator
 */
export interface MsgDeleteClientCreator {
  /**
   * client identifier
   */
  clientId: string;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgDeleteClientCreatorProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator";
  value: Uint8Array;
}
/**
 * MsgDeleteClientCreator defines a message to delete the client creator of a client
 * @name MsgDeleteClientCreatorAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreator
 */
export interface MsgDeleteClientCreatorAmino {
  /**
   * client identifier
   */
  client_id: string;
  /**
   * signer address
   */
  signer: string;
}
export interface MsgDeleteClientCreatorAminoMsg {
  type: "cosmos-sdk/MsgDeleteClientCreator";
  value: MsgDeleteClientCreatorAmino;
}
/**
 * MsgDeleteClientCreatorResponse defines the Msg/DeleteClientCreator response type.
 * @name MsgDeleteClientCreatorResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreatorResponse
 */
export interface MsgDeleteClientCreatorResponse {}
export interface MsgDeleteClientCreatorResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreatorResponse";
  value: Uint8Array;
}
/**
 * MsgDeleteClientCreatorResponse defines the Msg/DeleteClientCreator response type.
 * @name MsgDeleteClientCreatorResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreatorResponse
 */
export interface MsgDeleteClientCreatorResponseAmino {}
export interface MsgDeleteClientCreatorResponseAminoMsg {
  type: "cosmos-sdk/MsgDeleteClientCreatorResponse";
  value: MsgDeleteClientCreatorResponseAmino;
}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: undefined,
    consensusState: undefined,
    signer: ""
  };
}
/**
 * MsgCreateClient defines a message to create an IBC client
 * @name MsgCreateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClient
 */
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  aminoType: "cosmos-sdk/MsgCreateClient",
  is(o: any): o is MsgCreateClient {
    return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgCreateClientAmino {
    return o && (o.$typeUrl === MsgCreateClient.typeUrl || typeof o.signer === "string");
  },
  encode(message: MsgCreateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgCreateClient): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient {
    return MsgCreateClient.decode(message.value);
  },
  toProto(message: MsgCreateClient): Uint8Array {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {
    clientId: ""
  };
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 * @name MsgCreateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgCreateClientResponse
 */
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  aminoType: "cosmos-sdk/MsgCreateClientResponse",
  is(o: any): o is MsgCreateClientResponse {
    return o && (o.$typeUrl === MsgCreateClientResponse.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is MsgCreateClientResponseAmino {
    return o && (o.$typeUrl === MsgCreateClientResponse.typeUrl || typeof o.client_id === "string");
  },
  encode(message: MsgCreateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: MsgCreateClientResponse): MsgCreateClientResponseAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.decode(message.value);
  },
  toProto(message: MsgCreateClientResponse): Uint8Array {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    clientMessage: undefined,
    signer: ""
  };
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 * @name MsgUpdateClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClient
 */
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  aminoType: "cosmos-sdk/MsgUpdateClient",
  is(o: any): o is MsgUpdateClient {
    return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.clientId === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUpdateClientAmino {
    return o && (o.$typeUrl === MsgUpdateClient.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgUpdateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientMessage !== undefined) {
      Any.encode(message.clientMessage, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMessage = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    message.clientMessage = object.clientMessage !== undefined && object.clientMessage !== null ? Any.fromPartial(object.clientMessage) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_message !== undefined && object.client_message !== null) {
      message.clientMessage = Any.fromAmino(object.client_message);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateClient): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_message = message.clientMessage ? Any.toAmino(message.clientMessage) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient {
    return MsgUpdateClient.decode(message.value);
  },
  toProto(message: MsgUpdateClient): Uint8Array {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 * @name MsgUpdateClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateClientResponse
 */
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  aminoType: "cosmos-sdk/MsgUpdateClientResponse",
  is(o: any): o is MsgUpdateClientResponse {
    return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateClientResponseAmino {
    return o && o.$typeUrl === MsgUpdateClientResponse.typeUrl;
  },
  encode(_: MsgUpdateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientResponse): Uint8Array {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: undefined,
    consensusState: undefined,
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 * @name MsgUpgradeClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClient
 */
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  aminoType: "cosmos-sdk/MsgUpgradeClient",
  is(o: any): o is MsgUpgradeClient {
    return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.clientId === "string" && (o.proofUpgradeClient instanceof Uint8Array || typeof o.proofUpgradeClient === "string") && (o.proofUpgradeConsensusState instanceof Uint8Array || typeof o.proofUpgradeConsensusState === "string") && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgUpgradeClientAmino {
    return o && (o.$typeUrl === MsgUpgradeClient.typeUrl || typeof o.client_id === "string" && (o.proof_upgrade_client instanceof Uint8Array || typeof o.proof_upgrade_client === "string") && (o.proof_upgrade_consensus_state instanceof Uint8Array || typeof o.proof_upgrade_consensus_state === "string") && typeof o.signer === "string");
  },
  encode(message: MsgUpgradeClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof_upgrade_client !== undefined && object.proof_upgrade_client !== null) {
      message.proofUpgradeClient = bytesFromBase64(object.proof_upgrade_client);
    }
    if (object.proof_upgrade_consensus_state !== undefined && object.proof_upgrade_consensus_state !== null) {
      message.proofUpgradeConsensusState = bytesFromBase64(object.proof_upgrade_consensus_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.proof_upgrade_client = message.proofUpgradeClient ? base64FromBytes(message.proofUpgradeClient) : undefined;
    obj.proof_upgrade_consensus_state = message.proofUpgradeConsensusState ? base64FromBytes(message.proofUpgradeConsensusState) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.decode(message.value);
  },
  toProto(message: MsgUpgradeClient): Uint8Array {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 * @name MsgUpgradeClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpgradeClientResponse
 */
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  aminoType: "cosmos-sdk/MsgUpgradeClientResponse",
  is(o: any): o is MsgUpgradeClientResponse {
    return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpgradeClientResponseAmino {
    return o && o.$typeUrl === MsgUpgradeClientResponse.typeUrl;
  },
  encode(_: MsgUpgradeClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.decode(message.value);
  },
  toProto(message: MsgUpgradeClientResponse): Uint8Array {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: undefined,
    signer: ""
  };
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * This message has been deprecated. Use MsgUpdateClient instead.
 * @name MsgSubmitMisbehaviour
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviour
 * @deprecated
 */
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
  is(o: any): o is MsgSubmitMisbehaviour {
    return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.clientId === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgSubmitMisbehaviourAmino {
    return o && (o.$typeUrl === MsgSubmitMisbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgSubmitMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.misbehaviour !== undefined && object.misbehaviour !== null) {
      message.misbehaviour = Any.fromAmino(object.misbehaviour);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviour): Uint8Array {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 * @name MsgSubmitMisbehaviourResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
  is(o: any): o is MsgSubmitMisbehaviourResponse {
    return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
  },
  isAmino(o: any): o is MsgSubmitMisbehaviourResponseAmino {
    return o && o.$typeUrl === MsgSubmitMisbehaviourResponse.typeUrl;
  },
  encode(_: MsgSubmitMisbehaviourResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRecoverClient(): MsgRecoverClient {
  return {
    subjectClientId: "",
    substituteClientId: "",
    signer: ""
  };
}
/**
 * MsgRecoverClient defines the message used to recover a frozen or expired client.
 * @name MsgRecoverClient
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClient
 */
export const MsgRecoverClient = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
  aminoType: "cosmos-sdk/MsgRecoverClient",
  is(o: any): o is MsgRecoverClient {
    return o && (o.$typeUrl === MsgRecoverClient.typeUrl || typeof o.subjectClientId === "string" && typeof o.substituteClientId === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgRecoverClientAmino {
    return o && (o.$typeUrl === MsgRecoverClient.typeUrl || typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgRecoverClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subjectClientId !== "") {
      writer.uint32(10).string(message.subjectClientId);
    }
    if (message.substituteClientId !== "") {
      writer.uint32(18).string(message.substituteClientId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subjectClientId = reader.string();
          break;
        case 2:
          message.substituteClientId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRecoverClient>): MsgRecoverClient {
    const message = createBaseMsgRecoverClient();
    message.subjectClientId = object.subjectClientId ?? "";
    message.substituteClientId = object.substituteClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecoverClientAmino): MsgRecoverClient {
    const message = createBaseMsgRecoverClient();
    if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
      message.subjectClientId = object.subject_client_id;
    }
    if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
      message.substituteClientId = object.substitute_client_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecoverClient): MsgRecoverClientAmino {
    const obj: any = {};
    obj.subject_client_id = message.subjectClientId === "" ? undefined : message.subjectClientId;
    obj.substitute_client_id = message.substituteClientId === "" ? undefined : message.substituteClientId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientAminoMsg): MsgRecoverClient {
    return MsgRecoverClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClient): MsgRecoverClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClient",
      value: MsgRecoverClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecoverClientProtoMsg): MsgRecoverClient {
    return MsgRecoverClient.decode(message.value);
  },
  toProto(message: MsgRecoverClient): Uint8Array {
    return MsgRecoverClient.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverClient): MsgRecoverClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClient",
      value: MsgRecoverClient.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRecoverClientResponse(): MsgRecoverClientResponse {
  return {};
}
/**
 * MsgRecoverClientResponse defines the Msg/RecoverClient response type.
 * @name MsgRecoverClientResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgRecoverClientResponse
 */
export const MsgRecoverClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
  aminoType: "cosmos-sdk/MsgRecoverClientResponse",
  is(o: any): o is MsgRecoverClientResponse {
    return o && o.$typeUrl === MsgRecoverClientResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRecoverClientResponseAmino {
    return o && o.$typeUrl === MsgRecoverClientResponse.typeUrl;
  },
  encode(_: MsgRecoverClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecoverClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecoverClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRecoverClientResponse>): MsgRecoverClientResponse {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  fromAmino(_: MsgRecoverClientResponseAmino): MsgRecoverClientResponse {
    const message = createBaseMsgRecoverClientResponse();
    return message;
  },
  toAmino(_: MsgRecoverClientResponse): MsgRecoverClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRecoverClientResponseAminoMsg): MsgRecoverClientResponse {
    return MsgRecoverClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecoverClientResponseProtoMsg): MsgRecoverClientResponse {
    return MsgRecoverClientResponse.decode(message.value);
  },
  toProto(message: MsgRecoverClientResponse): Uint8Array {
    return MsgRecoverClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecoverClientResponse): MsgRecoverClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgRecoverClientResponse",
      value: MsgRecoverClientResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgIBCSoftwareUpgrade(): MsgIBCSoftwareUpgrade {
  return {
    plan: Plan.fromPartial({}),
    upgradedClientState: undefined,
    signer: ""
  };
}
/**
 * MsgIBCSoftwareUpgrade defines the message used to schedule an upgrade of an IBC client using a v1 governance proposal
 * @name MsgIBCSoftwareUpgrade
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgrade
 */
export const MsgIBCSoftwareUpgrade = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
  aminoType: "cosmos-sdk/MsgIBCSoftwareUpgrade",
  is(o: any): o is MsgIBCSoftwareUpgrade {
    return o && (o.$typeUrl === MsgIBCSoftwareUpgrade.typeUrl || Plan.is(o.plan) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgIBCSoftwareUpgradeAmino {
    return o && (o.$typeUrl === MsgIBCSoftwareUpgrade.typeUrl || Plan.isAmino(o.plan) && typeof o.signer === "string");
  },
  encode(message: MsgIBCSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        case 2:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgIBCSoftwareUpgrade>): MsgIBCSoftwareUpgrade {
    const message = createBaseMsgIBCSoftwareUpgrade();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgIBCSoftwareUpgradeAmino): MsgIBCSoftwareUpgrade {
    const message = createBaseMsgIBCSoftwareUpgrade();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeAminoMsg): MsgIBCSoftwareUpgrade {
    return MsgIBCSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIBCSoftwareUpgradeProtoMsg): MsgIBCSoftwareUpgrade {
    return MsgIBCSoftwareUpgrade.decode(message.value);
  },
  toProto(message: MsgIBCSoftwareUpgrade): Uint8Array {
    return MsgIBCSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCSoftwareUpgrade): MsgIBCSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgrade",
      value: MsgIBCSoftwareUpgrade.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgIBCSoftwareUpgradeResponse(): MsgIBCSoftwareUpgradeResponse {
  return {};
}
/**
 * MsgIBCSoftwareUpgradeResponse defines the Msg/IBCSoftwareUpgrade response type.
 * @name MsgIBCSoftwareUpgradeResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse
 */
export const MsgIBCSoftwareUpgradeResponse = {
  typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
  aminoType: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
  is(o: any): o is MsgIBCSoftwareUpgradeResponse {
    return o && o.$typeUrl === MsgIBCSoftwareUpgradeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgIBCSoftwareUpgradeResponseAmino {
    return o && o.$typeUrl === MsgIBCSoftwareUpgradeResponse.typeUrl;
  },
  encode(_: MsgIBCSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgIBCSoftwareUpgradeResponse>): MsgIBCSoftwareUpgradeResponse {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgIBCSoftwareUpgradeResponseAmino): MsgIBCSoftwareUpgradeResponse {
    const message = createBaseMsgIBCSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgIBCSoftwareUpgradeResponseAminoMsg): MsgIBCSoftwareUpgradeResponse {
    return MsgIBCSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgIBCSoftwareUpgradeResponseProtoMsg): MsgIBCSoftwareUpgradeResponse {
    return MsgIBCSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgIBCSoftwareUpgradeResponse): Uint8Array {
    return MsgIBCSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgIBCSoftwareUpgradeResponse): MsgIBCSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgIBCSoftwareUpgradeResponse",
      value: MsgIBCSoftwareUpgradeResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: Params.fromPartial({})
  };
}
/**
 * MsgUpdateParams defines the sdk.Msg type to update the client parameters.
 * @name MsgUpdateParams
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
  aminoType: "cosmos-sdk/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.signer === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signer = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgUpdateParams.typeUrl)) {
      return;
    }
    Params.registerTypeUrl();
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
/**
 * MsgUpdateParamsResponse defines the MsgUpdateParams response type.
 * @name MsgUpdateParamsResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeleteClientCreator(): MsgDeleteClientCreator {
  return {
    clientId: "",
    signer: ""
  };
}
/**
 * MsgDeleteClientCreator defines a message to delete the client creator of a client
 * @name MsgDeleteClientCreator
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreator
 */
export const MsgDeleteClientCreator = {
  typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator",
  aminoType: "cosmos-sdk/MsgDeleteClientCreator",
  is(o: any): o is MsgDeleteClientCreator {
    return o && (o.$typeUrl === MsgDeleteClientCreator.typeUrl || typeof o.clientId === "string" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgDeleteClientCreatorAmino {
    return o && (o.$typeUrl === MsgDeleteClientCreator.typeUrl || typeof o.client_id === "string" && typeof o.signer === "string");
  },
  encode(message: MsgDeleteClientCreator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.signer !== "") {
      writer.uint32(18).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteClientCreator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClientCreator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeleteClientCreator>): MsgDeleteClientCreator {
    const message = createBaseMsgDeleteClientCreator();
    message.clientId = object.clientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteClientCreatorAmino): MsgDeleteClientCreator {
    const message = createBaseMsgDeleteClientCreator();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgDeleteClientCreator): MsgDeleteClientCreatorAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteClientCreatorAminoMsg): MsgDeleteClientCreator {
    return MsgDeleteClientCreator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteClientCreator): MsgDeleteClientCreatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeleteClientCreator",
      value: MsgDeleteClientCreator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteClientCreatorProtoMsg): MsgDeleteClientCreator {
    return MsgDeleteClientCreator.decode(message.value);
  },
  toProto(message: MsgDeleteClientCreator): Uint8Array {
    return MsgDeleteClientCreator.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteClientCreator): MsgDeleteClientCreatorProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreator",
      value: MsgDeleteClientCreator.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeleteClientCreatorResponse(): MsgDeleteClientCreatorResponse {
  return {};
}
/**
 * MsgDeleteClientCreatorResponse defines the Msg/DeleteClientCreator response type.
 * @name MsgDeleteClientCreatorResponse
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.MsgDeleteClientCreatorResponse
 */
export const MsgDeleteClientCreatorResponse = {
  typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreatorResponse",
  aminoType: "cosmos-sdk/MsgDeleteClientCreatorResponse",
  is(o: any): o is MsgDeleteClientCreatorResponse {
    return o && o.$typeUrl === MsgDeleteClientCreatorResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteClientCreatorResponseAmino {
    return o && o.$typeUrl === MsgDeleteClientCreatorResponse.typeUrl;
  },
  encode(_: MsgDeleteClientCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteClientCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteClientCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgDeleteClientCreatorResponse>): MsgDeleteClientCreatorResponse {
    const message = createBaseMsgDeleteClientCreatorResponse();
    return message;
  },
  fromAmino(_: MsgDeleteClientCreatorResponseAmino): MsgDeleteClientCreatorResponse {
    const message = createBaseMsgDeleteClientCreatorResponse();
    return message;
  },
  toAmino(_: MsgDeleteClientCreatorResponse): MsgDeleteClientCreatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteClientCreatorResponseAminoMsg): MsgDeleteClientCreatorResponse {
    return MsgDeleteClientCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteClientCreatorResponse): MsgDeleteClientCreatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeleteClientCreatorResponse",
      value: MsgDeleteClientCreatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteClientCreatorResponseProtoMsg): MsgDeleteClientCreatorResponse {
    return MsgDeleteClientCreatorResponse.decode(message.value);
  },
  toProto(message: MsgDeleteClientCreatorResponse): Uint8Array {
    return MsgDeleteClientCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteClientCreatorResponse): MsgDeleteClientCreatorResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgDeleteClientCreatorResponse",
      value: MsgDeleteClientCreatorResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};