"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Save } from "lucide-react";

export default function AdminInventoryPage() {
  const [inventory, setInventory] = useState([
    { id: "1", product: "Premium Oversized Hoodie", sku: "HD-BLK-XL", variant: "Black, XL", stock: 12, reserved: 2, threshold: 15 },
    { id: "2", product: "Premium Oversized Hoodie", sku: "HD-GRY-M", variant: "Grey, M", stock: 45, reserved: 5, threshold: 10 },
    { id: "3", product: "Classic Cotton T-Shirt", sku: "TS-WHT-S", variant: "White, S", stock: 3, reserved: 1, threshold: 10 },
    { id: "4", product: "Urban Cargo Pants", sku: "CP-OLV-L", variant: "Olive, L", stock: 0, reserved: 0, threshold: 5 },
  ]);

  const handleStockUpdate = (id, newStock) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, stock: parseInt(newStock) || 0 } : item));
  };

  const getStockStatus = (stock, threshold) => {
    if (stock === 0) return { label: "Out of Stock", variant: "destructive" };
    if (stock <= threshold) return { label: "Low Stock", variant: "warning" };
    return { label: "In Stock", variant: "default" };
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Inventory</h1>
          <p className="text-muted-foreground mt-1">Monitor stock levels and manage variants.</p>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle>Variant Stock Levels</CardTitle>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input placeholder="Search SKU or Product..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Product & Variant</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reserved</TableHead>
                  <TableHead>Available Stock</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory.map((item) => {
                  const status = getStockStatus(item.stock, item.threshold);
                  return (
                    <TableRow key={item.id}>
                      <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.product}</span>
                          <span className="text-xs text-muted-foreground">{item.variant}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{item.reserved}</TableCell>
                      <TableCell>
                        <Input 
                          type="number" 
                          value={item.stock} 
                          onChange={(e) => handleStockUpdate(item.id, e.target.value)} 
                          className="w-24 h-8"
                        />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          <Save className="w-4 h-4 mr-2" /> Save
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
