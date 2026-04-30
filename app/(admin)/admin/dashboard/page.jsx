"use client";

import React from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, Users, ShoppingCart, PackageOpen, AlertCircle, ArrowUpRight } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Overview of your store's performance.</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">$45,231.89</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +20.1% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">+2350</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +15.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">+12,234</div>
              <p className="text-xs text-primary flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +19% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Products</CardTitle>
              <PackageOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">573</div>
              <p className="text-xs text-muted-foreground mt-1">
                +4 new products added today
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Main Chart Area */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full flex items-end gap-2 justify-between">
                {[45, 60, 35, 75, 55, 90, 85, 110, 95, 120, 105, 140].map((h, i) => (
                  <div key={i} className="w-full bg-primary/20 rounded-t-sm hover:bg-primary transition-colors relative group" style={{ height: `${(h / 140) * 100}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      ${h * 100}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Low Stock & Recent Activity */}
          <div className="col-span-3 flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-destructive" /> 
                  Low Stock Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                {[
                  { name: "Premium Hoodie (Black, M)", stock: 2, threshold: 5 },
                  { name: "Cargo Pants (Olive, L)", stock: 1, threshold: 5 },
                  { name: "Classic T-Shirt (White, S)", stock: 4, threshold: 10 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Threshold: {item.threshold}</p>
                    </div>
                    <Badge variant="destructive">{item.stock} left</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "ORD-7352", customer: "Olivia Martin", status: "DELIVERED", date: "Today", amount: "$250.00" },
                  { id: "ORD-7351", customer: "Jackson Lee", status: "SHIPPED", date: "Today", amount: "$120.50" },
                  { id: "ORD-7350", customer: "Isabella Nguyen", status: "PENDING", date: "Yesterday", amount: "$89.99" },
                  { id: "ORD-7349", customer: "William Chen", status: "DELIVERED", date: "Yesterday", amount: "$45.00" },
                  { id: "ORD-7348", customer: "Sophia Patel", status: "CANCELLED", date: "Oct 24", amount: "$150.00" },
                ].map((order, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>
                      <Badge variant={
                        order.status === "DELIVERED" ? "default" :
                        order.status === "PENDING" ? "warning" :
                        order.status === "CANCELLED" ? "destructive" : "secondary"
                      }>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    <TableCell className="text-right font-medium">{order.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
