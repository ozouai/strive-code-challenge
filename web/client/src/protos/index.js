/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader,
  $Writer = $protobuf.Writer,
  $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.quizservice = (function () {
  /**
   * Namespace quizservice.
   * @exports quizservice
   * @namespace
   */
  var quizservice = {};

  quizservice.QuizService = (function () {
    /**
     * Constructs a new QuizService service.
     * @memberof quizservice
     * @classdesc Represents a QuizService
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function QuizService(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(
        this,
        rpcImpl,
        requestDelimited,
        responseDelimited
      );
    }

    (QuizService.prototype = Object.create(
      $protobuf.rpc.Service.prototype
    )).constructor = QuizService;

    /**
     * Creates new QuizService service using the specified rpc implementation.
     * @function create
     * @memberof quizservice.QuizService
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {QuizService} RPC service. Useful where requests and/or responses are streamed.
     */
    QuizService.create = function create(
      rpcImpl,
      requestDelimited,
      responseDelimited
    ) {
      return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link quizservice.QuizService#listQuizes}.
     * @memberof quizservice.QuizService
     * @typedef ListQuizesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {quizservice.ListQuizesResponse} [response] ListQuizesResponse
     */

    /**
     * Calls ListQuizes.
     * @function listQuizes
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IListQuizesRequest} request ListQuizesRequest message or plain object
     * @param {quizservice.QuizService.ListQuizesCallback} callback Node-style callback called with the error, if any, and ListQuizesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (QuizService.prototype.listQuizes = function listQuizes(
        request,
        callback
      ) {
        return this.rpcCall(
          listQuizes,
          $root.quizservice.ListQuizesRequest,
          $root.quizservice.ListQuizesResponse,
          request,
          callback
        );
      }),
      "name",
      { value: "ListQuizes" }
    );

    /**
     * Calls ListQuizes.
     * @function listQuizes
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IListQuizesRequest} request ListQuizesRequest message or plain object
     * @returns {Promise<quizservice.ListQuizesResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link quizservice.QuizService#getQuiz}.
     * @memberof quizservice.QuizService
     * @typedef GetQuizCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {quizservice.GetQuizResponse} [response] GetQuizResponse
     */

    /**
     * Calls GetQuiz.
     * @function getQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IGetQuizRequest} request GetQuizRequest message or plain object
     * @param {quizservice.QuizService.GetQuizCallback} callback Node-style callback called with the error, if any, and GetQuizResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (QuizService.prototype.getQuiz = function getQuiz(request, callback) {
        return this.rpcCall(
          getQuiz,
          $root.quizservice.GetQuizRequest,
          $root.quizservice.GetQuizResponse,
          request,
          callback
        );
      }),
      "name",
      { value: "GetQuiz" }
    );

    /**
     * Calls GetQuiz.
     * @function getQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IGetQuizRequest} request GetQuizRequest message or plain object
     * @returns {Promise<quizservice.GetQuizResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link quizservice.QuizService#submitQuiz}.
     * @memberof quizservice.QuizService
     * @typedef SubmitQuizCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {quizservice.SubmitQuizResponse} [response] SubmitQuizResponse
     */

    /**
     * Calls SubmitQuiz.
     * @function submitQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.ISubmitQuizRequest} request SubmitQuizRequest message or plain object
     * @param {quizservice.QuizService.SubmitQuizCallback} callback Node-style callback called with the error, if any, and SubmitQuizResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (QuizService.prototype.submitQuiz = function submitQuiz(
        request,
        callback
      ) {
        return this.rpcCall(
          submitQuiz,
          $root.quizservice.SubmitQuizRequest,
          $root.quizservice.SubmitQuizResponse,
          request,
          callback
        );
      }),
      "name",
      { value: "SubmitQuiz" }
    );

    /**
     * Calls SubmitQuiz.
     * @function submitQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.ISubmitQuizRequest} request SubmitQuizRequest message or plain object
     * @returns {Promise<quizservice.SubmitQuizResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link quizservice.QuizService#adminCreateQuiz}.
     * @memberof quizservice.QuizService
     * @typedef AdminCreateQuizCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {quizservice.AdminCreateQuizResponse} [response] AdminCreateQuizResponse
     */

    /**
     * Calls AdminCreateQuiz.
     * @function adminCreateQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IAdminCreateQuizRequest} request AdminCreateQuizRequest message or plain object
     * @param {quizservice.QuizService.AdminCreateQuizCallback} callback Node-style callback called with the error, if any, and AdminCreateQuizResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (QuizService.prototype.adminCreateQuiz = function adminCreateQuiz(
        request,
        callback
      ) {
        return this.rpcCall(
          adminCreateQuiz,
          $root.quizservice.AdminCreateQuizRequest,
          $root.quizservice.AdminCreateQuizResponse,
          request,
          callback
        );
      }),
      "name",
      { value: "AdminCreateQuiz" }
    );

    /**
     * Calls AdminCreateQuiz.
     * @function adminCreateQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IAdminCreateQuizRequest} request AdminCreateQuizRequest message or plain object
     * @returns {Promise<quizservice.AdminCreateQuizResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link quizservice.QuizService#adminAddQuestionToQuiz}.
     * @memberof quizservice.QuizService
     * @typedef AdminAddQuestionToQuizCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {quizservice.AdminAddQuestionToQuizResponse} [response] AdminAddQuestionToQuizResponse
     */

    /**
     * Calls AdminAddQuestionToQuiz.
     * @function adminAddQuestionToQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IAdminAddQuestionToQuizRequest} request AdminAddQuestionToQuizRequest message or plain object
     * @param {quizservice.QuizService.AdminAddQuestionToQuizCallback} callback Node-style callback called with the error, if any, and AdminAddQuestionToQuizResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(
      (QuizService.prototype.adminAddQuestionToQuiz = function adminAddQuestionToQuiz(
        request,
        callback
      ) {
        return this.rpcCall(
          adminAddQuestionToQuiz,
          $root.quizservice.AdminAddQuestionToQuizRequest,
          $root.quizservice.AdminAddQuestionToQuizResponse,
          request,
          callback
        );
      }),
      "name",
      { value: "AdminAddQuestionToQuiz" }
    );

    /**
     * Calls AdminAddQuestionToQuiz.
     * @function adminAddQuestionToQuiz
     * @memberof quizservice.QuizService
     * @instance
     * @param {quizservice.IAdminAddQuestionToQuizRequest} request AdminAddQuestionToQuizRequest message or plain object
     * @returns {Promise<quizservice.AdminAddQuestionToQuizResponse>} Promise
     * @variation 2
     */

    return QuizService;
  })();

  quizservice.SubmitQuizRequest = (function () {
    /**
     * Properties of a SubmitQuizRequest.
     * @memberof quizservice
     * @interface ISubmitQuizRequest
     * @property {number|null} [id] SubmitQuizRequest id
     * @property {Array.<quizservice.SubmitQuizRequest.IAnswer>|null} [responses] SubmitQuizRequest responses
     */

    /**
     * Constructs a new SubmitQuizRequest.
     * @memberof quizservice
     * @classdesc Represents a SubmitQuizRequest.
     * @implements ISubmitQuizRequest
     * @constructor
     * @param {quizservice.ISubmitQuizRequest=} [properties] Properties to set
     */
    function SubmitQuizRequest(properties) {
      this.responses = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * SubmitQuizRequest id.
     * @member {number} id
     * @memberof quizservice.SubmitQuizRequest
     * @instance
     */
    SubmitQuizRequest.prototype.id = 0;

    /**
     * SubmitQuizRequest responses.
     * @member {Array.<quizservice.SubmitQuizRequest.IAnswer>} responses
     * @memberof quizservice.SubmitQuizRequest
     * @instance
     */
    SubmitQuizRequest.prototype.responses = $util.emptyArray;

    /**
     * Creates a new SubmitQuizRequest instance using the specified properties.
     * @function create
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {quizservice.ISubmitQuizRequest=} [properties] Properties to set
     * @returns {quizservice.SubmitQuizRequest} SubmitQuizRequest instance
     */
    SubmitQuizRequest.create = function create(properties) {
      return new SubmitQuizRequest(properties);
    };

    /**
     * Encodes the specified SubmitQuizRequest message. Does not implicitly {@link quizservice.SubmitQuizRequest.verify|verify} messages.
     * @function encode
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {quizservice.ISubmitQuizRequest} message SubmitQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitQuizRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.id);
      if (message.responses != null && message.responses.length)
        for (var i = 0; i < message.responses.length; ++i)
          $root.quizservice.SubmitQuizRequest.Answer.encode(
            message.responses[i],
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified SubmitQuizRequest message, length delimited. Does not implicitly {@link quizservice.SubmitQuizRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {quizservice.ISubmitQuizRequest} message SubmitQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitQuizRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SubmitQuizRequest message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.SubmitQuizRequest} SubmitQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitQuizRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.SubmitQuizRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.uint32();
            break;
          case 2:
            if (!(message.responses && message.responses.length))
              message.responses = [];
            message.responses.push(
              $root.quizservice.SubmitQuizRequest.Answer.decode(
                reader,
                reader.uint32()
              )
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SubmitQuizRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.SubmitQuizRequest} SubmitQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitQuizRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SubmitQuizRequest message.
     * @function verify
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SubmitQuizRequest.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id"))
        if (!$util.isInteger(message.id)) return "id: integer expected";
      if (message.responses != null && message.hasOwnProperty("responses")) {
        if (!Array.isArray(message.responses))
          return "responses: array expected";
        for (var i = 0; i < message.responses.length; ++i) {
          var error = $root.quizservice.SubmitQuizRequest.Answer.verify(
            message.responses[i]
          );
          if (error) return "responses." + error;
        }
      }
      return null;
    };

    /**
     * Creates a SubmitQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.SubmitQuizRequest} SubmitQuizRequest
     */
    SubmitQuizRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.SubmitQuizRequest) return object;
      var message = new $root.quizservice.SubmitQuizRequest();
      if (object.id != null) message.id = object.id >>> 0;
      if (object.responses) {
        if (!Array.isArray(object.responses))
          throw TypeError(
            ".quizservice.SubmitQuizRequest.responses: array expected"
          );
        message.responses = [];
        for (var i = 0; i < object.responses.length; ++i) {
          if (typeof object.responses[i] !== "object")
            throw TypeError(
              ".quizservice.SubmitQuizRequest.responses: object expected"
            );
          message.responses[
            i
          ] = $root.quizservice.SubmitQuizRequest.Answer.fromObject(
            object.responses[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a SubmitQuizRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.SubmitQuizRequest
     * @static
     * @param {quizservice.SubmitQuizRequest} message SubmitQuizRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SubmitQuizRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.responses = [];
      if (options.defaults) object.id = 0;
      if (message.id != null && message.hasOwnProperty("id"))
        object.id = message.id;
      if (message.responses && message.responses.length) {
        object.responses = [];
        for (var j = 0; j < message.responses.length; ++j)
          object.responses[
            j
          ] = $root.quizservice.SubmitQuizRequest.Answer.toObject(
            message.responses[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this SubmitQuizRequest to JSON.
     * @function toJSON
     * @memberof quizservice.SubmitQuizRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SubmitQuizRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    SubmitQuizRequest.Answer = (function () {
      /**
       * Properties of an Answer.
       * @memberof quizservice.SubmitQuizRequest
       * @interface IAnswer
       * @property {number|null} [questionId] Answer questionId
       * @property {string|null} [response] Answer response
       */

      /**
       * Constructs a new Answer.
       * @memberof quizservice.SubmitQuizRequest
       * @classdesc Represents an Answer.
       * @implements IAnswer
       * @constructor
       * @param {quizservice.SubmitQuizRequest.IAnswer=} [properties] Properties to set
       */
      function Answer(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Answer questionId.
       * @member {number} questionId
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @instance
       */
      Answer.prototype.questionId = 0;

      /**
       * Answer response.
       * @member {string} response
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @instance
       */
      Answer.prototype.response = "";

      /**
       * Creates a new Answer instance using the specified properties.
       * @function create
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {quizservice.SubmitQuizRequest.IAnswer=} [properties] Properties to set
       * @returns {quizservice.SubmitQuizRequest.Answer} Answer instance
       */
      Answer.create = function create(properties) {
        return new Answer(properties);
      };

      /**
       * Encodes the specified Answer message. Does not implicitly {@link quizservice.SubmitQuizRequest.Answer.verify|verify} messages.
       * @function encode
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {quizservice.SubmitQuizRequest.IAnswer} message Answer message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Answer.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.questionId != null &&
          Object.hasOwnProperty.call(message, "questionId")
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.questionId);
        if (
          message.response != null &&
          Object.hasOwnProperty.call(message, "response")
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.response);
        return writer;
      };

      /**
       * Encodes the specified Answer message, length delimited. Does not implicitly {@link quizservice.SubmitQuizRequest.Answer.verify|verify} messages.
       * @function encodeDelimited
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {quizservice.SubmitQuizRequest.IAnswer} message Answer message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Answer.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Answer message from the specified reader or buffer.
       * @function decode
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {quizservice.SubmitQuizRequest.Answer} Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Answer.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.quizservice.SubmitQuizRequest.Answer();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.questionId = reader.uint32();
              break;
            case 2:
              message.response = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Answer message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {quizservice.SubmitQuizRequest.Answer} Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Answer.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Answer message.
       * @function verify
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Answer.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.questionId != null && message.hasOwnProperty("questionId"))
          if (!$util.isInteger(message.questionId))
            return "questionId: integer expected";
        if (message.response != null && message.hasOwnProperty("response"))
          if (!$util.isString(message.response))
            return "response: string expected";
        return null;
      };

      /**
       * Creates an Answer message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {quizservice.SubmitQuizRequest.Answer} Answer
       */
      Answer.fromObject = function fromObject(object) {
        if (object instanceof $root.quizservice.SubmitQuizRequest.Answer)
          return object;
        var message = new $root.quizservice.SubmitQuizRequest.Answer();
        if (object.questionId != null)
          message.questionId = object.questionId >>> 0;
        if (object.response != null) message.response = String(object.response);
        return message;
      };

      /**
       * Creates a plain object from an Answer message. Also converts values to other types if specified.
       * @function toObject
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @static
       * @param {quizservice.SubmitQuizRequest.Answer} message Answer
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Answer.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.questionId = 0;
          object.response = "";
        }
        if (message.questionId != null && message.hasOwnProperty("questionId"))
          object.questionId = message.questionId;
        if (message.response != null && message.hasOwnProperty("response"))
          object.response = message.response;
        return object;
      };

      /**
       * Converts this Answer to JSON.
       * @function toJSON
       * @memberof quizservice.SubmitQuizRequest.Answer
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Answer.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Answer;
    })();

    return SubmitQuizRequest;
  })();

  quizservice.SubmitQuizResponse = (function () {
    /**
     * Properties of a SubmitQuizResponse.
     * @memberof quizservice
     * @interface ISubmitQuizResponse
     */

    /**
     * Constructs a new SubmitQuizResponse.
     * @memberof quizservice
     * @classdesc Represents a SubmitQuizResponse.
     * @implements ISubmitQuizResponse
     * @constructor
     * @param {quizservice.ISubmitQuizResponse=} [properties] Properties to set
     */
    function SubmitQuizResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new SubmitQuizResponse instance using the specified properties.
     * @function create
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {quizservice.ISubmitQuizResponse=} [properties] Properties to set
     * @returns {quizservice.SubmitQuizResponse} SubmitQuizResponse instance
     */
    SubmitQuizResponse.create = function create(properties) {
      return new SubmitQuizResponse(properties);
    };

    /**
     * Encodes the specified SubmitQuizResponse message. Does not implicitly {@link quizservice.SubmitQuizResponse.verify|verify} messages.
     * @function encode
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {quizservice.ISubmitQuizResponse} message SubmitQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitQuizResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified SubmitQuizResponse message, length delimited. Does not implicitly {@link quizservice.SubmitQuizResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {quizservice.ISubmitQuizResponse} message SubmitQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SubmitQuizResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SubmitQuizResponse message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.SubmitQuizResponse} SubmitQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitQuizResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.SubmitQuizResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a SubmitQuizResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.SubmitQuizResponse} SubmitQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SubmitQuizResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SubmitQuizResponse message.
     * @function verify
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SubmitQuizResponse.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a SubmitQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.SubmitQuizResponse} SubmitQuizResponse
     */
    SubmitQuizResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.SubmitQuizResponse) return object;
      return new $root.quizservice.SubmitQuizResponse();
    };

    /**
     * Creates a plain object from a SubmitQuizResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.SubmitQuizResponse
     * @static
     * @param {quizservice.SubmitQuizResponse} message SubmitQuizResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SubmitQuizResponse.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this SubmitQuizResponse to JSON.
     * @function toJSON
     * @memberof quizservice.SubmitQuizResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SubmitQuizResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return SubmitQuizResponse;
  })();

  quizservice.AdminCreateQuizRequest = (function () {
    /**
     * Properties of an AdminCreateQuizRequest.
     * @memberof quizservice
     * @interface IAdminCreateQuizRequest
     * @property {string|null} [name] AdminCreateQuizRequest name
     */

    /**
     * Constructs a new AdminCreateQuizRequest.
     * @memberof quizservice
     * @classdesc Represents an AdminCreateQuizRequest.
     * @implements IAdminCreateQuizRequest
     * @constructor
     * @param {quizservice.IAdminCreateQuizRequest=} [properties] Properties to set
     */
    function AdminCreateQuizRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdminCreateQuizRequest name.
     * @member {string} name
     * @memberof quizservice.AdminCreateQuizRequest
     * @instance
     */
    AdminCreateQuizRequest.prototype.name = "";

    /**
     * Creates a new AdminCreateQuizRequest instance using the specified properties.
     * @function create
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {quizservice.IAdminCreateQuizRequest=} [properties] Properties to set
     * @returns {quizservice.AdminCreateQuizRequest} AdminCreateQuizRequest instance
     */
    AdminCreateQuizRequest.create = function create(properties) {
      return new AdminCreateQuizRequest(properties);
    };

    /**
     * Encodes the specified AdminCreateQuizRequest message. Does not implicitly {@link quizservice.AdminCreateQuizRequest.verify|verify} messages.
     * @function encode
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {quizservice.IAdminCreateQuizRequest} message AdminCreateQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminCreateQuizRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.name != null && Object.hasOwnProperty.call(message, "name"))
        writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.name);
      return writer;
    };

    /**
     * Encodes the specified AdminCreateQuizRequest message, length delimited. Does not implicitly {@link quizservice.AdminCreateQuizRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {quizservice.IAdminCreateQuizRequest} message AdminCreateQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminCreateQuizRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdminCreateQuizRequest message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.AdminCreateQuizRequest} AdminCreateQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminCreateQuizRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.AdminCreateQuizRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an AdminCreateQuizRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.AdminCreateQuizRequest} AdminCreateQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminCreateQuizRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdminCreateQuizRequest message.
     * @function verify
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdminCreateQuizRequest.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.name != null && message.hasOwnProperty("name"))
        if (!$util.isString(message.name)) return "name: string expected";
      return null;
    };

    /**
     * Creates an AdminCreateQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.AdminCreateQuizRequest} AdminCreateQuizRequest
     */
    AdminCreateQuizRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.AdminCreateQuizRequest)
        return object;
      var message = new $root.quizservice.AdminCreateQuizRequest();
      if (object.name != null) message.name = String(object.name);
      return message;
    };

    /**
     * Creates a plain object from an AdminCreateQuizRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.AdminCreateQuizRequest
     * @static
     * @param {quizservice.AdminCreateQuizRequest} message AdminCreateQuizRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdminCreateQuizRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.name = "";
      if (message.name != null && message.hasOwnProperty("name"))
        object.name = message.name;
      return object;
    };

    /**
     * Converts this AdminCreateQuizRequest to JSON.
     * @function toJSON
     * @memberof quizservice.AdminCreateQuizRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdminCreateQuizRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdminCreateQuizRequest;
  })();

  quizservice.AdminCreateQuizResponse = (function () {
    /**
     * Properties of an AdminCreateQuizResponse.
     * @memberof quizservice
     * @interface IAdminCreateQuizResponse
     * @property {number|null} [id] AdminCreateQuizResponse id
     */

    /**
     * Constructs a new AdminCreateQuizResponse.
     * @memberof quizservice
     * @classdesc Represents an AdminCreateQuizResponse.
     * @implements IAdminCreateQuizResponse
     * @constructor
     * @param {quizservice.IAdminCreateQuizResponse=} [properties] Properties to set
     */
    function AdminCreateQuizResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdminCreateQuizResponse id.
     * @member {number} id
     * @memberof quizservice.AdminCreateQuizResponse
     * @instance
     */
    AdminCreateQuizResponse.prototype.id = 0;

    /**
     * Creates a new AdminCreateQuizResponse instance using the specified properties.
     * @function create
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {quizservice.IAdminCreateQuizResponse=} [properties] Properties to set
     * @returns {quizservice.AdminCreateQuizResponse} AdminCreateQuizResponse instance
     */
    AdminCreateQuizResponse.create = function create(properties) {
      return new AdminCreateQuizResponse(properties);
    };

    /**
     * Encodes the specified AdminCreateQuizResponse message. Does not implicitly {@link quizservice.AdminCreateQuizResponse.verify|verify} messages.
     * @function encode
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {quizservice.IAdminCreateQuizResponse} message AdminCreateQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminCreateQuizResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.id);
      return writer;
    };

    /**
     * Encodes the specified AdminCreateQuizResponse message, length delimited. Does not implicitly {@link quizservice.AdminCreateQuizResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {quizservice.IAdminCreateQuizResponse} message AdminCreateQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminCreateQuizResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdminCreateQuizResponse message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.AdminCreateQuizResponse} AdminCreateQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminCreateQuizResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.AdminCreateQuizResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.uint32();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an AdminCreateQuizResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.AdminCreateQuizResponse} AdminCreateQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminCreateQuizResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdminCreateQuizResponse message.
     * @function verify
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdminCreateQuizResponse.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id"))
        if (!$util.isInteger(message.id)) return "id: integer expected";
      return null;
    };

    /**
     * Creates an AdminCreateQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.AdminCreateQuizResponse} AdminCreateQuizResponse
     */
    AdminCreateQuizResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.AdminCreateQuizResponse)
        return object;
      var message = new $root.quizservice.AdminCreateQuizResponse();
      if (object.id != null) message.id = object.id >>> 0;
      return message;
    };

    /**
     * Creates a plain object from an AdminCreateQuizResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.AdminCreateQuizResponse
     * @static
     * @param {quizservice.AdminCreateQuizResponse} message AdminCreateQuizResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdminCreateQuizResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.id = 0;
      if (message.id != null && message.hasOwnProperty("id"))
        object.id = message.id;
      return object;
    };

    /**
     * Converts this AdminCreateQuizResponse to JSON.
     * @function toJSON
     * @memberof quizservice.AdminCreateQuizResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdminCreateQuizResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdminCreateQuizResponse;
  })();

  quizservice.AdminAddQuestionToQuizRequest = (function () {
    /**
     * Properties of an AdminAddQuestionToQuizRequest.
     * @memberof quizservice
     * @interface IAdminAddQuestionToQuizRequest
     * @property {number|null} [quizId] AdminAddQuestionToQuizRequest quizId
     * @property {string|null} [text] AdminAddQuestionToQuizRequest text
     */

    /**
     * Constructs a new AdminAddQuestionToQuizRequest.
     * @memberof quizservice
     * @classdesc Represents an AdminAddQuestionToQuizRequest.
     * @implements IAdminAddQuestionToQuizRequest
     * @constructor
     * @param {quizservice.IAdminAddQuestionToQuizRequest=} [properties] Properties to set
     */
    function AdminAddQuestionToQuizRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdminAddQuestionToQuizRequest quizId.
     * @member {number} quizId
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @instance
     */
    AdminAddQuestionToQuizRequest.prototype.quizId = 0;

    /**
     * AdminAddQuestionToQuizRequest text.
     * @member {string} text
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @instance
     */
    AdminAddQuestionToQuizRequest.prototype.text = "";

    /**
     * Creates a new AdminAddQuestionToQuizRequest instance using the specified properties.
     * @function create
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizRequest=} [properties] Properties to set
     * @returns {quizservice.AdminAddQuestionToQuizRequest} AdminAddQuestionToQuizRequest instance
     */
    AdminAddQuestionToQuizRequest.create = function create(properties) {
      return new AdminAddQuestionToQuizRequest(properties);
    };

    /**
     * Encodes the specified AdminAddQuestionToQuizRequest message. Does not implicitly {@link quizservice.AdminAddQuestionToQuizRequest.verify|verify} messages.
     * @function encode
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizRequest} message AdminAddQuestionToQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminAddQuestionToQuizRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.quizId != null &&
        Object.hasOwnProperty.call(message, "quizId")
      )
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.quizId);
      if (message.text != null && Object.hasOwnProperty.call(message, "text"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.text);
      return writer;
    };

    /**
     * Encodes the specified AdminAddQuestionToQuizRequest message, length delimited. Does not implicitly {@link quizservice.AdminAddQuestionToQuizRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizRequest} message AdminAddQuestionToQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminAddQuestionToQuizRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdminAddQuestionToQuizRequest message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.AdminAddQuestionToQuizRequest} AdminAddQuestionToQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminAddQuestionToQuizRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.AdminAddQuestionToQuizRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.quizId = reader.uint32();
            break;
          case 2:
            message.text = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an AdminAddQuestionToQuizRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.AdminAddQuestionToQuizRequest} AdminAddQuestionToQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminAddQuestionToQuizRequest.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdminAddQuestionToQuizRequest message.
     * @function verify
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdminAddQuestionToQuizRequest.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.quizId != null && message.hasOwnProperty("quizId"))
        if (!$util.isInteger(message.quizId)) return "quizId: integer expected";
      if (message.text != null && message.hasOwnProperty("text"))
        if (!$util.isString(message.text)) return "text: string expected";
      return null;
    };

    /**
     * Creates an AdminAddQuestionToQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.AdminAddQuestionToQuizRequest} AdminAddQuestionToQuizRequest
     */
    AdminAddQuestionToQuizRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.AdminAddQuestionToQuizRequest)
        return object;
      var message = new $root.quizservice.AdminAddQuestionToQuizRequest();
      if (object.quizId != null) message.quizId = object.quizId >>> 0;
      if (object.text != null) message.text = String(object.text);
      return message;
    };

    /**
     * Creates a plain object from an AdminAddQuestionToQuizRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @static
     * @param {quizservice.AdminAddQuestionToQuizRequest} message AdminAddQuestionToQuizRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdminAddQuestionToQuizRequest.toObject = function toObject(
      message,
      options
    ) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        object.quizId = 0;
        object.text = "";
      }
      if (message.quizId != null && message.hasOwnProperty("quizId"))
        object.quizId = message.quizId;
      if (message.text != null && message.hasOwnProperty("text"))
        object.text = message.text;
      return object;
    };

    /**
     * Converts this AdminAddQuestionToQuizRequest to JSON.
     * @function toJSON
     * @memberof quizservice.AdminAddQuestionToQuizRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdminAddQuestionToQuizRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdminAddQuestionToQuizRequest;
  })();

  quizservice.AdminAddQuestionToQuizResponse = (function () {
    /**
     * Properties of an AdminAddQuestionToQuizResponse.
     * @memberof quizservice
     * @interface IAdminAddQuestionToQuizResponse
     * @property {quizservice.IQuestion|null} [result] AdminAddQuestionToQuizResponse result
     */

    /**
     * Constructs a new AdminAddQuestionToQuizResponse.
     * @memberof quizservice
     * @classdesc Represents an AdminAddQuestionToQuizResponse.
     * @implements IAdminAddQuestionToQuizResponse
     * @constructor
     * @param {quizservice.IAdminAddQuestionToQuizResponse=} [properties] Properties to set
     */
    function AdminAddQuestionToQuizResponse(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * AdminAddQuestionToQuizResponse result.
     * @member {quizservice.IQuestion|null|undefined} result
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @instance
     */
    AdminAddQuestionToQuizResponse.prototype.result = null;

    /**
     * Creates a new AdminAddQuestionToQuizResponse instance using the specified properties.
     * @function create
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizResponse=} [properties] Properties to set
     * @returns {quizservice.AdminAddQuestionToQuizResponse} AdminAddQuestionToQuizResponse instance
     */
    AdminAddQuestionToQuizResponse.create = function create(properties) {
      return new AdminAddQuestionToQuizResponse(properties);
    };

    /**
     * Encodes the specified AdminAddQuestionToQuizResponse message. Does not implicitly {@link quizservice.AdminAddQuestionToQuizResponse.verify|verify} messages.
     * @function encode
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizResponse} message AdminAddQuestionToQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminAddQuestionToQuizResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (
        message.result != null &&
        Object.hasOwnProperty.call(message, "result")
      )
        $root.quizservice.Question.encode(
          message.result,
          writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
        ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified AdminAddQuestionToQuizResponse message, length delimited. Does not implicitly {@link quizservice.AdminAddQuestionToQuizResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {quizservice.IAdminAddQuestionToQuizResponse} message AdminAddQuestionToQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminAddQuestionToQuizResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AdminAddQuestionToQuizResponse message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.AdminAddQuestionToQuizResponse} AdminAddQuestionToQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminAddQuestionToQuizResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.AdminAddQuestionToQuizResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.result = $root.quizservice.Question.decode(
              reader,
              reader.uint32()
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an AdminAddQuestionToQuizResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.AdminAddQuestionToQuizResponse} AdminAddQuestionToQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminAddQuestionToQuizResponse.decodeDelimited = function decodeDelimited(
      reader
    ) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AdminAddQuestionToQuizResponse message.
     * @function verify
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdminAddQuestionToQuizResponse.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.result != null && message.hasOwnProperty("result")) {
        var error = $root.quizservice.Question.verify(message.result);
        if (error) return "result." + error;
      }
      return null;
    };

    /**
     * Creates an AdminAddQuestionToQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.AdminAddQuestionToQuizResponse} AdminAddQuestionToQuizResponse
     */
    AdminAddQuestionToQuizResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.AdminAddQuestionToQuizResponse)
        return object;
      var message = new $root.quizservice.AdminAddQuestionToQuizResponse();
      if (object.result != null) {
        if (typeof object.result !== "object")
          throw TypeError(
            ".quizservice.AdminAddQuestionToQuizResponse.result: object expected"
          );
        message.result = $root.quizservice.Question.fromObject(object.result);
      }
      return message;
    };

    /**
     * Creates a plain object from an AdminAddQuestionToQuizResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @static
     * @param {quizservice.AdminAddQuestionToQuizResponse} message AdminAddQuestionToQuizResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdminAddQuestionToQuizResponse.toObject = function toObject(
      message,
      options
    ) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) object.result = null;
      if (message.result != null && message.hasOwnProperty("result"))
        object.result = $root.quizservice.Question.toObject(
          message.result,
          options
        );
      return object;
    };

    /**
     * Converts this AdminAddQuestionToQuizResponse to JSON.
     * @function toJSON
     * @memberof quizservice.AdminAddQuestionToQuizResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdminAddQuestionToQuizResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AdminAddQuestionToQuizResponse;
  })();

  quizservice.ListQuizesRequest = (function () {
    /**
     * Properties of a ListQuizesRequest.
     * @memberof quizservice
     * @interface IListQuizesRequest
     */

    /**
     * Constructs a new ListQuizesRequest.
     * @memberof quizservice
     * @classdesc Represents a ListQuizesRequest.
     * @implements IListQuizesRequest
     * @constructor
     * @param {quizservice.IListQuizesRequest=} [properties] Properties to set
     */
    function ListQuizesRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ListQuizesRequest instance using the specified properties.
     * @function create
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {quizservice.IListQuizesRequest=} [properties] Properties to set
     * @returns {quizservice.ListQuizesRequest} ListQuizesRequest instance
     */
    ListQuizesRequest.create = function create(properties) {
      return new ListQuizesRequest(properties);
    };

    /**
     * Encodes the specified ListQuizesRequest message. Does not implicitly {@link quizservice.ListQuizesRequest.verify|verify} messages.
     * @function encode
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {quizservice.IListQuizesRequest} message ListQuizesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListQuizesRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      return writer;
    };

    /**
     * Encodes the specified ListQuizesRequest message, length delimited. Does not implicitly {@link quizservice.ListQuizesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {quizservice.IListQuizesRequest} message ListQuizesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListQuizesRequest.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListQuizesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.ListQuizesRequest} ListQuizesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListQuizesRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.ListQuizesRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ListQuizesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.ListQuizesRequest} ListQuizesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListQuizesRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListQuizesRequest message.
     * @function verify
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListQuizesRequest.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      return null;
    };

    /**
     * Creates a ListQuizesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.ListQuizesRequest} ListQuizesRequest
     */
    ListQuizesRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.ListQuizesRequest) return object;
      return new $root.quizservice.ListQuizesRequest();
    };

    /**
     * Creates a plain object from a ListQuizesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.ListQuizesRequest
     * @static
     * @param {quizservice.ListQuizesRequest} message ListQuizesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListQuizesRequest.toObject = function toObject() {
      return {};
    };

    /**
     * Converts this ListQuizesRequest to JSON.
     * @function toJSON
     * @memberof quizservice.ListQuizesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListQuizesRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ListQuizesRequest;
  })();

  quizservice.ListQuizesResponse = (function () {
    /**
     * Properties of a ListQuizesResponse.
     * @memberof quizservice
     * @interface IListQuizesResponse
     * @property {Array.<quizservice.ListQuizesResponse.IEntry>|null} [quizes] ListQuizesResponse quizes
     */

    /**
     * Constructs a new ListQuizesResponse.
     * @memberof quizservice
     * @classdesc Represents a ListQuizesResponse.
     * @implements IListQuizesResponse
     * @constructor
     * @param {quizservice.IListQuizesResponse=} [properties] Properties to set
     */
    function ListQuizesResponse(properties) {
      this.quizes = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * ListQuizesResponse quizes.
     * @member {Array.<quizservice.ListQuizesResponse.IEntry>} quizes
     * @memberof quizservice.ListQuizesResponse
     * @instance
     */
    ListQuizesResponse.prototype.quizes = $util.emptyArray;

    /**
     * Creates a new ListQuizesResponse instance using the specified properties.
     * @function create
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {quizservice.IListQuizesResponse=} [properties] Properties to set
     * @returns {quizservice.ListQuizesResponse} ListQuizesResponse instance
     */
    ListQuizesResponse.create = function create(properties) {
      return new ListQuizesResponse(properties);
    };

    /**
     * Encodes the specified ListQuizesResponse message. Does not implicitly {@link quizservice.ListQuizesResponse.verify|verify} messages.
     * @function encode
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {quizservice.IListQuizesResponse} message ListQuizesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListQuizesResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.quizes != null && message.quizes.length)
        for (var i = 0; i < message.quizes.length; ++i)
          $root.quizservice.ListQuizesResponse.Entry.encode(
            message.quizes[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified ListQuizesResponse message, length delimited. Does not implicitly {@link quizservice.ListQuizesResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {quizservice.IListQuizesResponse} message ListQuizesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ListQuizesResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ListQuizesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.ListQuizesResponse} ListQuizesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListQuizesResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.ListQuizesResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.quizes && message.quizes.length)) message.quizes = [];
            message.quizes.push(
              $root.quizservice.ListQuizesResponse.Entry.decode(
                reader,
                reader.uint32()
              )
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a ListQuizesResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.ListQuizesResponse} ListQuizesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ListQuizesResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ListQuizesResponse message.
     * @function verify
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ListQuizesResponse.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.quizes != null && message.hasOwnProperty("quizes")) {
        if (!Array.isArray(message.quizes)) return "quizes: array expected";
        for (var i = 0; i < message.quizes.length; ++i) {
          var error = $root.quizservice.ListQuizesResponse.Entry.verify(
            message.quizes[i]
          );
          if (error) return "quizes." + error;
        }
      }
      return null;
    };

    /**
     * Creates a ListQuizesResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.ListQuizesResponse} ListQuizesResponse
     */
    ListQuizesResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.ListQuizesResponse) return object;
      var message = new $root.quizservice.ListQuizesResponse();
      if (object.quizes) {
        if (!Array.isArray(object.quizes))
          throw TypeError(
            ".quizservice.ListQuizesResponse.quizes: array expected"
          );
        message.quizes = [];
        for (var i = 0; i < object.quizes.length; ++i) {
          if (typeof object.quizes[i] !== "object")
            throw TypeError(
              ".quizservice.ListQuizesResponse.quizes: object expected"
            );
          message.quizes[
            i
          ] = $root.quizservice.ListQuizesResponse.Entry.fromObject(
            object.quizes[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a ListQuizesResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.ListQuizesResponse
     * @static
     * @param {quizservice.ListQuizesResponse} message ListQuizesResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ListQuizesResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.quizes = [];
      if (message.quizes && message.quizes.length) {
        object.quizes = [];
        for (var j = 0; j < message.quizes.length; ++j)
          object.quizes[
            j
          ] = $root.quizservice.ListQuizesResponse.Entry.toObject(
            message.quizes[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this ListQuizesResponse to JSON.
     * @function toJSON
     * @memberof quizservice.ListQuizesResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ListQuizesResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ListQuizesResponse.Entry = (function () {
      /**
       * Properties of an Entry.
       * @memberof quizservice.ListQuizesResponse
       * @interface IEntry
       * @property {number|null} [id] Entry id
       * @property {string|null} [name] Entry name
       */

      /**
       * Constructs a new Entry.
       * @memberof quizservice.ListQuizesResponse
       * @classdesc Represents an Entry.
       * @implements IEntry
       * @constructor
       * @param {quizservice.ListQuizesResponse.IEntry=} [properties] Properties to set
       */
      function Entry(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Entry id.
       * @member {number} id
       * @memberof quizservice.ListQuizesResponse.Entry
       * @instance
       */
      Entry.prototype.id = 0;

      /**
       * Entry name.
       * @member {string} name
       * @memberof quizservice.ListQuizesResponse.Entry
       * @instance
       */
      Entry.prototype.name = "";

      /**
       * Creates a new Entry instance using the specified properties.
       * @function create
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {quizservice.ListQuizesResponse.IEntry=} [properties] Properties to set
       * @returns {quizservice.ListQuizesResponse.Entry} Entry instance
       */
      Entry.create = function create(properties) {
        return new Entry(properties);
      };

      /**
       * Encodes the specified Entry message. Does not implicitly {@link quizservice.ListQuizesResponse.Entry.verify|verify} messages.
       * @function encode
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {quizservice.ListQuizesResponse.IEntry} message Entry message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Entry.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
        return writer;
      };

      /**
       * Encodes the specified Entry message, length delimited. Does not implicitly {@link quizservice.ListQuizesResponse.Entry.verify|verify} messages.
       * @function encodeDelimited
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {quizservice.ListQuizesResponse.IEntry} message Entry message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Entry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an Entry message from the specified reader or buffer.
       * @function decode
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {quizservice.ListQuizesResponse.Entry} Entry
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Entry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.quizservice.ListQuizesResponse.Entry();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              message.id = reader.uint32();
              break;
            case 2:
              message.name = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an Entry message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {quizservice.ListQuizesResponse.Entry} Entry
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Entry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an Entry message.
       * @function verify
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Entry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
          return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
          if (!$util.isInteger(message.id)) return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
          if (!$util.isString(message.name)) return "name: string expected";
        return null;
      };

      /**
       * Creates an Entry message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {quizservice.ListQuizesResponse.Entry} Entry
       */
      Entry.fromObject = function fromObject(object) {
        if (object instanceof $root.quizservice.ListQuizesResponse.Entry)
          return object;
        var message = new $root.quizservice.ListQuizesResponse.Entry();
        if (object.id != null) message.id = object.id >>> 0;
        if (object.name != null) message.name = String(object.name);
        return message;
      };

      /**
       * Creates a plain object from an Entry message. Also converts values to other types if specified.
       * @function toObject
       * @memberof quizservice.ListQuizesResponse.Entry
       * @static
       * @param {quizservice.ListQuizesResponse.Entry} message Entry
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Entry.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.id = 0;
          object.name = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
          object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
          object.name = message.name;
        return object;
      };

      /**
       * Converts this Entry to JSON.
       * @function toJSON
       * @memberof quizservice.ListQuizesResponse.Entry
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Entry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      return Entry;
    })();

    return ListQuizesResponse;
  })();

  quizservice.GetQuizRequest = (function () {
    /**
     * Properties of a GetQuizRequest.
     * @memberof quizservice
     * @interface IGetQuizRequest
     * @property {number|Long|null} [id] GetQuizRequest id
     */

    /**
     * Constructs a new GetQuizRequest.
     * @memberof quizservice
     * @classdesc Represents a GetQuizRequest.
     * @implements IGetQuizRequest
     * @constructor
     * @param {quizservice.IGetQuizRequest=} [properties] Properties to set
     */
    function GetQuizRequest(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetQuizRequest id.
     * @member {number|Long} id
     * @memberof quizservice.GetQuizRequest
     * @instance
     */
    GetQuizRequest.prototype.id = $util.Long
      ? $util.Long.fromBits(0, 0, true)
      : 0;

    /**
     * Creates a new GetQuizRequest instance using the specified properties.
     * @function create
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {quizservice.IGetQuizRequest=} [properties] Properties to set
     * @returns {quizservice.GetQuizRequest} GetQuizRequest instance
     */
    GetQuizRequest.create = function create(properties) {
      return new GetQuizRequest(properties);
    };

    /**
     * Encodes the specified GetQuizRequest message. Does not implicitly {@link quizservice.GetQuizRequest.verify|verify} messages.
     * @function encode
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {quizservice.IGetQuizRequest} message GetQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetQuizRequest.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
      return writer;
    };

    /**
     * Encodes the specified GetQuizRequest message, length delimited. Does not implicitly {@link quizservice.GetQuizRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {quizservice.IGetQuizRequest} message GetQuizRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetQuizRequest.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetQuizRequest message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.GetQuizRequest} GetQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetQuizRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.GetQuizRequest();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.uint64();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetQuizRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.GetQuizRequest} GetQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetQuizRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetQuizRequest message.
     * @function verify
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetQuizRequest.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id"))
        if (
          !$util.isInteger(message.id) &&
          !(
            message.id &&
            $util.isInteger(message.id.low) &&
            $util.isInteger(message.id.high)
          )
        )
          return "id: integer|Long expected";
      return null;
    };

    /**
     * Creates a GetQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.GetQuizRequest} GetQuizRequest
     */
    GetQuizRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.GetQuizRequest) return object;
      var message = new $root.quizservice.GetQuizRequest();
      if (object.id != null)
        if ($util.Long)
          (message.id = $util.Long.fromValue(object.id)).unsigned = true;
        else if (typeof object.id === "string")
          message.id = parseInt(object.id, 10);
        else if (typeof object.id === "number") message.id = object.id;
        else if (typeof object.id === "object")
          message.id = new $util.LongBits(
            object.id.low >>> 0,
            object.id.high >>> 0
          ).toNumber(true);
      return message;
    };

    /**
     * Creates a plain object from a GetQuizRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.GetQuizRequest
     * @static
     * @param {quizservice.GetQuizRequest} message GetQuizRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetQuizRequest.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults)
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.id =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.id = options.longs === String ? "0" : 0;
      if (message.id != null && message.hasOwnProperty("id"))
        if (typeof message.id === "number")
          object.id =
            options.longs === String ? String(message.id) : message.id;
        else
          object.id =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.id)
              : options.longs === Number
              ? new $util.LongBits(
                  message.id.low >>> 0,
                  message.id.high >>> 0
                ).toNumber(true)
              : message.id;
      return object;
    };

    /**
     * Converts this GetQuizRequest to JSON.
     * @function toJSON
     * @memberof quizservice.GetQuizRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetQuizRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetQuizRequest;
  })();

  quizservice.GetQuizResponse = (function () {
    /**
     * Properties of a GetQuizResponse.
     * @memberof quizservice
     * @interface IGetQuizResponse
     * @property {Array.<quizservice.IQuestion>|null} [questions] GetQuizResponse questions
     */

    /**
     * Constructs a new GetQuizResponse.
     * @memberof quizservice
     * @classdesc Represents a GetQuizResponse.
     * @implements IGetQuizResponse
     * @constructor
     * @param {quizservice.IGetQuizResponse=} [properties] Properties to set
     */
    function GetQuizResponse(properties) {
      this.questions = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetQuizResponse questions.
     * @member {Array.<quizservice.IQuestion>} questions
     * @memberof quizservice.GetQuizResponse
     * @instance
     */
    GetQuizResponse.prototype.questions = $util.emptyArray;

    /**
     * Creates a new GetQuizResponse instance using the specified properties.
     * @function create
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {quizservice.IGetQuizResponse=} [properties] Properties to set
     * @returns {quizservice.GetQuizResponse} GetQuizResponse instance
     */
    GetQuizResponse.create = function create(properties) {
      return new GetQuizResponse(properties);
    };

    /**
     * Encodes the specified GetQuizResponse message. Does not implicitly {@link quizservice.GetQuizResponse.verify|verify} messages.
     * @function encode
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {quizservice.IGetQuizResponse} message GetQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetQuizResponse.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.questions != null && message.questions.length)
        for (var i = 0; i < message.questions.length; ++i)
          $root.quizservice.Question.encode(
            message.questions[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified GetQuizResponse message, length delimited. Does not implicitly {@link quizservice.GetQuizResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {quizservice.IGetQuizResponse} message GetQuizResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetQuizResponse.encodeDelimited = function encodeDelimited(
      message,
      writer
    ) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetQuizResponse message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.GetQuizResponse} GetQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetQuizResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.GetQuizResponse();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            if (!(message.questions && message.questions.length))
              message.questions = [];
            message.questions.push(
              $root.quizservice.Question.decode(reader, reader.uint32())
            );
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a GetQuizResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.GetQuizResponse} GetQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetQuizResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetQuizResponse message.
     * @function verify
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetQuizResponse.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.questions != null && message.hasOwnProperty("questions")) {
        if (!Array.isArray(message.questions))
          return "questions: array expected";
        for (var i = 0; i < message.questions.length; ++i) {
          var error = $root.quizservice.Question.verify(message.questions[i]);
          if (error) return "questions." + error;
        }
      }
      return null;
    };

    /**
     * Creates a GetQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.GetQuizResponse} GetQuizResponse
     */
    GetQuizResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.GetQuizResponse) return object;
      var message = new $root.quizservice.GetQuizResponse();
      if (object.questions) {
        if (!Array.isArray(object.questions))
          throw TypeError(
            ".quizservice.GetQuizResponse.questions: array expected"
          );
        message.questions = [];
        for (var i = 0; i < object.questions.length; ++i) {
          if (typeof object.questions[i] !== "object")
            throw TypeError(
              ".quizservice.GetQuizResponse.questions: object expected"
            );
          message.questions[i] = $root.quizservice.Question.fromObject(
            object.questions[i]
          );
        }
      }
      return message;
    };

    /**
     * Creates a plain object from a GetQuizResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.GetQuizResponse
     * @static
     * @param {quizservice.GetQuizResponse} message GetQuizResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetQuizResponse.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.questions = [];
      if (message.questions && message.questions.length) {
        object.questions = [];
        for (var j = 0; j < message.questions.length; ++j)
          object.questions[j] = $root.quizservice.Question.toObject(
            message.questions[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this GetQuizResponse to JSON.
     * @function toJSON
     * @memberof quizservice.GetQuizResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetQuizResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GetQuizResponse;
  })();

  quizservice.Question = (function () {
    /**
     * Properties of a Question.
     * @memberof quizservice
     * @interface IQuestion
     * @property {number|Long|null} [id] Question id
     * @property {string|null} [text] Question text
     */

    /**
     * Constructs a new Question.
     * @memberof quizservice
     * @classdesc Represents a Question.
     * @implements IQuestion
     * @constructor
     * @param {quizservice.IQuestion=} [properties] Properties to set
     */
    function Question(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * Question id.
     * @member {number|Long} id
     * @memberof quizservice.Question
     * @instance
     */
    Question.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;

    /**
     * Question text.
     * @member {string} text
     * @memberof quizservice.Question
     * @instance
     */
    Question.prototype.text = "";

    /**
     * Creates a new Question instance using the specified properties.
     * @function create
     * @memberof quizservice.Question
     * @static
     * @param {quizservice.IQuestion=} [properties] Properties to set
     * @returns {quizservice.Question} Question instance
     */
    Question.create = function create(properties) {
      return new Question(properties);
    };

    /**
     * Encodes the specified Question message. Does not implicitly {@link quizservice.Question.verify|verify} messages.
     * @function encode
     * @memberof quizservice.Question
     * @static
     * @param {quizservice.IQuestion} message Question message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Question.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.id != null && Object.hasOwnProperty.call(message, "id"))
        writer.uint32(/* id 1, wireType 0 =*/ 8).uint64(message.id);
      if (message.text != null && Object.hasOwnProperty.call(message, "text"))
        writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.text);
      return writer;
    };

    /**
     * Encodes the specified Question message, length delimited. Does not implicitly {@link quizservice.Question.verify|verify} messages.
     * @function encodeDelimited
     * @memberof quizservice.Question
     * @static
     * @param {quizservice.IQuestion} message Question message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Question.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Question message from the specified reader or buffer.
     * @function decode
     * @memberof quizservice.Question
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {quizservice.Question} Question
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Question.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.quizservice.Question();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.id = reader.uint64();
            break;
          case 2:
            message.text = reader.string();
            break;
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes a Question message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof quizservice.Question
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {quizservice.Question} Question
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Question.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Question message.
     * @function verify
     * @memberof quizservice.Question
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Question.verify = function verify(message) {
      if (typeof message !== "object" || message === null)
        return "object expected";
      if (message.id != null && message.hasOwnProperty("id"))
        if (
          !$util.isInteger(message.id) &&
          !(
            message.id &&
            $util.isInteger(message.id.low) &&
            $util.isInteger(message.id.high)
          )
        )
          return "id: integer|Long expected";
      if (message.text != null && message.hasOwnProperty("text"))
        if (!$util.isString(message.text)) return "text: string expected";
      return null;
    };

    /**
     * Creates a Question message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof quizservice.Question
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {quizservice.Question} Question
     */
    Question.fromObject = function fromObject(object) {
      if (object instanceof $root.quizservice.Question) return object;
      var message = new $root.quizservice.Question();
      if (object.id != null)
        if ($util.Long)
          (message.id = $util.Long.fromValue(object.id)).unsigned = true;
        else if (typeof object.id === "string")
          message.id = parseInt(object.id, 10);
        else if (typeof object.id === "number") message.id = object.id;
        else if (typeof object.id === "object")
          message.id = new $util.LongBits(
            object.id.low >>> 0,
            object.id.high >>> 0
          ).toNumber(true);
      if (object.text != null) message.text = String(object.text);
      return message;
    };

    /**
     * Creates a plain object from a Question message. Also converts values to other types if specified.
     * @function toObject
     * @memberof quizservice.Question
     * @static
     * @param {quizservice.Question} message Question
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Question.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, true);
          object.id =
            options.longs === String
              ? long.toString()
              : options.longs === Number
              ? long.toNumber()
              : long;
        } else object.id = options.longs === String ? "0" : 0;
        object.text = "";
      }
      if (message.id != null && message.hasOwnProperty("id"))
        if (typeof message.id === "number")
          object.id =
            options.longs === String ? String(message.id) : message.id;
        else
          object.id =
            options.longs === String
              ? $util.Long.prototype.toString.call(message.id)
              : options.longs === Number
              ? new $util.LongBits(
                  message.id.low >>> 0,
                  message.id.high >>> 0
                ).toNumber(true)
              : message.id;
      if (message.text != null && message.hasOwnProperty("text"))
        object.text = message.text;
      return object;
    };

    /**
     * Converts this Question to JSON.
     * @function toJSON
     * @memberof quizservice.Question
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Question.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Question;
  })();

  return quizservice;
})();

module.exports = $root;
