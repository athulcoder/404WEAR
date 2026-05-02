import { createCategoryController } from "@/lib/controllers/category.controller";
import { getAllCategories } from "@/lib/services/category.service";

export async function POST(req) {

    console.log(req)
    return await createCategoryController(req);
}



export async function GET(req) {
    try {

        const categories = await getAllCategories();

        return Response.json({ categories }, { status: 200 })
    } catch (err) {
        return Response.json({ error: "unauthorized to get the categories" })
    }
}