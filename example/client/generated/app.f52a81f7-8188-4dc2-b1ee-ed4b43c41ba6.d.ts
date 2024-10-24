import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a PluginContext. */
export interface IPluginContext {

    /** PluginContext query */
    query?: (IAppQuery|null);
}

/** Represents a PluginContext. */
export class PluginContext implements IPluginContext {

    /**
     * Constructs a new PluginContext.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPluginContext);

    /** PluginContext query. */
    public query?: (IAppQuery|null);

    /**
     * Creates a new PluginContext instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PluginContext instance
     */
    public static create(properties?: IPluginContext): PluginContext;

    /**
     * Encodes the specified PluginContext message. Does not implicitly {@link PluginContext.verify|verify} messages.
     * @param message PluginContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPluginContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PluginContext message, length delimited. Does not implicitly {@link PluginContext.verify|verify} messages.
     * @param message PluginContext message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPluginContext, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PluginContext message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PluginContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PluginContext;

    /**
     * Decodes a PluginContext message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PluginContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PluginContext;

    /**
     * Verifies a PluginContext message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PluginContext message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PluginContext
     */
    public static fromObject(object: { [k: string]: any }): PluginContext;

    /**
     * Creates a plain object from a PluginContext message. Also converts values to other types if specified.
     * @param message PluginContext
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PluginContext, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PluginContext to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PluginContext
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an AppQuery. */
export interface IAppQuery {

    /** AppQuery content */
    content?: (string|null);

    /** AppQuery timestampUnixMillis */
    timestampUnixMillis?: (number|Long|null);

    /** AppQuery userId */
    userId?: (string|null);
}

/** Represents an AppQuery. */
export class AppQuery implements IAppQuery {

    /**
     * Constructs a new AppQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppQuery);

    /** AppQuery content. */
    public content: string;

    /** AppQuery timestampUnixMillis. */
    public timestampUnixMillis: (number|Long);

    /** AppQuery userId. */
    public userId?: (string|null);

    /**
     * Creates a new AppQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppQuery instance
     */
    public static create(properties?: IAppQuery): AppQuery;

    /**
     * Encodes the specified AppQuery message. Does not implicitly {@link AppQuery.verify|verify} messages.
     * @param message AppQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppQuery message, length delimited. Does not implicitly {@link AppQuery.verify|verify} messages.
     * @param message AppQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppQuery;

    /**
     * Decodes an AppQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppQuery;

    /**
     * Verifies an AppQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppQuery
     */
    public static fromObject(object: { [k: string]: any }): AppQuery;

    /**
     * Creates a plain object from an AppQuery message. Also converts values to other types if specified.
     * @param message AppQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AppQuery
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostVectorEmbeddingSearchRequest. */
export interface IHostVectorEmbeddingSearchRequest {

    /** HostVectorEmbeddingSearchRequest query */
    query?: (string|null);

    /** HostVectorEmbeddingSearchRequest appCollectionName */
    appCollectionName?: (string|null);
}

/** Represents a HostVectorEmbeddingSearchRequest. */
export class HostVectorEmbeddingSearchRequest implements IHostVectorEmbeddingSearchRequest {

    /**
     * Constructs a new HostVectorEmbeddingSearchRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostVectorEmbeddingSearchRequest);

    /** HostVectorEmbeddingSearchRequest query. */
    public query: string;

    /** HostVectorEmbeddingSearchRequest appCollectionName. */
    public appCollectionName: string;

    /**
     * Creates a new HostVectorEmbeddingSearchRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostVectorEmbeddingSearchRequest instance
     */
    public static create(properties?: IHostVectorEmbeddingSearchRequest): HostVectorEmbeddingSearchRequest;

    /**
     * Encodes the specified HostVectorEmbeddingSearchRequest message. Does not implicitly {@link HostVectorEmbeddingSearchRequest.verify|verify} messages.
     * @param message HostVectorEmbeddingSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostVectorEmbeddingSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostVectorEmbeddingSearchRequest message, length delimited. Does not implicitly {@link HostVectorEmbeddingSearchRequest.verify|verify} messages.
     * @param message HostVectorEmbeddingSearchRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostVectorEmbeddingSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostVectorEmbeddingSearchRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostVectorEmbeddingSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostVectorEmbeddingSearchRequest;

    /**
     * Decodes a HostVectorEmbeddingSearchRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostVectorEmbeddingSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostVectorEmbeddingSearchRequest;

    /**
     * Verifies a HostVectorEmbeddingSearchRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostVectorEmbeddingSearchRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostVectorEmbeddingSearchRequest
     */
    public static fromObject(object: { [k: string]: any }): HostVectorEmbeddingSearchRequest;

