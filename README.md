# @asterai/client
TypeScript/JavaScript client for asterai

Have a look at the asterai documentation [here][docs].

[docs]: https://docs.asterai.io

## Examples
### Query an agent and obtain a full text response back

```ts
import { AsteraiAgent } from "@asterai/client";

const agent = new AsteraiAgent({
  appId: ASTERAI_APP_ID,
  queryKey: ASTERAI_PUBLIC_QUERY_KEY,
});

const response = await agent.query({
  query: "how's the weather like in NY?"
});

console.log(await response.text());
```

### Query an agent and obtain a response back token by token

```ts
import { AsteraiAgent } from "@asterai/client";

const agent = new AsteraiAgent({
  appId: ASTERAI_APP_ID,
  queryKey: ASTERAI_PUBLIC_QUERY_KEY,
});

const response = await agent.query({
  query: "how's the weather like in NY?"
});

let llmResponse = "";
response.onToken(token => {
  llmResponse += token;
});

response.onEnd(() => {
  // The full response has been received.
  console.log(llmResponse);
});
```
