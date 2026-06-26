"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { Search, Eye } from "lucide-react";

export default function AdminUsersPage() {
  const [users] = useState([
    { id: "USR-001", name: "Alice Johnson", email: "alice@example.com", orders: 5, joined: "2023-01-15" },
    { id: "USR-002", name: "Bob Smith", email: "bob@example.com", orders: 2, joined: "2023-05-22" },
    { id: "USR-003", name: "Charlie Brown", email: "charlie@example.com", orders: 0, joined: "2023-10-01" },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Users</h1>
          <p className="text-muted-foreground mt-1">Manage customer accounts and details.</p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Customer Directory</CardTitle>
              <div className="relative w-64">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input placeholder="Search users..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>{user.orders}</TableCell>
                    <TableCell>{user.joined}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" onClick={() => setSelectedUser(user)}>
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

      <Modal isOpen={!!selectedUser} onClose={() => setSelectedUser(null)} title="User Details">
        {selectedUser && (
          <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center gap-4 p-4 border border-border rounded-xl bg-muted/30">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                {selectedUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{selectedUser.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedUser.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-xl">
                <p className="text-xs text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{selectedUser.orders}</p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <p className="text-xs text-muted-foreground">Member Since</p>
                <p className="font-medium">{selectedUser.joined}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </AdminLayout>
  );
}
