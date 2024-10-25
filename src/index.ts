import { parse, Root, Type } from "protobufjs";
import { Buffer } from "buffer";
import axios, {AxiosResponse} from "axios";
import { createParser } from "eventsource-parser";

export type AsteraiClientArgs = {
  queryKey: string;
  appId: string;
  appProtos?: string[];
  apiBaseUrl?: string;
};

export type QueryArgs = {
  query: string;
  conversationId?: string;
};

export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appId: string;
  private readonly apiBaseUrl: string = "https://api.asterai.io";
  private protos: Root[] = [];

  public constructor(args: AsteraiClientArgs) {
    this.queryKey = args.queryKey;
    this.appId = args.appId;
    if (args.appProtos) {
      for (let proto of args.appProtos) {
        this.protos.push(
          parse(proto).root
        );
      }
    }
    if (args.apiBaseUrl) {
      this.apiBaseUrl = args.apiBaseUrl;
    }
  }

  public async query(args: QueryArgs): Promise<QueryResponse> {
    const abortController = new AbortController();
    let url = `${this.apiBaseUrl}/app/${this.appId}/query/sse`;
    if (args.conversationId) {
      url += `?conversation_id=${encodeURIComponent(args.conversationId)}`;
    }
    const response = await axios({
      method: "POST",
      url,
      headers: {
        "Authorization": `Bearer ${this.queryKey}`,
      },
      data: args.query,
      signal: abortController.signal,
      responseType: "stream",
    });
    return new QueryResponse(response, abortController, this.protos);
  }
}

export type TokenCallback = (token: string) => void;

export type PluginOutputCallback = (output: PluginOutput) => void;

export type PluginOutput = {
  name: string;
  value: any;
};

export type EndCallback = (state: EndState) => void;

export type EndState = {
  reason: EndReason;
};

export type EndReason = "finished" | "aborted";

export class QueryResponse {
  private axiosResponse: AxiosResponse<any, any>;
  private abortController: AbortController;
  private protos: Root[];
  private isActive = true;
  private onTokenCallbacks: TokenCallback[] = [];
  private onPluginOutputCallbacks: PluginOutputCallback[] = [];
  private onEndCallbacks: EndCallback[] = [];

  public constructor(
    axiosResponse: AxiosResponse<any, any>,
    abortController: AbortController,
    protos: Root[],
  ) {
    this.axiosResponse = axiosResponse;
    this.abortController = abortController;
    this.protos = protos;
    this.setupResponse().catch(e => {
      throw e
    });
  }

  private async setupResponse() {
    // Preparing parser that will callback once a full message is received
    const parser = createParser((event) => {
      if (event.type !== "event") {
        return;
      }
      const llmTokenPrefix = "llm-token: ";
      const pluginOutputPrefix = "plugin-output: ";
      if (event.data.startsWith(llmTokenPrefix)) {
        const token = event.data.substring(llmTokenPrefix.length);
        this.callOnToken(token);
      } else if (event.data.startsWith(pluginOutputPrefix)) {
        const rawOutput = event.data.substring(pluginOutputPrefix.length);
        const output = this.decodePluginOutput(rawOutput);
        this.callPluginOutput(output);
      }
    });
    this.axiosResponse.data.on("data", (chunk: Event) => {
      parser.feed(chunk.toString());
    });
    this.axiosResponse.data.on("close", (chunk: Event) => {
      this.callOnEnd({ reason: "finished" });
    });
  }

  public onToken(callback: TokenCallback) {
    if (!this.isActive) {
      return;
    }
    this.onTokenCallbacks.push(callback);
  }

  public onPluginOutput(callback: PluginOutputCallback) {
    if (!this.isActive) {
      return;
    }
    this.onPluginOutputCallbacks.push(callback);
  }

  public onEnd(callback: EndCallback) {
    if (!this.isActive) {
      return;
    }
    this.onEndCallbacks.push(callback);
  }

  private callOnToken(token: string) {
    if (!this.isActive) {
      return;
    }
    for (const callback of this.onTokenCallbacks) {
      callback(token);
    }
  }

  private callPluginOutput(args: PluginOutput) {
    if (!this.isActive) {
      return;
    }
    for (const callback of this.onPluginOutputCallbacks) {
      callback(args);
    }
  }

  private callOnEnd(state: EndState) {
    if (!this.isActive) {
      return;
    }
    this.isActive = false;
    for (const callback of this.onEndCallbacks) {
      callback(state);
    }
  }

  public abort() {
    if (this.abortController.signal.aborted) {
      return;
    }
    this.abortController.abort();
    this.callOnEnd({
      reason: "aborted"
    });
  }

  // TODO call this on plugin output
  private decodePluginOutput(rawOutput: string): PluginOutput {
    const splitMessage = rawOutput.split(":");
    const messageTypeName = splitMessage[0];
    const encodedMessage = splitMessage[1].slice(1);
    let messageType: Type | undefined;
    for (let proto of this.protos) {
      try {
        messageType = proto.lookupType(messageTypeName);
        if (messageType) {
          break;
        }
      } catch (error) { }
    }
    if (!messageType) {
      throw new Error(`no message type found for ${messageTypeName}`);
    }
    try {
      const buffer = Buffer.from(encodedMessage, "base64");
      const decodedMessage = messageType.decode(buffer);
      const value = messageType.toObject(decodedMessage, {
        longs: String,
        enums: String,
        bytes: String,
      });
      return {
        name: messageTypeName,
        value
      };
    } catch (error) {
      throw new Error(`failed to decode asterai plugin message: ${error}`);
    }
  }
}