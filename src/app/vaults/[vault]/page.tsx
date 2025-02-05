"use client";
import React, { useMemo } from "react";
import { TINTERO_VAULT } from "./requests.gql";
import { useParams } from "next/navigation";
import { useQuery } from "@urql/next";
import { Addreth, ThemeDeclaration } from "addreth";
import { Address, formatUnits } from "viem";
import { useTheme } from "next-themes";
import { useAppKitNetwork } from "@reown/appkit/react";
import useIsMounted from "~/hooks/use-is-mounted";
import vaults from "~/lib/vaults";
import ProviderLogo from "~/components/provider-logo";
import { useReadContract } from "wagmi";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";
import Deposit from "./_components/deposit";
import Redeem from "./_components/redeem";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge, Coins, Signature } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Spinner from "~/components/ui/spinner";

const Vault = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const { caipNetwork } = useAppKitNetwork();
  const { vault } = useParams();
  const [{ data, fetching }] = useQuery({
    query: TINTERO_VAULT,
    variables: {
      id: vault?.toString() ?? "",
    },
    pause: !vault,
  });
  const { data: name } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "name",
  });
  const { data: symbol } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const { data: asset } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "asset",
  });
  const { data: decimals } = useReadContract({
    address: asset as Address,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const { data: totalAssets } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalAssets",
  });
  const { data: sharesDecimal } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const { data: totalShares } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalSupply",
  });
  const { data: totalAssetsLent } = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalAssetsLent",
  });

  const vaultDef = useMemo(
    () => vaults.get(vault?.toString() as Address),
    [vault]
  );

  type LoanColumn = NonNullable<
    NonNullable<NonNullable<typeof data>["tinteroVault"]>["loans"]
  >["items"][0];

  const columns: ColumnDef<LoanColumn>[] = useMemo(
    () => [
      {
        accessorKey: "collateralAsset",
        header: () => <div>Collateral Asset</div>,
        cell: ({ row }) => (
          <Addreth
            address={row.original.collateralAsset as Address}
            theme={`unified-${theme}` as ThemeDeclaration}
            explorer={(address) => ({
              name: caipNetwork?.blockExplorers?.default.name ?? "Etherscan",
              accountUrl: `${caipNetwork?.blockExplorers?.default.url}/address/${address}`,
            })}
          />
        ),
      },
      {
        accessorKey: "beneficiary",
        header: () => <div>Beneficiary</div>,
        cell: ({ row }) => (
          <Addreth
            address={row.original.beneficiary as Address}
            theme={`unified-${theme}` as ThemeDeclaration}
            explorer={(address) => ({
              name: caipNetwork?.blockExplorers?.default.name ?? "Etherscan",
              accountUrl: `${caipNetwork?.blockExplorers?.default.url}/address/${address}`,
            })}
          />
        ),
      },
      {
        accessorKey: "defaultThreshold",
        header: "Default after missing",
        cell: ({ row }) => <div>{row.original.defaultThreshold} payments</div>,
      },
    ],
    [
      caipNetwork?.blockExplorers?.default.name,
      caipNetwork?.blockExplorers?.default.url,
      theme,
    ]
  );

  const table = useReactTable({
    data: data?.tinteroVault?.loans?.items ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const content = useMemo(
    () =>
      fetching ? (
        <TableRow>
          <TableCell colSpan={columns.length}>
            <Spinner className="my-4 flex justify-center" />
          </TableCell>
        </TableRow>
      ) : table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      ),
    [fetching, table, columns]
  );

  return (
    <>
      <div className="mx-2 mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            {name}
            <span className="font-medium ml-2 text-sm">({symbol})</span>
          </h2>
          {theme && isMounted() && (
            <Addreth
              shortenAddress={false}
              address={vault as Address}
              theme={`unified-${theme}` as ThemeDeclaration}
              explorer={(address) => ({
                name: caipNetwork?.blockExplorers?.default.name ?? "Etherscan",
                accountUrl: `${caipNetwork?.blockExplorers?.default.url}/address/${address}`,
              })}
            />
          )}
        </div>
        <div className="flex items-end space-x-4">
          <span className="text-muted-foreground text-small">Provider</span>
          {vaultDef?.provider && <ProviderLogo provider={vaultDef?.provider} />}
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4">
          <Tabs defaultValue="deposit">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="redeem">Redeem</TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <Deposit vault={vault as Address} underlying={asset as Address} />
            </TabsContent>
            <TabsContent value="redeem">
              <Redeem vault={vault as Address} underlying={asset as Address} />
            </TabsContent>
          </Tabs>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total assets
                </CardTitle>
                <Coins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {decimals ? (
                  <div className="text-2xl font-bold">
                    {Number(
                      formatUnits(BigInt(totalAssets ?? 0), decimals)
                    ).toFixed(2)}
                  </div>
                ) : null}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total shares
                </CardTitle>
                <Badge className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {sharesDecimal
                    ? Number(
                        formatUnits(BigInt(totalShares ?? 0), sharesDecimal)
                      ).toFixed(2)
                    : 0}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total assets lent
                </CardTitle>
                <Signature className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {decimals
                    ? Number(
                        formatUnits(BigInt(totalAssetsLent ?? 0), decimals)
                      ).toFixed(2)
                    : 0}
                </div>
              </CardContent>
            </Card>
          </div>
          <h2 className="text-2xl font-bold mt-4 ml-2">Loans</h2>
          <div className="rounded-md border mt-2">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>{content}</TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vault;
