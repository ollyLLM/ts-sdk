// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_string
// @generated from protobuf file "ellmo/v1/eval.proto" (package "ellmo.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 *  Eval represents a unique eval.
 *
 * @generated from protobuf message ellmo.v1.Eval
 */
export interface Eval {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // ID of eval
}
/**
 * @generated from protobuf message ellmo.v1.VersionedPrompt
 */
export interface VersionedPrompt {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string; // ID of prompt
    /**
     * @generated from protobuf field: string version = 2;
     */
    version: string; // Version of prompt
}
/**
 *  EvalScore represents a single score of an eval.
 *
 * @generated from protobuf message ellmo.v1.EvalScore
 */
export interface EvalScore {
    /**
     * @generated from protobuf field: string eval_hash = 1;
     */
    evalHash: string; // Hash of the eval input/expected
    /**
     * @generated from protobuf field: float score = 2;
     */
    score: number; // Score of the eval
}
/**
 *  RecordEvalRequest represents a request to record an eval run.
 *
 * @generated from protobuf message ellmo.v1.RecordEvalRequest
 */
export interface RecordEvalRequest {
    /**
     * @generated from protobuf field: ellmo.v1.Eval eval = 1;
     */
    eval?: Eval; // Eval that was run
    /**
     * @generated from protobuf field: ellmo.v1.VersionedPrompt prompt = 2;
     */
    prompt?: VersionedPrompt; // Prompt being evaluated
    /**
     * @generated from protobuf field: optional string base_version = 3;
     */
    baseVersion?: string; // Base version of prompt to compare against (if not defined, the previous version will be used)
    /**
     * @generated from protobuf field: repeated ellmo.v1.EvalScore eval_scores = 4;
     */
    evalScores: EvalScore[]; // List of eval scores
}
/**
 * MeaningfulEvalScore represents a meaningful eval score.
 *
 * @generated from protobuf message ellmo.v1.MeaningfulEvalScore
 */
export interface MeaningfulEvalScore {
    /**
     * @generated from protobuf field: string eval_hash = 1;
     */
    evalHash: string; // Hash of the eval input/expected
    /**
     * @generated from protobuf field: float previous_score = 2;
     */
    previousScore: number; // Previous score
    /**
     * @generated from protobuf field: float current_score = 3;
     */
    currentScore: number; // Current score
    /**
     * @generated from protobuf field: ellmo.v1.EvalOutcome outcome = 4;
     */
    outcome: EvalOutcome; // Outcome of the eval
}
/**
 *  RecordEvalResponse represents a response to a record eval request.
 *
 * @generated from protobuf message ellmo.v1.RecordEvalResponse
 */
export interface RecordEvalResponse {
    /**
     * @generated from protobuf field: ellmo.v1.EvalOutcome outcome = 1;
     */
    outcome: EvalOutcome; // Outcome of the eval
    /**
     * @generated from protobuf field: repeated ellmo.v1.EvalScore previous_eval_scores = 2;
     */
    previousEvalScores: EvalScore[]; // List of previous eval scores
    /**
     * @generated from protobuf field: repeated ellmo.v1.MeaningfulEvalScore meaningful_eval_scores = 3;
     */
    meaningfulEvalScores: MeaningfulEvalScore[]; // Analysis of meaningful eval scores
    /**
     * @generated from protobuf field: string message = 4;
     */
    message: string; // Any message to the user
}
/**
 * EvalOutcome represents the outcome of an eval.
 *
 * @generated from protobuf enum ellmo.v1.EvalOutcome
 */
