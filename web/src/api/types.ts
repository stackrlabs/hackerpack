import { BlockStatus, DA } from "@/lib/constants";

export interface Schema {
  primaryType: string;
  types: {
    [key: string]: {
      name: string;
      type: string;
    }[];
  };
}

export interface Domain {
  name: string;
  version: string;
  chainId: number;
  verifyingContract: `0x${string}`;
  salt: ArrayBuffer;
}

export interface MRUInfo {
  isSandbox: boolean;
  domain: Domain;
  transitionToSchema: Record<string, string>;
  schemas: {
    [key: string]: Schema;
  };
}

export type DAMetadata = Record<
  DA,
  {
    blockHeight: number;
    extIdx?: number;
    txHash?: string;
    commitment?: string;
  }
>;

export interface MRUAction {
  name: string;
  hash: string;
  payload: any;
  msgSender: string;
  blockInfo: {
    status: BlockStatus;
    daMetadata: DAMetadata;
    l1TxHash: string | null;
  } | null;
}
