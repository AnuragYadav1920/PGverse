import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    // check if the user is registered or not
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not exists" }, { status: 404 });
    }
    // compare password
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }
    // create a token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create a token
    var token = await jwt.sign(tokenData, process.env.TOKEN_SECRET,{ expiresIn: "1h" });
    const response = NextResponse.json({
      messagge: "User logged in successfully",
      success: true
    });
    response.cookies.set("token", token, {httpOnly:true})

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
