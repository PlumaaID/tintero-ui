"use client";
import React, { useMemo, useState } from "react";
import { IS_DELEGATE, TINTERO_DELEGATES, TINTERO_VAULT } from "./requests.gql";
import { useParams } from "next/navigation";
import { useQuery } from "@urql/next";
import { Address, formatUnits, getAddress } from "viem";
import { useTheme } from "next-themes";
import useIsMounted from "~/hooks/use-is-mounted";
import vaults, { ACCESS_MANAGER } from "~/lib/vaults";
import ProviderLogo from "~/components/provider-logo";
import { useReadContract } from "wagmi";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";
import Deposit from "./_components/deposit";
import Redeem from "./_components/redeem";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  BadgeIcon,
  ChevronRight,
  Coins,
  HandCoins,
  HandCoinsIcon,
  Signature,
} from "lucide-react";
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
import { Address as EthAddress } from "~/components/scaffold-eth";
import { Skeleton } from "~/components/ui/skeleton";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { getStatus } from "~/lib/loan";
import { TinteroLoan } from "~/gql/graphql";
import { useAppKitAccount } from "@reown/appkit/react";
import AskDelegationModal from "./_components/ask-delegation-modal";

const Vault = () => {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const [askDelegationModalOpen, setAskDelegationModalOpen] = useState(false);
  const { vault: rawVault } = useParams();
  const vault = getAddress(rawVault as string) as Address;
  const { address } = useAppKitAccount();
  const vaultDef = useMemo(
    () => vaults.get(vault.toLowerCase() as Address),
    [vault]
  );
  const [{ data, fetching }] = useQuery({
    query: TINTERO_VAULT,
    variables: {
      id: vault.toLowerCase(),
    },
    pause: !vault,
  });
  const name = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "name",
  });
  const symbol = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const asset = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "asset",
  });
  const decimals = useReadContract({
    address: asset.data as Address,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const totalAssets = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalAssets",
  });
  const sharesDecimal = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const totalShares = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalSupply",
  });
  const totalAssetsLent = useReadContract({
    address: vault as Address,
    abi: TinteroVaultABI,
    functionName: "totalAssetsLent",
  });
  const [delegatesRes] = useQuery({
    query: TINTERO_DELEGATES,
    variables: {
      roleId: vaultDef?.delegateRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vaultDef,
  });
  const [managersRes] = useQuery({
    query: TINTERO_DELEGATES,
    variables: {
      roleId: vaultDef?.managerRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vaultDef,
  });
  const [isDelegateRes] = useQuery({
    query: IS_DELEGATE,
    variables: {
      id: address?.toLowerCase() as string,
      roleId: vaultDef?.delegateRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vaultDef || !address,
  });

  const managers = managersRes.data?.accessManagerMembers.items;
  const delegates = delegatesRes.data?.accessManagerMembers.items;

  type LoanColumn = NonNullable<
    NonNullable<NonNullable<typeof data>["tinteroVault"]>["loans"]
  >["items"][0];

  const columns: ColumnDef<LoanColumn>[] = useMemo(
    () => [
      {
        accessorKey: "beneficiary",
        header: () => <div>Beneficiary</div>,
        cell: ({ row }) => (
          <EthAddress
            address={row.original.beneficiary as Address}
            onlyEnsOrAddress
          />
        ),
      },
      {
        accessorKey: "collateralAsset",
        header: () => <div>Collateral Asset</div>,
        cell: ({ row }) => (
          <EthAddress
            address={row.original.collateralAsset as Address}
            onlyEnsOrAddress
          />
        ),
      },
      {
        accessorKey: "defaultThreshold",
        header: "Default after missing",
        cell: ({ row }) => <div>{row.original.defaultThreshold} payments</div>,
      },
      {
        accessorKey: "payments.totalCount",
        header: "Payments",
      },
      {
        accessorKey: "totalFunded",
        header: "Funded",
      },
      {
        accessorKey: "totalPaid",
        header: "Repaid",
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
          return <Badge>{getStatus(row.original as TinteroLoan)}</Badge>;
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          return (
            <Link href={`/loans/${row.original.id}`}>
              <Button size="sm" variant="outline">
                <span>View</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          );
        },
      },
    ],
    []
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
          {name.data && symbol.data ? (
            <div className="flex items-center space-x-4">
              <h2 className="text-3xl font-bold mb-2">
                {name.data}
                <span className="font-medium ml-2 text-sm">
                  ({symbol.data})
                </span>
              </h2>
              {isDelegateRes.data?.accessManagerMember?.id ? (
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setAskDelegationModalOpen(true)}
                >
                  Ask delegation <HandCoins className="w-4 h-4" />
                </Button>
              ) : null}
            </div>
          ) : (
            <Skeleton className="h-8 my-2 w-[400px]" />
          )}

          {theme && isMounted() ? (
            <EthAddress
              onlyEnsOrAddress
              format="long"
              size="lg"
              address={vault as Address}
            />
          ) : (
            <Skeleton className="h-6 my-2 w-[600px]" />
          )}
        </div>
        <div className="flex items-end space-x-4">
          <span className="text-muted-foreground text-small">Provider</span>
          {vaultDef?.provider && <ProviderLogo provider={vaultDef?.provider} />}
        </div>
      </div>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Tabs defaultValue="deposit">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="redeem">Redeem</TabsTrigger>
            </TabsList>
            {asset.data && vault ? (
              <>
                <TabsContent value="deposit">
                  <Deposit
                    onDeposit={() => {}}
                    vault={vault as Address}
                    underlying={asset.data as Address}
                  />
                </TabsContent>
                <TabsContent value="redeem">
                  <Redeem
                    vault={vault as Address}
                    underlying={asset.data as Address}
                  />
                </TabsContent>
              </>
            ) : (
              <Skeleton className="h-60 mt-4 w-full" />
            )}
            <Card className="mt-3">
              <CardHeader>
                <CardTitle>Managers</CardTitle>
                <CardDescription>
                  Managers can fund loan requests, specify tranches, repossess
                  collateral and renegotiate terms of each loan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {managers?.map(({ id }) => (
                  <EthAddress
                    key={id}
                    address={id as Address}
                    onlyEnsOrAddress
                  />
                ))}
              </CardContent>
            </Card>
            <Card className="mt-3">
              <CardHeader>
                <CardTitle>Delegates</CardTitle>
                <CardDescription>
                  Delegates can ask for assets from the vault to maximize the
                  yield of the assets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {delegates?.map(({ id }) => (
                  <EthAddress
                    key={id}
                    address={id as Address}
                    onlyEnsOrAddress
                  />
                ))}
              </CardContent>
            </Card>
          </Tabs>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="grid auto-rows-min gap-6 md:grid-cols-3 mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total assets
                </CardTitle>
                <Coins className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {decimals.data ? (
                  <div className="text-2xl font-bold">
                    {parseFloat(
                      Number(
                        formatUnits(
                          BigInt(totalAssets.data ?? 0),
                          decimals.data
                        )
                      ).toFixed(2)
                    )}
                  </div>
                ) : (
                  <Skeleton className="h-6 w-[100px]" />
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total shares
                </CardTitle>
                <BadgeIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {sharesDecimal.data ? (
                  <div className="text-2xl font-bold">
                    {parseFloat(
                      Number(
                        formatUnits(
                          BigInt(totalShares.data ?? 0),
                          sharesDecimal.data
                        )
                      ).toFixed(2)
                    )}
                  </div>
                ) : (
                  <Skeleton className="h-6 w-[100px]" />
                )}
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
                {decimals.data ? (
                  <div className="text-2xl font-bold">
                    {parseFloat(
                      Number(
                        formatUnits(
                          BigInt(totalAssetsLent.data ?? 0),
                          decimals.data
                        )
                      ).toFixed(2)
                    )}
                  </div>
                ) : (
                  <Skeleton className="h-6 w-[100px]" />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold ml-2">Loans</h2>
            <Link href={`/loans/new?vault=${vault}`}>
              <Button size="sm" variant="secondary">
                <span className="mr-2">Request a loan</span>
                <HandCoinsIcon className="h-4 w-4" />
              </Button>
            </Link>
          </div>
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
      {Number.isFinite(decimals.data) && symbol.data && (
        <AskDelegationModal
          open={askDelegationModalOpen}
          toggleOpen={setAskDelegationModalOpen}
          vault={vault}
          assetDecimals={decimals.data as number}
          assetSymbol={symbol.data as string}
        />
      )}
    </>
  );
};

export default Vault;
