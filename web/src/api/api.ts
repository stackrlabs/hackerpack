import { urlJoin } from "@/lib/utils";
import { MRUInfo } from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

const get = async <T>(path = ""): Promise<T> => {
  const res = await fetch(urlJoin(BASE_URL, path));
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return res.json();
};

const getInfo = async () => {
  return get<MRUInfo>("info");
};

const getState = async () => {
  return get<{ state: number }>();
};

/* SUBMIT ACTION */
const submitAction = async (
  path: string,
  data: any
): Promise<{
  logs: { name: string; value: number }[];
  ackHash: string;
}> => {
  const res = await fetch(urlJoin(BASE_URL, path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if ((json as any).error) {
    throw new Error((json as any).error);
  }
  return json;
};

export { getInfo, getState, submitAction };
