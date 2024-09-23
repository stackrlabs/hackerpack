import { SolidityType, Transitions } from "@stackr/sdk/machine";

import { CounterState } from "./state";

const increment = CounterState.STF({
  schema: {
    timestamp: SolidityType.UINT,
  },
  handler: ({ state, emit }) => {
    state += 1;
    if (state > 42) {
      throw new Error("Counter cannot exceed 42");
    }
    emit({ name: "newState", value: state });
    return state;
  },
});

const decrement = CounterState.STF({
  schema: {
    timestamp: SolidityType.UINT,
  },
  handler: ({ state, emit }) => {
    state -= 1;
    if (state < 0) {
      throw new Error("Counter cannot be negative");
    }
    emit({ name: "newState", value: state });
    return state;
  },
});

export const transitions: Transitions<CounterState> = {
  increment,
  decrement,
};
