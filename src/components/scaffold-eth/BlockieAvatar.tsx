"use client";

import { blo } from "blo";
import { Address, GetEnsAvatarReturnType } from "viem";

// Custom Avatar for RainbowKit
export const BlockieAvatar = ({
  address,
  ensImage,
  size,
}: {
  address: Address;
  ensImage?: GetEnsAvatarReturnType;
  size: number;
}) => (
  // Don't want to use nextJS Image here (and adding remote patterns for the URL)
  // eslint-disable-next-line @next/next/no-img-element
  <img
    className="rounded-full"
    src={ensImage || blo(address)}
    width={size}
    height={size}
    alt={`${address} avatar`}
  />
);
