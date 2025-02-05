import { useAppKitAccount } from "@reown/appkit/react";
import { Loader2 } from "lucide-react";
import { ComponentProps, FC, useMemo, useState } from "react";
import { Address, formatUnits, parseUnits } from "viem";
import { useReadContract, useWriteContract } from "wagmi";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Skeleton } from "~/components/ui/skeleton";
import { ERC20ABI } from "~/lib/abis/ERC20";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

interface RedeemProps extends ComponentProps<typeof Card> {
  vault: Address;
  underlying: Address;
}

const Redeem: FC<RedeemProps> = ({ vault, underlying, ...props }) => {
  const { address } = useAppKitAccount();
  const [amount, setAmount] = useState("");
  const { data: assetSymbol } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const { data: assetDecimals } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "decimals",
  });
  const { data: symbol } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const { data: balance } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "balanceOf",
    args: [address as Address],
  });
  const { data: decimals } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const amountWithDecimals = useMemo(
    () => parseUnits(amount, decimals ?? 0),
    [amount, decimals]
  );
  const { data: previewRedeem } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "previewRedeem",
    args: [BigInt(amountWithDecimals ?? 0)],
  });
  const { writeContract, isPending } = useWriteContract();

  const handleRedeem = async () => {
    writeContract({
      address: vault,
      abi: TinteroVaultABI,
      functionName: "redeem",
      args: [
        BigInt(amountWithDecimals ?? 0),
        address as Address,
        address as Address,
      ],
    });
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Redeem {symbol}</CardTitle>
        <CardDescription>
          Get {assetSymbol} assets after redeeming your {symbol} shares from the
          vault.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <div className="flex w-full items-center space-x-2">
              <Input
                id="amount"
                placeholder="0.00"
                className="py-6 px-4 md:text-xl text-bold"
                value={amount}
                onChange={(e) => {
                  if (!decimals) return;
                  if (e.target.value === "") return setAmount("");
                  const newValue = e.target.value;
                  const newAmount = formatUnits(
                    parseUnits(newValue, decimals),
                    decimals
                  );
                  setAmount(
                    newValue.endsWith(".") ? `${newAmount}.` : newAmount
                  );
                }}
              />
              <span>{symbol}</span>
            </div>
            {previewRedeem ? (
              assetDecimals ? (
                <span className="text-muted-foreground text-xs mt-2">
                  You will receive{" "}
                  {Number(
                    formatUnits(BigInt(previewRedeem ?? 0), assetDecimals)
                  ).toFixed(2)}{" "}
                  {assetSymbol}
                </span>
              ) : (
                <Skeleton className="h-4 w-[250px]" />
              )
            ) : null}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          disabled={
            parseUnits(amount, decimals ?? 0) === BigInt(0) ||
            isPending ||
            balance === BigInt(0)
          }
          className="w-full"
          onClick={handleRedeem}
        >
          {balance === BigInt(0) ? (
            "No balance to redeem"
          ) : isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            `Redeem ${assetSymbol}`
          )}
        </Button>
        {balance && decimals ? (
          <span className="text-muted-foreground text-xs mt-2">
            Balance:{" "}
            {Number(formatUnits(BigInt(balance ?? 0), decimals)).toFixed(2)}{" "}
            {symbol}
          </span>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default Redeem;
