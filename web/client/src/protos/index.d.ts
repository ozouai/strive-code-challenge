import * as $protobuf from "protobufjs";
/** Namespace quizservice. */
export namespace quizservice {
  /** Represents a QuizService */
  class QuizService extends $protobuf.rpc.Service {
    /**
     * Constructs a new QuizService service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    );

    /**
     * Creates new QuizService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(
      rpcImpl: $protobuf.RPCImpl,
      requestDelimited?: boolean,
      responseDelimited?: boolean
    ): QuizService;

    /**
     * Calls ListQuizes.
     * @param request ListQuizesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ListQuizesResponse
     */
    public listQuizes(
      request: quizservice.IListQuizesRequest,
      callback: quizservice.QuizService.ListQuizesCallback
    ): void;

    /**
     * Calls ListQuizes.
     * @param request ListQuizesRequest message or plain object
     * @returns Promise
     */
    public listQuizes(
      request: quizservice.IListQuizesRequest
    ): Promise<quizservice.ListQuizesResponse>;

    /**
     * Calls GetQuiz.
     * @param request GetQuizRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetQuizResponse
     */
    public getQuiz(
      request: quizservice.IGetQuizRequest,
      callback: quizservice.QuizService.GetQuizCallback
    ): void;

    /**
     * Calls GetQuiz.
     * @param request GetQuizRequest message or plain object
     * @returns Promise
     */
    public getQuiz(
      request: quizservice.IGetQuizRequest
    ): Promise<quizservice.GetQuizResponse>;

    /**
     * Calls SubmitQuiz.
     * @param request SubmitQuizRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SubmitQuizResponse
     */
    public submitQuiz(
      request: quizservice.ISubmitQuizRequest,
      callback: quizservice.QuizService.SubmitQuizCallback
    ): void;

    /**
     * Calls SubmitQuiz.
     * @param request SubmitQuizRequest message or plain object
     * @returns Promise
     */
    public submitQuiz(
      request: quizservice.ISubmitQuizRequest
    ): Promise<quizservice.SubmitQuizResponse>;

    /**
     * Calls AdminCreateQuiz.
     * @param request AdminCreateQuizRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AdminCreateQuizResponse
     */
    public adminCreateQuiz(
      request: quizservice.IAdminCreateQuizRequest,
      callback: quizservice.QuizService.AdminCreateQuizCallback
    ): void;

    /**
     * Calls AdminCreateQuiz.
     * @param request AdminCreateQuizRequest message or plain object
     * @returns Promise
     */
    public adminCreateQuiz(
      request: quizservice.IAdminCreateQuizRequest
    ): Promise<quizservice.AdminCreateQuizResponse>;

    /**
     * Calls AdminAddQuestionToQuiz.
     * @param request AdminAddQuestionToQuizRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and AdminAddQuestionToQuizResponse
     */
    public adminAddQuestionToQuiz(
      request: quizservice.IAdminAddQuestionToQuizRequest,
      callback: quizservice.QuizService.AdminAddQuestionToQuizCallback
    ): void;

    /**
     * Calls AdminAddQuestionToQuiz.
     * @param request AdminAddQuestionToQuizRequest message or plain object
     * @returns Promise
     */
    public adminAddQuestionToQuiz(
      request: quizservice.IAdminAddQuestionToQuizRequest
    ): Promise<quizservice.AdminAddQuestionToQuizResponse>;
  }

  namespace QuizService {
    /**
     * Callback as used by {@link quizservice.QuizService#listQuizes}.
     * @param error Error, if any
     * @param [response] ListQuizesResponse
     */
    type ListQuizesCallback = (
      error: Error | null,
      response?: quizservice.ListQuizesResponse
    ) => void;

    /**
     * Callback as used by {@link quizservice.QuizService#getQuiz}.
     * @param error Error, if any
     * @param [response] GetQuizResponse
     */
    type GetQuizCallback = (
      error: Error | null,
      response?: quizservice.GetQuizResponse
    ) => void;

    /**
     * Callback as used by {@link quizservice.QuizService#submitQuiz}.
     * @param error Error, if any
     * @param [response] SubmitQuizResponse
     */
    type SubmitQuizCallback = (
      error: Error | null,
      response?: quizservice.SubmitQuizResponse
    ) => void;

