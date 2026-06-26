"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { Plus, Trash2 } from "lucide-react";

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState([
    { id: "1", code: "SUMMER25", type: "PERCENTAGE", value: "25%", usageLimit: 100, usedCount: 45, isActive: true },
    { id: "2", code: "FLAT500", type: "FIXED", value: "₹500", usageLimit: 50, usedCount: 50, isActive: false },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ code: "", type: "PERCENTAGE", value: "", usageLimit: "" });

  const handleSave = () => {
    setCoupons([...coupons, { 
      id: Date.now().toString(), 
      ...formData, 
      value: formData.type === "PERCENTAGE" ? `${formData.value}%` : `₹${formData.value}`,
      usedCount: 0, 
      isActive: true 
    }]);
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Coupons</h1>
            <p className="text-muted-foreground mt-1">Manage discount codes and promotions.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" /> Create Coupon
          </Button>
        </div>

        <Card>
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Discount Value</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell className="font-bold">{coupon.code}</TableCell>
                    <TableCell>{coupon.type}</TableCell>
                    <TableCell>{coupon.value}</TableCell>
                    <TableCell>{coupon.usedCount} / {coupon.usageLimit}</TableCell>
                    <TableCell>
                      <Badge variant={coupon.isActive ? "default" : "secondary"}>
                        {coupon.isActive ? "Active" : "Expired"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" onClick={() => setCoupons(coupons.filter(c => c.id !== coupon.id))}>
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Coupon">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="code">Coupon Code</Label>
            <Input id="code" value={formData.code} onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})} placeholder="e.g., WINTER10" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Discount Type</Label>
              <select 
                className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                value={formData.type}
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option value="PERCENTAGE">Percentage (%)</option>
                <option value="FIXED">Fixed Amount (₹)</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="value">Value</Label>
              <Input id="value" type="number" value={formData.value} onChange={(e) => setFormData({...formData, value: e.target.value})} placeholder="e.g., 10" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="limit">Usage Limit</Label>
            <Input id="limit" type="number" value={formData.usageLimit} onChange={(e) => setFormData({...formData, usageLimit: e.target.value})} placeholder="e.g., 100" />
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Create</Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
