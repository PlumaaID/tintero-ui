"use client";
import { useQuery } from "@urql/next";
import { useParams } from "next/navigation";
import { IS_MANAGER, TINTERO_LOAN } from "./requests.gql";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { Address as EthAddress } from "~/components/scaffold-eth";
import {
  BanknoteIcon,
  CheckIcon,
  ExternalLink,
  FileStack,
  InfoIcon,
  Rows3,
  X,
} from "lucide-react";
import { useReadContract } from "wagmi";
import { TinteroLoanABI } from "~/lib/abis/TinteroLoan";
import { Address, formatUnits, getAddress } from "viem";
import { Skeleton } from "~/components/ui/skeleton";
import { Badge } from "~/components/ui/badge";
import { getState, getStatus } from "~/lib/loan";
import { TinteroLoan } from "~/gql/graphql";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Spinner from "~/components/ui/spinner";
import { AddPaymentsModal } from "./_components/add-payments-modal";
import { Button } from "~/components/ui/button";
import { ERC20ABI } from "~/lib/abis/ERC20";
import Link from "next/link";
import { useAppKitAccount, useAppKitNetwork } from "@reown/appkit/react";
import { useIsMounted } from "usehooks-ts";
import vaults, { ACCESS_MANAGER } from "~/lib/vaults";
import FundNModal from "./_components/fund-n-modal";
import { AddTranchesModal } from "./_components/add-tranches-modal";
import { format } from "date-fns";

