import { readFileSync } from "fs";
import { loadSync, parse } from 'protobufjs';
import { Buffer } from 'buffer';

export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appID: string;
  private logs: boolean;
  private abortController: AbortController | null = null;
  private conversationID: string | null = null;
  // private baseURL: string = "https://api.asterai.io";
  private baseURL: string = "http://localhost:3030";
  private pluginProtos: PluginProtos;

  constructor(params: AsteraiClientParams) {
    this.queryKey = params.queryKey;
    this.appID = params.appID;
    this.logs = params.logs || false;
    this.pluginProtos = this.downloadPluginProtos();
  }

  public setConversationID(conversationID: string): void {
    this.conversationID = conversationID;
  }

  public async query(query: string, callback: (chunk: AsteraiResponse) => void, doneCallback?: () => void): Promise<void> {
    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    try {
      const reader = await this.sseQuery(query, signal);
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          if (doneCallback) {
            doneCallback();
          }
          break;
        }
        const chunk = decoder.decode(value, { stream: true });
        callback(this.parseMessage(chunk));
      }
    } catch (error) {
      if (this.logs) {
        console.error('Error:', error);
      }
      throw error;
    }
  }

  public async queryOneshot(query: string): Promise<AsteraiResponse> {
    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    try {
      const reader = await this.sseQuery(query, signal);
      const decoder = new TextDecoder();
      let responseObject: AsteraiResponse = { llm: [], plugin: [] };
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const parsedMessage = this.parseMessage(chunk);
        
        responseObject.llm = [...responseObject.llm, ...parsedMessage.llm];
        responseObject.plugin = [...responseObject.plugin, ...parsedMessage.plugin];
      }

      return responseObject;
    } catch (error) {
      if (this.logs) { 
        console.error('Error:', error);
      }
      throw error;
    }
  }

  public parseMessage(message: string): AsteraiResponse {
    const result: AsteraiResponse = {
      llm: [],
      plugin: []
    };

    const lines = message.split('\n');
    for (const line of lines) {
      if (line.includes('data: llm-token: ')) {
        const token = line.split('data: llm-token: ')[1];
        result.llm.push(
          this.cleanToken(token)
        );
      } else if (line.includes('data: plugin-output: ')) {
        const token = line.split('data: plugin-output: ')[1];
        result.plugin.push(
          this.cleanToken(token)
        );
      }
    }

    return result;
  }

  private cleanToken(token: string): string {
    return token
      .replace(/\\n/g, '')
      .replace(/\\/g, '');
  }

  private async sseQuery(query: string, signal: AbortSignal): Promise<ReadableStreamDefaultReader<Uint8Array>> {
    let url = `${this.baseURL}/app/${this.appID}/query/sse`;
    
    if (this.conversationID) {
      url += `?conversation_id=${encodeURIComponent(this.conversationID)}`;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.queryKey}`,
      },
      body: query,
      signal: signal,
    });

    if (!response.ok) {
      throw new Error(`HTTP status error: ${response.status}`);
    }

    if (!response.body) {
      throw new Error('ReadableStream not supported');
    }
    
    return response.body.getReader();
  }

  public abort(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  private downloadPluginProtos(): PluginProtos {
    // const url = `${this.baseURL}/protos`;
    // const response = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${this.queryKey}`,
    //   },
    // });

    // TODO: actually implement authentication and download it for real
    return JSON.parse(readFileSync('./mockProtos.json', 'utf8'));
  }

  public decodePluginMessage(message: string): string | undefined {
    const [functionName, encodedMessage] = message.split(':');
    
    // Find the relevant proto
    let rawProto: PluginProto | undefined;
    for (const workingProto of this.pluginProtos.protos) {
      if (workingProto.proto.includes(functionName)) {
        rawProto = workingProto;
        break;
      }
    }
    if (!rawProto) {
      if (this.logs) {
        console.error(`No proto found for ${functionName}`);
      }
      return;
    }

    const root = parse(`
      syntax = "proto3";
      ${rawProto.proto}
    `).root;
    const MessageType = root.lookupType(functionName);
    if (!MessageType) {
      if (this.logs) {
        console.error(`No message type found for ${functionName}`);
      }
      return;
    }

    try {
      const buffer = Buffer.from(encodedMessage, 'base64');
      const decodedMessage = MessageType.decode(buffer);
      const object = MessageType.toObject(decodedMessage, {
        longs: String,
        enums: String,
        bytes: String,
      });

      return JSON.stringify(object, null, 2);
    } catch (error) {
      if (this.logs) {
        console.error(`Error decoding message: ${error}`);
      }
      return;
    }
  }
}

type AsteraiClientParams = {
  queryKey: string;
  appID: string;
  logs?: boolean;
}

type AsteraiResponse = {
  llm: string[];
  plugin: string[];
}

type PluginProtos = {
  protos: PluginProto[];
}

type PluginProto = {
  name: string;
  proto: string;
}
