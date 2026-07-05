import { connectDatabase } from "../infrastructure/database/mongodb";

export async function bootstrapDatabase(){
    await connectDatabase()
}