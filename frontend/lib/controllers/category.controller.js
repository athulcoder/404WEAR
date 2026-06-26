import { createCategoryService } from "../services/category.service";
import { categorySchema } from "../validators/category.validator";


export async function createCategoryController(req) {

    try {

        const body = await req.json();
        console.log(body)
        const validatedCategory = categorySchema.parse(body);
        console.log(validatedCategory)
        const category = await createCategoryService(validatedCategory);
        console.log(category)
        return Response.json({ category }, { status: 201 })

    }
    catch (err) {
        console.log(err)
        return Response.json({ message: err.message }, { status: 400 })
    }
}