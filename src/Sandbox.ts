import AsteraiClient from "./Main";

const client = new AsteraiClient({
  queryKey: "fc8f63e9-4f01-49d8-9c70-68b1ba0ee3b0",
  appID: "112fd160-c6e6-4258-bcd1-16cb84bca464",
  logs: true,
});

(async () => {
  const response = await client.query("Hello, world!");
  console.log(require('util').inspect(response, { depth: null }));
})();