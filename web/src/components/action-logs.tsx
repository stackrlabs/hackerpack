"use client";
import { useMruInfo } from "@/hooks/useMruInfo";
import { SandboxBadge } from "./sandbox-badge";
import { useLogs } from "@/context/logs.context";
import { LOG_TYPE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const logColor = {
  [LOG_TYPE.REQUEST]: "text-blue-400",
  [LOG_TYPE.C0_RESPONSE]: "text-green-400",
  [LOG_TYPE.C1_RESPONSE]: "text-green-400",
  [LOG_TYPE.ERROR]: "text-red-400",
};

export const ActionLogs = () => {
  const { mruInfo } = useMruInfo();
  const { logs } = useLogs();

  return (
    <div className="flex-1 mb-2 overflow-hidden flex flex-col bg-black text-white rounded-sm p-4">
      <div className="flex pb-2  gap-2 items-center">
        <p className="text-lg">Action Logs</p>
        {mruInfo?.isSandbox && <SandboxBadge />}
      </div>
      <div className="flex-1 overflow-y-auto">
        {logs.map((log, i) => (
          <div
            key={i}
            className="flex gap-2 py-2 border-b border-white w-full border-dotted"
          >
            <p
              className={cn(
                logColor[log.type],
                "font-mono min-w-[100px] text-sm font-bold uppercase"
              )}
            >
              {log.type}
            </p>
            <div>
              <p className="font-mono text-xs text-yellow-200">
                {new Date(log.time).toISOString()}
              </p>

              <p className="font-mono text-sm break-all">
                {JSON.stringify(log.value, null, 2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
