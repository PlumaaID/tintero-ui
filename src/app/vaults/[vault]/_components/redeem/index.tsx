import { useAppKitAccount } from "@reown/appkit/react";
import { Loader2 } from "lucide-react";
import {
  ComponentProps,
  FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast } from "sonner";
import { Address, formatUnits, parseUnits } from "viem";
import {
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
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
  onRedeem?: () => void;
}

const Redeem: FC<RedeemProps> = ({ vault, underlying, onRedeem, ...props }) => {
  const { address } = useAppKitAccount();
  const [redeemed, setRedeemed] = useState(false);
  const [amount, setAmount] = useState("");
  const assetSymbol = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "symbol",
  });
  const assetDecimals = useReadContract({
    address: underlying,
    abi: ERC20ABI,
    functionName: "decimals",
  });
  const symbol = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "symbol",
  });
  const balance = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "balanceOf",
    args: [address as Address],
  });
  const decimals = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "decimals",
  });
  const amountWithDecimals = useMemo(
    () => parseUnits(amount, decimals.data ?? 0),
    [amount, decimals]
  );
  const previewRedeem = useReadContract({
    address: vault,
    abi: TinteroVaultABI,
    functionName: "previewRedeem",
    args: [BigInt(amountWithDecimals ?? 0)],
  });
  const redeem = useWriteContract();

  const handleRedeem = async () => {
    redeem.writeContract({
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

  const redeemReceipt = useWaitForTransactionReceipt({
    hash: redeem.data,
  });

  const loading = redeem.isPending || redeemReceipt.isLoading;

  const restart = useCallback(() => {
    setRedeemed(false);
    redeem.reset();
  }, [redeem]);

  useEffect(() => {
    if (redeemReceipt.isSuccess && !redeemed) {
      setAmount("");
      setRedeemed(true);
      onRedeem?.();
      restart();
      toast.success("Redemption successful");
    }
  }, [redeemReceipt.isSuccess, redeemed, restart, onRedeem]);

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Redeem {symbol.data}</CardTitle>
        <CardDescription>
          Get {assetSymbol.data} assets after redeeming your {symbol.data}{" "}
          shares from the vault.
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
              previewRedeem.data && assetDecimals.data ? (
                <span className="text-muted-foreground text-xs mt-2">
                  You will receive{" "}
                  {Number(
                    formatUnits(
                      BigInt(previewRedeem.data ?? 0),
                      assetDecimals.data
                    )
                  ).toFixed(2)}{" "}
                  {assetSymbol.data}
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
          disabled={
            parseUnits(amount, decimals.data ?? 0) === BigInt(0) ||
            loading ||
            balance.data === BigInt(0)
          }
          className="w-full"
          onClick={handleRedeem}
        >
          {balance.data === BigInt(0) ? (
            "No balance to redeem"
          ) : loading ? (
            <>
              {redeem.isPending
                ? "Sign redemption"
                : redeemReceipt.isLoading
                ? "Redeeming"
                : ""}
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            `Redeem ${assetSymbol.data}`
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

export default Redeem;
