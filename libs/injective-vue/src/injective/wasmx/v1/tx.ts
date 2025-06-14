import { Params, ParamsAmino } from "./wasmx";
import { ContractRegistrationRequest, ContractRegistrationRequestAmino } from "./proposal";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 * @name MsgExecuteContractCompat
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompat
 */
export interface MsgExecuteContractCompat {
  /**
   * Sender is the that actor that signed the messages
   */
  sender: string;
  /**
   * Contract is the address of the smart contract
   */
  contract: string;
  /**
   * Msg json encoded message to be passed to the contract
   */
  msg: string;
  /**
   * Funds coins that are transferred to the contract on execution
   */
  funds: string;
}
export interface MsgExecuteContractCompatProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat";
  value: Uint8Array;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 * @name MsgExecuteContractCompatAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompat
 */
export interface MsgExecuteContractCompatAmino {
  /**
   * Sender is the that actor that signed the messages
   */
  sender: string;
  /**
   * Contract is the address of the smart contract
   */
  contract: string;
  /**
   * Msg json encoded message to be passed to the contract
   */
  msg: string;
  /**
   * Funds coins that are transferred to the contract on execution
   */
  funds: string;
}
export interface MsgExecuteContractCompatAminoMsg {
  type: "wasmx/MsgExecuteContractCompat";
  value: MsgExecuteContractCompatAmino;
}
/**
 * MsgExecuteContractCompatResponse returns execution result data.
 * @name MsgExecuteContractCompatResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompatResponse
 */
export interface MsgExecuteContractCompatResponse {
  /**
   * Data contains bytes to returned from the contract
   */
  data: Uint8Array;
}
export interface MsgExecuteContractCompatResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
  value: Uint8Array;
}
/**
 * MsgExecuteContractCompatResponse returns execution result data.
 * @name MsgExecuteContractCompatResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompatResponse
 */
export interface MsgExecuteContractCompatResponseAmino {
  /**
   * Data contains bytes to returned from the contract
   */
  data: string;
}
export interface MsgExecuteContractCompatResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
  value: MsgExecuteContractCompatResponseAmino;
}
/**
 * @name MsgUpdateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContract
 */
export interface MsgUpdateContract {
  sender: string;
  /**
   * Unique Identifier for contract instance to be registered.
   */
  contractAddress: string;
  /**
   * Maximum gas to be used for the smart contract execution.
   */
  gasLimit: bigint;
  /**
   * gas price to be used for the smart contract execution.
   */
  gasPrice: bigint;
  /**
   * optional - admin account that will be allowed to perform any changes
   */
  adminAddress?: string;
}
export interface MsgUpdateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContract";
  value: Uint8Array;
}
/**
 * @name MsgUpdateContractAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContract
 */
export interface MsgUpdateContractAmino {
  sender: string;
  /**
   * Unique Identifier for contract instance to be registered.
   */
  contract_address: string;
  /**
   * Maximum gas to be used for the smart contract execution.
   */
  gas_limit: string;
  /**
   * gas price to be used for the smart contract execution.
   */
  gas_price: string;
  /**
   * optional - admin account that will be allowed to perform any changes
   */
  admin_address?: string;
}
export interface MsgUpdateContractAminoMsg {
  type: "wasmx/MsgUpdateContract";
  value: MsgUpdateContractAmino;
}
/**
 * @name MsgUpdateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContractResponse
 */
export interface MsgUpdateContractResponse {}
export interface MsgUpdateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateContractResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContractResponse
 */
export interface MsgUpdateContractResponseAmino {}
export interface MsgUpdateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateContractResponse";
  value: MsgUpdateContractResponseAmino;
}
/**
 * @name MsgActivateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContract
 */
export interface MsgActivateContract {
  sender: string;
  /**
   * Unique Identifier for contract instance to be activated.
   */
  contractAddress: string;
}
export interface MsgActivateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgActivateContract";
  value: Uint8Array;
}
/**
 * @name MsgActivateContractAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContract
 */
export interface MsgActivateContractAmino {
  sender: string;
  /**
   * Unique Identifier for contract instance to be activated.
   */
  contract_address: string;
}
export interface MsgActivateContractAminoMsg {
  type: "wasmx/MsgActivateContract";
  value: MsgActivateContractAmino;
}
/**
 * @name MsgActivateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContractResponse
 */
