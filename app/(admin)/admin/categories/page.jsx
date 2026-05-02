"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/layout/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Modal } from "@/components/ui/modal";
import { Plus, Search, Edit2, Trash2 } from "lucide-react";
import { createCategory } from "@/lib/api/category";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([
    { id: "1", name: "Hoodies", slug: "hoodies", parentId: "None", productsCount: 12 },
    { id: "2", name: "T-Shirts", slug: "t-shirts", parentId: "None", productsCount: 24 },
    { id: "3", name: "Pants", slug: "pants", parentId: "None", productsCount: 8 },
    { id: "4", name: "Cargo Pants", slug: "cargo-pants", parentId: "Pants", productsCount: 4 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", slug: "", parentId: "" });

  const handleSave = async () => {
    const data = await createCategory(formData)
    console.log(data)
    setCategories([...categories, { id: Date.now().toString(), ...formData, productsCount: 0, parentId: formData.parentId || "None" }]);
    setIsModalOpen(false);
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Categories</h1>
            <p className="text-muted-foreground mt-1">Organize your products into categories.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="w-4 h-4 mr-2" /> Add Category
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Category List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>parentId Category</TableHead>
                  <TableHead>Products</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((cat) => (
                  <TableRow key={cat.id}>
                    <TableCell className="font-medium">{cat.name}</TableCell>
                    <TableCell className="text-muted-foreground">{cat.slug}</TableCell>
                    <TableCell>{cat.parentId}</TableCell>
                    <TableCell>{cat.productsCount}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon"><Edit2 className="w-4 h-4 text-muted-foreground" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => setCategories(categories.filter(c => c.id !== cat.id))}><Trash2 className="w-4 h-4 text-destructive" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create Category">
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Category Name</Label>
            <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="e.g., Jackets" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} placeholder="e.g., jackets" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="parentId">parentId Category (Optional)</Label>
            <Input id="parentId" value={formData.parentId} onChange={(e) => setFormData({ ...formData, parentId: e.target.value })} placeholder="e.g., Winter Wear" />
          </div>
          <div className="flex justify-end mt-4 gap-2">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </Modal>
    </AdminLayout>
  );
}
