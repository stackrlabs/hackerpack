"use client";
import { formatHash } from "@/lib/utils";
import { usePrivy } from "@privy-io/react-auth";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export const Navbar = () => {
  const { user, logout } = usePrivy();

  const { wallet, email, farcaster } = user || {};

  const renderSocialInfo = () => {
    if (farcaster) {
      return (
        <Link
          className="underline hover:text-gray-600"
          href={`https://warpcast.com/${farcaster.username}`}
          target="_blank"
        >
          @{farcaster.username}
        </Link>
      );
    }

    if (email) {
      return <div>{email.address}</div>;
    }
  };

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
        {!!wallet && (
          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <div className="flex flex-col">
                {renderSocialInfo()}
                <div>
                  <b>Wallet:</b> {formatHash(wallet?.address || "...")}
                </div>
              </div>
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
