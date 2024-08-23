"use client";
import { formatHash } from "@/lib/utils";
import { usePrivy, WalletWithMetadata } from "@privy-io/react-auth";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { user, logout } = usePrivy();

  const walletAddress = (user?.linkedAccounts as WalletWithMetadata[])?.find(
    (a) => a.connectorType !== "embedded"
  )?.address;

  return (
    <div className="flex items-center justify-between flex-wrap p-6 px-4 m-auto w-full">
      <Link
        href={"/"}
        className="flex gap-2 text-3xl font-bold select-none cursor-pointer"
      >
        <img
          src="https://assets.stackrlabs.xyz/counter.png"
          width={40}
          height={40}
          alt="Counter"
        />
        Counter
      </Link>
      <div className="flex gap-4 place-items-center">
        {!!walletAddress && (
          <div className="flex gap-4 items-center">
            <p className="font-mono">
              <b>AA Wallet:</b> {formatHash(user?.wallet?.address || "...")}
            </p>
            <Button onClick={logout} variant="outline" size="icon">
              <LogOut />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
