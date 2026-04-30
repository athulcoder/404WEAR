import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { maskEmail } from "@/lib/email";
import { generateOTP, storeOTP } from "@/lib/otp";
export async function POST (req){   
    const {username , password} =  await req.json()
 
   
    // check whether they are empty
    if (!username || !password)
        return NextResponse.json({message:"All Feilds are required"},{
    status:400});


    // get the admin using   username 
    const admin = await prisma.admin.findUnique({
        where:{
            username
        }
    })

    console.log(admin);
    if(!admin )
        return NextResponse.json({message:"Invalid username"},{
    status:400});
    
    if(admin.password != password)
        return NextResponse.json({message:"Invalid password"},{
    status:400});


    const maskedEmail = maskEmail(admin.email);
    const otpCode = generateOTP();
    storeOTP(admin.id,otpCode);
    const res = await sendOTPEmail(admin.email,otpCode)

    if (!res.success)
        return NextResponse.json({message:"Invalid username or password | couldn't send email"}, {status:400})
    
    return NextResponse.json({message:`Credentials are valid. OTP sent to ${maskedEmail}`},{
        status:200
    });

    

}
