import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function createToken(adminId) {
  const token = jwt.sign(
    {
      id: adminId,
      role: "admin",
    },
    process.env.JWT_SECRET,
    { expiresIn: "4d" }
  );

  return token
}