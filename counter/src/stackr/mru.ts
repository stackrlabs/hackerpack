import { MicroRollup } from "@stackr/sdk";
import { stackrConfig } from "../../stackr.config";
import { counterMachine } from "./machine";

const mru = await MicroRollup({
  config: stackrConfig,
  stateMachines: [counterMachine],
});

await mru.init();

export { mru };
