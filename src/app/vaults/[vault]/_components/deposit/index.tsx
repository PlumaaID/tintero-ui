import { useAppKitAccount } from "@reown/appkit/react";
import { ComponentProps, FC, useMemo, useState } from "react";
import { Address, formatUnits, parseUnits } from "viem";
import { useReadContract } from "wagmi";
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
import { ERC20ABI } from "~/lib/abis/ERC20";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";
import { useWriteContract } from "wagmi";
import { Input } from "~/components/ui/input";
import { Skeleton } from "~/components/ui/skeleton";
import { Loader2 } from "lucide-react";

interface DepositProps extends ComponentProps<typeof Card> {
  vault: Address;
  underlying: Address;
}

const Deposit: FC<DepositProps> = ({ vault, underlying, ...props }) => {
  const { address } = useAppKitAccount();
  const [amount, setAmount] = useState<string>("");
  const { data: symbol } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const { data: decimals } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "decimals",
  });
  const amountWithDecimals = useMemo(
    () => parseUnits(amount, decimals ?? 0),
    [amount, decimals]
  );
  const { data: shareSymbol } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const { data: balance } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [address as Address],
  });
  const { data: shareDecimals } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const { data: previewDeposit } = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "previewDeposit",
    args: [BigInt(amountWithDecimals ?? 0)],
  });
  const { data: allowanceToVault } = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [address as Address, vault as Address],
  });

  const { writeContract, isPending } = useWriteContract();

  const handleDeposit = async () => {
    writeContract({
      address: vault,
      abi: TinteroVaultABI,
      functionName: "deposit",
      args: [BigInt(amountWithDecimals), address as Address],
    });
  };

  const handleApprove = async () => {
    writeContract({
      address: underlying,
      abi: ERC20ABI,
      functionName: "approve",
      args: [vault as Address, BigInt(amountWithDecimals)],
    });
  };

  const notEnoughApproved =
    BigInt(amountWithDecimals ?? 0) > BigInt(allowanceToVault ?? 0);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Deposit {symbol}</CardTitle>
        <CardDescription>
          Get {shareSymbol} shares redeemable for {symbol} by depositing into
          the vault.
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
            {previewDeposit ? (
              shareDecimals ? (
                <span className="text-muted-foreground text-xs mt-2">
                  You will receive{" "}
                  {Number(
                    formatUnits(BigInt(previewDeposit ?? 0), shareDecimals)
                  ).toFixed(2)}{" "}
                  {shareSymbol} shares
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
          size="lg"
          disabled={
            parseUnits(amount, decimals ?? 0) === BigInt(0) ||
            isPending ||
            balance === BigInt(0)
          }
          className="w-full"
          onClick={notEnoughApproved ? handleApprove : handleDeposit}
        >
          {isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : balance === BigInt(0) ? (
            "No balance to deposit"
          ) : notEnoughApproved ? (
            `Approve vault to spend ${symbol}`
          ) : (
            `Deposit ${symbol}`
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

export default Deposit;
