import { jwtVerify } from "jose";

export async function verifyAdmin(token){

    const JWT_SECRET = process.env.JWT_SECRET;

    jwtVerify(token,JWT_SECRET);
    
}