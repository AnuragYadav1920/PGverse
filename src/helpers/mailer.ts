import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcrypt from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId, username }: any) => {
  try {
    // create a hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    } else {
      throw new Error("Invalid emailType provided");
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "ad05668cc98d65",
        pass: "cd95b41e84ac7c",
      },
    });

    const mailOptions = {
      from: "anuragyadav.webdev@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `
        <div style="background-color: #f0f4f8; padding: 40px 0;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); font-family: 'Segoe UI', Arial, sans-serif; color: #333;">
            
            <!-- Header -->
            <div style="background-color: #2e6cf6; color: #ffffff; padding: 24px 32px;">
              <h1 style="margin: 0; font-size: 24px;">Welcome to PGVerse! <br/></h1>
              <p style="margin: 4px 0 0; font-size: 14px;">Your trusted partner for finding the perfect PG.</p>
            </div>
      
            <!-- Body -->
            <div style="padding: 32px;">
              <p style="font-size: 24px; margin: 0 0 16px;">Hi <strong style="color:#2e6cf6">${username}</strong>,</p>
      
              <p style="font-size: 16px; margin: 0 0 16px;">
                We're excited to have you join <strong style="color: #2e6cf6;">PGVerse</strong>! To get started, please confirm your email address by clicking the button below.
              </p>
      
              <div style="text-align: center; margin: 32px 0;">
                <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}" 
                   style="display: inline-block; padding: 14px 28px; background-color: #2e6cf6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">
                  ${emailType === "VERIFY" ? "Verify Email" : "Reset Password"}
                </a>
              </div>
      
              <p style="font-size: 14px; color: #666; margin: 0 0 24px;">
                If you did not request this, you can safely ignore this email.
              </p>
      
              <p style="font-size: 16px; margin: 0;">
                Best regards,<br>
                <strong style="color: #2e6cf6;">The PGVerse Team</strong>
              </p>
            </div>
      
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px 32px; font-size: 12px; color: #999; text-align: center;">
              <p style="margin: 0;">
                contact@pgverse.com &nbsp;|&nbsp; &copy; ${new Date().getFullYear()} PGVerse. All rights reserved.
              </p>
            </div>
      
          </div>
        </div>
      `,
      
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
