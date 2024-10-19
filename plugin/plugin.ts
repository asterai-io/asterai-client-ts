import { TradeInput } from "./generated/TradeInput";
import { Log } from "@asterai/sdk";

export function trade(input: TradeInput): TradeInput {
  Log.info(`Trading plugin received a trade: ${input.pair} ${input.amount} ${input.direction} ${input.exchange}`);
  return input;
}
