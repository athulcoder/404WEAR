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
import { Plus, Search, Edit2, Trash2, Image as ImageIcon, X, Star } from "lucide-react";
import { cn } from "@/lib/utils/utils";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([
    { id: "1", name: "Premium Oversized Hoodie", category: "Hoodies", description: "Heavyweight cotton hoodie.", status: true, variants: [], createdAt: "2023-10-20" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "", category: "", description: "", status: true
  });

  const [variants, setVariants] = useState([]);

  // Open Modal for Create or Edit
  const handleOpenModal = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        description: product.description,
        status: product.status
      });
      setVariants(product.variants || []);
    } else {
      setEditingProduct(null);
      setFormData({ name: "", category: "", description: "", status: true });
      setVariants([{ id: Date.now().toString(), color: "", size: "", price: "", mrp: "", stock: "", sku: "", images: [] }]);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  // Variant Management
  const addVariant = () => {
    setVariants([...variants, { id: Date.now().toString(), color: "", size: "", price: "", mrp: "", stock: "", sku: "", images: [] }]);
  };

  const removeVariant = (id) => {
    setVariants(variants.filter(v => v.id !== id));
  };

  const updateVariant = (id, field, value) => {
    setVariants(variants.map(v => v.id === id ? { ...v, [field]: value } : v));
  };

  // Image Upload Handling (Frontend Mock)
  const handleImageUpload = (variantId, e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => ({
      id: Date.now().toString() + Math.random(),
      url: URL.createObjectURL(file),
      file,
      isPrimary: false
    }));

    setVariants(variants.map(v => {
      if (v.id === variantId) {
        const updatedImages = [...v.images, ...newImages];
        if (updatedImages.length > 0 && !updatedImages.some(img => img.isPrimary)) {
          updatedImages[0].isPrimary = true;
        }
        return { ...v, images: updatedImages };
      }
      return v;
    }));
  };

  const removeImage = (variantId, imageId) => {
    setVariants(variants.map(v => {
      if (v.id === variantId) {
        const filteredImages = v.images.filter(img => img.id !== imageId);
        if (filteredImages.length > 0 && !filteredImages.some(img => img.isPrimary)) {
          filteredImages[0].isPrimary = true;
        }
        return { ...v, images: filteredImages };
      }
      return v;
    }));
  };

  const setPrimaryImage = (variantId, imageId) => {
    setVariants(variants.map(v => {
      if (v.id === variantId) {
        return {
          ...v,
          images: v.images.map(img => ({
            ...img,
            isPrimary: img.id === imageId
          }))
        };
      }
      return v;
    }));
  };

  // Save Product
  const handleSaveProduct = (e) => {

    console.log("HEllo this is a debug message ")
    
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? {
        ...p, ...formData, variants, variantsCount: variants.length
      } : p));
    } else {
      setProducts([...products, {
        id: Date.now().toString(),
        ...formData,
        variants,
        variantsCount: variants.length,
        createdAt: new Date().toISOString().split('T')[0]
      }]);


    }
    handleCloseModal();
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Products</h1>
            <p className="text-muted-foreground mt-1">Manage your catalog, variants, and inventory.</p>
          </div>
          <Button onClick={() => handleOpenModal()} className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle>All Products</CardTitle>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <Input placeholder="Search products..." className="pl-9" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Variants</TableHead>
                  <TableHead>Added</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                      No products found. Add one to get started.
                    </TableCell>
                  </TableRow>
                ) : products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <Badge variant={product.status ? "default" : "secondary"}>
                        {product.status ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>{product.variants?.length || 0}</TableCell>
                    <TableCell className="text-muted-foreground">{product.createdAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleOpenModal(product)} className="h-8 w-8 text-muted-foreground hover:text-foreground">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDeleteProduct(product.id)} className="h-8 w-8 text-destructive hover:bg-destructive/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
        onClose={handleCloseModal}
        title={editingProduct ? "Edit Product" : "Create New Product"}
        description="Fill in the details and variants for this product."
        className="max-w-6xl w-[95vw]"
      >
        <form onSubmit={handleSaveProduct} className="flex flex-col gap-8 py-4">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Product Name <span className="text-destructive">*</span></Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Premium Hoodie"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category <span className="text-destructive">*</span></Label>
              <Input
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                placeholder="e.g., Hoodies"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
              <textarea
                id="description"
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="flex min-h-[100px] w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50 resize-y"
                placeholder="Describe the product..."
              />
            </div>
            <div className="flex items-center gap-2 md:col-span-2">
              <input
                type="checkbox"
                id="status"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <Label htmlFor="status" className="cursor-pointer">Product is Active</Label>
            </div>
          </div>

          {/* Variants Section */}
          <div className="border-t border-border pt-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Product Variants</h3>
                <p className="text-sm text-muted-foreground">Add colors, sizes, and specific pricing/stock.</p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addVariant}>
                <Plus className="w-4 h-4 mr-2" /> Add Variant
              </Button>
            </div>

            <div className="flex flex-col gap-8">
              {variants.map((variant, index) => (
                <div key={variant.id} className="bg-muted/30 p-5 rounded-2xl border border-border flex flex-col gap-5">
                  <div className="flex justify-between items-center pb-2 border-b border-border/50">
                    <h4 className="font-semibold text-md">Variant {index + 1}</h4>
                    {variants.length > 1 && (
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeVariant(variant.id)} className="text-destructive hover:bg-destructive/10 h-8 px-3">
                        <Trash2 className="w-4 h-4 mr-2" /> Remove Variant
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">Color <span className="text-destructive">*</span></Label>
                      <Input className="w-[100px]" required value={variant.color} onChange={(e) => updateVariant(variant.id, 'color', e.target.value)} placeholder="e.g., Black" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">Size <span className="text-destructive">*</span></Label>
                      <Input required value={variant.size} onChange={(e) => updateVariant(variant.id, 'size', e.target.value)} placeholder="e.g., XL" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">SKU <span className="text-destructive">*</span></Label>
                      <Input required value={variant.sku} onChange={(e) => updateVariant(variant.id, 'sku', e.target.value)} placeholder="e.g., HD-BLK-XL" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">Price (₹) <span className="text-destructive">*</span></Label>
                      <Input required type="number" min="0" step="0.01" value={variant.price} onChange={(e) => updateVariant(variant.id, 'price', e.target.value)} placeholder="999" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">MRP (₹)</Label>
                      <Input type="number" min="0" step="0.01" value={variant.mrp} onChange={(e) => updateVariant(variant.id, 'mrp', e.target.value)} placeholder="1299" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="text-xs">Stock <span className="text-destructive">*</span></Label>
                      <Input required type="number" min="0" value={variant.stock} onChange={(e) => updateVariant(variant.id, 'stock', e.target.value)} placeholder="50" />
                    </div>
                  </div>

                  {/* Image Upload for Variant */}
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium">Variant Images</Label>
                      <span className="text-xs text-muted-foreground">Select a star to set as primary</span>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      {variant.images.map(img => (
                        <div
                          key={img.id}
                          className={cn(
                            "relative w-28 h-28 rounded-xl overflow-hidden border-2 group transition-all",
                            img.isPrimary ? "border-primary shadow-sm" : "border-border hover:border-primary/50"
                          )}
                        >
                          <img src={img.url} alt="Variant" className="w-full h-full object-cover" />

                          {/* Actions overlay */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                            <div className="flex justify-end">
                              <button
                                type="button"
                                onClick={() => removeImage(variant.id, img.id)}
                                className="bg-destructive text-white rounded-full p-1.5 hover:bg-red-600 transition-colors"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <div className="flex justify-start">
                              <button
                                type="button"
                                onClick={() => setPrimaryImage(variant.id, img.id)}
                                className={cn(
                                  "rounded-full p-1.5 transition-colors",
                                  img.isPrimary ? "bg-primary text-primary-foreground" : "bg-white/80 text-neutral-600 hover:bg-white"
                                )}
                                title={img.isPrimary ? "Primary Image" : "Set as Primary"}
                              >
                                <Star className={cn("w-4 h-4", img.isPrimary && "fill-current")} />
                              </button>
                            </div>
                          </div>

                          {/* Primary indicator (always visible if primary) */}
                          {img.isPrimary && (
                            <div className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm pointer-events-none">
                              PRIMARY
                            </div>
                          )}
                        </div>
                      ))}
                      <label className="w-28 h-28 rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer bg-background hover:bg-muted/30">
                        <ImageIcon className="w-8 h-8 mb-2" />
                        <span className="text-xs font-medium">Upload</span>
                        <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleImageUpload(variant.id, e)} />
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-4 border-t border-border pt-6 sticky bottom-0 bg-card py-2">
            <Button type="button" variant="outline" onClick={handleCloseModal}>Cancel</Button>
            <Button type="submit" size="lg" onClick={handleSaveProduct}>Save Product</Button>
          </div>
        </form>
      </Modal>
    </AdminLayout>
  );
}
