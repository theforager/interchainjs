import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesRequest
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export interface ListAllInterfacesRequest {}
export interface ListAllInterfacesRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest";
  value: Uint8Array;
}
/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesRequestAmino
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export interface ListAllInterfacesRequestAmino {}
export interface ListAllInterfacesRequestAminoMsg {
  type: "cosmos-sdk/ListAllInterfacesRequest";
  value: ListAllInterfacesRequestAmino;
}
/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesResponse
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export interface ListAllInterfacesResponse {
  /**
   * interface_names is an array of all the registered interfaces.
   */
  interfaceNames: string[];
}
export interface ListAllInterfacesResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse";
  value: Uint8Array;
}
/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesResponseAmino
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export interface ListAllInterfacesResponseAmino {
  /**
   * interface_names is an array of all the registered interfaces.
   */
  interface_names: string[];
}
export interface ListAllInterfacesResponseAminoMsg {
  type: "cosmos-sdk/ListAllInterfacesResponse";
  value: ListAllInterfacesResponseAmino;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 * @name ListImplementationsRequest
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export interface ListImplementationsRequest {
  /**
   * interface_name defines the interface to query the implementations for.
   */
  interfaceName: string;
}
export interface ListImplementationsRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest";
  value: Uint8Array;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 * @name ListImplementationsRequestAmino
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export interface ListImplementationsRequestAmino {
  /**
   * interface_name defines the interface to query the implementations for.
   */
  interface_name: string;
}
export interface ListImplementationsRequestAminoMsg {
  type: "cosmos-sdk/ListImplementationsRequest";
  value: ListImplementationsRequestAmino;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 * @name ListImplementationsResponse
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}
export interface ListImplementationsResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse";
  value: Uint8Array;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 * @name ListImplementationsResponseAmino
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export interface ListImplementationsResponseAmino {
  implementation_message_names: string[];
}
export interface ListImplementationsResponseAminoMsg {
  type: "cosmos-sdk/ListImplementationsResponse";
  value: ListImplementationsResponseAmino;
}
function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}
/**
 * ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesRequest
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesRequest
 */
export const ListAllInterfacesRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
  aminoType: "cosmos-sdk/ListAllInterfacesRequest",
  is(o: any): o is ListAllInterfacesRequest {
    return o && o.$typeUrl === ListAllInterfacesRequest.typeUrl;
  },
  isAmino(o: any): o is ListAllInterfacesRequestAmino {
    return o && o.$typeUrl === ListAllInterfacesRequest.typeUrl;
  },
  encode(_: ListAllInterfacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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
  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  fromAmino(_: ListAllInterfacesRequestAmino): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  toAmino(_: ListAllInterfacesRequest): ListAllInterfacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesRequestAminoMsg): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListAllInterfacesRequestProtoMsg): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.decode(message.value);
  },
  toProto(message: ListAllInterfacesRequest): Uint8Array {
    return ListAllInterfacesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    interfaceNames: []
  };
}
/**
 * ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC.
 * @name ListAllInterfacesResponse
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListAllInterfacesResponse
 */
export const ListAllInterfacesResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
  aminoType: "cosmos-sdk/ListAllInterfacesResponse",
  is(o: any): o is ListAllInterfacesResponse {
    return o && (o.$typeUrl === ListAllInterfacesResponse.typeUrl || Array.isArray(o.interfaceNames) && (!o.interfaceNames.length || typeof o.interfaceNames[0] === "string"));
  },
  isAmino(o: any): o is ListAllInterfacesResponseAmino {
    return o && (o.$typeUrl === ListAllInterfacesResponse.typeUrl || Array.isArray(o.interface_names) && (!o.interface_names.length || typeof o.interface_names[0] === "string"));
  },
  encode(message: ListAllInterfacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ListAllInterfacesResponseAmino): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interface_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListAllInterfacesResponse): ListAllInterfacesResponseAmino {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map(e => e);
    } else {
      obj.interface_names = message.interfaceNames;
    }
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesResponseAminoMsg): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListAllInterfacesResponseProtoMsg): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.decode(message.value);
  },
  toProto(message: ListAllInterfacesResponse): Uint8Array {
    return ListAllInterfacesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    interfaceName: ""
  };
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 * @name ListImplementationsRequest
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsRequest
 */
export const ListImplementationsRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
  aminoType: "cosmos-sdk/ListImplementationsRequest",
  is(o: any): o is ListImplementationsRequest {
    return o && (o.$typeUrl === ListImplementationsRequest.typeUrl || typeof o.interfaceName === "string");
  },
  isAmino(o: any): o is ListImplementationsRequestAmino {
    return o && (o.$typeUrl === ListImplementationsRequest.typeUrl || typeof o.interface_name === "string");
  },
  encode(message: ListImplementationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interfaceName !== "") {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },
  fromAmino(object: ListImplementationsRequestAmino): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    if (object.interface_name !== undefined && object.interface_name !== null) {
      message.interfaceName = object.interface_name;
    }
    return message;
  },
  toAmino(message: ListImplementationsRequest): ListImplementationsRequestAmino {
    const obj: any = {};
    obj.interface_name = message.interfaceName === "" ? undefined : message.interfaceName;
    return obj;
  },
  fromAminoMsg(object: ListImplementationsRequestAminoMsg): ListImplementationsRequest {
    return ListImplementationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsRequest): ListImplementationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsRequest",
      value: ListImplementationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListImplementationsRequestProtoMsg): ListImplementationsRequest {
    return ListImplementationsRequest.decode(message.value);
  },
  toProto(message: ListImplementationsRequest): Uint8Array {
    return ListImplementationsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListImplementationsRequest): ListImplementationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
      value: ListImplementationsRequest.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};
function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    implementationMessageNames: []
  };
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 * @name ListImplementationsResponse
 * @package cosmos.base.reflection.v1beta1
 * @see proto type: cosmos.base.reflection.v1beta1.ListImplementationsResponse
 */
export const ListImplementationsResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
  aminoType: "cosmos-sdk/ListImplementationsResponse",
  is(o: any): o is ListImplementationsResponse {
    return o && (o.$typeUrl === ListImplementationsResponse.typeUrl || Array.isArray(o.implementationMessageNames) && (!o.implementationMessageNames.length || typeof o.implementationMessageNames[0] === "string"));
  },
  isAmino(o: any): o is ListImplementationsResponseAmino {
    return o && (o.$typeUrl === ListImplementationsResponse.typeUrl || Array.isArray(o.implementation_message_names) && (!o.implementation_message_names.length || typeof o.implementation_message_names[0] === "string"));
  },
  encode(message: ListImplementationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ListImplementationsResponseAmino): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementation_message_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListImplementationsResponse): ListImplementationsResponseAmino {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementation_message_names = message.implementationMessageNames;
    }
    return obj;
  },
  fromAminoMsg(object: ListImplementationsResponseAminoMsg): ListImplementationsResponse {
    return ListImplementationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsResponse): ListImplementationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsResponse",
      value: ListImplementationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListImplementationsResponseProtoMsg): ListImplementationsResponse {
    return ListImplementationsResponse.decode(message.value);
  },
  toProto(message: ListImplementationsResponse): Uint8Array {
    return ListImplementationsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListImplementationsResponse): ListImplementationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
      value: ListImplementationsResponse.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};