export interface MsgActivateContractResponse {}
export interface MsgActivateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse";
  value: Uint8Array;
}
/**
 * @name MsgActivateContractResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContractResponse
 */
export interface MsgActivateContractResponseAmino {}
export interface MsgActivateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgActivateContractResponse";
  value: MsgActivateContractResponseAmino;
}
/**
 * @name MsgDeactivateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContract
 */
export interface MsgDeactivateContract {
  sender: string;
  /**
   * Unique Identifier for contract instance to be deactivated.
   */
  contractAddress: string;
}
export interface MsgDeactivateContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContract";
  value: Uint8Array;
}
/**
 * @name MsgDeactivateContractAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContract
 */
export interface MsgDeactivateContractAmino {
  sender: string;
  /**
   * Unique Identifier for contract instance to be deactivated.
   */
  contract_address: string;
}
export interface MsgDeactivateContractAminoMsg {
  type: "wasmx/MsgDeactivateContract";
  value: MsgDeactivateContractAmino;
}
/**
 * @name MsgDeactivateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContractResponse
 */
export interface MsgDeactivateContractResponse {}
export interface MsgDeactivateContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse";
  value: Uint8Array;
}
/**
 * @name MsgDeactivateContractResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContractResponse
 */
export interface MsgDeactivateContractResponseAmino {}
export interface MsgDeactivateContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgDeactivateContractResponse";
  value: MsgDeactivateContractResponseAmino;
}
/**
 * @name MsgUpdateParams
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParams
 */
export interface MsgUpdateParams {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the wasmx parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address of the governance account.
   */
  authority: string;
  /**
   * params defines the wasmx parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "wasmx/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * @name MsgUpdateParamsResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateParamsResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/**
 * @name MsgRegisterContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContract
 */
export interface MsgRegisterContract {
  sender: string;
  contractRegistrationRequest: ContractRegistrationRequest;
}
export interface MsgRegisterContractProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContract";
  value: Uint8Array;
}
/**
 * @name MsgRegisterContractAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContract
 */
export interface MsgRegisterContractAmino {
  sender: string;
  contract_registration_request: ContractRegistrationRequestAmino;
}
export interface MsgRegisterContractAminoMsg {
  type: "wasmx/MsgRegisterContract";
  value: MsgRegisterContractAmino;
}
/**
 * @name MsgRegisterContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContractResponse
 */
export interface MsgRegisterContractResponse {}
export interface MsgRegisterContractResponseProtoMsg {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse";
  value: Uint8Array;
}
/**
 * @name MsgRegisterContractResponseAmino
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContractResponse
 */
