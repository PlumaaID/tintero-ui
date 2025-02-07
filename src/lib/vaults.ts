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
    "0xd663873df2f546e3746f3ef3c7a136cdd6c09edc",
    {
      asset: {
        name: "USDC",
        icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg",
      },
      address: "0xd663873df2f546e3746f3ef3c7a136cdd6c09edc",
      provider: Provider.PlumaaID,
      totalSupply: "$1,500.00",
      netApy: "10.00%",
      manager: "0xbEA76Df6AFccA5E729b839c0A258Df8f359ac64c",
    },
  ],
]);

export default vaults;