    /**
     * Callback as used by {@link quizservice.QuizService#adminCreateQuiz}.
     * @param error Error, if any
     * @param [response] AdminCreateQuizResponse
     */
    type AdminCreateQuizCallback = (
      error: Error | null,
      response?: quizservice.AdminCreateQuizResponse
    ) => void;

    /**
     * Callback as used by {@link quizservice.QuizService#adminAddQuestionToQuiz}.
     * @param error Error, if any
     * @param [response] AdminAddQuestionToQuizResponse
     */
    type AdminAddQuestionToQuizCallback = (
      error: Error | null,
      response?: quizservice.AdminAddQuestionToQuizResponse
    ) => void;
  }

  /** Properties of a SubmitQuizRequest. */
  interface ISubmitQuizRequest {
    /** SubmitQuizRequest id */
    id?: number | null;

    /** SubmitQuizRequest responses */
    responses?: quizservice.SubmitQuizRequest.IAnswer[] | null;
  }

  /** Represents a SubmitQuizRequest. */
  class SubmitQuizRequest implements ISubmitQuizRequest {
    /**
     * Constructs a new SubmitQuizRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.ISubmitQuizRequest);

    /** SubmitQuizRequest id. */
    public id: number;

    /** SubmitQuizRequest responses. */
    public responses: quizservice.SubmitQuizRequest.IAnswer[];

    /**
     * Creates a new SubmitQuizRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitQuizRequest instance
     */
    public static create(
      properties?: quizservice.ISubmitQuizRequest
    ): quizservice.SubmitQuizRequest;

    /**
     * Encodes the specified SubmitQuizRequest message. Does not implicitly {@link quizservice.SubmitQuizRequest.verify|verify} messages.
     * @param message SubmitQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.ISubmitQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SubmitQuizRequest message, length delimited. Does not implicitly {@link quizservice.SubmitQuizRequest.verify|verify} messages.
     * @param message SubmitQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.ISubmitQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SubmitQuizRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.SubmitQuizRequest;

    /**
     * Decodes a SubmitQuizRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.SubmitQuizRequest;

    /**
     * Verifies a SubmitQuizRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SubmitQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitQuizRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.SubmitQuizRequest;

    /**
     * Creates a plain object from a SubmitQuizRequest message. Also converts values to other types if specified.
     * @param message SubmitQuizRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.SubmitQuizRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SubmitQuizRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace SubmitQuizRequest {
    /** Properties of an Answer. */
    interface IAnswer {
      /** Answer questionId */
      questionId?: number | null;

      /** Answer response */
      response?: string | null;
    }

    /** Represents an Answer. */
    class Answer implements IAnswer {
      /**
       * Constructs a new Answer.
       * @param [properties] Properties to set
       */
      constructor(properties?: quizservice.SubmitQuizRequest.IAnswer);

      /** Answer questionId. */
      public questionId: number;

      /** Answer response. */
      public response: string;

      /**
       * Creates a new Answer instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Answer instance
       */
      public static create(
        properties?: quizservice.SubmitQuizRequest.IAnswer
      ): quizservice.SubmitQuizRequest.Answer;

      /**
       * Encodes the specified Answer message. Does not implicitly {@link quizservice.SubmitQuizRequest.Answer.verify|verify} messages.
       * @param message Answer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: quizservice.SubmitQuizRequest.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Answer message, length delimited. Does not implicitly {@link quizservice.SubmitQuizRequest.Answer.verify|verify} messages.
       * @param message Answer message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: quizservice.SubmitQuizRequest.IAnswer,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Answer message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): quizservice.SubmitQuizRequest.Answer;

      /**
       * Decodes an Answer message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Answer
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): quizservice.SubmitQuizRequest.Answer;

      /**
       * Verifies an Answer message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an Answer message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Answer
       */
      public static fromObject(object: {
        [k: string]: any;
      }): quizservice.SubmitQuizRequest.Answer;

      /**
       * Creates a plain object from an Answer message. Also converts values to other types if specified.
       * @param message Answer
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: quizservice.SubmitQuizRequest.Answer,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Answer to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a SubmitQuizResponse. */
  interface ISubmitQuizResponse {}

