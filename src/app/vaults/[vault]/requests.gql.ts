import { graphql } from "~/gql";

const TINTERO_DELEGATES = graphql(`
  query vaultRowDelegates($roleId: BigInt!, $managerId: String!) {
    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {
      items {
        id
      }
    }
  }
`);

const TINTERO_MANAGERS = graphql(`
  query vaultRowManagers($roleId: BigInt!, $managerId: String!) {
    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {
      items {
        id
      }
    }
  }
`);

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

const IS_DELEGATE = graphql(`
  query isDelegate($id: String!, $roleId: BigInt!, $managerId: String!) {
    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {
      id
    }
  }
`);

export { TINTERO_DELEGATES, TINTERO_MANAGERS, TINTERO_VAULT, IS_DELEGATE };
