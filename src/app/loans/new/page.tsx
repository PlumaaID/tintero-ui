"use client";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { useAppKitAccount } from "@reown/appkit/react";
import { randomBytes } from "crypto";
import { InfoIcon, Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import { Address, Hex } from "viem";
import {
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { Address as EthAddress } from "~/components/scaffold-eth";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Label } from "~/components/ui/label";
import { NumericScrubber } from "~/components/ui/number-scrubber";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "~/components/ui/tooltip";
import { ERC20ABI } from "~/lib/abis/ERC20";
import collateralCollections from "~/lib/collateral-collections";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";
import { toast } from "sonner";

const NewLoan = () => {
  const { address } = useAppKitAccount();
  const [defaultThreshold, setDefaultThreshold] = useState<number>(0);
  const [collateralCollection, setCollateralCollection] = useState<Address>();
  const params = useSearchParams();
  const { push } = useRouter();

  const writeRequestLoan = useWriteContract();
  const requestLoanReceipt = useWaitForTransactionReceipt({
    hash: writeRequestLoan.data,
  });

  const salt = useMemo(() => "0x" + randomBytes(32).toString("hex"), []);

  const asset = useReadContract({
    address: params.get("vault") as Address,
    abi: TinteroVaultABI,
    functionName: "asset",
  });
  const assetName = useReadContract({
    address: asset.data as Address,
    abi: ERC20ABI,
    functionName: "name",
  });
  const assetSymbol = useReadContract({
    address: asset.data as Address,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const loanAddress = useReadContract({
    address: params.get("vault") as Address,
    abi: TinteroVaultABI,
    functionName: "predictLoanAddress",
    args: [
      collateralCollection as Address,
      address as Address,
      defaultThreshold,
      salt as Hex,
      address as Address,
    ],
  });

  useEffect(() => {
    if (requestLoanReceipt.isSuccess) {
      toast.success("Loan requested successfully");
      push(`/loans/${loanAddress.data?.[0]}`);
    }
  }, [loanAddress.data, push, requestLoanReceipt.isSuccess]);

  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Request a loan</CardTitle>
          <CardDescription>
            You can submit a loan request to the vault. Approval is subject to
            the vault&apos;s manager.
          </CardDescription>
        </CardHeader>
        <CardContent className="my-2 flex justify-between items-center">
          <Label className="text-md font-semibold">
            Vault
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The entity that funds the loan. The vault receives liquidity
                    from accredited investors to fund these loans.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <EthAddress
            address={params.get("vault") as Address}
            onlyEnsOrAddress
          />
        </CardContent>
        <CardContent className="my-2 flex justify-between items-center">
          <Label className="text-md font-semibold">
            Principal asset
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The principal currency of the loan. The vault will lend this
                    asset to the beneficiary.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <div>
            <EthAddress address={asset.data as Address} onlyEnsOrAddress />
            <span className="text-sm text-gray-500 text-right">
              {assetName.data} ({assetSymbol.data})
            </span>
          </div>
        </CardContent>
        <CardContent className="my-2 flex justify-between items-center">
          <Label className="text-md font-semibold flex items-center">
            Default threshold
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    How many payments the beneficiary needs to miss before the
                    loan is considered defaulted
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <NumericScrubber
            value={defaultThreshold}
            onChange={setDefaultThreshold}
          />
        </CardContent>
        <CardContent className="my-2 flex justify-between items-center">
          <Label className="text-md font-semibold flex items-center">
            Collateral collection
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The collection of collateral assets that the beneficiary
                    will use to secure the loan.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Select
            value={collateralCollection}
            onValueChange={(value: Address) => setCollateralCollection(value)}
          >
            <SelectTrigger className="max-w-[300px]">
              <SelectValue placeholder="Select a collateral collection" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Array.from(collateralCollections.values()).map(
                  (collateralCollection) => (
                    <SelectItem
                      key={collateralCollection.address}
                      value={collateralCollection.address}
                    >
                      <div className="flex items-center">
                        {
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={collateralCollection.icon}
                            alt={collateralCollection.name}
                            className="w-6 h-6 mr-2"
                          />
                        }
                        {collateralCollection.name}
                      </div>
                    </SelectItem>
                  )
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter>
          <Button
            disabled={
              !collateralCollection ||
              !address ||
              requestLoanReceipt.isLoading ||
              writeRequestLoan.isPending
            }
            className="w-full"
            onClick={() => {
              writeRequestLoan.writeContract({
                address: params.get("vault") as Address,
                functionName: "requestLoan",
                abi: TinteroVaultABI,
                args: [
                  collateralCollection as Address,
                  address as Address,
                  defaultThreshold,
                  [],
                  [],
                  salt as Hex,
                ],
              });
            }}
          >
            {requestLoanReceipt.isLoading || writeRequestLoan.isPending ? (
              <>
                {writeRequestLoan.isPending
                  ? "Sign request"
                  : requestLoanReceipt.isLoading
                  ? "Requesting"
                  : ""}
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Request loan"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const SuspenseWrapperNewLoan = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NewLoan />
  </Suspense>
);

export default SuspenseWrapperNewLoan;