  /** Represents a SubmitQuizResponse. */
  class SubmitQuizResponse implements ISubmitQuizResponse {
    /**
     * Constructs a new SubmitQuizResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.ISubmitQuizResponse);

    /**
     * Creates a new SubmitQuizResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubmitQuizResponse instance
     */
    public static create(
      properties?: quizservice.ISubmitQuizResponse
    ): quizservice.SubmitQuizResponse;

    /**
     * Encodes the specified SubmitQuizResponse message. Does not implicitly {@link quizservice.SubmitQuizResponse.verify|verify} messages.
     * @param message SubmitQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.ISubmitQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SubmitQuizResponse message, length delimited. Does not implicitly {@link quizservice.SubmitQuizResponse.verify|verify} messages.
     * @param message SubmitQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.ISubmitQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SubmitQuizResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubmitQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.SubmitQuizResponse;

    /**
     * Decodes a SubmitQuizResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubmitQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.SubmitQuizResponse;

    /**
     * Verifies a SubmitQuizResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SubmitQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubmitQuizResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.SubmitQuizResponse;

    /**
     * Creates a plain object from a SubmitQuizResponse message. Also converts values to other types if specified.
     * @param message SubmitQuizResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.SubmitQuizResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SubmitQuizResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AdminCreateQuizRequest. */
  interface IAdminCreateQuizRequest {
    /** AdminCreateQuizRequest name */
    name?: string | null;
  }

  /** Represents an AdminCreateQuizRequest. */
  class AdminCreateQuizRequest implements IAdminCreateQuizRequest {
    /**
     * Constructs a new AdminCreateQuizRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IAdminCreateQuizRequest);

    /** AdminCreateQuizRequest name. */
    public name: string;

    /**
     * Creates a new AdminCreateQuizRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdminCreateQuizRequest instance
     */
    public static create(
      properties?: quizservice.IAdminCreateQuizRequest
    ): quizservice.AdminCreateQuizRequest;

    /**
     * Encodes the specified AdminCreateQuizRequest message. Does not implicitly {@link quizservice.AdminCreateQuizRequest.verify|verify} messages.
     * @param message AdminCreateQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IAdminCreateQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AdminCreateQuizRequest message, length delimited. Does not implicitly {@link quizservice.AdminCreateQuizRequest.verify|verify} messages.
     * @param message AdminCreateQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IAdminCreateQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AdminCreateQuizRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdminCreateQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.AdminCreateQuizRequest;

    /**
     * Decodes an AdminCreateQuizRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdminCreateQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.AdminCreateQuizRequest;

    /**
     * Verifies an AdminCreateQuizRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AdminCreateQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdminCreateQuizRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.AdminCreateQuizRequest;

    /**
     * Creates a plain object from an AdminCreateQuizRequest message. Also converts values to other types if specified.
     * @param message AdminCreateQuizRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.AdminCreateQuizRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AdminCreateQuizRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AdminCreateQuizResponse. */
  interface IAdminCreateQuizResponse {
    /** AdminCreateQuizResponse id */
    id?: number | null;
  }

  /** Represents an AdminCreateQuizResponse. */
  class AdminCreateQuizResponse implements IAdminCreateQuizResponse {
    /**
     * Constructs a new AdminCreateQuizResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IAdminCreateQuizResponse);

    /** AdminCreateQuizResponse id. */
    public id: number;

    /**
     * Creates a new AdminCreateQuizResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdminCreateQuizResponse instance
     */
    public static create(
      properties?: quizservice.IAdminCreateQuizResponse
    ): quizservice.AdminCreateQuizResponse;

    /**
     * Encodes the specified AdminCreateQuizResponse message. Does not implicitly {@link quizservice.AdminCreateQuizResponse.verify|verify} messages.
     * @param message AdminCreateQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IAdminCreateQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AdminCreateQuizResponse message, length delimited. Does not implicitly {@link quizservice.AdminCreateQuizResponse.verify|verify} messages.
     * @param message AdminCreateQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IAdminCreateQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AdminCreateQuizResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdminCreateQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.AdminCreateQuizResponse;

    /**
     * Decodes an AdminCreateQuizResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdminCreateQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.AdminCreateQuizResponse;

    /**
     * Verifies an AdminCreateQuizResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AdminCreateQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdminCreateQuizResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.AdminCreateQuizResponse;

    /**
     * Creates a plain object from an AdminCreateQuizResponse message. Also converts values to other types if specified.
     * @param message AdminCreateQuizResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.AdminCreateQuizResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AdminCreateQuizResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AdminAddQuestionToQuizRequest. */
  interface IAdminAddQuestionToQuizRequest {
    /** AdminAddQuestionToQuizRequest quizId */
    quizId?: number | null;

