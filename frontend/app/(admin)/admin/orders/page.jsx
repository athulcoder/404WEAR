"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Eye } from "lucide-react";
import { Modal } from "@/components/ui/modal";

const initialOrders = [
  { id: "ORD-7352", customer: "Olivia Martin", email: "olivia@example.com", date: "2023-10-25", amount: "$250.00", items: 3, status: "PENDING", payment: "CARD" },
  { id: "ORD-7351", customer: "Jackson Lee", email: "jackson@example.com", date: "2023-10-24", amount: "$120.50", items: 1, status: "SHIPPED", payment: "UPI" },
  { id: "ORD-7350", customer: "Isabella Nguyen", email: "isa@example.com", date: "2023-10-24", amount: "$89.99", items: 2, status: "DELIVERED", payment: "COD" },
  { id: "ORD-7349", customer: "William Chen", email: "will@example.com", date: "2023-10-23", amount: "$45.00", items: 1, status: "CANCELLED", payment: "CARD" },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleUpdateStatus = (newStatus) => {
    if (selectedOrder) {
      setOrders(orders.map(o => o.id === selectedOrder.id ? { ...o, status: newStatus } : o));
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "DELIVERED": return "default";
      case "SHIPPED": return "secondary";
      case "PENDING": return "warning";
      case "CANCELLED": return "destructive";
      default: return "outline";
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Orders</h1>
          <p className="text-muted-foreground mt-1">Manage and track customer orders.</p>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle>All Orders</CardTitle>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input placeholder="Search orders..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium">{order.customer}</span>
                        <span className="text-xs text-muted-foreground">{order.email}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    <TableCell className="font-medium">{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusBadge(order.status)}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => handleViewOrder(order)}>
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Order Details - ${selectedOrder?.id}`}
        description="View order information and update status."
      >
        {selectedOrder && (
          <div className="flex flex-col gap-6 py-4">
            <div className="grid grid-cols-2 gap-4 bg-muted/30 p-4 rounded-xl border border-border">
              <div>
                <p className="text-xs text-muted-foreground">Customer Name</p>
                <p className="font-medium">{selectedOrder.customer}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-medium">{selectedOrder.email}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Date Placed</p>
                <p className="font-medium">{selectedOrder.date}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Payment Method</p>
                <p className="font-medium">{selectedOrder.payment}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Order Status</h4>
              <div className="flex flex-wrap gap-2">
                {["PENDING", "CONFIRMED", "SHIPPED", "OUT_FOR_DELIVERY", "DELIVERED", "CANCELLED"].map(status => (
                  <Button
                    key={status}
                    variant={selectedOrder.status === status ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleUpdateStatus(status)}
                  >
                    {status.replace(/_/g, " ")}
                  </Button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total Amount:</span>
                <span>{selectedOrder.amount}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Total Items: {selectedOrder.items}</p>
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
}
