"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingBag,
  Tags,
  ShoppingCart,
  Users,
  Ticket,
  Package,
  BarChart3,
  LogOut
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/utils";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: ShoppingBag },
  { name: "Categories", href: "/admin/categories", icon: Tags },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Coupons", href: "/admin/coupons", icon: Ticket },
  { name: "Inventory", href: "/admin/inventory", icon: Package },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-card border-r border-border flex flex-col fixed left-0 top-0 z-20 transition-colors">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm">
            <span className="font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">Sudowear</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1 my-scroll">
        <p className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Menu</p>
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "text-primary-foreground bg-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 bg-primary rounded-xl -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <item.icon className={cn("w-5 h-5", isActive ? "text-primary-foreground" : "group-hover:text-foreground")} />
                <span className="font-medium text-sm">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200 w-full">
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
