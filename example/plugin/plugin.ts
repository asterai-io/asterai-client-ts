import {OrderOutput} from "./generated/OrderOutput";
import {OrderInput} from "./generated/OrderInput";

export function orderBurger(input: OrderInput): OrderOutput {
  // Estimated delivery of 45 minutes.
  const estimatedDeliveryTimeHours: f64 = 0.75;
  return new OrderOutput(
    estimatedDeliveryTimeHours,
    "the burger order was sent successfully.\n" +
    `delivery estimated in ${estimatedDeliveryTimeHours*60} minutes`
  );
}
