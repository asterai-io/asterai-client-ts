import { SSE } from 'sse.js';

global.XMLHttpRequest = require('xhr2');
export default class AsteraiClient {
  private readonly queryKey: string;
  private readonly appID: string;
  private logs: boolean;
  private conversationID: string | null = null;

  constructor(params: AsteraiClientParams) {
    this.queryKey = params.queryKey;
    this.appID = params.appID;
    this.logs = params.logs || false;
  }

  public setConversationID(conversationID: string): void {
    this.conversationID = conversationID;
  }

  public async query(query: string, callback: (chunk: string) => void): Promise<void> {
    const sse = await this.sseQuery(query);
    sse.onmessage = (event) => {
      callback(event.data);
    };
  }

  private async sseQuery(query: string): Promise<SSE> {
    let url = `https://api.asterai.io/app/${this.appID}/query/sse`;
    
    if (this.conversationID) {
      url += `?conversation_id=${encodeURIComponent(this.conversationID)}`;
    }

    return new SSE(url, {
      headers: {
        'Authorization': `Bearer ${this.queryKey}`,
      },
      withCredentials: true,
      payload: query,
    });
  }
}

interface AsteraiClientParams {
  queryKey: string;
  appID: string;
  logs?: boolean;
}

const client = new AsteraiClient({
  queryKey: "fc8f63e9-4f01-49d8-9c70-68b1ba0ee3b0",
  appID: "112fd160-c6e6-4258-bcd1-16cb84bca464",
  logs: true,
});

client.query("Hello, world!", (chunk) => {
  console.log(chunk);
});