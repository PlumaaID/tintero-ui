import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateHex = (
  address: string,
  { leading, trailing } = { leading: 8, trailing: 8 }
) => {
  const match = address.match(
    new RegExp(
      `^(0x[a-zA-Z0-9]{${leading}})[a-zA-Z0-9]+([a-zA-Z0-9]{${trailing}})$`
    )
  );
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};
