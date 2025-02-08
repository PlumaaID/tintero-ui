/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query tinteroLoan($id: String!) {\n    tinteroLoan(id: $id) {\n      id\n      collateralAsset\n      beneficiary\n      defaultThreshold\n      totalPaid\n      totalFunded\n      defaultAt\n      tranches {\n        totalCount\n      }\n      payments {\n        totalCount\n        items {\n          index\n          collateralId\n          principal\n          fundedAt\n          maturityPeriod\n          gracePeriod\n          interestRate\n          premiumRate\n          trancheIndex\n          funded\n          paid\n          withdrawn\n          repossessed\n          interestPaid\n          premiumInterestPaid\n          repossessionRecipient\n          tranche {\n            index\n            paymentIndex\n            receiver\n          }\n        }\n      }\n    }\n  }\n": typeof types.TinteroLoanDocument,
    "\n  query isManager($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n": typeof types.IsManagerDocument,
    "\n  query vaultRowDelegates($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n": typeof types.VaultRowDelegatesDocument,
    "\n  query vaultRowManagers($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n": typeof types.VaultRowManagersDocument,
    "\n  query tinteroVault($id: String!) {\n    tinteroVault(id: $id) {\n      id\n      asset\n      loans {\n        items {\n          id\n          collateralAsset\n          beneficiary\n          defaultThreshold\n          totalPaid\n          totalFunded\n          defaultAt\n          payments {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n": typeof types.TinteroVaultDocument,
    "\n  query isDelegate($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n": typeof types.IsDelegateDocument,
};
const documents: Documents = {
    "\n  query tinteroLoan($id: String!) {\n    tinteroLoan(id: $id) {\n      id\n      collateralAsset\n      beneficiary\n      defaultThreshold\n      totalPaid\n      totalFunded\n      defaultAt\n      tranches {\n        totalCount\n      }\n      payments {\n        totalCount\n        items {\n          index\n          collateralId\n          principal\n          fundedAt\n          maturityPeriod\n          gracePeriod\n          interestRate\n          premiumRate\n          trancheIndex\n          funded\n          paid\n          withdrawn\n          repossessed\n          interestPaid\n          premiumInterestPaid\n          repossessionRecipient\n          tranche {\n            index\n            paymentIndex\n            receiver\n          }\n        }\n      }\n    }\n  }\n": types.TinteroLoanDocument,
    "\n  query isManager($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n": types.IsManagerDocument,
    "\n  query vaultRowDelegates($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n": types.VaultRowDelegatesDocument,
    "\n  query vaultRowManagers($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n": types.VaultRowManagersDocument,
    "\n  query tinteroVault($id: String!) {\n    tinteroVault(id: $id) {\n      id\n      asset\n      loans {\n        items {\n          id\n          collateralAsset\n          beneficiary\n          defaultThreshold\n          totalPaid\n          totalFunded\n          defaultAt\n          payments {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n": types.TinteroVaultDocument,
    "\n  query isDelegate($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n": types.IsDelegateDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query tinteroLoan($id: String!) {\n    tinteroLoan(id: $id) {\n      id\n      collateralAsset\n      beneficiary\n      defaultThreshold\n      totalPaid\n      totalFunded\n      defaultAt\n      tranches {\n        totalCount\n      }\n      payments {\n        totalCount\n        items {\n          index\n          collateralId\n          principal\n          fundedAt\n          maturityPeriod\n          gracePeriod\n          interestRate\n          premiumRate\n          trancheIndex\n          funded\n          paid\n          withdrawn\n          repossessed\n          interestPaid\n          premiumInterestPaid\n          repossessionRecipient\n          tranche {\n            index\n            paymentIndex\n            receiver\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query tinteroLoan($id: String!) {\n    tinteroLoan(id: $id) {\n      id\n      collateralAsset\n      beneficiary\n      defaultThreshold\n      totalPaid\n      totalFunded\n      defaultAt\n      tranches {\n        totalCount\n      }\n      payments {\n        totalCount\n        items {\n          index\n          collateralId\n          principal\n          fundedAt\n          maturityPeriod\n          gracePeriod\n          interestRate\n          premiumRate\n          trancheIndex\n          funded\n          paid\n          withdrawn\n          repossessed\n          interestPaid\n          premiumInterestPaid\n          repossessionRecipient\n          tranche {\n            index\n            paymentIndex\n            receiver\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query isManager($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query isManager($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query vaultRowDelegates($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query vaultRowDelegates($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query vaultRowManagers($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query vaultRowManagers($roleId: BigInt!, $managerId: String!) {\n    accessManagerMembers(where: { roleId: $roleId, managerId: $managerId }) {\n      items {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query tinteroVault($id: String!) {\n    tinteroVault(id: $id) {\n      id\n      asset\n      loans {\n        items {\n          id\n          collateralAsset\n          beneficiary\n          defaultThreshold\n          totalPaid\n          totalFunded\n          defaultAt\n          payments {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query tinteroVault($id: String!) {\n    tinteroVault(id: $id) {\n      id\n      asset\n      loans {\n        items {\n          id\n          collateralAsset\n          beneficiary\n          defaultThreshold\n          totalPaid\n          totalFunded\n          defaultAt\n          payments {\n            totalCount\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query isDelegate($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query isDelegate($id: String!, $roleId: BigInt!, $managerId: String!) {\n    accessManagerMember(id: $id, roleId: $roleId, managerId: $managerId) {\n      id\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;