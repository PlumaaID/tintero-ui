import { useAppKitAccount } from "@reown/appkit/react";
import {
  ComponentProps,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Address, formatUnits, parseUnits } from "viem";
import { useReadContract, useWaitForTransactionReceipt } from "wagmi";
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
import { toast } from "sonner";

interface DepositProps extends ComponentProps<typeof Card> {
  vault: Address;
  underlying: Address;
  onDeposit?: () => void;
}

const Deposit: FC<DepositProps> = ({
  vault,
  underlying,
  onDeposit,
  ...props
}) => {
  const { address } = useAppKitAccount();
  const [amount, setAmount] = useState<string>("");
  const [approved, setApproved] = useState(false);
  const [deposited, setDeposited] = useState(false);
  const symbol = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const decimals = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "decimals",
  });
  const amountWithDecimals = useMemo(
    () => parseUnits(amount, decimals.data ?? 0),
    [amount, decimals]
  );
  const shareSymbol = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const balance = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "balanceOf",
    args: [address as Address],
  });
  const shareDecimals = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const previewDeposit = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "previewDeposit",
    args: [BigInt(amountWithDecimals ?? 0)],
  });
  const allowanceToVault = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "allowance",
    args: [address as Address, vault as Address],
  });

  const deposit = useWriteContract();
  const approve = useWriteContract();

  const handleDeposit = useCallback(async () => {
    deposit.writeContract({
      address: vault,
      abi: TinteroVaultABI,
      functionName: "deposit",
      args: [BigInt(amountWithDecimals), address as Address],
    });
  }, [deposit, vault, amountWithDecimals, address]);

  const handleApprove = async () => {
    approve.writeContract({
      address: underlying,
      abi: ERC20ABI,
      functionName: "approve",
      args: [vault as Address, BigInt(amountWithDecimals)],
    });
  };

  const approveReceipt = useWaitForTransactionReceipt({
    hash: approve.data,
  });
  const depositReceipt = useWaitForTransactionReceipt({
    hash: deposit.data,
  });

  const loading =
    deposit.isPending ||
    approve.isPending ||
    depositReceipt.isLoading ||
    approveReceipt.isLoading;

  useEffect(() => {
    if (approveReceipt.isSuccess && !approved) {
      allowanceToVault.refetch();
      setApproved(true);
      handleDeposit();
      toast.success("Approval successful");
    }
  }, [approveReceipt.isSuccess, allowanceToVault, handleDeposit, approved]);

  const restart = useCallback(() => {
    setApproved(false);
    setDeposited(false);
    approve.reset();
    deposit.reset();
  }, [approve, deposit]);

  useEffect(() => {
    if (depositReceipt.isSuccess && !deposited) {
      setAmount("");
      setDeposited(true);
      onDeposit?.();
      restart();
      toast.success("Deposit successful");
    }
  }, [
    depositReceipt.isSuccess,
    allowanceToVault,
    deposited,
    restart,
    onDeposit,
  ]);

  const notEnoughApproved =
    BigInt(amountWithDecimals ?? 0) > BigInt(allowanceToVault.data ?? 0);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Deposit {symbol.data}</CardTitle>
        <CardDescription>
          Get {shareSymbol.data} shares redeemable for {symbol.data} by
          depositing into the vault.
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
                  if (!decimals.data) return;
                  if (e.target.value === "") return setAmount("");
                  const newValue = e.target.value;
                  const newAmount = formatUnits(
                    parseUnits(newValue, decimals.data),
                    decimals.data
                  );
                  setAmount(
                    newValue.endsWith(".") ? `${newAmount}.` : newAmount
                  );
                }}
              />
              <span>{symbol.data}</span>
            </div>
            {amountWithDecimals ? (
              previewDeposit.data && shareDecimals.data ? (
                <span className="text-muted-foreground text-xs mt-2">
                  You will receive{" "}
                  {Number(
                    formatUnits(
                      BigInt(previewDeposit.data ?? 0),
                      shareDecimals.data
                    )
                  ).toFixed(2)}{" "}
                  {shareSymbol.data} shares
                </span>
              ) : (
                <Skeleton className="h-4 mt-2 w-[250px]" />
              )
            ) : null}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <Button
          size="lg"
          disabled={
            parseUnits(amount, decimals.data ?? 0) === BigInt(0) ||
            loading ||
            balance.data === BigInt(0)
          }
          className="w-full"
          onClick={notEnoughApproved ? handleApprove : handleDeposit}
        >
          {loading ? (
            <>
              {approve.isPending
                ? "Sign approval"
                : approveReceipt.isLoading
                ? "Approving"
                : deposit.isPending
                ? "Sign deposit"
                : depositReceipt.isLoading
                ? "Depositing"
                : ""}
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : balance.data === BigInt(0) ? (
            "No balance to deposit"
          ) : notEnoughApproved ? (
            `Approve vault to spend ${symbol.data}`
          ) : (
            `Deposit ${symbol.data}`
          )}
        </Button>
        {balance.data && decimals.data ? (
          <span className="text-muted-foreground text-xs mt-2">
            Balance:{" "}
            {Number(
              formatUnits(BigInt(balance.data ?? 0), decimals.data)
            ).toFixed(2)}{" "}
            {symbol.data}
          </span>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default Deposit;