    /**
     * Creates a plain object from a HostVectorEmbeddingSearchRequest message. Also converts values to other types if specified.
     * @param message HostVectorEmbeddingSearchRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostVectorEmbeddingSearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostVectorEmbeddingSearchRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostVectorEmbeddingSearchRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostVectorEmbeddingSearchResponse. */
export interface IHostVectorEmbeddingSearchResponse {

    /** HostVectorEmbeddingSearchResponse results */
    results?: (IHostVectorEmbeddingSimilarityScore[]|null);
}

/** Represents a HostVectorEmbeddingSearchResponse. */
export class HostVectorEmbeddingSearchResponse implements IHostVectorEmbeddingSearchResponse {

    /**
     * Constructs a new HostVectorEmbeddingSearchResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostVectorEmbeddingSearchResponse);

    /** HostVectorEmbeddingSearchResponse results. */
    public results: IHostVectorEmbeddingSimilarityScore[];

    /**
     * Creates a new HostVectorEmbeddingSearchResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostVectorEmbeddingSearchResponse instance
     */
    public static create(properties?: IHostVectorEmbeddingSearchResponse): HostVectorEmbeddingSearchResponse;

    /**
     * Encodes the specified HostVectorEmbeddingSearchResponse message. Does not implicitly {@link HostVectorEmbeddingSearchResponse.verify|verify} messages.
     * @param message HostVectorEmbeddingSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostVectorEmbeddingSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostVectorEmbeddingSearchResponse message, length delimited. Does not implicitly {@link HostVectorEmbeddingSearchResponse.verify|verify} messages.
     * @param message HostVectorEmbeddingSearchResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostVectorEmbeddingSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostVectorEmbeddingSearchResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostVectorEmbeddingSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostVectorEmbeddingSearchResponse;

    /**
     * Decodes a HostVectorEmbeddingSearchResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostVectorEmbeddingSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostVectorEmbeddingSearchResponse;

    /**
     * Verifies a HostVectorEmbeddingSearchResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostVectorEmbeddingSearchResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostVectorEmbeddingSearchResponse
     */
    public static fromObject(object: { [k: string]: any }): HostVectorEmbeddingSearchResponse;

    /**
     * Creates a plain object from a HostVectorEmbeddingSearchResponse message. Also converts values to other types if specified.
     * @param message HostVectorEmbeddingSearchResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostVectorEmbeddingSearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostVectorEmbeddingSearchResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostVectorEmbeddingSearchResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostVectorEmbeddingSimilarityScore. */
export interface IHostVectorEmbeddingSimilarityScore {

    /** HostVectorEmbeddingSimilarityScore score */
    score?: (number|null);

    /** HostVectorEmbeddingSimilarityScore payload */
    payload?: ({ [k: string]: string }|null);
}

/** Represents a HostVectorEmbeddingSimilarityScore. */
export class HostVectorEmbeddingSimilarityScore implements IHostVectorEmbeddingSimilarityScore {

    /**
     * Constructs a new HostVectorEmbeddingSimilarityScore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostVectorEmbeddingSimilarityScore);

    /** HostVectorEmbeddingSimilarityScore score. */
    public score: number;

    /** HostVectorEmbeddingSimilarityScore payload. */
    public payload: { [k: string]: string };

    /**
     * Creates a new HostVectorEmbeddingSimilarityScore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostVectorEmbeddingSimilarityScore instance
     */
    public static create(properties?: IHostVectorEmbeddingSimilarityScore): HostVectorEmbeddingSimilarityScore;

