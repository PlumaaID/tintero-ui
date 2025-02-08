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
      tranches {
        totalCount
      }
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
          premiumRate
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

const IS_MANAGER = graphql(`
  query isManager($id: String!, $roleId: BigInt!, $managerId: String!) {
    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {
      id
    }
  }
`);

export { TINTERO_LOAN, IS_MANAGER };
