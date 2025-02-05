"use client";
import { Card } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useTheme } from "next-themes";
import { Address } from "viem";
import { Button } from "~/components/ui/button";
import Stats from "~/components/stats";
import {
  BriefcaseBusiness,
  ChartNoAxesColumn,
  ChevronRightIcon,
  Coins,
  DollarSign,
  PaintBucket,
  SquareStack,
} from "lucide-react";
import Link from "next/link";
import vaults from "~/lib/vaults";
import Image from "next/image";
import { useMemo } from "react";
import ProviderLogo from "~/components/provider-logo";
import { Address as EthAddress } from "~/components/scaffold-eth";

export default function Vaults() {
  const { theme } = useTheme();
  const vaultValues = useMemo(() => Array.from(vaults.values()), []);

  return (
    <>
      <Stats />
      <div className="mx-2 my-4">
        <h2 className="text-2xl font-bold">Deposit on a vault</h2>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center">
                  <Coins className="w-4 h-4 mr-2" />
                  Asset
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <PaintBucket className="w-4 h-4 mr-2" />
                  Provider
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Total Supply
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <ChartNoAxesColumn className="w-4 h-4 mr-2" /> 30-day APY
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <BriefcaseBusiness className="w-4 h-4 mr-2" /> Manager
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  <SquareStack className="w-4 h-4 mr-2" /> Actions
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vaultValues.map((vault) => (
              <TableRow className="cursor-pointer" key={vault.provider}>
                <TableCell className="font-bold">
                  <Image
                    src={vault.asset.icon}
                    alt={vault.asset.name}
                    width={26}
                    height={26}
                  />
                </TableCell>
                <TableCell className="font-bold">
                  <ProviderLogo provider={vault.provider} />
                </TableCell>
                <TableCell className="font-medium">
                  <Button variant="ghost">{vault.totalSupply}</Button>
                </TableCell>
                <TableCell className="font-medium">{vault.netApy}</TableCell>
                <TableCell>
                  {theme && (
                    <EthAddress
                      address={vault.manager as Address}
                      onlyEnsOrAddress
                    />
                  )}
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
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
}
