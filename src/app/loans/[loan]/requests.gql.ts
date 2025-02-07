import { graphql } from "~/gql";

const TINTERO_LOAN = graphql(`
  query tinteroLoan($id: String!) {
    tinteroLoan(id: $id) {
      id
      collateralAsset
      beneficiary
      defaultThreshold
      totalPaid
      totalFunded
      defaultAt
      payments {
        totalCount
        items {
          index
          collateralId
          principal
          fundedAt
          maturityPeriod
          gracePeriod
          interestRate
          trancheIndex
          funded
          paid
          withdrawn
          repossessed
          interestPaid
          premiumInterestPaid
          repossessionRecipient
          tranche {
            index
            paymentIndex
            receiver
          }
        }
      }
    }
  }
`);

export { TINTERO_LOAN };
