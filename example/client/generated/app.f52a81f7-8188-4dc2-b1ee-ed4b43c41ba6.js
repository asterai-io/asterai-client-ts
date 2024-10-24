// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PluginContext = (function() {

    /**
     * Properties of a PluginContext.
     * @exports IPluginContext
     * @interface IPluginContext
     * @property {IAppQuery|null} [query] PluginContext query
     */

    /**
     * Constructs a new PluginContext.
     * @exports PluginContext
     * @classdesc Represents a PluginContext.
     * @implements IPluginContext
     * @constructor
     * @param {IPluginContext=} [properties] Properties to set
     */
    function PluginContext(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PluginContext query.
     * @member {IAppQuery|null|undefined} query
     * @memberof PluginContext
     * @instance
     */
    PluginContext.prototype.query = null;

    /**
     * Creates a new PluginContext instance using the specified properties.
     * @function create
     * @memberof PluginContext
     * @static
     * @param {IPluginContext=} [properties] Properties to set
     * @returns {PluginContext} PluginContext instance
     */
    PluginContext.create = function create(properties) {
        return new PluginContext(properties);
    };

    /**
     * Encodes the specified PluginContext message. Does not implicitly {@link PluginContext.verify|verify} messages.
     * @function encode
     * @memberof PluginContext
     * @static
     * @param {IPluginContext} message PluginContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PluginContext.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
            $root.AppQuery.encode(message.query, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PluginContext message, length delimited. Does not implicitly {@link PluginContext.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PluginContext
     * @static
     * @param {IPluginContext} message PluginContext message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PluginContext.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PluginContext message from the specified reader or buffer.
     * @function decode
     * @memberof PluginContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PluginContext} PluginContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PluginContext.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PluginContext();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.query = $root.AppQuery.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PluginContext message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PluginContext
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PluginContext} PluginContext
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PluginContext.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PluginContext message.
     * @function verify
     * @memberof PluginContext
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PluginContext.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.query != null && message.hasOwnProperty("query")) {
            var error = $root.AppQuery.verify(message.query);
            if (error)
                return "query." + error;
        }
        return null;
    };

    /**
     * Creates a PluginContext message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PluginContext
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PluginContext} PluginContext
     */
    PluginContext.fromObject = function fromObject(object) {
        if (object instanceof $root.PluginContext)
            return object;
        var message = new $root.PluginContext();
        if (object.query != null) {
            if (typeof object.query !== "object")
                throw TypeError(".PluginContext.query: object expected");
            message.query = $root.AppQuery.fromObject(object.query);
        }
        return message;
    };

    /**
     * Creates a plain object from a PluginContext message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PluginContext
     * @static
     * @param {PluginContext} message PluginContext
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PluginContext.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.query = null;
        if (message.query != null && message.hasOwnProperty("query"))
            object.query = $root.AppQuery.toObject(message.query, options);
        return object;
    };

    /**
     * Converts this PluginContext to JSON.
     * @function toJSON
     * @memberof PluginContext
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PluginContext.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PluginContext
     * @function getTypeUrl
     * @memberof PluginContext
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PluginContext.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PluginContext";
    };

    return PluginContext;
})();

$root.AppQuery = (function() {

    /**
     * Properties of an AppQuery.
     * @exports IAppQuery
     * @interface IAppQuery
     * @property {string|null} [content] AppQuery content
     * @property {number|Long|null} [timestampUnixMillis] AppQuery timestampUnixMillis
     * @property {string|null} [userId] AppQuery userId
     */

    /**
     * Constructs a new AppQuery.
     * @exports AppQuery
     * @classdesc Represents an AppQuery.
     * @implements IAppQuery
     * @constructor
     * @param {IAppQuery=} [properties] Properties to set
     */
    function AppQuery(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppQuery content.
     * @member {string} content
     * @memberof AppQuery
     * @instance
     */
    AppQuery.prototype.content = "";

    /**
     * AppQuery timestampUnixMillis.
     * @member {number|Long} timestampUnixMillis
     * @memberof AppQuery
     * @instance
     */
    AppQuery.prototype.timestampUnixMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * AppQuery userId.
     * @member {string|null|undefined} userId
     * @memberof AppQuery
     * @instance
     */
    AppQuery.prototype.userId = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(AppQuery.prototype, "_userId", {
        get: $util.oneOfGetter($oneOfFields = ["userId"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new AppQuery instance using the specified properties.
     * @function create
     * @memberof AppQuery
     * @static
     * @param {IAppQuery=} [properties] Properties to set
     * @returns {AppQuery} AppQuery instance
     */
    AppQuery.create = function create(properties) {
        return new AppQuery(properties);
    };

    /**
     * Encodes the specified AppQuery message. Does not implicitly {@link AppQuery.verify|verify} messages.
     * @function encode
     * @memberof AppQuery
     * @static
     * @param {IAppQuery} message AppQuery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppQuery.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.timestampUnixMillis != null && Object.hasOwnProperty.call(message, "timestampUnixMillis"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestampUnixMillis);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified AppQuery message, length delimited. Does not implicitly {@link AppQuery.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppQuery
     * @static
     * @param {IAppQuery} message AppQuery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppQuery.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppQuery message from the specified reader or buffer.
     * @function decode
     * @memberof AppQuery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppQuery} AppQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppQuery.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppQuery();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 2: {
                    message.timestampUnixMillis = reader.int64();
                    break;
                }
            case 3: {
                    message.userId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppQuery message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppQuery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppQuery} AppQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppQuery.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppQuery message.
     * @function verify
     * @memberof AppQuery
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppQuery.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.timestampUnixMillis != null && message.hasOwnProperty("timestampUnixMillis"))
            if (!$util.isInteger(message.timestampUnixMillis) && !(message.timestampUnixMillis && $util.isInteger(message.timestampUnixMillis.low) && $util.isInteger(message.timestampUnixMillis.high)))
                return "timestampUnixMillis: integer|Long expected";
        if (message.userId != null && message.hasOwnProperty("userId")) {
            properties._userId = 1;
            if (!$util.isString(message.userId))
                return "userId: string expected";
        }
        return null;
    };

    /**
     * Creates an AppQuery message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppQuery
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppQuery} AppQuery
     */
    AppQuery.fromObject = function fromObject(object) {
        if (object instanceof $root.AppQuery)
            return object;
        var message = new $root.AppQuery();
        if (object.content != null)
            message.content = String(object.content);
        if (object.timestampUnixMillis != null)
            if ($util.Long)
                (message.timestampUnixMillis = $util.Long.fromValue(object.timestampUnixMillis)).unsigned = false;
            else if (typeof object.timestampUnixMillis === "string")
                message.timestampUnixMillis = parseInt(object.timestampUnixMillis, 10);
            else if (typeof object.timestampUnixMillis === "number")
                message.timestampUnixMillis = object.timestampUnixMillis;
            else if (typeof object.timestampUnixMillis === "object")
                message.timestampUnixMillis = new $util.LongBits(object.timestampUnixMillis.low >>> 0, object.timestampUnixMillis.high >>> 0).toNumber();
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from an AppQuery message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppQuery
     * @static
     * @param {AppQuery} message AppQuery
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppQuery.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.timestampUnixMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.timestampUnixMillis = options.longs === String ? "0" : 0;
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.timestampUnixMillis != null && message.hasOwnProperty("timestampUnixMillis"))
            if (typeof message.timestampUnixMillis === "number")
                object.timestampUnixMillis = options.longs === String ? String(message.timestampUnixMillis) : message.timestampUnixMillis;
            else
                object.timestampUnixMillis = options.longs === String ? $util.Long.prototype.toString.call(message.timestampUnixMillis) : options.longs === Number ? new $util.LongBits(message.timestampUnixMillis.low >>> 0, message.timestampUnixMillis.high >>> 0).toNumber() : message.timestampUnixMillis;
        if (message.userId != null && message.hasOwnProperty("userId")) {
            object.userId = message.userId;
            if (options.oneofs)
                object._userId = "userId";
        }
        return object;
    };

    /**
     * Converts this AppQuery to JSON.
     * @function toJSON
     * @memberof AppQuery
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppQuery.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AppQuery
     * @function getTypeUrl
     * @memberof AppQuery
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AppQuery.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AppQuery";
    };

    return AppQuery;
})();

$root.HostVectorEmbeddingSearchRequest = (function() {

    /**
     * Properties of a HostVectorEmbeddingSearchRequest.
     * @exports IHostVectorEmbeddingSearchRequest
     * @interface IHostVectorEmbeddingSearchRequest
     * @property {string|null} [query] HostVectorEmbeddingSearchRequest query
     * @property {string|null} [appCollectionName] HostVectorEmbeddingSearchRequest appCollectionName
     */

    /**
     * Constructs a new HostVectorEmbeddingSearchRequest.
     * @exports HostVectorEmbeddingSearchRequest
     * @classdesc Represents a HostVectorEmbeddingSearchRequest.
     * @implements IHostVectorEmbeddingSearchRequest
     * @constructor
     * @param {IHostVectorEmbeddingSearchRequest=} [properties] Properties to set
     */
    function HostVectorEmbeddingSearchRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostVectorEmbeddingSearchRequest query.
     * @member {string} query
     * @memberof HostVectorEmbeddingSearchRequest
     * @instance
     */
    HostVectorEmbeddingSearchRequest.prototype.query = "";

    /**
     * HostVectorEmbeddingSearchRequest appCollectionName.
     * @member {string} appCollectionName
     * @memberof HostVectorEmbeddingSearchRequest
     * @instance
     */
    HostVectorEmbeddingSearchRequest.prototype.appCollectionName = "";

    /**
     * Creates a new HostVectorEmbeddingSearchRequest instance using the specified properties.
     * @function create
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {IHostVectorEmbeddingSearchRequest=} [properties] Properties to set
     * @returns {HostVectorEmbeddingSearchRequest} HostVectorEmbeddingSearchRequest instance
     */
    HostVectorEmbeddingSearchRequest.create = function create(properties) {
        return new HostVectorEmbeddingSearchRequest(properties);
    };

    /**
     * Encodes the specified HostVectorEmbeddingSearchRequest message. Does not implicitly {@link HostVectorEmbeddingSearchRequest.verify|verify} messages.
     * @function encode
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {IHostVectorEmbeddingSearchRequest} message HostVectorEmbeddingSearchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSearchRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.query != null && Object.hasOwnProperty.call(message, "query"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.query);
        if (message.appCollectionName != null && Object.hasOwnProperty.call(message, "appCollectionName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.appCollectionName);
        return writer;
    };

    /**
     * Encodes the specified HostVectorEmbeddingSearchRequest message, length delimited. Does not implicitly {@link HostVectorEmbeddingSearchRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {IHostVectorEmbeddingSearchRequest} message HostVectorEmbeddingSearchRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSearchRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostVectorEmbeddingSearchRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostVectorEmbeddingSearchRequest} HostVectorEmbeddingSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSearchRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostVectorEmbeddingSearchRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.query = reader.string();
                    break;
                }
            case 2: {
                    message.appCollectionName = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostVectorEmbeddingSearchRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostVectorEmbeddingSearchRequest} HostVectorEmbeddingSearchRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSearchRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostVectorEmbeddingSearchRequest message.
     * @function verify
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostVectorEmbeddingSearchRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.query != null && message.hasOwnProperty("query"))
            if (!$util.isString(message.query))
                return "query: string expected";
        if (message.appCollectionName != null && message.hasOwnProperty("appCollectionName"))
            if (!$util.isString(message.appCollectionName))
                return "appCollectionName: string expected";
        return null;
    };

    /**
     * Creates a HostVectorEmbeddingSearchRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostVectorEmbeddingSearchRequest} HostVectorEmbeddingSearchRequest
     */
    HostVectorEmbeddingSearchRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HostVectorEmbeddingSearchRequest)
            return object;
        var message = new $root.HostVectorEmbeddingSearchRequest();
        if (object.query != null)
            message.query = String(object.query);
        if (object.appCollectionName != null)
            message.appCollectionName = String(object.appCollectionName);
        return message;
    };

    /**
     * Creates a plain object from a HostVectorEmbeddingSearchRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {HostVectorEmbeddingSearchRequest} message HostVectorEmbeddingSearchRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostVectorEmbeddingSearchRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.query = "";
            object.appCollectionName = "";
        }
        if (message.query != null && message.hasOwnProperty("query"))
            object.query = message.query;
        if (message.appCollectionName != null && message.hasOwnProperty("appCollectionName"))
            object.appCollectionName = message.appCollectionName;
        return object;
    };

    /**
     * Converts this HostVectorEmbeddingSearchRequest to JSON.
     * @function toJSON
     * @memberof HostVectorEmbeddingSearchRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostVectorEmbeddingSearchRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostVectorEmbeddingSearchRequest
     * @function getTypeUrl
     * @memberof HostVectorEmbeddingSearchRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostVectorEmbeddingSearchRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostVectorEmbeddingSearchRequest";
    };

    return HostVectorEmbeddingSearchRequest;
})();

$root.HostVectorEmbeddingSearchResponse = (function() {

    /**
     * Properties of a HostVectorEmbeddingSearchResponse.
     * @exports IHostVectorEmbeddingSearchResponse
     * @interface IHostVectorEmbeddingSearchResponse
     * @property {Array.<IHostVectorEmbeddingSimilarityScore>|null} [results] HostVectorEmbeddingSearchResponse results
     */

    /**
     * Constructs a new HostVectorEmbeddingSearchResponse.
     * @exports HostVectorEmbeddingSearchResponse
     * @classdesc Represents a HostVectorEmbeddingSearchResponse.
     * @implements IHostVectorEmbeddingSearchResponse
     * @constructor
     * @param {IHostVectorEmbeddingSearchResponse=} [properties] Properties to set
     */
    function HostVectorEmbeddingSearchResponse(properties) {
        this.results = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostVectorEmbeddingSearchResponse results.
     * @member {Array.<IHostVectorEmbeddingSimilarityScore>} results
     * @memberof HostVectorEmbeddingSearchResponse
     * @instance
     */
    HostVectorEmbeddingSearchResponse.prototype.results = $util.emptyArray;

    /**
     * Creates a new HostVectorEmbeddingSearchResponse instance using the specified properties.
     * @function create
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {IHostVectorEmbeddingSearchResponse=} [properties] Properties to set
     * @returns {HostVectorEmbeddingSearchResponse} HostVectorEmbeddingSearchResponse instance
     */
    HostVectorEmbeddingSearchResponse.create = function create(properties) {
        return new HostVectorEmbeddingSearchResponse(properties);
    };

    /**
     * Encodes the specified HostVectorEmbeddingSearchResponse message. Does not implicitly {@link HostVectorEmbeddingSearchResponse.verify|verify} messages.
     * @function encode
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {IHostVectorEmbeddingSearchResponse} message HostVectorEmbeddingSearchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSearchResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.results != null && message.results.length)
            for (var i = 0; i < message.results.length; ++i)
                $root.HostVectorEmbeddingSimilarityScore.encode(message.results[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified HostVectorEmbeddingSearchResponse message, length delimited. Does not implicitly {@link HostVectorEmbeddingSearchResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {IHostVectorEmbeddingSearchResponse} message HostVectorEmbeddingSearchResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSearchResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostVectorEmbeddingSearchResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostVectorEmbeddingSearchResponse} HostVectorEmbeddingSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSearchResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostVectorEmbeddingSearchResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.results && message.results.length))
                        message.results = [];
                    message.results.push($root.HostVectorEmbeddingSimilarityScore.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostVectorEmbeddingSearchResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostVectorEmbeddingSearchResponse} HostVectorEmbeddingSearchResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSearchResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostVectorEmbeddingSearchResponse message.
     * @function verify
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostVectorEmbeddingSearchResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.results != null && message.hasOwnProperty("results")) {
            if (!Array.isArray(message.results))
                return "results: array expected";
            for (var i = 0; i < message.results.length; ++i) {
                var error = $root.HostVectorEmbeddingSimilarityScore.verify(message.results[i]);
                if (error)
                    return "results." + error;
            }
        }
        return null;
    };

    /**
     * Creates a HostVectorEmbeddingSearchResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostVectorEmbeddingSearchResponse} HostVectorEmbeddingSearchResponse
     */
    HostVectorEmbeddingSearchResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.HostVectorEmbeddingSearchResponse)
            return object;
        var message = new $root.HostVectorEmbeddingSearchResponse();
        if (object.results) {
            if (!Array.isArray(object.results))
                throw TypeError(".HostVectorEmbeddingSearchResponse.results: array expected");
            message.results = [];
            for (var i = 0; i < object.results.length; ++i) {
                if (typeof object.results[i] !== "object")
                    throw TypeError(".HostVectorEmbeddingSearchResponse.results: object expected");
                message.results[i] = $root.HostVectorEmbeddingSimilarityScore.fromObject(object.results[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a HostVectorEmbeddingSearchResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {HostVectorEmbeddingSearchResponse} message HostVectorEmbeddingSearchResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostVectorEmbeddingSearchResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.results = [];
        if (message.results && message.results.length) {
            object.results = [];
            for (var j = 0; j < message.results.length; ++j)
                object.results[j] = $root.HostVectorEmbeddingSimilarityScore.toObject(message.results[j], options);
        }
        return object;
    };

    /**
     * Converts this HostVectorEmbeddingSearchResponse to JSON.
     * @function toJSON
     * @memberof HostVectorEmbeddingSearchResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostVectorEmbeddingSearchResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostVectorEmbeddingSearchResponse
     * @function getTypeUrl
     * @memberof HostVectorEmbeddingSearchResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostVectorEmbeddingSearchResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostVectorEmbeddingSearchResponse";
    };

    return HostVectorEmbeddingSearchResponse;
})();

$root.HostVectorEmbeddingSimilarityScore = (function() {

    /**
     * Properties of a HostVectorEmbeddingSimilarityScore.
     * @exports IHostVectorEmbeddingSimilarityScore
     * @interface IHostVectorEmbeddingSimilarityScore
     * @property {number|null} [score] HostVectorEmbeddingSimilarityScore score
     * @property {Object.<string,string>|null} [payload] HostVectorEmbeddingSimilarityScore payload
     */

    /**
     * Constructs a new HostVectorEmbeddingSimilarityScore.
     * @exports HostVectorEmbeddingSimilarityScore
     * @classdesc Represents a HostVectorEmbeddingSimilarityScore.
     * @implements IHostVectorEmbeddingSimilarityScore
     * @constructor
     * @param {IHostVectorEmbeddingSimilarityScore=} [properties] Properties to set
     */
    function HostVectorEmbeddingSimilarityScore(properties) {
        this.payload = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostVectorEmbeddingSimilarityScore score.
     * @member {number} score
     * @memberof HostVectorEmbeddingSimilarityScore
     * @instance
     */
    HostVectorEmbeddingSimilarityScore.prototype.score = 0;

    /**
     * HostVectorEmbeddingSimilarityScore payload.
     * @member {Object.<string,string>} payload
     * @memberof HostVectorEmbeddingSimilarityScore
     * @instance
     */
    HostVectorEmbeddingSimilarityScore.prototype.payload = $util.emptyObject;

    /**
     * Creates a new HostVectorEmbeddingSimilarityScore instance using the specified properties.
     * @function create
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {IHostVectorEmbeddingSimilarityScore=} [properties] Properties to set
     * @returns {HostVectorEmbeddingSimilarityScore} HostVectorEmbeddingSimilarityScore instance
     */
    HostVectorEmbeddingSimilarityScore.create = function create(properties) {
        return new HostVectorEmbeddingSimilarityScore(properties);
    };

    /**
     * Encodes the specified HostVectorEmbeddingSimilarityScore message. Does not implicitly {@link HostVectorEmbeddingSimilarityScore.verify|verify} messages.
     * @function encode
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {IHostVectorEmbeddingSimilarityScore} message HostVectorEmbeddingSimilarityScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSimilarityScore.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.score != null && Object.hasOwnProperty.call(message, "score"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.score);
        if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
            for (var keys = Object.keys(message.payload), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.payload[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified HostVectorEmbeddingSimilarityScore message, length delimited. Does not implicitly {@link HostVectorEmbeddingSimilarityScore.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {IHostVectorEmbeddingSimilarityScore} message HostVectorEmbeddingSimilarityScore message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostVectorEmbeddingSimilarityScore.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostVectorEmbeddingSimilarityScore message from the specified reader or buffer.
     * @function decode
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostVectorEmbeddingSimilarityScore} HostVectorEmbeddingSimilarityScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSimilarityScore.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostVectorEmbeddingSimilarityScore(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.score = reader.float();
                    break;
                }
            case 2: {
                    if (message.payload === $util.emptyObject)
                        message.payload = {};
                    var end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = "";
                    while (reader.pos < end2) {
                        var tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.string();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.payload[key] = value;
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostVectorEmbeddingSimilarityScore message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostVectorEmbeddingSimilarityScore} HostVectorEmbeddingSimilarityScore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostVectorEmbeddingSimilarityScore.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostVectorEmbeddingSimilarityScore message.
     * @function verify
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostVectorEmbeddingSimilarityScore.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.score != null && message.hasOwnProperty("score"))
            if (typeof message.score !== "number")
                return "score: number expected";
        if (message.payload != null && message.hasOwnProperty("payload")) {
            if (!$util.isObject(message.payload))
                return "payload: object expected";
            var key = Object.keys(message.payload);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.payload[key[i]]))
                    return "payload: string{k:string} expected";
        }
        return null;
    };

    /**
     * Creates a HostVectorEmbeddingSimilarityScore message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostVectorEmbeddingSimilarityScore} HostVectorEmbeddingSimilarityScore
     */
    HostVectorEmbeddingSimilarityScore.fromObject = function fromObject(object) {
        if (object instanceof $root.HostVectorEmbeddingSimilarityScore)
            return object;
        var message = new $root.HostVectorEmbeddingSimilarityScore();
        if (object.score != null)
            message.score = Number(object.score);
        if (object.payload) {
            if (typeof object.payload !== "object")
                throw TypeError(".HostVectorEmbeddingSimilarityScore.payload: object expected");
            message.payload = {};
            for (var keys = Object.keys(object.payload), i = 0; i < keys.length; ++i)
                message.payload[keys[i]] = String(object.payload[keys[i]]);
        }
        return message;
    };

    /**
     * Creates a plain object from a HostVectorEmbeddingSimilarityScore message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {HostVectorEmbeddingSimilarityScore} message HostVectorEmbeddingSimilarityScore
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostVectorEmbeddingSimilarityScore.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.payload = {};
        if (options.defaults)
            object.score = 0;
        if (message.score != null && message.hasOwnProperty("score"))
            object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
        var keys2;
        if (message.payload && (keys2 = Object.keys(message.payload)).length) {
            object.payload = {};
            for (var j = 0; j < keys2.length; ++j)
                object.payload[keys2[j]] = message.payload[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this HostVectorEmbeddingSimilarityScore to JSON.
     * @function toJSON
     * @memberof HostVectorEmbeddingSimilarityScore
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostVectorEmbeddingSimilarityScore.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostVectorEmbeddingSimilarityScore
     * @function getTypeUrl
     * @memberof HostVectorEmbeddingSimilarityScore
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostVectorEmbeddingSimilarityScore.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostVectorEmbeddingSimilarityScore";
    };

    return HostVectorEmbeddingSimilarityScore;
})();

$root.HostLogRequest = (function() {

    /**
     * Properties of a HostLogRequest.
     * @exports IHostLogRequest
     * @interface IHostLogRequest
     * @property {string|null} [content] HostLogRequest content
     * @property {string|null} [level] HostLogRequest level
     */

    /**
     * Constructs a new HostLogRequest.
     * @exports HostLogRequest
     * @classdesc Represents a HostLogRequest.
     * @implements IHostLogRequest
     * @constructor
     * @param {IHostLogRequest=} [properties] Properties to set
     */
    function HostLogRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostLogRequest content.
     * @member {string} content
     * @memberof HostLogRequest
     * @instance
     */
    HostLogRequest.prototype.content = "";

    /**
     * HostLogRequest level.
     * @member {string} level
     * @memberof HostLogRequest
     * @instance
     */
    HostLogRequest.prototype.level = "";

    /**
     * Creates a new HostLogRequest instance using the specified properties.
     * @function create
     * @memberof HostLogRequest
     * @static
     * @param {IHostLogRequest=} [properties] Properties to set
     * @returns {HostLogRequest} HostLogRequest instance
     */
    HostLogRequest.create = function create(properties) {
        return new HostLogRequest(properties);
    };

    /**
     * Encodes the specified HostLogRequest message. Does not implicitly {@link HostLogRequest.verify|verify} messages.
     * @function encode
     * @memberof HostLogRequest
     * @static
     * @param {IHostLogRequest} message HostLogRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostLogRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.level != null && Object.hasOwnProperty.call(message, "level"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.level);
        return writer;
    };

    /**
     * Encodes the specified HostLogRequest message, length delimited. Does not implicitly {@link HostLogRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostLogRequest
     * @static
     * @param {IHostLogRequest} message HostLogRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostLogRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostLogRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HostLogRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostLogRequest} HostLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostLogRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostLogRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 2: {
                    message.level = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostLogRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostLogRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostLogRequest} HostLogRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostLogRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostLogRequest message.
     * @function verify
     * @memberof HostLogRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostLogRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isString(message.level))
                return "level: string expected";
        return null;
    };

    /**
     * Creates a HostLogRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostLogRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostLogRequest} HostLogRequest
     */
    HostLogRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HostLogRequest)
            return object;
        var message = new $root.HostLogRequest();
        if (object.content != null)
            message.content = String(object.content);
        if (object.level != null)
            message.level = String(object.level);
        return message;
    };

    /**
     * Creates a plain object from a HostLogRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostLogRequest
     * @static
     * @param {HostLogRequest} message HostLogRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostLogRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.level = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        return object;
    };

    /**
     * Converts this HostLogRequest to JSON.
     * @function toJSON
     * @memberof HostLogRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostLogRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostLogRequest
     * @function getTypeUrl
     * @memberof HostLogRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostLogRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostLogRequest";
    };

    return HostLogRequest;
})();

$root.HostHttpRequest = (function() {

    /**
     * Properties of a HostHttpRequest.
     * @exports IHostHttpRequest
     * @interface IHostHttpRequest
     * @property {string|null} [request] HostHttpRequest request
     */

    /**
     * Constructs a new HostHttpRequest.
     * @exports HostHttpRequest
     * @classdesc Represents a HostHttpRequest.
     * @implements IHostHttpRequest
     * @constructor
     * @param {IHostHttpRequest=} [properties] Properties to set
     */
    function HostHttpRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostHttpRequest request.
     * @member {string} request
     * @memberof HostHttpRequest
     * @instance
     */
    HostHttpRequest.prototype.request = "";

    /**
     * Creates a new HostHttpRequest instance using the specified properties.
     * @function create
     * @memberof HostHttpRequest
     * @static
     * @param {IHostHttpRequest=} [properties] Properties to set
     * @returns {HostHttpRequest} HostHttpRequest instance
     */
    HostHttpRequest.create = function create(properties) {
        return new HostHttpRequest(properties);
    };

    /**
     * Encodes the specified HostHttpRequest message. Does not implicitly {@link HostHttpRequest.verify|verify} messages.
     * @function encode
     * @memberof HostHttpRequest
     * @static
     * @param {IHostHttpRequest} message HostHttpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostHttpRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.request);
        return writer;
    };

    /**
     * Encodes the specified HostHttpRequest message, length delimited. Does not implicitly {@link HostHttpRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostHttpRequest
     * @static
     * @param {IHostHttpRequest} message HostHttpRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostHttpRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostHttpRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HostHttpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostHttpRequest} HostHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostHttpRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostHttpRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.request = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostHttpRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostHttpRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostHttpRequest} HostHttpRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostHttpRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostHttpRequest message.
     * @function verify
     * @memberof HostHttpRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostHttpRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.request != null && message.hasOwnProperty("request"))
            if (!$util.isString(message.request))
                return "request: string expected";
        return null;
    };

    /**
     * Creates a HostHttpRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostHttpRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostHttpRequest} HostHttpRequest
     */
    HostHttpRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HostHttpRequest)
            return object;
        var message = new $root.HostHttpRequest();
        if (object.request != null)
            message.request = String(object.request);
        return message;
    };

    /**
     * Creates a plain object from a HostHttpRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostHttpRequest
     * @static
     * @param {HostHttpRequest} message HostHttpRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostHttpRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.request = "";
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = message.request;
        return object;
    };

    /**
     * Converts this HostHttpRequest to JSON.
     * @function toJSON
     * @memberof HostHttpRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostHttpRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostHttpRequest
     * @function getTypeUrl
     * @memberof HostHttpRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostHttpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostHttpRequest";
    };

    return HostHttpRequest;
})();

$root.HostHttpResponse = (function() {

    /**
     * Properties of a HostHttpResponse.
     * @exports IHostHttpResponse
     * @interface IHostHttpResponse
     * @property {string|null} [response] HostHttpResponse response
     */

    /**
     * Constructs a new HostHttpResponse.
     * @exports HostHttpResponse
     * @classdesc Represents a HostHttpResponse.
     * @implements IHostHttpResponse
     * @constructor
     * @param {IHostHttpResponse=} [properties] Properties to set
     */
    function HostHttpResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostHttpResponse response.
     * @member {string} response
     * @memberof HostHttpResponse
     * @instance
     */
    HostHttpResponse.prototype.response = "";

    /**
     * Creates a new HostHttpResponse instance using the specified properties.
     * @function create
     * @memberof HostHttpResponse
     * @static
     * @param {IHostHttpResponse=} [properties] Properties to set
     * @returns {HostHttpResponse} HostHttpResponse instance
     */
    HostHttpResponse.create = function create(properties) {
        return new HostHttpResponse(properties);
    };

    /**
     * Encodes the specified HostHttpResponse message. Does not implicitly {@link HostHttpResponse.verify|verify} messages.
     * @function encode
     * @memberof HostHttpResponse
     * @static
     * @param {IHostHttpResponse} message HostHttpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostHttpResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.response);
        return writer;
    };

    /**
     * Encodes the specified HostHttpResponse message, length delimited. Does not implicitly {@link HostHttpResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostHttpResponse
     * @static
     * @param {IHostHttpResponse} message HostHttpResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostHttpResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostHttpResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HostHttpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostHttpResponse} HostHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostHttpResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostHttpResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.response = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostHttpResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostHttpResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostHttpResponse} HostHttpResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostHttpResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostHttpResponse message.
     * @function verify
     * @memberof HostHttpResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostHttpResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.response != null && message.hasOwnProperty("response"))
            if (!$util.isString(message.response))
                return "response: string expected";
        return null;
    };

    /**
     * Creates a HostHttpResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostHttpResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostHttpResponse} HostHttpResponse
     */
    HostHttpResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.HostHttpResponse)
            return object;
        var message = new $root.HostHttpResponse();
        if (object.response != null)
            message.response = String(object.response);
        return message;
    };

    /**
     * Creates a plain object from a HostHttpResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostHttpResponse
     * @static
     * @param {HostHttpResponse} message HostHttpResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostHttpResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.response = "";
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = message.response;
        return object;
    };

    /**
     * Converts this HostHttpResponse to JSON.
     * @function toJSON
     * @memberof HostHttpResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostHttpResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostHttpResponse
     * @function getTypeUrl
     * @memberof HostHttpResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostHttpResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostHttpResponse";
    };

    return HostHttpResponse;
})();

$root.HostKvGetUserStringRequest = (function() {

    /**
     * Properties of a HostKvGetUserStringRequest.
     * @exports IHostKvGetUserStringRequest
     * @interface IHostKvGetUserStringRequest
     * @property {string|null} [userId] HostKvGetUserStringRequest userId
     * @property {string|null} [key] HostKvGetUserStringRequest key
     */

    /**
     * Constructs a new HostKvGetUserStringRequest.
     * @exports HostKvGetUserStringRequest
     * @classdesc Represents a HostKvGetUserStringRequest.
     * @implements IHostKvGetUserStringRequest
     * @constructor
     * @param {IHostKvGetUserStringRequest=} [properties] Properties to set
     */
    function HostKvGetUserStringRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostKvGetUserStringRequest userId.
     * @member {string} userId
     * @memberof HostKvGetUserStringRequest
     * @instance
     */
    HostKvGetUserStringRequest.prototype.userId = "";

    /**
     * HostKvGetUserStringRequest key.
     * @member {string} key
     * @memberof HostKvGetUserStringRequest
     * @instance
     */
    HostKvGetUserStringRequest.prototype.key = "";

    /**
     * Creates a new HostKvGetUserStringRequest instance using the specified properties.
     * @function create
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {IHostKvGetUserStringRequest=} [properties] Properties to set
     * @returns {HostKvGetUserStringRequest} HostKvGetUserStringRequest instance
     */
    HostKvGetUserStringRequest.create = function create(properties) {
        return new HostKvGetUserStringRequest(properties);
    };

    /**
     * Encodes the specified HostKvGetUserStringRequest message. Does not implicitly {@link HostKvGetUserStringRequest.verify|verify} messages.
     * @function encode
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {IHostKvGetUserStringRequest} message HostKvGetUserStringRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvGetUserStringRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified HostKvGetUserStringRequest message, length delimited. Does not implicitly {@link HostKvGetUserStringRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {IHostKvGetUserStringRequest} message HostKvGetUserStringRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvGetUserStringRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostKvGetUserStringRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostKvGetUserStringRequest} HostKvGetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvGetUserStringRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostKvGetUserStringRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            case 2: {
                    message.key = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostKvGetUserStringRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostKvGetUserStringRequest} HostKvGetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvGetUserStringRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostKvGetUserStringRequest message.
     * @function verify
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostKvGetUserStringRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a HostKvGetUserStringRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostKvGetUserStringRequest} HostKvGetUserStringRequest
     */
    HostKvGetUserStringRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HostKvGetUserStringRequest)
            return object;
        var message = new $root.HostKvGetUserStringRequest();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a HostKvGetUserStringRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {HostKvGetUserStringRequest} message HostKvGetUserStringRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostKvGetUserStringRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.key = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this HostKvGetUserStringRequest to JSON.
     * @function toJSON
     * @memberof HostKvGetUserStringRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostKvGetUserStringRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostKvGetUserStringRequest
     * @function getTypeUrl
     * @memberof HostKvGetUserStringRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostKvGetUserStringRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostKvGetUserStringRequest";
    };

    return HostKvGetUserStringRequest;
})();

