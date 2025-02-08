import { Address } from "viem";

export enum Provider {
  PlumaaID = "Plumaa ID",
}

export const ACCESS_MANAGER = "0x0000593daa1e9e24fee19af6b258a268c97aaaaa";

export type VaultDef = {
  asset: {
    name: string;
    icon: string;
  };
  address: Address;
  provider: Provider;
  investorRole: bigint;
  managerRole: bigint;
  delegateRole: bigint;
};

const vaults = new Map<Address, VaultDef>([
  [
    "0xd663873df2f546e3746f3ef3c7a136cdd6c09edc",
    {
      asset: {
        name: "ERC20M",
        icon: "/tokens/empty-token.webp",
      },
      address: "0xd663873df2f546e3746f3ef3c7a136cdd6c09edc",
      provider: Provider.PlumaaID,
      investorRole: BigInt("6440414398961229311"), // uint64(bytes8(keccak256("PlumaaID.TINTERO_MANAGER_ERC20M_V01")))
      managerRole: BigInt("500308118634474746"), // uint64(bytes8(keccak256("PlumaaID.TINTERO_INVESTOR_ERC20M_V01")))
      delegateRole: BigInt("11327977343613358990"), // uint64(bytes8(keccak256("PlumaaID.TINTERO_DELEGATE_ERC20M_V01")))
    },
  ],
]);

export default vaults;