    /**
     * Encodes the specified HostVectorEmbeddingSimilarityScore message. Does not implicitly {@link HostVectorEmbeddingSimilarityScore.verify|verify} messages.
     * @param message HostVectorEmbeddingSimilarityScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostVectorEmbeddingSimilarityScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostVectorEmbeddingSimilarityScore message, length delimited. Does not implicitly {@link HostVectorEmbeddingSimilarityScore.verify|verify} messages.
     * @param message HostVectorEmbeddingSimilarityScore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostVectorEmbeddingSimilarityScore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostVectorEmbeddingSimilarityScore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostVectorEmbeddingSimilarityScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostVectorEmbeddingSimilarityScore;

    /**
     * Decodes a HostVectorEmbeddingSimilarityScore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostVectorEmbeddingSimilarityScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostVectorEmbeddingSimilarityScore;

    /**
     * Verifies a HostVectorEmbeddingSimilarityScore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostVectorEmbeddingSimilarityScore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostVectorEmbeddingSimilarityScore
     */
    public static fromObject(object: { [k: string]: any }): HostVectorEmbeddingSimilarityScore;

    /**
     * Creates a plain object from a HostVectorEmbeddingSimilarityScore message. Also converts values to other types if specified.
     * @param message HostVectorEmbeddingSimilarityScore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostVectorEmbeddingSimilarityScore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostVectorEmbeddingSimilarityScore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostVectorEmbeddingSimilarityScore
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostLogRequest. */
export interface IHostLogRequest {

    /** HostLogRequest content */
    content?: (string|null);

    /** HostLogRequest level */
    level?: (string|null);
}

/** Represents a HostLogRequest. */
export class HostLogRequest implements IHostLogRequest {

    /**
     * Constructs a new HostLogRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostLogRequest);

    /** HostLogRequest content. */
    public content: string;

    /** HostLogRequest level. */
    public level: string;

    /**
     * Creates a new HostLogRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostLogRequest instance
     */
    public static create(properties?: IHostLogRequest): HostLogRequest;

    /**
     * Encodes the specified HostLogRequest message. Does not implicitly {@link HostLogRequest.verify|verify} messages.
     * @param message HostLogRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostLogRequest message, length delimited. Does not implicitly {@link HostLogRequest.verify|verify} messages.
     * @param message HostLogRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostLogRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostLogRequest;

    /**
     * Decodes a HostLogRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostLogRequest;

    /**
     * Verifies a HostLogRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostLogRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostLogRequest
     */
    public static fromObject(object: { [k: string]: any }): HostLogRequest;

    /**
     * Creates a plain object from a HostLogRequest message. Also converts values to other types if specified.
     * @param message HostLogRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostLogRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostLogRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostHttpRequest. */
export interface IHostHttpRequest {

    /** HostHttpRequest request */
    request?: (string|null);
}

/** Represents a HostHttpRequest. */
export class HostHttpRequest implements IHostHttpRequest {

    /**
     * Constructs a new HostHttpRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostHttpRequest);

    /** HostHttpRequest request. */
    public request: string;

    /**
     * Creates a new HostHttpRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostHttpRequest instance
     */
    public static create(properties?: IHostHttpRequest): HostHttpRequest;

    /**
     * Encodes the specified HostHttpRequest message. Does not implicitly {@link HostHttpRequest.verify|verify} messages.
     * @param message HostHttpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostHttpRequest message, length delimited. Does not implicitly {@link HostHttpRequest.verify|verify} messages.
     * @param message HostHttpRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostHttpRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostHttpRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostHttpRequest;

    /**
     * Decodes a HostHttpRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostHttpRequest;

    /**
     * Verifies a HostHttpRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostHttpRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostHttpRequest
     */
    public static fromObject(object: { [k: string]: any }): HostHttpRequest;

    /**
     * Creates a plain object from a HostHttpRequest message. Also converts values to other types if specified.
     * @param message HostHttpRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostHttpRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostHttpRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostHttpRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostHttpResponse. */
export interface IHostHttpResponse {

    /** HostHttpResponse response */
    response?: (string|null);
}

/** Represents a HostHttpResponse. */
export class HostHttpResponse implements IHostHttpResponse {

    /**
     * Constructs a new HostHttpResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostHttpResponse);

    /** HostHttpResponse response. */
    public response: string;

    /**
     * Creates a new HostHttpResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostHttpResponse instance
     */
    public static create(properties?: IHostHttpResponse): HostHttpResponse;

    /**
     * Encodes the specified HostHttpResponse message. Does not implicitly {@link HostHttpResponse.verify|verify} messages.
     * @param message HostHttpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostHttpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostHttpResponse message, length delimited. Does not implicitly {@link HostHttpResponse.verify|verify} messages.
     * @param message HostHttpResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostHttpResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostHttpResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostHttpResponse;

    /**
     * Decodes a HostHttpResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostHttpResponse;

    /**
     * Verifies a HostHttpResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostHttpResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostHttpResponse
     */
    public static fromObject(object: { [k: string]: any }): HostHttpResponse;

