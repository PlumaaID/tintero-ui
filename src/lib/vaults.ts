import { Address } from "viem";

export enum Provider {
  PlumaaID = "Plumaa ID",
}

type Vault = {
  asset: {
    name: string;
    icon: string;
  };
  address: Address;
  provider: Provider;
  totalSupply: string;
  netApy: string;
  manager: Address;
};

const vaults = new Map<Address, Vault>([
  [
    "0xa5c0a11fc265f3cddb0624f73f955a3c71bad754",
    {
      asset: {
        name: "USDC",
        icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
      },
      address: "0xa5c0a11fc265f3cddb0624f73f955a3c71bad754",
      provider: Provider.PlumaaID,
      totalSupply: "$1,500.00",
      netApy: "10.00%",
      manager: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
    },
  ],
]);

export default vaults;
