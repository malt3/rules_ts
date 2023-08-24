// @generated by protoc-gen-connect-es v0.13.0 with parameter "keep_empty_files=true,target=js+dts"
// @generated from file examples/connect_node/proto/eliza.proto (package connectrpc.eliza.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { SayRequest, SayResponse } from "./eliza_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service connectrpc.eliza.v1.ElizaService
 */
export declare const ElizaService: {
  readonly typeName: "connectrpc.eliza.v1.ElizaService",
  readonly methods: {
    /**
     * @generated from rpc connectrpc.eliza.v1.ElizaService.Say
     */
    readonly say: {
      readonly name: "Say",
      readonly I: typeof SayRequest,
      readonly O: typeof SayResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
