import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatHash(hash: string) {
  return `${hash.slice(0, 6)}...${hash.slice(-4)}`;
}

export function urlJoin(...parts: string[]) {
  return parts.map((part) => part.replace(/\/$/, "")).join("/");
}
