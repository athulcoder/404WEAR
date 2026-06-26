"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export function AdminHeader() {
  return (
    <header className="h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-6 sticky top-0 z-10 w-full transition-colors">
      {/* Left side */}
      <div className="flex items-center gap-4 flex-1">
        <button className="lg:hidden text-muted-foreground hover:text-foreground transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="hidden md:flex items-center relative w-full max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3" />
          <Input 
            type="text" 
            placeholder="Search products, orders, users..." 
            className="pl-9 bg-muted/50 border-transparent focus-visible:bg-background"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 md:gap-6">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </button>
        
        <div className="h-8 w-px bg-border hidden md:block"></div>
        
        <button className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 overflow-hidden">
            <img 
              src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin&backgroundColor=10b981" 
              alt="Admin Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Admin User</span>
            <span className="text-xs text-muted-foreground">Super Admin</span>
          </div>
        </button>
      </div>
    </header>
  );
}
