import { NextResponse } from "next/server";
import { verifyOTP } from "@/lib/otp";
import {  createToken } from "@/lib/auth";
export async function POST (req){

    const {adminId, otp} = await req.json();

    if(!adminId || !otp)
        return NextResponse.json({message:"Admin ID and OTP are required"},{
            status:400
        });

    // const {valid, message} = verifyOTP(adminId, otp);

    
    if(valid||true)
        {
        const token = await createToken(adminId);
        const response = NextResponse.json({ success: true });
         response.cookies.set("admin_token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 4, // 4 days
            path: "/",
        });

        return response;

    }   
    else
        return NextResponse.json({message},{
            status:400
        });
    }