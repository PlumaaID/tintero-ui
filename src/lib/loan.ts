import { TinteroLoan } from "~/gql/graphql";

enum LoanStatus {
  NeedsCollateral = "Needs collateral",
  NeedsFunding = "Needs funding",
  Paid = "Paid",
  Active = "Active",
  Defaulted = "Defaulted",
}

const getStatus = (loan: TinteroLoan): LoanStatus => {
  if (!loan?.payments) return LoanStatus.NeedsCollateral;
  if (loan.payments.totalCount === 0) {
    return LoanStatus.NeedsCollateral;
  } else if (loan.payments.totalCount !== loan.totalFunded) {
    return LoanStatus.NeedsFunding;
  } else if (loan.payments.totalCount === loan.totalPaid) {
    return LoanStatus.Paid;
  } else if (loan.payments.totalCount === loan.totalFunded) {
    return LoanStatus.Active;
  } else if (loan.defaultAt > Date.now()) {
    return LoanStatus.Defaulted;
  }
  return LoanStatus.Active;
};

enum LoanState {
  CREATED = "Created",
  CANCELED = "Canceled",
  FUNDING = "Funding",
  ONGOING = "Ongoing",
  DEFAULTED = "Defaulted",
  REPOSSESSED = "Repossessed",
  PAID = "Paid",
}

const getState = (state: number): LoanState => {
  if (!state && typeof state !== "number") return LoanState.CREATED;
  switch (state) {
    case 0:
      return LoanState.CREATED;
    case 1:
      return LoanState.CANCELED;
    case 2:
      return LoanState.FUNDING;
    case 3:
      return LoanState.ONGOING;
    case 4:
      return LoanState.DEFAULTED;
    case 5:
      return LoanState.REPOSSESSED;
    case 6:
      return LoanState.PAID;
    default:
      throw new Error(`Unknown loan state: ${state}`);
  }
};

export { getStatus, getState };
