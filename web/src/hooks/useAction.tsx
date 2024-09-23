import { useLogs } from "@/context/logs.context";
import { LOG_TYPE } from "@/lib/constants";
import { getAddress } from "viem";
import { useAccount, useSignTypedData } from "wagmi";
import { submitAction } from "../api/api";
import { useMruInfo } from "./useMruInfo";

export const useAction = () => {
  const { address } = useAccount();
  const { signTypedDataAsync } = useSignTypedData();
  const { mruInfo } = useMruInfo();
  const { addLog } = useLogs();

  if (!address) {
    return { submit: () => Promise.resolve() };
  }

  const submit = async (name: string, payload: any) => {
    if (!mruInfo) {
      return;
    }

    const inputs = { ...payload };
    const { domain, schemas } = mruInfo;
    // To get correct checksum address
    const msgSender = getAddress(address);

    const schema = schemas[name];

    let signature;
    try {
      signature = await signTypedDataAsync({
        domain,
        primaryType: schema.primaryType,
        types: schema.types,
        message: { name, inputs },
        account: msgSender,
      });
    } catch (e) {
      console.error("Error signing message", e);
      alert("Error while signing message, check console for more details");
      return;
    }

    addLog({
      type: LOG_TYPE.REQUEST,
      time: Date.now(),
      value: {
        transitionName: name,
        payload: { inputs, msgSender, signature },
      },
    });

    try {
      const response = await submitAction(name, {
        msgSender,
        signature,
        inputs,
      });

      addLog({
        type: LOG_TYPE.C0_RESPONSE,
        time: Date.now(),
        value: { acknowledgementHash: response.ackHash },
      });
      addLog({
        type: LOG_TYPE.C1_RESPONSE,
        time: Date.now(),
        value: { logs: response.logs },
      });

      return response;
    } catch (e) {
      addLog({
        type: LOG_TYPE.ERROR,
        time: Date.now(),
        value: { message: (e as Error).message },
      });
      throw e;
    }
  };

  return { submit };
};
