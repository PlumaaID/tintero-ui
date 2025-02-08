import { CheckCircle2, InfoIcon, Trash2, X } from "lucide-react";
import { FC } from "react";
import {
  Address,
  erc721Abi,
  formatUnits,
  isAddressEqual,
  isHex,
  parseUnits,
} from "viem";
import { useReadContract } from "wagmi";
import { Button } from "~/components/ui/button";
import { DateTimePicker } from "~/components/ui/date-time-picker";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

export interface Payment {
  principal: string;
  maturityDate: Date;
  defaultDate: Date;
  interestRate: number;
  premiumRate: number;
  collateralId: string;
}

interface PaymentFormProps {
  payment: Payment;
  index: number;
  onChange: (key: keyof Payment, value: unknown) => void;
  onRemove: () => void;
  symbol: string;
  decimals: number;
  loan: Address;
  collateralAsset: Address;
}

const PaymentForm: FC<PaymentFormProps> = ({
  payment,
  index,
  onChange,
  onRemove,
  symbol,
  decimals,
  loan,
  collateralAsset,
}) => {
  const isValidTokenId =
    isHex(payment.collateralId, {
      strict: true,
    }) && payment.collateralId.length == 66; // 0x + 64 hex chars
  const ownerOf = useReadContract({
    abi: erc721Abi,
    address: collateralAsset,
    functionName: "ownerOf",
    args: [BigInt(isValidTokenId ? payment.collateralId : "")],
  });
  const isApprovedForAll = useReadContract({
    abi: erc721Abi,
    address: collateralAsset,
    functionName: "isApprovedForAll",
    args: [ownerOf.data as Address, loan],
  });
  const getApproved = useReadContract({
    abi: erc721Abi,
    address: collateralAsset,
    functionName: "getApproved",
    args: [BigInt(isValidTokenId ? payment.collateralId : "")],
  });

  const isApproved =
    (getApproved.data && isAddressEqual(getApproved.data as Address, loan)) ||
    isApprovedForAll.data;

  return (
    <div className="space-y-2 p-4 border rounded-md">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">Payment {index + 1}</h4>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => onRemove()}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="col-span-2">
        <Label className="mb-2" htmlFor={`principal-${index}`}>
          Principal
        </Label>
        <div className="flex w-full items-center space-x-2">
          <Input
            id={`principal-${index}`}
            value={payment.principal}
            placeholder="0.00"
            className="py-6 px-4 md:text-xl text-bold"
            onChange={(e) => {
              if (e.target.value === "") return onChange("principal", "");
              const newValue = e.target.value;
              const newAmount = formatUnits(
                parseUnits(newValue, decimals),
                decimals
              );
              onChange(
                "principal",
                newValue.endsWith(".") ? `${newAmount}.` : newAmount
              );
            }}
          />
          <span>{symbol}</span>
        </div>
      </div>
      <div className="col-span-2">
        <Label className="mb-2" htmlFor={`principal-${index}`}>
          Collateral Token ID
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InfoIcon className="ml-2 w-3 h-3" />
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px]">
                <p>
                  An ERC-712 token ID that can be taken back in case the loan is
                  default.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Label>
        <Input
          id={`collateralId-${index}`}
          value={payment.collateralId}
          onChange={(e) => {
            if (
              isHex(e.target.value, { strict: true }) ||
              e.target.value.startsWith("0") ||
              e.target.value === ""
            )
              onChange("collateralId", e.target.value);
          }}
        />
      </div>
      <div className="col-span-2">
        <div className="flex items-center">
          {isValidTokenId ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <X className="h-4 w-4 text-red-600" />
          )}
          <p
            className={cn("ml-2 text-sm", {
              "text-red-600": !isValidTokenId,
              "text-green-600": isValidTokenId,
            })}
          >
            Valid Token ID
          </p>
        </div>
        <div className="flex items-center">
          {ownerOf.data ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <X className="h-4 w-4 text-red-600" />
          )}
          <p
            className={cn("ml-2 text-sm", {
              "text-green-600": ownerOf.data,
              "text-red-600": !ownerOf.data,
            })}
          >
            Token ID exists
          </p>
        </div>
        <div className="flex items-center">
          {isApproved ? (
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          ) : (
            <X className="h-4 w-4 text-red-600" />
          )}
          <p
            className={cn("ml-2 text-sm", {
              "text-green-600": isApproved,
              "text-red-600": !isApproved,
            })}
          >
            Owner approved to loan contract
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="mb-2" htmlFor={`maturityDate-${index}`}>
            Maturity Date
          </Label>
          <DateTimePicker
            date={payment.maturityDate}
            setDate={(date) => onChange("maturityDate", date)}
          />
        </div>
        <div>
          <Label className="mb-2" htmlFor={`defaultDate-${index}`}>
            Default Date
          </Label>
          <DateTimePicker
            date={payment.defaultDate}
            setDate={(date) => onChange("defaultDate", date)}
          />
        </div>
        <div>
          <Label className="mb-2" htmlFor={`interestRate-${index}`}>
            Interest Rate (%){" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-3 h-3" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>Accrues since the funded date until payment.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Input
            id={`interestRate-${index}`}
            type="number"
            min="0"
            max="1677"
            value={payment.interestRate}
            onChange={(e) => onChange("interestRate", Number(e.target.value))}
          />
        </div>
        <div>
          <Label className="mb-2" htmlFor={`premiumRate-${index}`}>
            Premium Rate (%){" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <InfoIcon className="ml-2 w-3 h-3" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[300px]">
                  <p>
                    Accrues since the default date until payment (on top of
                    regular interest rate).
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <Input
            id={`premiumRate-${index}`}
            type="number"
            value={payment.premiumRate}
            min="0"
            max="1677"
            onChange={(e) => onChange("premiumRate", Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
