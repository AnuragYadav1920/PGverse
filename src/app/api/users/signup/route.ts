import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, phone, password } = reqBody;
    //    check if user exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    // // send verification email
    await sendEmail({email: email, emailType: "VERIFY", userId: newUser._id, username: username});
    
    return NextResponse.json({
      messagge: "User created successfully",
      success: true,
      newUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
