"use client";

import { getState } from "@/api/api";
import { ActionLogs } from "@/components/action-logs";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/useAction";
import { usePrivy } from "@privy-io/react-auth";
import { useEffect, useState } from "react";

export default function Home() {
  const { ready, authenticated, login } = usePrivy();
  const [fetching, setFetching] = useState(true);
  const [value, setValue] = useState<number>(0);
  const [submitting, setSubmitting] = useState(false);
  const { submit } = useAction();
  const actionDisabled = !ready || !authenticated;

  useEffect(() => {
    const getInitialValue = async () => {
      try {
        setFetching(true);
        const res = await getState();
        setValue(res.state);
      } catch (e) {
        alert((e as Error).message);
        console.error(e);
      } finally {
        setFetching(false);
      }
    };
    getInitialValue();
  }, []);

  const handleAction = async (actionName: string) => {
    try {
      setSubmitting(true);
      const res = await submit(actionName, { timestamp: Date.now() });
      if (!res) {
        throw new Error("Failed to submit action");
      }
      setValue(res.logs[0].value);
    } catch (e) {
      alert((e as Error).message);
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  const renderBody = () => {
    if (!ready) {
      return <p>Loading...</p>;
    }

    if (!authenticated) {
      return <Button onClick={login}>Connect Wallet to interact</Button>;
    }

    return (
      <div className="flex gap-4">
        <Button
          disabled={actionDisabled || submitting}
          onClick={() => handleAction("increment")}
        >
          Increment
        </Button>
        <Button
          disabled={actionDisabled || submitting}
          onClick={() => handleAction("decrement")}
        >
          Decrement
        </Button>
      </div>
    );
  };

  return (
    <main className="flex m-auto w-full h-full px-4">
      <div className="flex flex-col gap-4 flex-1">
        <p className="text-2xl">
          Current State:
          <code className="mx-4">{fetching ? "..." : value}</code>
        </p>
        <div className="flex gap-4">{renderBody()}</div>
      </div>
      <ActionLogs />
    </main>
  );
}
