"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";
import PaymentForm from "./payment-form";
import { Address, parseUnits } from "viem";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { TinteroVaultABI } from "~/lib/abis/TinteroVault";

export interface Payment {
  principal: string;
  fundedAt: number;
  maturityPeriod: number;
  gracePeriod: number;
  interestRate: number;
  premiumRate: number;
  collateralId: string;
}

interface AddPaymentsModalProps {
  open: boolean;
  toggleOpen: (open: boolean) => void;
  decimals: number;
  symbol: string;
  vault: Address;
  loan: Address;
  collateralAsset: Address;
  onAdd?: () => void;
}

export function AddPaymentsModal({
  open,
  toggleOpen,
  decimals,
  symbol,
  vault,
  loan,
  collateralAsset,
  onAdd,
}: AddPaymentsModalProps) {
  const writePushPayments = useWriteContract();
  const pushPaymentsReceipt = useWaitForTransactionReceipt({
    hash: writePushPayments.data,
  });
  const [payments, setPayments] = useState<
    (Payment & {
      maturityDate: Date;
      defaultDate: Date;
    })[]
  >([]);

  const handleAddPayment = () => {
    setPayments([
      ...payments,
      {
        principal: "",
        fundedAt: 0,
        maturityPeriod: 0,
        gracePeriod: 0,
        interestRate: 0,
        premiumRate: 0,
        maturityDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30), // 30 days from now
        defaultDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30), // 30 days from now
        collateralId: "",
      },
    ]);
  };

  const handleRemovePayment = (index: number) => {
    setPayments(payments.filter((_, i) => i !== index));
  };

  const handleInputChange = (
    index: number,
    field: keyof Payment | "maturityDate" | "defaultDate",
    value: number | Date | string
  ) => {
    if (field === "maturityDate" || field === "defaultDate") {
      if (value < new Date()) {
        return toast.error("Date cannot be in the past");
      }
    }
    const updatedPayments = [...payments];
    updatedPayments[index] = { ...updatedPayments[index], [field]: value };
    setPayments(updatedPayments);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const collateralIds = payments.map((payment) =>
      BigInt(payment.collateralId)
    );
    const parsedPayments = payments.map((payment) => ({
      principal: parseUnits(payment.principal, decimals),
      fundedAt: 0,
      maturityPeriod: Math.ceil(
        payment.maturityDate.getTime() / 1000 - Date.now() / 1000
      ),
      gracePeriod: Math.ceil(
        payment.defaultDate.getTime() / 1000 - Date.now() / 1000
      ),
      interestRate: payment.interestRate * 1e4,
      premiumRate: payment.premiumRate * 1e4,
    }));
    writePushPayments.writeContract({
      address: vault,
      abi: TinteroVaultABI,
      functionName: "pushPayments",
      args: [loan, collateralIds, parsedPayments],
      gas: BigInt(1_000_000),
    });
    onAdd?.();
  };

  useEffect(() => {
    if (pushPaymentsReceipt.isSuccess) {
      writePushPayments.reset();
      toast.success("Loan requested successfully");
      setPayments([]);
      toggleOpen(false);
    }
  }, [pushPaymentsReceipt.isSuccess, toggleOpen, writePushPayments]);

  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Schedule new payments</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {payments.map((payment, index) => {
            return (
              <PaymentForm
                key={index}
                payment={payment}
                index={index}
                onChange={(field, value) =>
                  handleInputChange(
                    index,
                    field,
                    value as string | number | Date
                  )
                }
                onRemove={() => handleRemovePayment(index)}
                symbol={symbol}
                decimals={decimals}
                loan={loan}
                collateralAsset={collateralAsset}
              />
            );
          })}
        </form>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleAddPayment}
          className="w-full"
        >
          <Plus className="mr-2 h-4 w-4" /> Add Payment
        </Button>
        <DialogFooter>
          <Button
            type="submit"
            size="lg"
            onClick={handleSubmit}
            disabled={payments.length === 0}
            className="w-full"
          >
            {pushPaymentsReceipt.isLoading || writePushPayments.isPending ? (
              <>
                {writePushPayments.isPending
                  ? "Sign payments"
                  : pushPaymentsReceipt.isLoading
                  ? "Adding"
                  : ""}
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Add payments to loan"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
