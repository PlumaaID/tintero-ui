import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import Wagmi from "~/components/wagmi";
import Topbar from "~/components/topbar";
import React from "react";
import Urql from "~/components/urql-provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tintero Protocol",
  description: "Asset-backed lending protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Wagmi>
            <Urql>
              <Topbar />
              <div className="w-full p-6 flex-1">
                <div className="mx-auto pt-16 max-w-screen-2xl">{children}</div>
              </div>
            </Urql>
          </Wagmi>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
