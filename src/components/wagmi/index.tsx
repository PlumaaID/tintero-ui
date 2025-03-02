"use client";
import { WagmiProvider } from "wagmi";
import { arbitrum, arbitrumSepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { createAppKit } from "@reown/appkit/react";
import { FC } from "react";
import { WalletConnectProjectID } from "~/config";

const queryClient = new QueryClient();

const projectId = WalletConnectProjectID();

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://tintero.finance", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

const wagmiAdapter = new WagmiAdapter({
  networks: [arbitrum, arbitrumSepolia],
  projectId,
  ssr: true,
});

// 5. Create modal
createAppKit({
  adapters: [wagmiAdapter],
  networks: [arbitrum, arbitrumSepolia],
  projectId,
  metadata,
  features: {
    swaps: false,
    onramp: false,
    receive: true,
    send: true,
    email: true,
    emailShowWallets: true,
    socials: [
      "google",
      "x",
      "discord",
      "farcaster",
      "github",
      "apple",
      "facebook",
    ],
    history: true,
    analytics: true,
    allWallets: true,
    legalCheckbox: false,
    smartSessions: false,
    collapseWallets: false,
    walletFeaturesOrder: ["onramp", "swaps", "receive", "send"],
    connectMethodsOrder: ["wallet", "email", "social"],
  },
  themeVariables: {
    "--w3m-border-radius-master": "2px",
    "--w3m-accent": "#501f8b",
    "--w3m-color-mix": "#291047",
    "--w3m-color-mix-strength": 8,
  },
  enableWallets: true,
});

type Props = {
  children: React.ReactNode;
};

const Wagmi: FC<Props> = ({ children }) => {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};

export default Wagmi;
