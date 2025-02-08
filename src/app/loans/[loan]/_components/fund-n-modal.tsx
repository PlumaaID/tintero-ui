import { BriefcaseBusiness, Loader2 } from "lucide-react";
import { FC, useEffect, useState } from "react";
import { toast } from "sonner";
import { Address } from "viem";
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
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

interface FundNModalProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
  totalPayments: number;
  loan: Address;
  vault: Address;
  onFund?: () => void;
}

const FundNModal: FC<FundNModalProps> = ({
  open,
  toggleOpen,
  totalPayments,
  loan,
  vault,
  onFund,
}) => {
  const [n, setN] = useState(0);

  const writeFundN = useWriteContract();
  const fundNReceipt = useWaitForTransactionReceipt({
    hash: writeFundN.data,
  });

  const loading = writeFundN.isPending || fundNReceipt.isLoading;

  useEffect(() => {
    if (fundNReceipt.isSuccess) {
      writeFundN.reset();
      toast.success("Payments funded successfully");
      setN(0);
      toggleOpen(false);
      onFund?.();
    }
  }, [
    fundNReceipt.isSuccess,
    fundNReceipt.error,
    writeFundN.reset,
    toggleOpen,
    onFund,
    writeFundN,
  ]);

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Fund payments</DialogTitle>
        </DialogHeader>
        <div className="flex w-full items-center space-x-2">
          <Input
            value={n}
            type="number"
            min={0}
            max={totalPayments}
            className="py-6 px-4 md:text-xl text-bold"
            onChange={(e) => {
              setN(Number(e.target.value));
            }}
          />
          <span className="whitespace-nowrap text-xl">
            / {totalPayments} payments
          </span>
        </div>
        <Alert className="my-2">
          <BriefcaseBusiness className="h-4 w-4" />
          <AlertTitle>Manager function</AlertTitle>
          <AlertDescription>
            This function will fund the following {n} payments ordered by how
            they were scheduled in the loan. Once payments start being funded,
            no further payments can be added to the loan schedule.
          </AlertDescription>
        </Alert>
        <DialogFooter>
          <Button
            onClick={() => {
              writeFundN.writeContract({
                abi: TinteroVaultABI,
                address: vault,
                functionName: "fundN",
                args: [loan, BigInt(n)],
              });
            }}
            disabled={n === 0 || loading}
          >
            {loading ? (
              <>
                {writeFundN.isPending
                  ? "Sign funding"
                  : fundNReceipt.isLoading
                  ? "Funding"
                  : ""}
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              `Fund ${n} payments`
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FundNModal;
