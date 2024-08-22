import { MicroRollup } from "@stackr/sdk";
import { stackrConfig } from "../../stackr.config";
import { counterMachine } from "./machine";
import { UpdateCounterSchema } from "./schemas";

const mru = await MicroRollup({
  config: stackrConfig,
  actionSchemas: [UpdateCounterSchema],
  stateMachines: [counterMachine],
  stfSchemaMap: {
    increment: UpdateCounterSchema,
    decrement: UpdateCounterSchema,
  },
});

await mru.init();

export { mru };
