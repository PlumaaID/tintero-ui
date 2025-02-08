import { InfoIcon, Loader2, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Address, isAddress, isHex } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Address as EthAddress } from "~/components/scaffold-eth";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

interface AddTranchesModalProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
  totalPayments: number;
  loan: Address;
  vault: Address;
  onAdd?: () => void;
  lastTranchedPaymentIndex: bigint;
}

export function AddTranchesModal({
  open,
  toggleOpen,
  totalPayments,
  loan,
  vault,
  onAdd,
  lastTranchedPaymentIndex,
}: AddTranchesModalProps) {
  const [tranche, setTranche] = useState<[string, number]>([
    "",
    Number(lastTranchedPaymentIndex) + 1,
  ]);
  const writePushTranches = useWriteContract();
  const pushTranchesReceipt = useWaitForTransactionReceipt({
    hash: writePushTranches.data,
  });
  const [tranches, setTranches] = useState<[Address, number][]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    writePushTranches.writeContract({
      abi: TinteroVaultABI,
      address: vault,
      functionName: "pushTranches",
      args: [
        loan,
        tranches.map(([, paymentIndex]) => BigInt(paymentIndex)),
        tranches.map(([trancheReceiver]) => trancheReceiver),
      ],
    });
  };

  const previousPaymentIndex =
    tranches[tranches.length - 1]?.[1] ?? Number(lastTranchedPaymentIndex);

  useEffect(() => {
    if (pushTranchesReceipt.isSuccess) {
      writePushTranches.reset();
      toast.success("Tranches added successfully");
      setTranches([]);
      toggleOpen(false);
      onAdd?.();
    }
  }, [pushTranchesReceipt.isSuccess, toggleOpen, writePushTranches, onAdd]);

  const onRemove = (index: number) => {
    setTranches((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add tranches</DialogTitle>
        </DialogHeader>
        <Card className="p-4 space-y-4">
          <div>
            <Label className="mb-3">Tranche receiver</Label>
            <Input
              value={tranche?.[0]}
              onChange={(e) => {
                if (
                  isHex(e.target.value, { strict: true }) ||
                  e.target.value.startsWith("0") ||
                  e.target.value === ""
                )
                  setTranche([e.target.value, tranche[1]]);
              }}
            />
          </div>
          <div>
            <Label className="mb-3">
              Last payment in tranche{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <InfoIcon className="ml-2 w-3 h-3" />
                  </TooltipTrigger>
                  <TooltipContent className="max-w-[300px]">
                    <p>
                      A tranche is conformed by all the payments from the end of
                      the previous tranche to the last payment in the current
                      tranche.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <Input
              value={tranche?.[1]}
              type="number"
              min={previousPaymentIndex + 1}
              max={totalPayments}
              onChange={(e) => {
                setTranche([tranche[0], Number(e.target.value)]);
              }}
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className="w-full mt-4"
            onClick={() => {
              if (!isAddress(tranche[0]))
                return toast.warning("Invalid address");
              if (tranche[1] > totalPayments)
                return toast.warning("Invalid index");
              if (tranche[1] <= previousPaymentIndex)
                return toast.warning("Index must be higher than previous");
              setTranches((prev) => [
                ...prev,
                [tranche[0] as Address, tranche[1]],
              ]);
              setTranche(["", previousPaymentIndex + 1]);
            }}
          >
            Queue tranche
            <Plus className="h-4 w-4" />
          </Button>
        </Card>
        <Card className="p-4 space-y-4">
          {tranches.length == 0 && (
            <p className="text-muted-foreground">No tranches queued</p>
          )}
          {tranches.map(([collateralId, paymentIndex], i) => (
            <div
              key={i}
              className="flex items-center space-x-4 w-full justify-between"
            >
              <EthAddress
                address={collateralId}
                onlyEnsOrAddress
                format="long"
              />
              <div className="flex items-center space-x-2">
                <Badge>
                  {paymentIndex}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="ml-2 w-3 h-3" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px]">
                        <p>
                          The tranche go from payment{" "}
                          {tranches[i - 1]?.[1] ?? 0} to payment {paymentIndex}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Badge>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(i)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </Card>
        <DialogFooter>
          <Button
            type="submit"
            size="lg"
            onClick={handleSubmit}
            disabled={
              tranches.length === 0 ||
              BigInt(totalPayments) === lastTranchedPaymentIndex
            }
            className="w-full"
          >
            {pushTranchesReceipt.isLoading || writePushTranches.isPending ? (
              <>
                {writePushTranches.isPending
                  ? "Sign tranches"
                  : pushTranchesReceipt.isLoading
                  ? "Adding"
                  : ""}
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : lastTranchedPaymentIndex === BigInt(totalPayments) ? (
              "All payments are already tranched"
            ) : (
              "Add tranches to loan"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