    /**
     * Creates a plain object from a HostHttpResponse message. Also converts values to other types if specified.
     * @param message HostHttpResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostHttpResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostHttpResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostHttpResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostKvGetUserStringRequest. */
export interface IHostKvGetUserStringRequest {

    /** HostKvGetUserStringRequest userId */
    userId?: (string|null);

    /** HostKvGetUserStringRequest key */
    key?: (string|null);
}

/** Represents a HostKvGetUserStringRequest. */
export class HostKvGetUserStringRequest implements IHostKvGetUserStringRequest {

    /**
     * Constructs a new HostKvGetUserStringRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostKvGetUserStringRequest);

    /** HostKvGetUserStringRequest userId. */
    public userId: string;

    /** HostKvGetUserStringRequest key. */
    public key: string;

    /**
     * Creates a new HostKvGetUserStringRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostKvGetUserStringRequest instance
     */
    public static create(properties?: IHostKvGetUserStringRequest): HostKvGetUserStringRequest;

    /**
     * Encodes the specified HostKvGetUserStringRequest message. Does not implicitly {@link HostKvGetUserStringRequest.verify|verify} messages.
     * @param message HostKvGetUserStringRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostKvGetUserStringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostKvGetUserStringRequest message, length delimited. Does not implicitly {@link HostKvGetUserStringRequest.verify|verify} messages.
     * @param message HostKvGetUserStringRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostKvGetUserStringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostKvGetUserStringRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostKvGetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostKvGetUserStringRequest;

    /**
     * Decodes a HostKvGetUserStringRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostKvGetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostKvGetUserStringRequest;

    /**
     * Verifies a HostKvGetUserStringRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostKvGetUserStringRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostKvGetUserStringRequest
     */
    public static fromObject(object: { [k: string]: any }): HostKvGetUserStringRequest;

    /**
     * Creates a plain object from a HostKvGetUserStringRequest message. Also converts values to other types if specified.
     * @param message HostKvGetUserStringRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostKvGetUserStringRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostKvGetUserStringRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostKvGetUserStringRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostKvGetUserStringResponse. */
export interface IHostKvGetUserStringResponse {

    /** HostKvGetUserStringResponse value */
    value?: (string|null);
}

/** Represents a HostKvGetUserStringResponse. */
export class HostKvGetUserStringResponse implements IHostKvGetUserStringResponse {

    /**
     * Constructs a new HostKvGetUserStringResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostKvGetUserStringResponse);

    /** HostKvGetUserStringResponse value. */
    public value?: (string|null);

    /**
     * Creates a new HostKvGetUserStringResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostKvGetUserStringResponse instance
     */
    public static create(properties?: IHostKvGetUserStringResponse): HostKvGetUserStringResponse;

    /**
     * Encodes the specified HostKvGetUserStringResponse message. Does not implicitly {@link HostKvGetUserStringResponse.verify|verify} messages.
     * @param message HostKvGetUserStringResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostKvGetUserStringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostKvGetUserStringResponse message, length delimited. Does not implicitly {@link HostKvGetUserStringResponse.verify|verify} messages.
     * @param message HostKvGetUserStringResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostKvGetUserStringResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostKvGetUserStringResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostKvGetUserStringResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostKvGetUserStringResponse;

    /**
     * Decodes a HostKvGetUserStringResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostKvGetUserStringResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostKvGetUserStringResponse;

    /**
     * Verifies a HostKvGetUserStringResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostKvGetUserStringResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostKvGetUserStringResponse
     */
    public static fromObject(object: { [k: string]: any }): HostKvGetUserStringResponse;

    /**
     * Creates a plain object from a HostKvGetUserStringResponse message. Also converts values to other types if specified.
     * @param message HostKvGetUserStringResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostKvGetUserStringResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostKvGetUserStringResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostKvGetUserStringResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a HostKvSetUserStringRequest. */
export interface IHostKvSetUserStringRequest {

    /** HostKvSetUserStringRequest userId */
    userId?: (string|null);

    /** HostKvSetUserStringRequest key */
    key?: (string|null);