export enum EvalOutcome {
    /**
     * @generated from protobuf enum value: IMPROVEMENT = 0;
     */
    IMPROVEMENT = 0,
    /**
     * @generated from protobuf enum value: REGRESSION = 1;
     */
    REGRESSION = 1,
    /**
     * @generated from protobuf enum value: NO_CHANGE = 3;
     */
    NO_CHANGE = 3,
    /**
     * @generated from protobuf enum value: UNKNOWN = 4;
     */
    UNKNOWN = 4
}
// @generated message type with reflection information, may provide speed optimized methods
class Eval$Type extends MessageType<Eval> {
    constructor() {
        super("ellmo.v1.Eval", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Eval>): Eval {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        if (value !== undefined)
            reflectionMergePartial<Eval>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Eval): Eval {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Eval, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.Eval
 */
export const Eval = new Eval$Type();
// @generated message type with reflection information, may provide speed optimized methods
class VersionedPrompt$Type extends MessageType<VersionedPrompt> {
    constructor() {
        super("ellmo.v1.VersionedPrompt", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<VersionedPrompt>): VersionedPrompt {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.version = "";
        if (value !== undefined)
            reflectionMergePartial<VersionedPrompt>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: VersionedPrompt): VersionedPrompt {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string version */ 2:
                    message.version = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: VersionedPrompt, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string version = 2; */
        if (message.version !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.version);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.VersionedPrompt
 */
export const VersionedPrompt = new VersionedPrompt$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EvalScore$Type extends MessageType<EvalScore> {
    constructor() {
        super("ellmo.v1.EvalScore", [
            { no: 1, name: "eval_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "score", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ }
        ]);
    }
    create(value?: PartialMessage<EvalScore>): EvalScore {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.evalHash = "";
        message.score = 0;
        if (value !== undefined)
            reflectionMergePartial<EvalScore>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EvalScore): EvalScore {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string eval_hash */ 1:
                    message.evalHash = reader.string();
                    break;
                case /* float score */ 2:
                    message.score = reader.float();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EvalScore, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string eval_hash = 1; */
        if (message.evalHash !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.evalHash);
        /* float score = 2; */
        if (message.score !== 0)
            writer.tag(2, WireType.Bit32).float(message.score);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.EvalScore
 */
export const EvalScore = new EvalScore$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecordEvalRequest$Type extends MessageType<RecordEvalRequest> {
    constructor() {
        super("ellmo.v1.RecordEvalRequest", [
            { no: 1, name: "eval", kind: "message", T: () => Eval },
            { no: 2, name: "prompt", kind: "message", T: () => VersionedPrompt },
            { no: 3, name: "base_version", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "eval_scores", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EvalScore }
        ]);
    }
    create(value?: PartialMessage<RecordEvalRequest>): RecordEvalRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.evalScores = [];
        if (value !== undefined)
            reflectionMergePartial<RecordEvalRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RecordEvalRequest): RecordEvalRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ellmo.v1.Eval eval */ 1:
                    message.eval = Eval.internalBinaryRead(reader, reader.uint32(), options, message.eval);
                    break;
                case /* ellmo.v1.VersionedPrompt prompt */ 2:
                    message.prompt = VersionedPrompt.internalBinaryRead(reader, reader.uint32(), options, message.prompt);
                    break;
                case /* optional string base_version */ 3:
                    message.baseVersion = reader.string();
                    break;
                case /* repeated ellmo.v1.EvalScore eval_scores */ 4:
                    message.evalScores.push(EvalScore.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RecordEvalRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ellmo.v1.Eval eval = 1; */
        if (message.eval)
            Eval.internalBinaryWrite(message.eval, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* ellmo.v1.VersionedPrompt prompt = 2; */
        if (message.prompt)
            VersionedPrompt.internalBinaryWrite(message.prompt, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* optional string base_version = 3; */
        if (message.baseVersion !== undefined)
            writer.tag(3, WireType.LengthDelimited).string(message.baseVersion);
        /* repeated ellmo.v1.EvalScore eval_scores = 4; */
        for (let i = 0; i < message.evalScores.length; i++)
            EvalScore.internalBinaryWrite(message.evalScores[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.RecordEvalRequest
 */
export const RecordEvalRequest = new RecordEvalRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeaningfulEvalScore$Type extends MessageType<MeaningfulEvalScore> {
    constructor() {
        super("ellmo.v1.MeaningfulEvalScore", [
            { no: 1, name: "eval_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "previous_score", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 3, name: "current_score", kind: "scalar", T: 2 /*ScalarType.FLOAT*/ },
            { no: 4, name: "outcome", kind: "enum", T: () => ["ellmo.v1.EvalOutcome", EvalOutcome] }
        ]);
    }
    create(value?: PartialMessage<MeaningfulEvalScore>): MeaningfulEvalScore {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.evalHash = "";
        message.previousScore = 0;
        message.currentScore = 0;
        message.outcome = 0;
        if (value !== undefined)
            reflectionMergePartial<MeaningfulEvalScore>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MeaningfulEvalScore): MeaningfulEvalScore {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string eval_hash */ 1:
                    message.evalHash = reader.string();
                    break;
                case /* float previous_score */ 2:
                    message.previousScore = reader.float();
                    break;
                case /* float current_score */ 3:
                    message.currentScore = reader.float();
                    break;
                case /* ellmo.v1.EvalOutcome outcome */ 4:
                    message.outcome = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: MeaningfulEvalScore, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string eval_hash = 1; */
        if (message.evalHash !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.evalHash);
        /* float previous_score = 2; */
        if (message.previousScore !== 0)
            writer.tag(2, WireType.Bit32).float(message.previousScore);
        /* float current_score = 3; */
        if (message.currentScore !== 0)
            writer.tag(3, WireType.Bit32).float(message.currentScore);
        /* ellmo.v1.EvalOutcome outcome = 4; */
        if (message.outcome !== 0)
            writer.tag(4, WireType.Varint).int32(message.outcome);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.MeaningfulEvalScore
 */
export const MeaningfulEvalScore = new MeaningfulEvalScore$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RecordEvalResponse$Type extends MessageType<RecordEvalResponse> {
    constructor() {
        super("ellmo.v1.RecordEvalResponse", [
            { no: 1, name: "outcome", kind: "enum", T: () => ["ellmo.v1.EvalOutcome", EvalOutcome] },
            { no: 2, name: "previous_eval_scores", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EvalScore },
            { no: 3, name: "meaningful_eval_scores", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MeaningfulEvalScore },
            { no: 4, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<RecordEvalResponse>): RecordEvalResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.outcome = 0;
        message.previousEvalScores = [];
        message.meaningfulEvalScores = [];
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<RecordEvalResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RecordEvalResponse): RecordEvalResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* ellmo.v1.EvalOutcome outcome */ 1:
                    message.outcome = reader.int32();
                    break;
                case /* repeated ellmo.v1.EvalScore previous_eval_scores */ 2:
                    message.previousEvalScores.push(EvalScore.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated ellmo.v1.MeaningfulEvalScore meaningful_eval_scores */ 3:
                    message.meaningfulEvalScores.push(MeaningfulEvalScore.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string message */ 4:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RecordEvalResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* ellmo.v1.EvalOutcome outcome = 1; */
        if (message.outcome !== 0)
            writer.tag(1, WireType.Varint).int32(message.outcome);
        /* repeated ellmo.v1.EvalScore previous_eval_scores = 2; */
        for (let i = 0; i < message.previousEvalScores.length; i++)
            EvalScore.internalBinaryWrite(message.previousEvalScores[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* repeated ellmo.v1.MeaningfulEvalScore meaningful_eval_scores = 3; */
        for (let i = 0; i < message.meaningfulEvalScores.length; i++)
            MeaningfulEvalScore.internalBinaryWrite(message.meaningfulEvalScores[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* string message = 4; */
        if (message.message !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ellmo.v1.RecordEvalResponse
 */
export const RecordEvalResponse = new RecordEvalResponse$Type();
