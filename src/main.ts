import { parse, Root, Type } from 'protobufjs';
import { Buffer } from 'buffer';
import axios from 'axios';
import { createParser, ParseEvent } from "eventsource-parser";

export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appId: string;
  private logs: boolean;
  private abortController: AbortController | null = null;
  private conversationId: string | null = null;
  private static baseUrl: string = "https://api.asterai.io";
  private pluginProtos: Root[] = [];

  public constructor(params: AsteraiClientParams) {
    this.queryKey = params.queryKey;
    this.appId = params.appID;
    this.logs = params.shouldEmitLogs || false;

    if (params.pluginProtos) {
      const parsedProtoFile = JSON.parse(
        params.pluginProtos,
      );
      for (let proto of parsedProtoFile) {
        this.pluginProtos.push(
          parse(`
            syntax = "proto3";
            ${proto.proto}
          `).root
        );
      }
    }

  }

  public setConversationId(conversationId: string): void {
    this.conversationId = conversationId;
  }

  public async query(query: string, callback: (chunk: AsteraiResponse) => void): Promise<void> {
    this.abortController = new AbortController();
    const signal = this.abortController.signal;

    try {
      await this.sseQuery(query, signal, (chunk) => {
        callback(
          this.parseMessage(chunk)
        )
      });
    } catch (error) {
      if (this.logs) {
        console.error('Error:', error);
      }
      throw error;
    }
  }

  private parseMessage(chunk: string): AsteraiResponse {
    const result: AsteraiResponse = {
      llm: [],
      plugin: []
    };

    if (chunk.startsWith('llm-token: ')) {
      const token = chunk.slice('llm-token: '.length);
      result.llm.push(this.cleanToken(token));
    } else if (chunk.startsWith('plugin-output: ')) {
      const token = chunk.slice('plugin-output: '.length);
      result.plugin.push(this.cleanToken(token));
    }

    return result;
  }

  private cleanToken(token: string): string {
    return token
      .replace(/\\n/g, '')
      .replace(/\\/g, '');
  }

  private async sseQuery(query: string, signal: AbortSignal, chunkCallback: (chunk: string) => void): Promise<void> {
    let url = `${AsteraiClient.baseUrl}/app/${this.appId}/query/sse`;
    
    if (this.conversationId) {
      url += `?conversation_id=${encodeURIComponent(this.conversationId)}`;
    }

    // Preparing parser that will callback once a full message is received
    const parser = createParser((event) => {
      if (event.type !== 'event') {
        return;
      }
      
      chunkCallback(event.data);
    });

    const response = await axios({
      method: 'POST',
      url,
      headers: {
        'Authorization': `Bearer ${this.queryKey}`,
      },
      data: query,
      signal,
      responseType: 'stream',
      validateStatus: () => true,
    });

    if (response.status !== 200) {
      throw new Error(`Received non-200 response: ${response.statusText}`);
    }

    response.data.on('data', (chunk: Event) => {
      parser.feed(chunk.toString());
    });
  }


  public abort(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  public decodePluginMessage<T>(message: string): T | undefined {
    const [functionName, encodedMessage] = message.split(':');

    let messageType: Type | undefined;
    for (let proto of this.pluginProtos) {
      messageType = proto.lookupType(functionName);
      if (messageType) {
        break;
      }
    }

    if (!messageType) {
      if (this.logs) {
        console.error(`No message type found for ${functionName}`);
      }
      return;
    }

    try {
      const buffer = Buffer.from(encodedMessage, 'base64');
      const decodedMessage = messageType.decode(buffer);
      const object = messageType.toObject(decodedMessage, {
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
  shouldEmitLogs?: boolean;
  pluginProtos?: string;
}

type AsteraiResponse = {
  llm: string[];
  plugin: string[];
}

type PluginProtoFromSource = {
  name: string;
  proto: string;
}
