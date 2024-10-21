import AsteraiClient from "../src/main";

interface TradeRequest {
  pair: string;
  amount: string;
  direction: "buy" | "sell";
  exchange: string;
}

const client = new AsteraiClient({
  queryKey: "4b15a82a-9910-4705-ad3a-4a8a881055cc",
  appID: "e530aea4-ccd5-4a25-bf8e-bc8b33a3b6b4",
  pluginProtosPath: "./file_generated_by_asterai_codegen.json",
});

(async () => {

  client.query("buy 3 eth on hyperliquid", (chunk) => {
    if (chunk.plugin.length > 0) {
      const decodedMessage = client.decodePluginMessage<TradeRequest>(chunk.plugin[0]);
      if (decodedMessage) {
        console.log(`Received trade request: ${decodedMessage.direction} ${decodedMessage.amount} ${decodedMessage.pair} ON ${decodedMessage.exchange}`);
      }
    }
  });
})();
