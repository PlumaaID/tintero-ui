import Image from "next/image";
import { FC } from "react";
import ProviderLogo from "~/components/provider-logo";
import { TableCell, TableRow } from "~/components/ui/table";
import { ACCESS_MANAGER, VaultDef } from "~/lib/vaults";
import { Address as EthAddress } from "~/components/scaffold-eth";
import { Address, formatUnits, getAddress } from "viem";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useQuery } from "@urql/next";
import { TINTERO_DELEGATES } from "./requests.gql";
import { useReadContract } from "wagmi";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

const VaultRow: FC<{ vault: VaultDef }> = ({ vault }) => {
  const totalAssets = useReadContract({
    abi: TinteroVaultABI,
    address: getAddress(vault.address),
    functionName: "totalAssets",
  });
  const [delegatesRes] = useQuery({
    query: TINTERO_DELEGATES,
    variables: {
      roleId: vault.delegateRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vault,
  });
  const [managersRes] = useQuery({
    query: TINTERO_DELEGATES,
    variables: {
      roleId: vault.managerRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vault,
  });

  const managers = managersRes.data?.accessManagerMembers.items;
  const delegates = delegatesRes.data?.accessManagerMembers.items;

  return (
    <TableRow className="items-center">
      <TableCell className="font-bold flex items-center h-full">
        <Image
          src={vault.asset.icon}
          alt={vault.asset.name}
          width={36}
          height={36}
        />
        <span className="ml-4">{vault.asset.name}</span>
      </TableCell>
      <TableCell className="font-bold">
        <ProviderLogo provider={vault.provider} />
      </TableCell>
      <TableCell>
        {totalAssets.data ? (
          <span className="font-bold f">
            {formatUnits(totalAssets.data, 18)}
          </span>
        ) : (
          <span className="skeleton w-16 h-4 rounded-lg"></span>
        )}
      </TableCell>
      <TableCell>
        <div className="flex flex-col gap-3">
          {managers?.map(({ id }) => (
            <EthAddress
              key={id}
              address={id as Address}
              onlyEnsOrAddress
              size="xs"
            />
          ))}
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col gap-3">
          {delegates?.map(({ id }) => (
            <EthAddress
              key={id}
              address={id as Address}
              onlyEnsOrAddress
              size="xs"
            />
          ))}
        </div>
      </TableCell>
      <TableCell>
        <Link href={`/vaults/${vault.address}`}>
          <Button size="sm">
            <span>View</span>
            <ChevronRightIcon className="ml-1" />
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default VaultRow;
