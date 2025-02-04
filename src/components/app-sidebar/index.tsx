"use client";

import * as React from "react";
import { ArrowRightLeft, Moon, Sun, TrendingUp } from "lucide-react";

import { NavMain } from "~/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "~/components/ui/sidebar";
import Link from "next/link";
import Logo from "./logo";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useAppKitTheme } from "@reown/appkit/react";

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
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setTheme, theme } = useTheme();
  const { setThemeMode } = useAppKitTheme();

  return (
    <Sidebar variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <Link href="/" className="p-3">
            <SidebarMenuItem>
              <Logo />
            </SidebarMenuItem>
          </Link>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <Button
          onClick={() => {
            const themeMode = theme === "light" ? "dark" : "light";
            setThemeMode(themeMode);
            setTheme(themeMode);
          }}
          size="icon"
          variant="ghost"
          className="ml-auto my-auto items-center"
        >
          <Sun className="h-[1rem] w-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1rem] w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