const Loan = () => {
  const [blockExplorerUrl, setBlockExplorerUrl] = useState<string>("");
  const { caipNetwork } = useAppKitNetwork();
  const { address } = useAppKitAccount();
  const [addPaymentsModalOpen, setAddPaymentsModalOpen] = useState(false);
  const [fundNModalOpen, setFundNModalOpen] = useState(false);
  const [addTranchesModalOpen, setAddTranchesModalOpen] = useState(false);
  const { loan: rawLoan } = useParams();
  const loanAddress = getAddress(rawLoan as string) as Address;
  const liquidityProvider = useReadContract({
    address: loanAddress,
    abi: TinteroLoanABI,
    functionName: "liquidityProvider",
  });
  const asset = useReadContract({
    address: loanAddress,
    abi: TinteroLoanABI,
    functionName: "lendingAsset",
  });
  const assetDecimals = useReadContract({
    address: asset.data as Address,
    abi: ERC20ABI,
    functionName: "decimals",
  });
  const assetSymbol = useReadContract({
    address: asset.data as Address,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const state = useReadContract({
    address: loanAddress,
    abi: TinteroLoanABI,
    functionName: "state",
  });
  const vaultDef = vaults.get(liquidityProvider.data?.toLowerCase() as Address);
  const [isManagerRes] = useQuery({
    query: IS_MANAGER,
    variables: {
      id: address?.toLowerCase() as string,
      roleId: vaultDef?.managerRole.toString(),
      managerId: ACCESS_MANAGER,
    },
    pause: !vaultDef || !address,
  });
  const totalTranches = useReadContract({
    address: loanAddress,
    abi: TinteroLoanABI,
    functionName: "totalTranches",
  });
  const lastTranche = useReadContract({
    address: loanAddress,
    abi: TinteroLoanABI,
    functionName: "tranche",
    args: [(totalTranches.data ?? BigInt(1)) - BigInt(1)],
  });

  const [{ data, fetching }, refetch] = useQuery({
    query: TINTERO_LOAN,
    variables: {
      id: loanAddress.toLowerCase(),
    },
    pause: !loanAddress,
  });

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted())
      setBlockExplorerUrl(`${caipNetwork?.blockExplorers?.default.url}/nft`);
  }, [caipNetwork?.blockExplorers?.default.url, isMounted]);

  const tinteroLoan = data?.tinteroLoan;

  type PaymentColumn = NonNullable<
    NonNullable<NonNullable<typeof data>["tinteroLoan"]>["payments"]
  >["items"][0];

  const columns: ColumnDef<PaymentColumn>[] = useMemo(
    () => [
      {
        accessorKey: "index",
        header: "#",
        cell: ({ row }) => (
          <p className="text-sm text-muted-foreground">
            {Number(row.original.index) + 1}
          </p>
        ),
      },
      {
        accessorKey: "principal",
        header: "Principal",
        cell: ({ row }) => (
          <p className="text-sm font-semibold text-accent-foreground whitespace-nowrap">
            {formatUnits(row.original.principal, assetDecimals.data as number)}{" "}
            {assetSymbol.data}
          </p>
        ),
      },
      {
        accessorKey: "fundedAt",
        header: "Funded",
        cell: ({ row }) => {
          if (!Number(row.original.fundedAt))
            return <Badge variant="outline">N/A</Badge>;
          return (
            <Badge variant="outline">
              {format(new Date(row.original.fundedAt * 1000), "yyyy-MM-dd")}
            </Badge>
          );
        },
      },
      {
        accessorKey: "maturityPeriod",
        header: "Maturity",
        cell: ({ row }) => {
          if (!Number(row.original.fundedAt))
            return (
              <Badge variant="outline">
                N/A{" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-3 h-3" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        Will be set to {row.original.maturityPeriod} seconds
                        after funding
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Badge>
            );

          return (
            <Badge variant="outline">
              {format(
                new Date(
                  (Number(row.original.fundedAt) +
                    Number(row.original.maturityPeriod)) *
                    1000
                ),
                "yyyy-MM-dd"
              )}
            </Badge>
          );
        },
      },
      {
        accessorKey: "gracePeriod",
        header: "Default",
        cell: ({ row }) => {
          if (!Number(row.original.fundedAt))
            return (
              <Badge variant="outline">
                N/A{" "}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-3 h-3" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        Will be set to {row.original.gracePeriod} seconds after
                        maturity
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Badge>
            );

          return (
            <Badge variant="outline">
              {format(
                new Date(
                  (Number(row.original.fundedAt) +
                    Number(row.original.maturityPeriod) +
                    Number(row.original.gracePeriod)) *
                    1000
                ),
                "yyyy-MM-dd"
              )}
            </Badge>
          );
        },
      },
      {
        accessorKey: "interestRate",
        header: () => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <p className="whitespace-nowrap">Interest</p>
                <InfoIcon className="ml-2 w-3 h-3" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>Regular / Premium</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p>R {row.original.interestRate / 1e4}%</p>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>Linear interest rate that acrues since the funded date.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            -
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p>P {row.original.premiumRate / 1e4}%</p>
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    Linear interest rate that acrues since the maturity date.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ),
      },
      {
        accessorKey: "trancheIndex",
        header: "Tranche",
        cell: ({ row }) => {
          if (!row.original.trancheIndex)
            return (
              <Badge variant="outline">
                N/A
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-3 h-3" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The vault manager has not yet assigned a tranche to this
                        payment.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Badge>
            );
          return <Badge variant="outline">{row.original.trancheIndex}</Badge>;
        },
      },
      {
        accessorKey: "funded",
        header: () => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="flex items-center">
                <p className="whitespace-nowrap">F / P / C / R</p>
                <InfoIcon className="ml-2 w-3 h-3" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>Funded / Paid / Cancelled / Repossessed</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        cell: ({ row }) => (
          <div className="flex items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {row.original.funded ? (
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    {row.original.funded
                      ? "Payment has been funded"
                      : "Payment has not been funded"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {row.original.paid ? (
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    {row.original.paid
                      ? `Payment has been paid back with ${formatUnits(
                          row.original.interestPaid,
                          assetDecimals.data as number
                        )} ${
                          assetSymbol.data
                        } paid in interest and ${formatUnits(
                          row.original.premiumInterestPaid,
                          assetDecimals.data as number
                        )} ${assetSymbol.data} paid in premium interest`
                      : "Payment has not been paid back"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {row.original.withdrawn ? (
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    {row.original.withdrawn
                      ? "Payment has been cancelled"
                      : "Payment has not been cancelled"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {row.original.repossessed ? (
                    <CheckIcon className="w-5 h-5 text-green-600" />
                  ) : (
                    <X className="w-5 h-5 text-red-600" />
                  )}
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    {row.original.withdrawn
                      ? `Payment has been repossessed and sent to ${row.original.repossessionRecipient}`
                      : "Payment has not been repossessed"}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ),
      },
      {
        accessorKey: "collateralId",
        header: "Collateral",
        cell: ({ row }) => (
          <Link
            href={`${blockExplorerUrl}/${tinteroLoan?.collateralAsset}/${row.original.collateralId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" variant="link">
              View in Explorer <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        ),
      },
    ],
    [
      assetDecimals.data,
      assetSymbol.data,
      blockExplorerUrl,
      tinteroLoan?.collateralAsset,
    ]
  );

  const table = useReactTable({
    data: data?.tinteroLoan?.payments?.items ?? [],
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
    <div>
      <div className="grid md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>About this loan</CardTitle>
              <CardDescription>
                Information about the loan and its current status.
              </CardDescription>
            </CardHeader>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">Status</Label>
              <Badge>{getStatus(tinteroLoan as TinteroLoan)}</Badge>
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">Contract State</Label>
              {state.isFetching ? (
                <Skeleton className="h-6 w-[160px]" />
              ) : (
                <Badge>{getState(state.data as number)}</Badge>
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Vault
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The lending pool that provides the loan. The vault
                        manager is responsible for approving loan requests.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {liquidityProvider?.isFetching ? (
                <Skeleton className="h-6 w-[160px]" />
              ) : (
                <EthAddress
                  address={liquidityProvider.data}
                  onlyEnsOrAddress
                  size="sm"
                />
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Beneficiary
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The entity that receives the loan. The beneficiary is
                        responsible for repaying the loan with interest.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {tinteroLoan?.beneficiary && !fetching ? (
                <EthAddress
                  address={tinteroLoan.beneficiary as Address}
                  onlyEnsOrAddress
                  size="sm"
                />
              ) : (
                <Skeleton className="h-6 w-[160px]" />
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Collateral Asset
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The asset that the borrower provides as collateral for
                        the loan. The collateral asset is used to secure the
                        loan in case of default.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {tinteroLoan?.collateralAsset && !fetching ? (
                <EthAddress
                  address={tinteroLoan.collateralAsset as Address}
                  onlyEnsOrAddress
                  size="sm"
                />
              ) : (
                <Skeleton className="h-6 w-[160px]" />
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Asset
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The principal asset that the borrower receives as a
                        loan.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {asset.data ? (
                <EthAddress
                  address={asset.data as Address}
                  onlyEnsOrAddress
                  size="sm"
                />
              ) : (
                <Skeleton className="h-6 w-[160px]" />
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Default threshold
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The amount of missed payments after the loan is
                        considered in default. The default threshold is used to
                        trigger repossession of the collateral asset.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {tinteroLoan?.defaultThreshold && !fetching ? (
                <>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="flex items-center">
                          <span>{tinteroLoan.defaultThreshold}</span>
                          <InfoIcon className="ml-2 w-4 h-4" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px]">
                        <p>
                          {tinteroLoan.defaultAt ? (
                            <span>
                              Defaults at{" "}
                              {new Date(tinteroLoan.defaultAt).toLocaleString()}{" "}
                              if no payments are made.
                            </span>
                          ) : (
                            <span>
                              The loan can&apos;t default (not enough payments)
                            </span>
                          )}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              ) : (
                <Skeleton className="h-6 w-[160px]" />
              )}
            </CardContent>
            <CardContent className="my-2 flex justify-between items-center">
              <Label className="text-md font-semibold">
                Total / Funded / Paid
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <InfoIcon className="ml-2 w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-[300px]">
                      <p>
                        The total amount of payments scheduled for the loan,
                        followed by the total amount of payments funded, and the
                        total amount of payments repaid.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {tinteroLoan && !fetching ? (
                <span>
                  {tinteroLoan.payments?.totalCount} / {tinteroLoan.totalFunded}{" "}
                  / {tinteroLoan.totalPaid}
                </span>
              ) : (
                <Skeleton className="h-6 w-[160px]" />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold mb-2 mr-4 mr-auto">Loan</h2>
            <div className="flex gap-2">
              {isManagerRes.data?.accessManagerMember?.id ? (
                <Button size="sm" onClick={() => setAddTranchesModalOpen(true)}>
                  Add tranches <Rows3 className="w-4 h-4" />
                </Button>
              ) : null}
              {isManagerRes.data?.accessManagerMember?.id ? (
                <Button size="sm" onClick={() => setFundNModalOpen(true)}>
                  Fund payments <BanknoteIcon className="w-4 h-4" />
                </Button>
              ) : null}
            </div>
          </div>
          <EthAddress
            format="long"
            address={loanAddress as Address}
            onlyEnsOrAddress
          />
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold my-4">Payment Schedule</h3>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setAddPaymentsModalOpen(true)}
            >
              Add collateralized payments <FileStack className="w-4 h-4" />
            </Button>
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
      <AddPaymentsModal
        open={addPaymentsModalOpen}
        toggleOpen={setAddPaymentsModalOpen}
        decimals={assetDecimals.data as number}
        symbol={assetSymbol.data as string}
        loan={loanAddress as Address}
        collateralAsset={tinteroLoan?.collateralAsset as Address}
        vault={liquidityProvider.data as Address}
        onAdd={refetch}
      />
      <FundNModal
        open={fundNModalOpen}
        toggleOpen={setFundNModalOpen}
        totalPayments={tinteroLoan?.payments?.totalCount as number}
        loan={loanAddress as Address}
        vault={liquidityProvider.data as Address}
        onFund={refetch}
      />
      <AddTranchesModal
        open={addTranchesModalOpen}
        toggleOpen={setAddTranchesModalOpen}
        totalPayments={tinteroLoan?.payments?.totalCount as number}
        loan={loanAddress as Address}
        vault={liquidityProvider.data as Address}
        onAdd={refetch}
        lastTranchedPaymentIndex={lastTranche?.data?.[0] ?? BigInt(0)}
      />
    </div>
  );
};

export default Loan;