$root.HostKvGetUserStringResponse = (function() {

    /**
     * Properties of a HostKvGetUserStringResponse.
     * @exports IHostKvGetUserStringResponse
     * @interface IHostKvGetUserStringResponse
     * @property {string|null} [value] HostKvGetUserStringResponse value
     */

    /**
     * Constructs a new HostKvGetUserStringResponse.
     * @exports HostKvGetUserStringResponse
     * @classdesc Represents a HostKvGetUserStringResponse.
     * @implements IHostKvGetUserStringResponse
     * @constructor
     * @param {IHostKvGetUserStringResponse=} [properties] Properties to set
     */
    function HostKvGetUserStringResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostKvGetUserStringResponse value.
     * @member {string|null|undefined} value
     * @memberof HostKvGetUserStringResponse
     * @instance
     */
    HostKvGetUserStringResponse.prototype.value = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(HostKvGetUserStringResponse.prototype, "_value", {
        get: $util.oneOfGetter($oneOfFields = ["value"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new HostKvGetUserStringResponse instance using the specified properties.
     * @function create
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {IHostKvGetUserStringResponse=} [properties] Properties to set
     * @returns {HostKvGetUserStringResponse} HostKvGetUserStringResponse instance
     */
    HostKvGetUserStringResponse.create = function create(properties) {
        return new HostKvGetUserStringResponse(properties);
    };

    /**
     * Encodes the specified HostKvGetUserStringResponse message. Does not implicitly {@link HostKvGetUserStringResponse.verify|verify} messages.
     * @function encode
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {IHostKvGetUserStringResponse} message HostKvGetUserStringResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvGetUserStringResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified HostKvGetUserStringResponse message, length delimited. Does not implicitly {@link HostKvGetUserStringResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {IHostKvGetUserStringResponse} message HostKvGetUserStringResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvGetUserStringResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostKvGetUserStringResponse message from the specified reader or buffer.
     * @function decode
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostKvGetUserStringResponse} HostKvGetUserStringResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvGetUserStringResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostKvGetUserStringResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostKvGetUserStringResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostKvGetUserStringResponse} HostKvGetUserStringResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvGetUserStringResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostKvGetUserStringResponse message.
     * @function verify
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostKvGetUserStringResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            properties._value = 1;
            if (!$util.isString(message.value))
                return "value: string expected";
        }
        return null;
    };

    /**
     * Creates a HostKvGetUserStringResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostKvGetUserStringResponse} HostKvGetUserStringResponse
     */
    HostKvGetUserStringResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.HostKvGetUserStringResponse)
            return object;
        var message = new $root.HostKvGetUserStringResponse();
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a HostKvGetUserStringResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {HostKvGetUserStringResponse} message HostKvGetUserStringResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostKvGetUserStringResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = message.value;
            if (options.oneofs)
                object._value = "value";
        }
        return object;
    };

    /**
     * Converts this HostKvGetUserStringResponse to JSON.
     * @function toJSON
     * @memberof HostKvGetUserStringResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostKvGetUserStringResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostKvGetUserStringResponse
     * @function getTypeUrl
     * @memberof HostKvGetUserStringResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostKvGetUserStringResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostKvGetUserStringResponse";
    };

    return HostKvGetUserStringResponse;
})();

$root.HostKvSetUserStringRequest = (function() {

    /**
     * Properties of a HostKvSetUserStringRequest.
     * @exports IHostKvSetUserStringRequest
     * @interface IHostKvSetUserStringRequest
     * @property {string|null} [userId] HostKvSetUserStringRequest userId
     * @property {string|null} [key] HostKvSetUserStringRequest key
     * @property {string|null} [value] HostKvSetUserStringRequest value
     */

    /**
     * Constructs a new HostKvSetUserStringRequest.
     * @exports HostKvSetUserStringRequest
     * @classdesc Represents a HostKvSetUserStringRequest.
     * @implements IHostKvSetUserStringRequest
     * @constructor
     * @param {IHostKvSetUserStringRequest=} [properties] Properties to set
     */
    function HostKvSetUserStringRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * HostKvSetUserStringRequest userId.
     * @member {string} userId
     * @memberof HostKvSetUserStringRequest
     * @instance
     */
    HostKvSetUserStringRequest.prototype.userId = "";

    /**
     * HostKvSetUserStringRequest key.
     * @member {string} key
     * @memberof HostKvSetUserStringRequest
     * @instance
     */
    HostKvSetUserStringRequest.prototype.key = "";

    /**
     * HostKvSetUserStringRequest value.
     * @member {string|null|undefined} value
     * @memberof HostKvSetUserStringRequest
     * @instance
     */
    HostKvSetUserStringRequest.prototype.value = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(HostKvSetUserStringRequest.prototype, "_value", {
        get: $util.oneOfGetter($oneOfFields = ["value"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new HostKvSetUserStringRequest instance using the specified properties.
     * @function create
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {IHostKvSetUserStringRequest=} [properties] Properties to set
     * @returns {HostKvSetUserStringRequest} HostKvSetUserStringRequest instance
     */
    HostKvSetUserStringRequest.create = function create(properties) {
        return new HostKvSetUserStringRequest(properties);
    };

    /**
     * Encodes the specified HostKvSetUserStringRequest message. Does not implicitly {@link HostKvSetUserStringRequest.verify|verify} messages.
     * @function encode
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {IHostKvSetUserStringRequest} message HostKvSetUserStringRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvSetUserStringRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.value);
        return writer;
    };

    /**
     * Encodes the specified HostKvSetUserStringRequest message, length delimited. Does not implicitly {@link HostKvSetUserStringRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {IHostKvSetUserStringRequest} message HostKvSetUserStringRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    HostKvSetUserStringRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a HostKvSetUserStringRequest message from the specified reader or buffer.
     * @function decode
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {HostKvSetUserStringRequest} HostKvSetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvSetUserStringRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HostKvSetUserStringRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            case 2: {
                    message.key = reader.string();
                    break;
                }
            case 3: {
                    message.value = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a HostKvSetUserStringRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {HostKvSetUserStringRequest} HostKvSetUserStringRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    HostKvSetUserStringRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a HostKvSetUserStringRequest message.
     * @function verify
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    HostKvSetUserStringRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        if (message.value != null && message.hasOwnProperty("value")) {
            properties._value = 1;
            if (!$util.isString(message.value))
                return "value: string expected";
        }
        return null;
    };

    /**
     * Creates a HostKvSetUserStringRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {HostKvSetUserStringRequest} HostKvSetUserStringRequest
     */
    HostKvSetUserStringRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.HostKvSetUserStringRequest)
            return object;
        var message = new $root.HostKvSetUserStringRequest();
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.key != null)
            message.key = String(object.key);
        if (object.value != null)
            message.value = String(object.value);
        return message;
    };

    /**
     * Creates a plain object from a HostKvSetUserStringRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {HostKvSetUserStringRequest} message HostKvSetUserStringRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    HostKvSetUserStringRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.key = "";
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        if (message.value != null && message.hasOwnProperty("value")) {
            object.value = message.value;
            if (options.oneofs)
                object._value = "value";
        }
        return object;
    };

    /**
     * Converts this HostKvSetUserStringRequest to JSON.
     * @function toJSON
     * @memberof HostKvSetUserStringRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    HostKvSetUserStringRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for HostKvSetUserStringRequest
     * @function getTypeUrl
     * @memberof HostKvSetUserStringRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    HostKvSetUserStringRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/HostKvSetUserStringRequest";
    };

    return HostKvSetUserStringRequest;
})();

$root.OrderInput = (function() {

    /**
     * Properties of an OrderInput.
     * @exports IOrderInput
     * @interface IOrderInput
     * @property {string|null} [deliveryAddress] OrderInput deliveryAddress
     * @property {boolean|null} [removePickles] OrderInput removePickles
     */

    /**
     * Constructs a new OrderInput.
     * @exports OrderInput
     * @classdesc Represents an OrderInput.
     * @implements IOrderInput
     * @constructor
     * @param {IOrderInput=} [properties] Properties to set
     */
    function OrderInput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OrderInput deliveryAddress.
     * @member {string} deliveryAddress
     * @memberof OrderInput
     * @instance
     */
    OrderInput.prototype.deliveryAddress = "";

    /**
     * OrderInput removePickles.
     * @member {boolean} removePickles
     * @memberof OrderInput
     * @instance
     */
    OrderInput.prototype.removePickles = false;

    /**
     * Creates a new OrderInput instance using the specified properties.
     * @function create
     * @memberof OrderInput
     * @static
     * @param {IOrderInput=} [properties] Properties to set
     * @returns {OrderInput} OrderInput instance
     */
    OrderInput.create = function create(properties) {
        return new OrderInput(properties);
    };

    /**
     * Encodes the specified OrderInput message. Does not implicitly {@link OrderInput.verify|verify} messages.
     * @function encode
     * @memberof OrderInput
     * @static
     * @param {IOrderInput} message OrderInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderInput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.deliveryAddress != null && Object.hasOwnProperty.call(message, "deliveryAddress"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.deliveryAddress);
        if (message.removePickles != null && Object.hasOwnProperty.call(message, "removePickles"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.removePickles);
        return writer;
    };

    /**
     * Encodes the specified OrderInput message, length delimited. Does not implicitly {@link OrderInput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OrderInput
     * @static
     * @param {IOrderInput} message OrderInput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderInput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OrderInput message from the specified reader or buffer.
     * @function decode
     * @memberof OrderInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OrderInput} OrderInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderInput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OrderInput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deliveryAddress = reader.string();
                    break;
                }
            case 2: {
                    message.removePickles = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OrderInput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OrderInput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OrderInput} OrderInput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderInput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OrderInput message.
     * @function verify
     * @memberof OrderInput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OrderInput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deliveryAddress != null && message.hasOwnProperty("deliveryAddress"))
            if (!$util.isString(message.deliveryAddress))
                return "deliveryAddress: string expected";
        if (message.removePickles != null && message.hasOwnProperty("removePickles"))
            if (typeof message.removePickles !== "boolean")
                return "removePickles: boolean expected";
        return null;
    };

    /**
     * Creates an OrderInput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OrderInput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OrderInput} OrderInput
     */
    OrderInput.fromObject = function fromObject(object) {
        if (object instanceof $root.OrderInput)
            return object;
        var message = new $root.OrderInput();
        if (object.deliveryAddress != null)
            message.deliveryAddress = String(object.deliveryAddress);
        if (object.removePickles != null)
            message.removePickles = Boolean(object.removePickles);
        return message;
    };

    /**
     * Creates a plain object from an OrderInput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OrderInput
     * @static
     * @param {OrderInput} message OrderInput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OrderInput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.deliveryAddress = "";
            object.removePickles = false;
        }
        if (message.deliveryAddress != null && message.hasOwnProperty("deliveryAddress"))
            object.deliveryAddress = message.deliveryAddress;
        if (message.removePickles != null && message.hasOwnProperty("removePickles"))
            object.removePickles = message.removePickles;
        return object;
    };

    /**
     * Converts this OrderInput to JSON.
     * @function toJSON
     * @memberof OrderInput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OrderInput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OrderInput
     * @function getTypeUrl
     * @memberof OrderInput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OrderInput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OrderInput";
    };

    return OrderInput;
})();

$root.OrderOutput = (function() {

    /**
     * Properties of an OrderOutput.
     * @exports IOrderOutput
     * @interface IOrderOutput
     * @property {number|null} [estimatedDeliveryTimeHours] OrderOutput estimatedDeliveryTimeHours
     */

    /**
     * Constructs a new OrderOutput.
     * @exports OrderOutput
     * @classdesc Represents an OrderOutput.
     * @implements IOrderOutput
     * @constructor
     * @param {IOrderOutput=} [properties] Properties to set
     */
    function OrderOutput(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * OrderOutput estimatedDeliveryTimeHours.
     * @member {number} estimatedDeliveryTimeHours
     * @memberof OrderOutput
     * @instance
     */
    OrderOutput.prototype.estimatedDeliveryTimeHours = 0;

    /**
     * Creates a new OrderOutput instance using the specified properties.
     * @function create
     * @memberof OrderOutput
     * @static
     * @param {IOrderOutput=} [properties] Properties to set
     * @returns {OrderOutput} OrderOutput instance
     */
    OrderOutput.create = function create(properties) {
        return new OrderOutput(properties);
    };

    /**
     * Encodes the specified OrderOutput message. Does not implicitly {@link OrderOutput.verify|verify} messages.
     * @function encode
     * @memberof OrderOutput
     * @static
     * @param {IOrderOutput} message OrderOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderOutput.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.estimatedDeliveryTimeHours != null && Object.hasOwnProperty.call(message, "estimatedDeliveryTimeHours"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.estimatedDeliveryTimeHours);
        return writer;
    };

    /**
     * Encodes the specified OrderOutput message, length delimited. Does not implicitly {@link OrderOutput.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OrderOutput
     * @static
     * @param {IOrderOutput} message OrderOutput message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OrderOutput.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OrderOutput message from the specified reader or buffer.
     * @function decode
     * @memberof OrderOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OrderOutput} OrderOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderOutput.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OrderOutput();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.estimatedDeliveryTimeHours = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an OrderOutput message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OrderOutput
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OrderOutput} OrderOutput
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OrderOutput.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OrderOutput message.
     * @function verify
     * @memberof OrderOutput
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OrderOutput.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.estimatedDeliveryTimeHours != null && message.hasOwnProperty("estimatedDeliveryTimeHours"))
            if (typeof message.estimatedDeliveryTimeHours !== "number")
                return "estimatedDeliveryTimeHours: number expected";
        return null;
    };

    /**
     * Creates an OrderOutput message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OrderOutput
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OrderOutput} OrderOutput
     */
    OrderOutput.fromObject = function fromObject(object) {
        if (object instanceof $root.OrderOutput)
            return object;
        var message = new $root.OrderOutput();
        if (object.estimatedDeliveryTimeHours != null)
            message.estimatedDeliveryTimeHours = Number(object.estimatedDeliveryTimeHours);
        return message;
    };

    /**
     * Creates a plain object from an OrderOutput message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OrderOutput
     * @static
     * @param {OrderOutput} message OrderOutput
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OrderOutput.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.estimatedDeliveryTimeHours = 0;
        if (message.estimatedDeliveryTimeHours != null && message.hasOwnProperty("estimatedDeliveryTimeHours"))
            object.estimatedDeliveryTimeHours = options.json && !isFinite(message.estimatedDeliveryTimeHours) ? String(message.estimatedDeliveryTimeHours) : message.estimatedDeliveryTimeHours;
        return object;
    };

    /**
     * Converts this OrderOutput to JSON.
     * @function toJSON
     * @memberof OrderOutput
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OrderOutput.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OrderOutput
     * @function getTypeUrl
     * @memberof OrderOutput
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OrderOutput.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/OrderOutput";
    };

    return OrderOutput;
})();