"use client";

import {
  Sidebar as ShadSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Users,
  Settings,
  LogOut,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Tag,
  Image as ImageIcon,
  Layers,
  GitBranch,
  Truck,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    icon: <LayoutDashboard className="h-5 w-5" />,
    href: "/",
  },
  {
    title: "Products",
    icon: <Package className="h-5 w-5" />,
    href: "/admin/products/list",
    badge: "12",
  },
  {
    title: "Orders",
    icon: <ShoppingCart className="h-5 w-5" />,
    href: "/admin/order/list",
    badge: "5",
  },
  {
    title: "Deals",
    icon: <Tag className="h-5 w-5" />,
    href: "/admin/deal/list",
    badge: "3",
  },
  {
    title: "Brands",
    icon: <Tag className="h-5 w-5" />,
    href: "/admin/brand/list",
    badge: "3",
  },
  {
    title: "Banner",
    icon: <ImageIcon className="h-5 w-5" />,
    href: "/admin/banner/list",
  },
  {
    title: "Category",
    icon: <Layers className="h-5 w-5" />,
    href: "/admin/category/list",
  },
  {
    title: "Sub Category",
    icon: <GitBranch className="h-5 w-5" />,
    href: "/admin/sub-category/list",
  },
  {
    title: "Shipping",
    icon: <Truck className="h-5 w-5" />,
    href: "/admin/shipping/list",
  },
  {
    title: "Customers",
    icon: <Users className="h-5 w-5" />,
    href: "/admin/customers/list",
    badge: "24",
  },
  {
    title: "Settings",
    icon: <Settings className="h-4 w-4" />,
    href: "/",
  },
  { title: "Logout", icon: <LogOut className="h-4 w-4" />, href: "/" },
];

export function Sidebar() {
  const { state } = useSidebar();

  const pathname = usePathname();

  return (
    <ShadSidebar collapsible="icon" className="border-r bg-background">
      <SidebarHeader className="flex h-16 items-center justify-between border-b px-4">
        <h2>Logo</h2>
      </SidebarHeader>

      <SidebarContent className="overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-thumb]:bg-gray-700 hover:[&::-webkit-scrollbar-thumb]:bg-gray-400 dark:hover:[&::-webkit-scrollbar-thumb]:bg-gray-600">
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => {
                const isActive = pathname == item.href;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      asChild
                      className="
    h-12
    data-[active=true]:bg-[#7AA9D2]
data-[active=true]:[&_span]:!text-white
  data-[active=true]:[&_svg]:!text-white
 "
                    
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-2"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />
      </SidebarContent>
    </ShadSidebar>
  );
}
