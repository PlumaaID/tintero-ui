"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "../ui/breadcrumb";
import { Button } from "../ui/button";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { truncateHex } from "~/lib/utils";
import { useEnsName } from "wagmi";
import { Address } from "viem";
import Gradient from "../gradient";

const HeaderBreadcrumb: React.FC = () => {
  const pathname = usePathname();
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  const result = useEnsName({
    address: (address || "0x") as Address,
  });

  return (
    <div className="flex items-center gap-2 w-full">
      <Breadcrumb>
        <BreadcrumbList className="flex w-full">
          {pathname.split("/").map((path, index, paths) => {
            const href = paths.slice(0, index + 1).join("/");
            const capital = path.charAt(0);
            const rest = path.slice(1);
            if (!path) return null;
            return (
              <BreadcrumbItem key={path}>
                <BreadcrumbLink href={href}>
                  {capital.toUpperCase() + rest}
                </BreadcrumbLink>
              </BreadcrumbItem>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="ml-auto">
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
              <Gradient className="w-5 h-5 rounded-full" address={address} />
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
  );
};

export default HeaderBreadcrumb;
