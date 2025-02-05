import { useAppKitNetwork } from "@reown/appkit/react";
import Link from "next/link";
import { hardhat } from "viem/chains";

type AddressLinkWrapperProps = {
  children: React.ReactNode;
  disableAddressLink?: boolean;
  blockExplorerAddressLink: string;
};

export const AddressLinkWrapper = ({
  children,
  disableAddressLink,
  blockExplorerAddressLink,
}: AddressLinkWrapperProps) => {
  const { chainId } = useAppKitNetwork();

  return disableAddressLink ? (
    <>{children}</>
  ) : (
    <Link
      href={blockExplorerAddressLink}
      target={chainId === hardhat.id ? undefined : "_blank"}
      rel={chainId === hardhat.id ? undefined : "noopener noreferrer"}
    >
      {children}
    </Link>
  );
};
