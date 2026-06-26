
import nodemailer from "nodemailer";
function maskEmail(email) {
    const [localPart, domain ]=email.split("@");
    const maskedEmail = localPart[0] + "*****@"+domain
    return maskedEmail;
}


async function sendOTPEmail(email, otp) {
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
    },
    });



    try{
    const res = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Login OTP | Sudowear",
        html: `
<div style="font-family: Arial, sans-serif; background-color: #f6f7fb; padding: 20px;">
  <table align="center" width="100%" style="max-width: 520px; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <tr>
      <td style="padding: 20px 30px; border-bottom: 1px solid #eee;">
        <h2 style="margin: 0; color: #111;">Sudowear Admin</h2>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 30px; color: #333;">
        <p style="margin: 0 0 10px;">Hello Admin,</p>

        <p style="margin: 0 0 20px; line-height: 1.6;">
          A login attempt was made to your Sudowear admin panel.  
          Use the OTP below to continue:
        </p>

        <!-- OTP Box -->
        <div style="text-align: center; margin: 30px 0;">
          <div style="
            display: inline-block;
            padding: 15px 25px;
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 8px;
            background: #f1f3f7;
            border-radius: 8px;
            color: #111;
          ">
            ${otp}
          </div>
        </div>

        <p style="margin: 0 0 10px; font-size: 14px; color: #555;">
          This OTP is valid for <strong>5 minutes</strong>.
        </p>

        <p style="margin: 0 0 20px; font-size: 14px; color: #555;">
          If you did not request this login, please ignore this email or secure your account immediately.
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding: 20px; text-align: center; font-size: 12px; color: #999; background: #f6f7fb;">
        © 2026 Sudowear. Admin Security System
      </td>
    </tr>

  </table>
</div>
`

    })
        
    
    if(res)
        return { success: true, message: "OTP email sent successfully" }

        

} 

  catch (error) {
    console.log(error)
    return { success: false, error: error.message }
  }

}


export {maskEmail,sendOTPEmail}
