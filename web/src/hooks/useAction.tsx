import { usePrivy } from "@privy-io/react-auth";
import { submitAction } from "../api/api";
import { useMruInfo } from "./useMruInfo";

export const useAction = () => {
  const { user, signTypedData } = usePrivy();
  const { mruInfo } = useMruInfo();

  const submit = async (name: string, payload: any) => {
    if (!mruInfo || !user?.wallet) {
      return;
    }

    const inputs = { ...payload };
    const { transitionToSchema, domain, schemas } = mruInfo;
    const msgSender = user.wallet.address;

    const schemaName = transitionToSchema[name];
    const schema = schemas[schemaName];

    const signature = await signTypedData({
      domain,
      types: schema.types,
      primaryType: schema.primaryType,
      message: inputs,
    });

    return submitAction(name, {
      msgSender,
      signature,
      inputs,
    });
  };

  return { submit };
};
