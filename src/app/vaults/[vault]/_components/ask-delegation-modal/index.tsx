import { Handshake, Loader2 } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";
import { Address, formatUnits, parseUnits } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

interface AskDelegationModalProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
  vault: Address;
  assetDecimals: number;
  assetSymbol: string;
}

const AskDelegationModal: FC<AskDelegationModalProps> = ({
  open,
  toggleOpen,
  vault,
  assetDecimals,
  assetSymbol,
}) => {
  const [amount, setAmount] = useState("");

  const writeFundN = useWriteContract();
  const fundNReceipt = useWaitForTransactionReceipt({
    hash: writeFundN.data,
  });

  const loading = writeFundN.isPending || fundNReceipt.isLoading;

  useEffect(() => {
    if (fundNReceipt.isSuccess) {
      writeFundN.reset();
      toast.success("Assets delegated successfully");
      setAmount("");
      toggleOpen(false);
    }
  }, [
    fundNReceipt.isSuccess,
    fundNReceipt.error,
    writeFundN.reset,
    toggleOpen,
    writeFundN,
  ]);

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Ask delegation</DialogTitle>
        </DialogHeader>
        <Label htmlFor="amount">Amount</Label>
        <div className="flex w-full items-center space-x-2">
          <Input
            id="amount"
            placeholder="0.00"
            className="py-6 px-4 md:text-xl text-bold"
            value={amount}
            onChange={(e) => {
              if (!assetDecimals) return;
              if (e.target.value === "") return setAmount("");
              const newValue = e.target.value;
              const newAmount = formatUnits(
                parseUnits(newValue, assetDecimals),
                assetDecimals
              );
              setAmount(newValue.endsWith(".") ? `${newAmount}.` : newAmount);
            }}
          />
          <span>{assetSymbol}</span>
        </div>
        <Alert className="my-2">
          <Handshake className="h-4 w-4" />
          <AlertTitle>Delegate function</AlertTitle>
          <AlertDescription>
            Only authorized vault delegates can call this function. By calling
            it, they become liable for the assets delegated.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <Button
            className="w-full"
            onClick={() => {
              writeFundN.writeContract({
                abi: TinteroVaultABI,
                address: vault,
                functionName: "askDelegation",
                args: [BigInt(amount)],
              });
            }}
            disabled={!amount || loading}
          >
            {loading ? (
              <>
                {writeFundN.isPending
                  ? "Sign ask"
                  : fundNReceipt.isLoading
                  ? "Delegating"
                  : ""}
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Ask delegation"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AskDelegationModal;
