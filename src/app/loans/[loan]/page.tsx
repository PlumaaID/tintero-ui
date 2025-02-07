"use client";
import { useQuery } from "@urql/next";
import { useParams } from "next/navigation";
import { TINTERO_LOAN } from "./requests.gql";
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
import { InfoIcon } from "lucide-react";
import { useReadContract } from "wagmi";
import { TinteroLoanABI } from "~/lib/abis/TinteroLoan";
import { Address, getAddress } from "viem";
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
import { useMemo, useState } from "react";
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

const Loan = () => {
  const [addPaymentsModalOpen, setAddPaymentsModalOpen] = useState(false);
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
  const [{ data, fetching }, refetch] = useQuery({
    query: TINTERO_LOAN,
    variables: {
      id: loanAddress.toLowerCase(),
    },
    pause: !loanAddress,
  });

  type PaymentColumn = NonNullable<
    NonNullable<NonNullable<typeof data>["tinteroLoan"]>["payments"]
  >["items"][0];

  const columns: ColumnDef<PaymentColumn>[] = useMemo(
    () => [
      {
        accessorKey: "index",
        header: "#",
      },
      {
        accessorKey: "collateralId",
        header: "Collateral ID",
      },
      {
        accessorKey: "principal",
        header: "Principal",
      },
      {
        accessorKey: "fundedAt",
        header: "Funded at",
      },
      {
        accessorKey: "maturityPeriod",
        header: "Maturity Period",
      },
      {
        accessorKey: "gracePeriod",
        header: "Gracie Period",
      },
      {
        accessorKey: "interestRate",
        header: "Interest Rate",
      },
      {
        accessorKey: "trancheIndex",
        header: "Tranche",
      },
      {
        accessorKey: "funded",
        header: "Funded",
      },
      {
        accessorKey: "paid",
        header: "Paid",
      },
      {
        accessorKey: "withdrawn",
        header: "Withdrawn",
      },
      {
        accessorKey: "repossessed",
        header: "Repossessed",
      },
      {
        accessorKey: "interestPaid",
        header: "Interest Paid",
      },
      {
        accessorKey: "premiumInterestPaid",
        header: "Premium Interest Paid",
      },
      {
        accessorKey: "repossessionRecipient",
        header: "Repossession Recipient",
      },
    ],
    []
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

  const tinteroLoan = data?.tinteroLoan;
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
                    <TooltipContent className="w-[300px]">
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
                <EthAddress address={liquidityProvider.data} onlyEnsOrAddress />
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
                    <TooltipContent className="w-[300px]">
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
                    <TooltipContent className="w-[300px]">
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
                    <TooltipContent className="w-[300px]">
                      <p>
                        The principal asset that the borrower receives as a
                        loan.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {asset.data ? (
                <EthAddress address={asset.data as Address} onlyEnsOrAddress />
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
                    <TooltipContent className="w-[300px]">
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
                      <TooltipContent className="w-[300px]">
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
                    <TooltipContent className="w-[300px]">
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
          <div className="flex">
            <h2 className="text-2xl font-bold mb-2 mr-4">Loan</h2>
            <EthAddress
              format="long"
              size="lg"
              address={loanAddress as Address}
              onlyEnsOrAddress
            />
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold my-4">Payment Schedule</h3>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setAddPaymentsModalOpen(true)}
            >
              Add collateralized payments
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
    </div>
  );
};

export default Loan;
