import { ActionConfirmationStatus } from "@stackr/sdk";
import express, { Request, Response } from "express";
import { counterMachine } from "./stackr/machine";
import { mru } from "./stackr/mru";
import { schemas } from "./stackr/schemas";
import { transitions } from "./stackr/transitions";

const PORT = 3210;

export async function setupServer() {
  const app = express();
  app.use(express.json());
  // allow CORS
  app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  const { stateMachines, config, getStfSchemaMap, submitAction } = mru;
  const machine = stateMachines.getFirst<typeof counterMachine>();

  if (!machine) {
    throw new Error("Machine not found");
  }

  const transitionToSchema = getStfSchemaMap();

  /** Routes */
  app.get("/info", (_req: Request, res: Response) => {
    res.send({
      isSandbox: config.isSandbox,
      domain: config.domain,
      transitionToSchema,
      schemas: Object.values(schemas).reduce((acc, schema) => {
        acc[schema.identifier] = {
          primaryType: schema.EIP712TypedData.primaryType,
          types: schema.EIP712TypedData.types,
        };
        return acc;
      }, {} as Record<string, any>),
    });
  });

  app.post("/:transition", async (req: Request, res: Response) => {
    const { transition } = req.params;

    if (!transitions[transition]) {
      res.status(400).send({ message: "NO_TRANSITION_FOR_ACTION" });
      return;
    }

    try {
      const { msgSender, signature, inputs } = req.body;

      const schemaId = transitionToSchema[transition];
      const schema = Object.values(schemas).find(
        (schema) => schema.identifier === schemaId
      );

      if (!schema) {
        throw new Error("NO_SCHEMA_FOUND");
      }

      const signedAction = schema.actionFrom({
        msgSender,
        signature,
        inputs,
      });

      const ack = await submitAction(transition, signedAction);
      const { logs, errors } = await ack.waitFor(ActionConfirmationStatus.C1);
      if (errors?.length) {
        throw new Error(errors[0].message);
      }
      res.status(201).send({ logs, ackHash: ack.hash });
    } catch (e: any) {
      res.status(400).send({ error: e.message });
    }
    return;
  });

  app.get("/", (_req: Request, res: Response) => {
    res.json({ state: machine.state });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
