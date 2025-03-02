"use client";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useEnsAvatar, useEnsName } from "wagmi";
import { truncateHex } from "~/lib/utils";
import { Address, isAddress } from "viem";
import { normalize } from "viem/ens";
import { BlockieAvatar } from "../scaffold-eth";

const Topbar = () => {
  const { setTheme, theme } = useTheme();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  const result = useEnsName({
    address: (address || "0x") as Address,
  });

  const { data: ens } = useEnsName({
    address: address as Address,
    chainId: 1,
    query: {
      enabled: isAddress(address ?? ""),
    },
  });
  const { data: ensAvatar } = useEnsAvatar({
    name: ens ? normalize(ens) : undefined,
    chainId: 1,
    query: {
      enabled: Boolean(ens),
      gcTime: 30_000,
    },
  });

  return (
    <div className="border-b fixed left-0 right-0 bg-background z-10">
      <div className="flex h-16 items-center mx-auto max-w-screen-2xl px-6">
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex flex-1 ml-5 items-center">
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            size="icon"
            variant="ghost"
            className="mx-3 ml-auto"
          >
            <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {isConnected ? (
            <Button
              size="sm"
              variant="secondary"
              onClick={() =>
                open({
                  view: "Account",
                })
              }
            >
              {address && (
                <BlockieAvatar
                  address={address as Address}
                  ensImage={ensAvatar}
                  size={18}
                />
              )}
              {result?.data
                ? result.data
                : truncateHex(address ?? "", {
                    leading: 2,
                    trailing: 4,
                  })}
            </Button>
          ) : (
            <Button
              size="sm"
              variant="default"
              onClick={() =>
                open({
                  view: "Connect",
                })
              }
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
