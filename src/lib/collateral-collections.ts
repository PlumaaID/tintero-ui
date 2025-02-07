import { Address } from "viem";

type CollateralCollection = {
  name: string;
  icon: string;
  address: Address;
};

const collateralCollections = new Map<Address, CollateralCollection>([
  [
    "0xa5c0a11fc265f3cddb0624f73f955a3c71bad754",
    {
      name: "Endorser",
      icon: "/collateral-collections/end.svg",
      address: "0x0000c908d1104cad2867ec2a8bb178d78c9baaaa",
    },
  ],
]);

if (process.env.NODE_ENV === "development") {
  collateralCollections.set("0xe9115Eb3CEA01BA32E1f0f4ba5516b722761807d", {
    name: "Endorser Mock",
    icon: "/collateral-collections/end.svg",
    address: "0xe9115Eb3CEA01BA32E1f0f4ba5516b722761807d",
  });
}

export default collateralCollections;
