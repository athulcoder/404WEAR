import { productSchema } from "../validators/product.validator"

export async function createProductController(req) {

    try {
        const body = await req.json()


        const validatedProduct = productSchema.parse(body)
        
        const product = await createProductService(validatedProduct)

        return Response.json(product, { status: 201 })
    } catch (err) {
        return Response.json({ error: err.message }, { status: 400 })
    }


}