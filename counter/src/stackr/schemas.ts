import { ActionSchema, SolidityType } from "@stackr/sdk";

export const UpdateCounterSchema = new ActionSchema("update-counter", {
  timestamp: SolidityType.UINT,
});

export const schemas = {
  UpdateCounterSchema,
};
