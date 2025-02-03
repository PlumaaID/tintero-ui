"use client";

import * as React from "react";
import {
  ArrowRightLeft,
  LifeBuoy,
  Moon,
  Send,
  Sun,
  TrendingUp,
} from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavSecondary } from "~/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const data = {
  navMain: [
    {
      title: "Earn",
      url: "/earn",
      icon: TrendingUp,
    },
    {
      title: "Borrow",
      url: "/borrow",
      icon: ArrowRightLeft,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme, theme } = useTheme();

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Link href="/" className="p-2">
            <SidebarMenuItem className="flex">
              <Logo />
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                size="icon"
                variant="ghost"
                className="ml-auto my-auto items-center"
              >
                <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary items={data.navSecondary} />
      </SidebarFooter>
    </Sidebar>
  );
}