    /** AdminAddQuestionToQuizRequest text */
    text?: string | null;
  }

  /** Represents an AdminAddQuestionToQuizRequest. */
  class AdminAddQuestionToQuizRequest
    implements IAdminAddQuestionToQuizRequest {
    /**
     * Constructs a new AdminAddQuestionToQuizRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IAdminAddQuestionToQuizRequest);

    /** AdminAddQuestionToQuizRequest quizId. */
    public quizId: number;

    /** AdminAddQuestionToQuizRequest text. */
    public text: string;

    /**
     * Creates a new AdminAddQuestionToQuizRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdminAddQuestionToQuizRequest instance
     */
    public static create(
      properties?: quizservice.IAdminAddQuestionToQuizRequest
    ): quizservice.AdminAddQuestionToQuizRequest;

    /**
     * Encodes the specified AdminAddQuestionToQuizRequest message. Does not implicitly {@link quizservice.AdminAddQuestionToQuizRequest.verify|verify} messages.
     * @param message AdminAddQuestionToQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IAdminAddQuestionToQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AdminAddQuestionToQuizRequest message, length delimited. Does not implicitly {@link quizservice.AdminAddQuestionToQuizRequest.verify|verify} messages.
     * @param message AdminAddQuestionToQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IAdminAddQuestionToQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AdminAddQuestionToQuizRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdminAddQuestionToQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.AdminAddQuestionToQuizRequest;

    /**
     * Decodes an AdminAddQuestionToQuizRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdminAddQuestionToQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.AdminAddQuestionToQuizRequest;

    /**
     * Verifies an AdminAddQuestionToQuizRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AdminAddQuestionToQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdminAddQuestionToQuizRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.AdminAddQuestionToQuizRequest;

    /**
     * Creates a plain object from an AdminAddQuestionToQuizRequest message. Also converts values to other types if specified.
     * @param message AdminAddQuestionToQuizRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.AdminAddQuestionToQuizRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AdminAddQuestionToQuizRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AdminAddQuestionToQuizResponse. */
  interface IAdminAddQuestionToQuizResponse {
    /** AdminAddQuestionToQuizResponse result */
    result?: quizservice.IQuestion | null;
  }

  /** Represents an AdminAddQuestionToQuizResponse. */
  class AdminAddQuestionToQuizResponse
    implements IAdminAddQuestionToQuizResponse {
    /**
     * Constructs a new AdminAddQuestionToQuizResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IAdminAddQuestionToQuizResponse);

    /** AdminAddQuestionToQuizResponse result. */
    public result?: quizservice.IQuestion | null;

    /**
     * Creates a new AdminAddQuestionToQuizResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AdminAddQuestionToQuizResponse instance
     */
    public static create(
      properties?: quizservice.IAdminAddQuestionToQuizResponse
    ): quizservice.AdminAddQuestionToQuizResponse;

    /**
     * Encodes the specified AdminAddQuestionToQuizResponse message. Does not implicitly {@link quizservice.AdminAddQuestionToQuizResponse.verify|verify} messages.
     * @param message AdminAddQuestionToQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IAdminAddQuestionToQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AdminAddQuestionToQuizResponse message, length delimited. Does not implicitly {@link quizservice.AdminAddQuestionToQuizResponse.verify|verify} messages.
     * @param message AdminAddQuestionToQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IAdminAddQuestionToQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AdminAddQuestionToQuizResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AdminAddQuestionToQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.AdminAddQuestionToQuizResponse;

    /**
     * Decodes an AdminAddQuestionToQuizResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AdminAddQuestionToQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.AdminAddQuestionToQuizResponse;

    /**
     * Verifies an AdminAddQuestionToQuizResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AdminAddQuestionToQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AdminAddQuestionToQuizResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.AdminAddQuestionToQuizResponse;

    /**
     * Creates a plain object from an AdminAddQuestionToQuizResponse message. Also converts values to other types if specified.
     * @param message AdminAddQuestionToQuizResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.AdminAddQuestionToQuizResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AdminAddQuestionToQuizResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ListQuizesRequest. */
  interface IListQuizesRequest {}

  /** Represents a ListQuizesRequest. */
  class ListQuizesRequest implements IListQuizesRequest {
    /**
     * Constructs a new ListQuizesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IListQuizesRequest);

    /**
     * Creates a new ListQuizesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListQuizesRequest instance
     */
    public static create(
      properties?: quizservice.IListQuizesRequest
    ): quizservice.ListQuizesRequest;

    /**
     * Encodes the specified ListQuizesRequest message. Does not implicitly {@link quizservice.ListQuizesRequest.verify|verify} messages.
     * @param message ListQuizesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IListQuizesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListQuizesRequest message, length delimited. Does not implicitly {@link quizservice.ListQuizesRequest.verify|verify} messages.
     * @param message ListQuizesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IListQuizesRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ListQuizesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListQuizesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.ListQuizesRequest;

    /**
     * Decodes a ListQuizesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListQuizesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.ListQuizesRequest;

    /**
     * Verifies a ListQuizesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListQuizesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListQuizesRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.ListQuizesRequest;

    /**
     * Creates a plain object from a ListQuizesRequest message. Also converts values to other types if specified.
     * @param message ListQuizesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.ListQuizesRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ListQuizesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ListQuizesResponse. */
  interface IListQuizesResponse {
    /** ListQuizesResponse quizes */
    quizes?: quizservice.ListQuizesResponse.IEntry[] | null;
  }

  /** Represents a ListQuizesResponse. */
  class ListQuizesResponse implements IListQuizesResponse {
    /**
     * Constructs a new ListQuizesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IListQuizesResponse);

    /** ListQuizesResponse quizes. */
    public quizes: quizservice.ListQuizesResponse.IEntry[];

    /**
     * Creates a new ListQuizesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ListQuizesResponse instance
     */
    public static create(
      properties?: quizservice.IListQuizesResponse
    ): quizservice.ListQuizesResponse;

    /**
     * Encodes the specified ListQuizesResponse message. Does not implicitly {@link quizservice.ListQuizesResponse.verify|verify} messages.
     * @param message ListQuizesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IListQuizesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ListQuizesResponse message, length delimited. Does not implicitly {@link quizservice.ListQuizesResponse.verify|verify} messages.
     * @param message ListQuizesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IListQuizesResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ListQuizesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ListQuizesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.ListQuizesResponse;

    /**
     * Decodes a ListQuizesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ListQuizesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.ListQuizesResponse;

    /**
     * Verifies a ListQuizesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ListQuizesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ListQuizesResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.ListQuizesResponse;

    /**
     * Creates a plain object from a ListQuizesResponse message. Also converts values to other types if specified.
     * @param message ListQuizesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.ListQuizesResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ListQuizesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  namespace ListQuizesResponse {
    /** Properties of an Entry. */
    interface IEntry {
      /** Entry id */
      id?: number | null;

      /** Entry name */
      name?: string | null;
    }

    /** Represents an Entry. */
    class Entry implements IEntry {
      /**
       * Constructs a new Entry.
       * @param [properties] Properties to set
       */
      constructor(properties?: quizservice.ListQuizesResponse.IEntry);

      /** Entry id. */
      public id: number;

      /** Entry name. */
      public name: string;

      /**
       * Creates a new Entry instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Entry instance
       */
      public static create(
        properties?: quizservice.ListQuizesResponse.IEntry
      ): quizservice.ListQuizesResponse.Entry;

      /**
       * Encodes the specified Entry message. Does not implicitly {@link quizservice.ListQuizesResponse.Entry.verify|verify} messages.
       * @param message Entry message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: quizservice.ListQuizesResponse.IEntry,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Entry message, length delimited. Does not implicitly {@link quizservice.ListQuizesResponse.Entry.verify|verify} messages.
       * @param message Entry message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: quizservice.ListQuizesResponse.IEntry,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes an Entry message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Entry
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): quizservice.ListQuizesResponse.Entry;

      /**
       * Decodes an Entry message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Entry
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): quizservice.ListQuizesResponse.Entry;

      /**
       * Verifies an Entry message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates an Entry message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Entry
       */
      public static fromObject(object: {
        [k: string]: any;
      }): quizservice.ListQuizesResponse.Entry;

      /**
       * Creates a plain object from an Entry message. Also converts values to other types if specified.
       * @param message Entry
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: quizservice.ListQuizesResponse.Entry,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Entry to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };
    }
  }

  /** Properties of a GetQuizRequest. */
  interface IGetQuizRequest {
    /** GetQuizRequest id */
    id?: number | Long | null;
  }

  /** Represents a GetQuizRequest. */
  class GetQuizRequest implements IGetQuizRequest {
    /**
     * Constructs a new GetQuizRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IGetQuizRequest);

    /** GetQuizRequest id. */
    public id: number | Long;

    /**
     * Creates a new GetQuizRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetQuizRequest instance
     */
    public static create(
      properties?: quizservice.IGetQuizRequest
    ): quizservice.GetQuizRequest;

    /**
     * Encodes the specified GetQuizRequest message. Does not implicitly {@link quizservice.GetQuizRequest.verify|verify} messages.
     * @param message GetQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IGetQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetQuizRequest message, length delimited. Does not implicitly {@link quizservice.GetQuizRequest.verify|verify} messages.
     * @param message GetQuizRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IGetQuizRequest,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetQuizRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.GetQuizRequest;

    /**
     * Decodes a GetQuizRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetQuizRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.GetQuizRequest;

    /**
     * Verifies a GetQuizRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetQuizRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetQuizRequest
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.GetQuizRequest;

    /**
     * Creates a plain object from a GetQuizRequest message. Also converts values to other types if specified.
     * @param message GetQuizRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.GetQuizRequest,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetQuizRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GetQuizResponse. */
  interface IGetQuizResponse {
    /** GetQuizResponse questions */
    questions?: quizservice.IQuestion[] | null;
  }

  /** Represents a GetQuizResponse. */
  class GetQuizResponse implements IGetQuizResponse {
    /**
     * Constructs a new GetQuizResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IGetQuizResponse);

    /** GetQuizResponse questions. */
    public questions: quizservice.IQuestion[];

    /**
     * Creates a new GetQuizResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetQuizResponse instance
     */
    public static create(
      properties?: quizservice.IGetQuizResponse
    ): quizservice.GetQuizResponse;

    /**
     * Encodes the specified GetQuizResponse message. Does not implicitly {@link quizservice.GetQuizResponse.verify|verify} messages.
     * @param message GetQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IGetQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified GetQuizResponse message, length delimited. Does not implicitly {@link quizservice.GetQuizResponse.verify|verify} messages.
     * @param message GetQuizResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IGetQuizResponse,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a GetQuizResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.GetQuizResponse;

    /**
     * Decodes a GetQuizResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetQuizResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.GetQuizResponse;

    /**
     * Verifies a GetQuizResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a GetQuizResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetQuizResponse
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.GetQuizResponse;

    /**
     * Creates a plain object from a GetQuizResponse message. Also converts values to other types if specified.
     * @param message GetQuizResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.GetQuizResponse,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this GetQuizResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Question. */
  interface IQuestion {
    /** Question id */
    id?: number | Long | null;

    /** Question text */
    text?: string | null;
  }

  /** Represents a Question. */
  class Question implements IQuestion {
    /**
     * Constructs a new Question.
     * @param [properties] Properties to set
     */
    constructor(properties?: quizservice.IQuestion);

    /** Question id. */
    public id: number | Long;

    /** Question text. */
    public text: string;

    /**
     * Creates a new Question instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Question instance
     */
    public static create(
      properties?: quizservice.IQuestion
    ): quizservice.Question;

    /**
     * Encodes the specified Question message. Does not implicitly {@link quizservice.Question.verify|verify} messages.
     * @param message Question message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: quizservice.IQuestion,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Question message, length delimited. Does not implicitly {@link quizservice.Question.verify|verify} messages.
     * @param message Question message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: quizservice.IQuestion,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Question message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Question
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): quizservice.Question;

    /**
     * Decodes a Question message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Question
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): quizservice.Question;

    /**
     * Verifies a Question message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Question message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Question
     */
    public static fromObject(object: {
      [k: string]: any;
    }): quizservice.Question;

    /**
     * Creates a plain object from a Question message. Also converts values to other types if specified.
     * @param message Question
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: quizservice.Question,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Question to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
