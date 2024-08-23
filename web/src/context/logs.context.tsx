"use client";
import { LOG_TYPE } from "@/lib/constants";
import { createContext, useContext, useState } from "react";

export type Log = { type: LOG_TYPE; time: number; value: any };
interface LogsContextType {
  logs: Log[];
  addLog: (log: Log) => void;
}

const LogsContext = createContext<LogsContextType | undefined>(undefined);

export const LogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [logs, setLogs] = useState<Log[]>([]);

  const addLog = (log: Log) => {
    setLogs((prevLogs) => [log, ...prevLogs]);
  };

  return (
    <LogsContext.Provider value={{ logs, addLog }}>
      {children}
    </LogsContext.Provider>
  );
};

export const useLogs = () => {
  const context = useContext(LogsContext);
  if (context === undefined) {
    throw new Error("useLogs must be used within a LogsProvider");
  }
  return context;
};
