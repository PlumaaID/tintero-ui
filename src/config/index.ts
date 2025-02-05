const URQLEndpoint = () => process.env.NEXT_PUBLIC_URQL_ENDPOINT!;
const WalletConnectProjectID = () =>
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID!;

export { URQLEndpoint, WalletConnectProjectID };
