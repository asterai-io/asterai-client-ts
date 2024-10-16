export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appID: string;
  private logs: boolean;
  private abortController: AbortController | null = null;
  private conversationID: string | null = null;

  constructor(params: AsteraiClientParams) {
    this.queryKey = params.queryKey;
    this.appID = params.appID;
    this.logs = params.logs || false;
  }

  public setConversationID(conversationID: string): void {
    this.conversationID = conversationID;
  }

  public async query(query: string, callback: (chunk: string) => void, doneCallback?: () => void): Promise<void> {
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
        callback(chunk);  
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
      let responseObject: AsteraiResponse = { llm: '', plugin: '' };
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const filteredChunk = this.filterChunk(chunk);
        
        responseObject.llm += filteredChunk.llm.join('');
        responseObject.plugin += filteredChunk.plugin.join('');
      }

      return responseObject;
    } catch (error) {
      if (this.logs) { 
        console.error('Error:', error);
      }
      throw error;
    }
  }

  public filterChunk(chunk: string): { llm: string[], plugin: string[] } {
    const result: {
      llm: string[],
      plugin: string[]
    } = {
      llm: [],
      plugin: []
    };
    const lines = chunk.split('\n');

    for (const line of lines) {
      if (line.includes('data: llm-token: ')) {
        const token = line.split('data: llm-token: ')[1];
        result.llm.push(
          this.cleanToken(token)
        );
      } else if (line.includes('data: plugin-token: ')) {
        const token = line.split('data: plugin-token: ')[1];
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
    let url = `https://api.asterai.io/app/${this.appID}/query/sse`;
    
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
}

interface AsteraiClientParams {
  queryKey: string;
  appID: string;
  logs?: boolean;
}

interface AsteraiResponse {
  llm?: string,
  plugin?: string,
}
