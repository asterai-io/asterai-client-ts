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

      for (let proto of parsedProtoFile.protos) {
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

  public async query(query: string, callback: (chunk: string) => void): Promise<AbortSignal> {
    try {
      const signal = await this.sseQuery(query, (chunk) => {
        callback(
          this.parseMessage(chunk)
        )
      });

      return signal;
    } catch (error) {
      if (this.logs) {
        console.error('Error:', error);
      }
      throw error;
    }
  }

  private parseMessage(chunk: string): string {
    if (chunk.startsWith('llm-token: ')) {
      return chunk.slice('llm-token: '.length);
    } else if (chunk.startsWith('plugin-output: ')) {
      return chunk.slice('plugin-output: '.length);
    }

    return '';
  }

  private async sseQuery(query: string, chunkCallback: (chunk: string) => void): Promise<AbortSignal> {
    const abortController = new AbortController();
    const signal = abortController.signal;

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

    return signal;
  }


  public abort(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }

  public decodePluginMessage<T>(message: string): T | undefined {
    const splitMessage = message.split(':');
    const functionName = splitMessage[0];
    const encodedMessage = splitMessage[1].slice(1);
    
    
    let messageType: Type | undefined;
    for (let proto of this.pluginProtos) {
      try {
        messageType = proto.lookupType(functionName);
        if (messageType) {
          break;
        }
      } catch (error) {
        continue;
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
