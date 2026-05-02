import { prisma } from "../db/prisma"


export async function createCategoryService(data) {

    const category = await prisma.category.create({
        data: {
            name: data.name,
            slug: data.slug,

        }
    })
    return category
}



export async function getAllCategories() {

    //TODO 
    //paggingation should be done here
    const categories = await prisma.category.findMany({

    })

    return categories
}