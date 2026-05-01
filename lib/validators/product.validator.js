
import { z } from "zod"


const productImageSchema = z.object({
    imageUrl: z.string().url("Invalid image URL"),
    isPrimary: z.boolean().optional(),
    position: z.coerce.number().optional(),
});

const productVariantSchema = z.object({
    color: z.string(),
    price: z.number({ invalid_type_error: "Price must be a number" }).positive("Price cannot be negative"),
    mrp: z.number({ invalid_type_error: "MRP must be a number" }).positive("MRP cannot be negative"),
    size: z.enum(["XS", "S", "M", "L", "XL"]),

    stock: z
        .number({ invalid_type_error: "Stock must be a number" })
        .int("Stock must be an integer")
        .min(0, "Stock cannot be negative"),
    sku: z
        .string()
        .trim()
        .transform((val) => val.toUpperCase())
        .regex(
            /^[A-Z0-9]+(-[A-Z0-9]+)+$/,
            "SKU must be like PRODUCT-COLOR-SIZE"
        ),
    isActive: z.boolean(),
    images: z
        .array(productImageSchema)
        .min(1, "Each variant must have at least one image"),

}).refine((data) => data.price <= data.mrp, {
    message: "Price cannot be greater than MRP",
    path: ["price"],
})




export const productSchema = z.object({
    name: z.string().min(2, "Product name required").max(120, "Product name should not be more than 120 chars"),
    description: z.string().min(20, "Product Description should be valid"),
    isActive: z.boolean(),
    categoryId: z.string(),
    variants: z.array(productVariantSchema).min(1, "At least one variant required"),
})



