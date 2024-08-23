import { zeroAddress } from "viem";

export const ZeroAddress = zeroAddress;

export enum BlockStatus {
  Proposed = "proposed",
  Sequenced = "sequenced",
  Submitting = "submitting",
  Received = "received",
  Rejected = "rejected",
  Verified = "verified",
  Invalid = "invalid",
  DAFinalized = "da_finalized",
  L1Posted = "l1_posted",
  L1Finalized = "l1_finalized",
}

export enum DA {
  AVAIL = "avail",
  CELESTIA = "celestia",
  EIGEN = "eigen",
}

export enum LOG_TYPE {
  REQUEST = "request",
  C0_RESPONSE = "c0 response",
  C1_RESPONSE = "c1 response",
  ERROR = "error",
}