    /** HostKvSetUserStringRequest value */
    value?: (string|null);
}

/** Represents a HostKvSetUserStringRequest. */
export class HostKvSetUserStringRequest implements IHostKvSetUserStringRequest {

    /**
     * Constructs a new HostKvSetUserStringRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IHostKvSetUserStringRequest);

    /** HostKvSetUserStringRequest userId. */
    public userId: string;

    /** HostKvSetUserStringRequest key. */
    public key: string;

    /** HostKvSetUserStringRequest value. */
    public value?: (string|null);

    /**
     * Creates a new HostKvSetUserStringRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HostKvSetUserStringRequest instance
     */
    public static create(properties?: IHostKvSetUserStringRequest): HostKvSetUserStringRequest;

    /**
     * Encodes the specified HostKvSetUserStringRequest message. Does not implicitly {@link HostKvSetUserStringRequest.verify|verify} messages.
     * @param message HostKvSetUserStringRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IHostKvSetUserStringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified HostKvSetUserStringRequest message, length delimited. Does not implicitly {@link HostKvSetUserStringRequest.verify|verify} messages.
     * @param message HostKvSetUserStringRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IHostKvSetUserStringRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a HostKvSetUserStringRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HostKvSetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): HostKvSetUserStringRequest;

    /**
     * Decodes a HostKvSetUserStringRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HostKvSetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): HostKvSetUserStringRequest;

    /**
     * Verifies a HostKvSetUserStringRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a HostKvSetUserStringRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HostKvSetUserStringRequest
     */
    public static fromObject(object: { [k: string]: any }): HostKvSetUserStringRequest;

    /**
     * Creates a plain object from a HostKvSetUserStringRequest message. Also converts values to other types if specified.
     * @param message HostKvSetUserStringRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: HostKvSetUserStringRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this HostKvSetUserStringRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HostKvSetUserStringRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an OrderInput. */
export interface IOrderInput {

    /** OrderInput deliveryAddress */
    deliveryAddress?: (string|null);

    /** OrderInput removePickles */
    removePickles?: (boolean|null);
}

/** Represents an OrderInput. */
export class OrderInput implements IOrderInput {

    /**
     * Constructs a new OrderInput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderInput);

    /** OrderInput deliveryAddress. */
    public deliveryAddress: string;

    /** OrderInput removePickles. */
    public removePickles: boolean;

    /**
     * Creates a new OrderInput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderInput instance
     */
    public static create(properties?: IOrderInput): OrderInput;

    /**
     * Encodes the specified OrderInput message. Does not implicitly {@link OrderInput.verify|verify} messages.
     * @param message OrderInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderInput message, length delimited. Does not implicitly {@link OrderInput.verify|verify} messages.
     * @param message OrderInput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderInput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderInput;

    /**
     * Decodes an OrderInput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderInput;

    /**
     * Verifies an OrderInput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderInput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderInput
     */
    public static fromObject(object: { [k: string]: any }): OrderInput;

    /**
     * Creates a plain object from an OrderInput message. Also converts values to other types if specified.
     * @param message OrderInput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderInput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OrderInput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of an OrderOutput. */
export interface IOrderOutput {

    /** OrderOutput estimatedDeliveryTimeHours */
    estimatedDeliveryTimeHours?: (number|null);
}

/** Represents an OrderOutput. */
export class OrderOutput implements IOrderOutput {

    /**
     * Constructs a new OrderOutput.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOrderOutput);

    /** OrderOutput estimatedDeliveryTimeHours. */
    public estimatedDeliveryTimeHours: number;

    /**
     * Creates a new OrderOutput instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OrderOutput instance
     */
    public static create(properties?: IOrderOutput): OrderOutput;

    /**
     * Encodes the specified OrderOutput message. Does not implicitly {@link OrderOutput.verify|verify} messages.
     * @param message OrderOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOrderOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OrderOutput message, length delimited. Does not implicitly {@link OrderOutput.verify|verify} messages.
     * @param message OrderOutput message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOrderOutput, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OrderOutput message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OrderOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OrderOutput;

    /**
     * Decodes an OrderOutput message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OrderOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OrderOutput;

    /**
     * Verifies an OrderOutput message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OrderOutput message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OrderOutput
     */
    public static fromObject(object: { [k: string]: any }): OrderOutput;

    /**
     * Creates a plain object from an OrderOutput message. Also converts values to other types if specified.
     * @param message OrderOutput
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OrderOutput, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OrderOutput to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OrderOutput
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
