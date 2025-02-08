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

export { TINTERO_DELEGATES, TINTERO_MANAGERS };