export interface MsgRegisterContractResponseAmino {}
export interface MsgRegisterContractResponseAminoMsg {
  type: "/injective.wasmx.v1.MsgRegisterContractResponse";
  value: MsgRegisterContractResponseAmino;
}
function createBaseMsgExecuteContractCompat(): MsgExecuteContractCompat {
  return {
    sender: "",
    contract: "",
    msg: "",
    funds: ""
  };
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 * @name MsgExecuteContractCompat
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompat
 */
export const MsgExecuteContractCompat = {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
  aminoType: "wasmx/MsgExecuteContractCompat",
  is(o: any): o is MsgExecuteContractCompat {
    return o && (o.$typeUrl === MsgExecuteContractCompat.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.msg === "string" && typeof o.funds === "string");
  },
  isAmino(o: any): o is MsgExecuteContractCompatAmino {
    return o && (o.$typeUrl === MsgExecuteContractCompat.typeUrl || typeof o.sender === "string" && typeof o.contract === "string" && typeof o.msg === "string" && typeof o.funds === "string");
  },
  encode(message: MsgExecuteContractCompat, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.msg !== "") {
      writer.uint32(26).string(message.msg);
    }
    if (message.funds !== "") {
      writer.uint32(34).string(message.funds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractCompat {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractCompat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contract = reader.string();
          break;
        case 3:
          message.msg = reader.string();
          break;
        case 4:
          message.funds = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecuteContractCompat>): MsgExecuteContractCompat {
    const message = createBaseMsgExecuteContractCompat();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? "";
    message.funds = object.funds ?? "";
    return message;
  },
  fromAmino(object: MsgExecuteContractCompatAmino): MsgExecuteContractCompat {
    const message = createBaseMsgExecuteContractCompat();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    }
    if (object.funds !== undefined && object.funds !== null) {
      message.funds = object.funds;
    }
    return message;
  },
  toAmino(message: MsgExecuteContractCompat): MsgExecuteContractCompatAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.msg = message.msg === "" ? undefined : message.msg;
    obj.funds = message.funds === "" ? undefined : message.funds;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractCompatAminoMsg): MsgExecuteContractCompat {
    return MsgExecuteContractCompat.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecuteContractCompat): MsgExecuteContractCompatAminoMsg {
    return {
      type: "wasmx/MsgExecuteContractCompat",
      value: MsgExecuteContractCompat.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecuteContractCompatProtoMsg): MsgExecuteContractCompat {
    return MsgExecuteContractCompat.decode(message.value);
  },
  toProto(message: MsgExecuteContractCompat): Uint8Array {
    return MsgExecuteContractCompat.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractCompat): MsgExecuteContractCompatProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat",
      value: MsgExecuteContractCompat.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgExecuteContractCompatResponse(): MsgExecuteContractCompatResponse {
  return {
    data: new Uint8Array()
  };
}
/**
 * MsgExecuteContractCompatResponse returns execution result data.
 * @name MsgExecuteContractCompatResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgExecuteContractCompatResponse
 */
export const MsgExecuteContractCompatResponse = {
  typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse",
  is(o: any): o is MsgExecuteContractCompatResponse {
    return o && (o.$typeUrl === MsgExecuteContractCompatResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  isAmino(o: any): o is MsgExecuteContractCompatResponseAmino {
    return o && (o.$typeUrl === MsgExecuteContractCompatResponse.typeUrl || o.data instanceof Uint8Array || typeof o.data === "string");
  },
  encode(message: MsgExecuteContractCompatResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecuteContractCompatResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteContractCompatResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse {
    const message = createBaseMsgExecuteContractCompatResponse();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgExecuteContractCompatResponseAmino): MsgExecuteContractCompatResponse {
    const message = createBaseMsgExecuteContractCompatResponse();
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseAmino {
    const obj: any = {};
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExecuteContractCompatResponseAminoMsg): MsgExecuteContractCompatResponse {
    return MsgExecuteContractCompatResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecuteContractCompatResponseProtoMsg): MsgExecuteContractCompatResponse {
    return MsgExecuteContractCompatResponse.decode(message.value);
  },
  toProto(message: MsgExecuteContractCompatResponse): Uint8Array {
    return MsgExecuteContractCompatResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse",
      value: MsgExecuteContractCompatResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateContract(): MsgUpdateContract {
  return {
    sender: "",
    contractAddress: "",
    gasLimit: BigInt(0),
    gasPrice: BigInt(0),
    adminAddress: undefined
  };
}
/**
 * @name MsgUpdateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContract
 */
export const MsgUpdateContract = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
  aminoType: "wasmx/MsgUpdateContract",
  is(o: any): o is MsgUpdateContract {
    return o && (o.$typeUrl === MsgUpdateContract.typeUrl || typeof o.sender === "string" && typeof o.contractAddress === "string" && typeof o.gasLimit === "bigint" && typeof o.gasPrice === "bigint");
  },
  isAmino(o: any): o is MsgUpdateContractAmino {
    return o && (o.$typeUrl === MsgUpdateContract.typeUrl || typeof o.sender === "string" && typeof o.contract_address === "string" && typeof o.gas_limit === "bigint" && typeof o.gas_price === "bigint");
  },
  encode(message: MsgUpdateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.gasLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.gasLimit);
    }
    if (message.gasPrice !== BigInt(0)) {
      writer.uint32(32).uint64(message.gasPrice);
    }
    if (message.adminAddress !== undefined) {
      writer.uint32(42).string(message.adminAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        case 3:
          message.gasLimit = reader.uint64();
          break;
        case 4:
          message.gasPrice = reader.uint64();
          break;
        case 5:
          message.adminAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgUpdateContract>): MsgUpdateContract {
    const message = createBaseMsgUpdateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.gasLimit = object.gasLimit !== undefined && object.gasLimit !== null ? BigInt(object.gasLimit.toString()) : BigInt(0);
    message.gasPrice = object.gasPrice !== undefined && object.gasPrice !== null ? BigInt(object.gasPrice.toString()) : BigInt(0);
    message.adminAddress = object.adminAddress ?? undefined;
    return message;
  },
  fromAmino(object: MsgUpdateContractAmino): MsgUpdateContract {
    const message = createBaseMsgUpdateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.gas_limit !== undefined && object.gas_limit !== null) {
      message.gasLimit = BigInt(object.gas_limit);
    }
    if (object.gas_price !== undefined && object.gas_price !== null) {
      message.gasPrice = BigInt(object.gas_price);
    }
    if (object.admin_address !== undefined && object.admin_address !== null) {
      message.adminAddress = object.admin_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateContract): MsgUpdateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.gas_limit = message.gasLimit !== BigInt(0) ? message.gasLimit?.toString() : undefined;
    obj.gas_price = message.gasPrice !== BigInt(0) ? message.gasPrice?.toString() : undefined;
    obj.admin_address = message.adminAddress === null ? undefined : message.adminAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractAminoMsg): MsgUpdateContract {
    return MsgUpdateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateContract): MsgUpdateContractAminoMsg {
    return {
      type: "wasmx/MsgUpdateContract",
      value: MsgUpdateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateContractProtoMsg): MsgUpdateContract {
    return MsgUpdateContract.decode(message.value);
  },
  toProto(message: MsgUpdateContract): Uint8Array {
    return MsgUpdateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContract): MsgUpdateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateContract",
      value: MsgUpdateContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateContractResponse(): MsgUpdateContractResponse {
  return {};
}
/**
 * @name MsgUpdateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateContractResponse
 */
export const MsgUpdateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse",
  is(o: any): o is MsgUpdateContractResponse {
    return o && o.$typeUrl === MsgUpdateContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateContractResponseAmino {
    return o && o.$typeUrl === MsgUpdateContractResponse.typeUrl;
  },
  encode(_: MsgUpdateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateContractResponse();
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
  fromPartial(_: DeepPartial<MsgUpdateContractResponse>): MsgUpdateContractResponse {
    const message = createBaseMsgUpdateContractResponse();
    return message;
  },
  fromAmino(_: MsgUpdateContractResponseAmino): MsgUpdateContractResponse {
    const message = createBaseMsgUpdateContractResponse();
    return message;
  },
  toAmino(_: MsgUpdateContractResponse): MsgUpdateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateContractResponseAminoMsg): MsgUpdateContractResponse {
    return MsgUpdateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateContractResponseProtoMsg): MsgUpdateContractResponse {
    return MsgUpdateContractResponse.decode(message.value);
  },
  toProto(message: MsgUpdateContractResponse): Uint8Array {
    return MsgUpdateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateContractResponse): MsgUpdateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse",
      value: MsgUpdateContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgActivateContract(): MsgActivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
/**
 * @name MsgActivateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContract
 */
export const MsgActivateContract = {
  typeUrl: "/injective.wasmx.v1.MsgActivateContract",
  aminoType: "wasmx/MsgActivateContract",
  is(o: any): o is MsgActivateContract {
    return o && (o.$typeUrl === MsgActivateContract.typeUrl || typeof o.sender === "string" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is MsgActivateContractAmino {
    return o && (o.$typeUrl === MsgActivateContract.typeUrl || typeof o.sender === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgActivateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgActivateContract>): MsgActivateContract {
    const message = createBaseMsgActivateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgActivateContractAmino): MsgActivateContract {
    const message = createBaseMsgActivateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgActivateContract): MsgActivateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgActivateContractAminoMsg): MsgActivateContract {
    return MsgActivateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgActivateContract): MsgActivateContractAminoMsg {
    return {
      type: "wasmx/MsgActivateContract",
      value: MsgActivateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgActivateContractProtoMsg): MsgActivateContract {
    return MsgActivateContract.decode(message.value);
  },
  toProto(message: MsgActivateContract): Uint8Array {
    return MsgActivateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateContract): MsgActivateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgActivateContract",
      value: MsgActivateContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgActivateContractResponse(): MsgActivateContractResponse {
  return {};
}
/**
 * @name MsgActivateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgActivateContractResponse
 */
export const MsgActivateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse",
  is(o: any): o is MsgActivateContractResponse {
    return o && o.$typeUrl === MsgActivateContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgActivateContractResponseAmino {
    return o && o.$typeUrl === MsgActivateContractResponse.typeUrl;
  },
  encode(_: MsgActivateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgActivateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateContractResponse();
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
  fromPartial(_: DeepPartial<MsgActivateContractResponse>): MsgActivateContractResponse {
    const message = createBaseMsgActivateContractResponse();
    return message;
  },
  fromAmino(_: MsgActivateContractResponseAmino): MsgActivateContractResponse {
    const message = createBaseMsgActivateContractResponse();
    return message;
  },
  toAmino(_: MsgActivateContractResponse): MsgActivateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgActivateContractResponseAminoMsg): MsgActivateContractResponse {
    return MsgActivateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgActivateContractResponseProtoMsg): MsgActivateContractResponse {
    return MsgActivateContractResponse.decode(message.value);
  },
  toProto(message: MsgActivateContractResponse): Uint8Array {
    return MsgActivateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgActivateContractResponse): MsgActivateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse",
      value: MsgActivateContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeactivateContract(): MsgDeactivateContract {
  return {
    sender: "",
    contractAddress: ""
  };
}
/**
 * @name MsgDeactivateContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContract
 */
export const MsgDeactivateContract = {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
  aminoType: "wasmx/MsgDeactivateContract",
  is(o: any): o is MsgDeactivateContract {
    return o && (o.$typeUrl === MsgDeactivateContract.typeUrl || typeof o.sender === "string" && typeof o.contractAddress === "string");
  },
  isAmino(o: any): o is MsgDeactivateContractAmino {
    return o && (o.$typeUrl === MsgDeactivateContract.typeUrl || typeof o.sender === "string" && typeof o.contract_address === "string");
  },
  encode(message: MsgDeactivateContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgDeactivateContract>): MsgDeactivateContract {
    const message = createBaseMsgDeactivateContract();
    message.sender = object.sender ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDeactivateContractAmino): MsgDeactivateContract {
    const message = createBaseMsgDeactivateContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: MsgDeactivateContract): MsgDeactivateContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateContractAminoMsg): MsgDeactivateContract {
    return MsgDeactivateContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeactivateContract): MsgDeactivateContractAminoMsg {
    return {
      type: "wasmx/MsgDeactivateContract",
      value: MsgDeactivateContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeactivateContractProtoMsg): MsgDeactivateContract {
    return MsgDeactivateContract.decode(message.value);
  },
  toProto(message: MsgDeactivateContract): Uint8Array {
    return MsgDeactivateContract.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateContract): MsgDeactivateContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgDeactivateContract",
      value: MsgDeactivateContract.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgDeactivateContractResponse(): MsgDeactivateContractResponse {
  return {};
}
/**
 * @name MsgDeactivateContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgDeactivateContractResponse
 */
export const MsgDeactivateContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse",
  is(o: any): o is MsgDeactivateContractResponse {
    return o && o.$typeUrl === MsgDeactivateContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeactivateContractResponseAmino {
    return o && o.$typeUrl === MsgDeactivateContractResponse.typeUrl;
  },
  encode(_: MsgDeactivateContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeactivateContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateContractResponse();
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
  fromPartial(_: DeepPartial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse {
    const message = createBaseMsgDeactivateContractResponse();
    return message;
  },
  fromAmino(_: MsgDeactivateContractResponseAmino): MsgDeactivateContractResponse {
    const message = createBaseMsgDeactivateContractResponse();
    return message;
  },
  toAmino(_: MsgDeactivateContractResponse): MsgDeactivateContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeactivateContractResponseAminoMsg): MsgDeactivateContractResponse {
    return MsgDeactivateContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeactivateContractResponseProtoMsg): MsgDeactivateContractResponse {
    return MsgDeactivateContractResponse.decode(message.value);
  },
  toProto(message: MsgDeactivateContractResponse): Uint8Array {
    return MsgDeactivateContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeactivateContractResponse): MsgDeactivateContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse",
      value: MsgDeactivateContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
/**
 * @name MsgUpdateParams
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParams
 */
export const MsgUpdateParams = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
  aminoType: "wasmx/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.is(o.params));
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return o && (o.$typeUrl === MsgUpdateParams.typeUrl || typeof o.authority === "string" && Params.isAmino(o.params));
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
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
          message.authority = reader.string();
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
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "wasmx/MsgUpdateParams",
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
      typeUrl: "/injective.wasmx.v1.MsgUpdateParams",
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
 * @name MsgUpdateParamsResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = {
  typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse",
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
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseMsgRegisterContract(): MsgRegisterContract {
  return {
    sender: "",
    contractRegistrationRequest: ContractRegistrationRequest.fromPartial({})
  };
}
/**
 * @name MsgRegisterContract
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContract
 */
export const MsgRegisterContract = {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
  aminoType: "wasmx/MsgRegisterContract",
  is(o: any): o is MsgRegisterContract {
    return o && (o.$typeUrl === MsgRegisterContract.typeUrl || typeof o.sender === "string" && ContractRegistrationRequest.is(o.contractRegistrationRequest));
  },
  isAmino(o: any): o is MsgRegisterContractAmino {
    return o && (o.$typeUrl === MsgRegisterContract.typeUrl || typeof o.sender === "string" && ContractRegistrationRequest.isAmino(o.contract_registration_request));
  },
  encode(message: MsgRegisterContract, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contractRegistrationRequest !== undefined) {
      ContractRegistrationRequest.encode(message.contractRegistrationRequest, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterContract {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContract();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contractRegistrationRequest = ContractRegistrationRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterContract>): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    message.sender = object.sender ?? "";
    message.contractRegistrationRequest = object.contractRegistrationRequest !== undefined && object.contractRegistrationRequest !== null ? ContractRegistrationRequest.fromPartial(object.contractRegistrationRequest) : undefined;
    return message;
  },
  fromAmino(object: MsgRegisterContractAmino): MsgRegisterContract {
    const message = createBaseMsgRegisterContract();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.contract_registration_request !== undefined && object.contract_registration_request !== null) {
      message.contractRegistrationRequest = ContractRegistrationRequest.fromAmino(object.contract_registration_request);
    }
    return message;
  },
  toAmino(message: MsgRegisterContract): MsgRegisterContractAmino {
    const obj: any = {};
    obj.sender = message.sender === "" ? undefined : message.sender;
    obj.contract_registration_request = message.contractRegistrationRequest ? ContractRegistrationRequest.toAmino(message.contractRegistrationRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterContractAminoMsg): MsgRegisterContract {
    return MsgRegisterContract.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterContract): MsgRegisterContractAminoMsg {
    return {
      type: "wasmx/MsgRegisterContract",
      value: MsgRegisterContract.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRegisterContractProtoMsg): MsgRegisterContract {
    return MsgRegisterContract.decode(message.value);
  },
  toProto(message: MsgRegisterContract): Uint8Array {
    return MsgRegisterContract.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterContract): MsgRegisterContractProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgRegisterContract",
      value: MsgRegisterContract.encode(message).finish()
    };
  },
  registerTypeUrl() {
    if (!GlobalDecoderRegistry.registerExistingTypeUrl(MsgRegisterContract.typeUrl)) {
      return;
    }
    ContractRegistrationRequest.registerTypeUrl();
  }
};
function createBaseMsgRegisterContractResponse(): MsgRegisterContractResponse {
  return {};
}
/**
 * @name MsgRegisterContractResponse
 * @package injective.wasmx.v1
 * @see proto type: injective.wasmx.v1.MsgRegisterContractResponse
 */
export const MsgRegisterContractResponse = {
  typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse",
  is(o: any): o is MsgRegisterContractResponse {
    return o && o.$typeUrl === MsgRegisterContractResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRegisterContractResponseAmino {
    return o && o.$typeUrl === MsgRegisterContractResponse.typeUrl;
  },
  encode(_: MsgRegisterContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterContractResponse();
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
  fromPartial(_: DeepPartial<MsgRegisterContractResponse>): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  },
  fromAmino(_: MsgRegisterContractResponseAmino): MsgRegisterContractResponse {
    const message = createBaseMsgRegisterContractResponse();
    return message;
  },
  toAmino(_: MsgRegisterContractResponse): MsgRegisterContractResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterContractResponseAminoMsg): MsgRegisterContractResponse {
    return MsgRegisterContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterContractResponseProtoMsg): MsgRegisterContractResponse {
    return MsgRegisterContractResponse.decode(message.value);
  },
  toProto(message: MsgRegisterContractResponse): Uint8Array {
    return MsgRegisterContractResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterContractResponse): MsgRegisterContractResponseProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse",
      value: MsgRegisterContractResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};