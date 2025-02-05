import { useAppKitAccount } from "@reown/appkit/react";
import { ComponentProps, FC, useMemo, useState } from "react";
import { Address, formatUnits } from "viem";
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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { ERC20ABI } from "~/lib/abis/ERC20";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";
import { useWriteContract } from "wagmi";

interface DepositProps extends ComponentProps<typeof Card> {
  vault: Address;
  underlying: Address;
}

const Deposit: FC<DepositProps> = ({ vault, underlying, ...props }) => {
  const { address } = useAppKitAccount();
  const [amount, setAmount] = useState("");
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
    () => BigInt(amount) * BigInt(10) ** BigInt(decimals ?? 0),
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

  const { writeContract } = useWriteContract();

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
            <Label htmlFor="amount">Amount ({symbol})</Label>
            <Input
              id="amount"
              placeholder="0.00"
              type="number"
              value={amount}
              onChange={(e) => {
                const amount = Number(e.target.value);
                if (Number.isFinite(amount)) setAmount(e.target.value);
              }}
            />
            {previewDeposit && shareDecimals ? (
              <span className="text-muted-foreground text-xs">
                You will receive{" "}
                {Number(
                  formatUnits(BigInt(previewDeposit ?? 0), shareDecimals)
                ).toFixed(2)}{" "}
                {shareSymbol} shares
              </span>
            ) : null}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          disabled={BigInt(amount ?? 0) === BigInt(0)}
          className="w-full"
          onClick={notEnoughApproved ? handleApprove : handleDeposit}
        >
          {notEnoughApproved
            ? `Approve vault to spend ${symbol}`
            : `Deposit ${symbol}`}
        </Button>
        {balance && decimals && (
          <span className="text-muted-foreground text-xs mt-2">
            Balance:{" "}
            {Number(formatUnits(BigInt(balance ?? 0), decimals)).toFixed(2)}{" "}
            {symbol}
          </span>
        )}
      </CardFooter>
    </Card>
  );
};

export default Deposit;
