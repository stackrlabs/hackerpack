"use client";
import { formatHash } from "@/lib/utils";
import { usePrivy, WalletWithMetadata } from "@privy-io/react-auth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { user, logout } = usePrivy();

  const wallets = user?.linkedAccounts as WalletWithMetadata[];
  return (
    <div className="flex items-center justify-between flex-wrap p-6 px-4 m-auto w-full">
      <Link
        href={"/"}
        className="flex gap-2 text-3xl font-bold select-none cursor-pointer"
      >
        <Image
          src="https://assets.stackrlabs.xyz/counter.png"
          width={40}
          height={40}
          alt="Counter"
        />
        Counter
      </Link>
      <div className="flex gap-4 place-items-center">
        {!!wallets?.length && (
          <div className="flex gap-4 items-center">
            <div className="flex flex-col font-mono">
              {wallets.map((a) => (
                <div key={a.connectorType}>
                  <b>{a.connectorType}</b>: {formatHash(a.address)}
                </div>
              ))}
            </div>
            <Button onClick={logout} variant="outline" size="icon">
              <LogOut />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
