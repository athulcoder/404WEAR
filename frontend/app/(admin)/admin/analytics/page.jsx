"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ArrowUpRight, TrendingUp, ShoppingBag } from "lucide-react";

export default function AdminAnalyticsPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Deep dive into your store's metrics and performance.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Gross Volume</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$124,563.00</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +24% from last quarter
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Order Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$142.50</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +2.4% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3.24%</div>
              <p className="text-xs text-muted-foreground mt-1">
                Consistent with last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Items Sold</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,432</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-end gap-2 justify-between">
                {[45, 60, 35, 75, 55, 90, 85, 110, 95, 120, 105, 140].map((h, i) => (
                  <div key={i} className="w-full bg-primary/20 hover:bg-primary transition-colors relative rounded-t-sm group" style={{ height: `${(h / 140) * 100}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      ${h * 1000}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Store Traffic</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-end gap-2 justify-between">
                {[120, 150, 130, 200, 180, 220, 250, 240, 280, 300, 290, 350].map((h, i) => (
                  <div key={i} className="w-full bg-muted-foreground/20 hover:bg-muted-foreground transition-colors relative rounded-t-sm group" style={{ height: `${(h / 350) * 100}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      {h * 10} visits
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
