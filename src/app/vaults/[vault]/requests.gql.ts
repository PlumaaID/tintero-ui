import { graphql } from "~/gql";

const TINTERO_VAULT = graphql(`
  query tinteroVault($id: String!) {
    tinteroVault(id: $id) {
      id
      asset
      loans {
        items {
          id
          collateralAsset
          beneficiary
          defaultThreshold
          totalPaid
          totalFunded
          defaultAt
          payments {
            totalCount
          }
        }
      }
    }
  }
`);

export { TINTERO_VAULT };
