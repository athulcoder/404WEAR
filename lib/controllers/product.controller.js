export async function createProductController(req) {

    try {
        const body = await req.json()

        const product = await createProductService(body)

        return Response.json(product, { status: 201 })
    } catch (err) {
        return Response.json({ error: err.message }, { status: 400 })
    }


}