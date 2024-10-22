import { readFileSync } from "fs";
import AsteraiClient from "../src/main";

interface TradeRequest {
  pair: string;
  amount: string;
  direction: "buy" | "sell";
  exchange: string;
}

const client = new AsteraiClient({
  queryKey: "b055db25-8e2d-4cd3-af37-c689b67dc8ea",
  appId: "b79b1150-bc9c-44a2-a899-6fc568f7ac86",
  pluginProtos: readFileSync("./file_generated_by_asterai_codegen.json", "utf-8"),
});

(async () => {

  client.query("buy 3 eth on hyperliquid", (chunk) => {
    if (chunk.startsWith("TradeInput:")) {
      const tradeRequest = client.decodePluginMessage<TradeRequest>(chunk);
      if (tradeRequest) {
        console.log(`Received trade request: ${tradeRequest.direction} ${tradeRequest.amount} @ ${tradeRequest.pair} on ${tradeRequest.exchange}`);
      }
    }
  });
})();
