
import { z } from "zod"

export const categorySchema = z.object(
    {
        name: z.string().min(4, "should have minimum 4 char length"),
        slug: z.string().min(3, "Should have a slug"),
        parentId: z.string().nullable(),
    }
)