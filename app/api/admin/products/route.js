import { createProductController } from "@/lib/controllers/product.controller";
// route to write the product
export async function POST(req){
    
return await createProductController(req);
}
