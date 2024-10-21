import { parse } from 'protobufjs';
import { Buffer } from 'buffer';
import { readFileSync } from 'fs';
import axios from 'axios';

export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appID: string;
  private logs: boolean;
  private abortController: AbortController | null = null;
  private conversationID: string | null = null;
  // private static baseURL: string = "https://api.asterai.io";
  private static baseURL: string = "http://localhost:3030";
  private pluginProtos: PluginProtos;

  public constructor(params: AsteraiClientParams) {
    this.queryKey = params.queryKey;
    this.appID = params.appID;
    this.logs = params.logs || false;
    this.pluginProtos = JSON.parse(
      readFileSync(
        params.pluginProtosPath,
        'utf-8'
      )
    );
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
    let url = `${AsteraiClient.baseURL}/app/${this.appID}/query/sse`;
    
    if (this.conversationID) {
      url += `?conversation_id=${encodeURIComponent(this.conversationID)}`;
    }

    const response = await axios({
      method: 'POST',
      url,
      headers: {
        'Authorization': `Bearer ${this.queryKey}`,
      },
      data: query,
      signal,
      responseType: 'stream',
    });

    if (response.status !== 200) {
      throw new Error(`HTTP status error: ${response.status}`);
    }

    const stream = response.data;
    const readableStream = new ReadableStream({
      start(controller) {
        stream.on('data', (chunk: Buffer) => {
          controller.enqueue(new Uint8Array(chunk));
        });
        stream.on('end', () => controller.close());
        stream.on('error', (error: Error) => controller.error(error));
      },
    });

    return readableStream.getReader();
  }

  public abort(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  public decodePluginMessage<T>(message: string): T | undefined {
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

      return object as T;
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
  pluginProtosPath: string;  
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
