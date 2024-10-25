import { readFileSync } from "fs";
import path from "path";
import AsteraiClient, {QueryArgs} from "../../src";
import {
  OrderOutput
} from "./generated/app.f52a81f7-8188-4dc2-b1ee-ed4b43c41ba6";

// Set your asterai app ID and query key here.
const APP_ID = "f52a81f7-8188-4dc2-b1ee-ed4b43c41ba6";
const PUBLIC_QUERY_KEY = "9d526f40-f1cb-4694-bfee-1139c20e4b18";

const client = new AsteraiClient({
  appId: APP_ID,
  queryKey: PUBLIC_QUERY_KEY,
  appProtos: [readFileSync(path.join(__dirname, `./generated/app.${APP_ID}.proto`), "utf-8")],
});

const runTestQuery = async () => {
  renderOutputs("", "");
  const queryArgs: QueryArgs = {
    query:
      "can i get a uhhhh 1 cheezburgers?\n" +
      "deliver to 42 Wallaby Way, Sydney.\n" +
      "NO PICKLES!",
  };
  const response = await client.query(queryArgs);
  // Optionally, it is possible to abort a response
  // based on a timeout.
  let abortTimeout: NodeJS.Timeout | null = setTimeout(
    () => {
      response.abort();
      console.log("took too long to order cheezburgers");
    },
    25_000
  );
  let llmResponse = "";
  let pluginOutputDisplay = "";
  response.onToken(token => {
    if (abortTimeout) {
      clearTimeout(abortTimeout);
      abortTimeout = null;
    }
    // Add to the response and show
    // the updated full LLM message.
    llmResponse += token;
    renderOutputs(llmResponse, pluginOutputDisplay);
  });
  response.onPluginOutput(output => {
    if (output.name === "OrderOutput") {
      const order = output.value as OrderOutput;
      pluginOutputDisplay += `${JSON.stringify(order, null, 2)} `;
      renderOutputs(llmResponse, pluginOutputDisplay);
    }
  });
  response.onEnd(() => {
    renderOutputs(llmResponse, pluginOutputDisplay, true);
  });
};

const renderOutputs = (
  llmResponse: string,
  pluginOutputDisplay: string,
  hasEnded = false,
) => {
  console.clear();
  console.log("=======================");
  console.log("example asterai query");
  console.log("=======================");
  console.log(`> LLM response: ${llmResponse}`);
  console.log(`> structured plugin data: ${pluginOutputDisplay}`);
  if (hasEnded) {
    console.log("> the response has been fully received.");
  }
};

runTestQuery().catch(console.error);
