import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import User from "@/models/user.model";
import connectToDatabase from "@/lib/mongodb";

export async function POST(req: Request) {
  const { fullname, email, password, confirmPassword } = await req.json();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!isValidEmail(email)) {
    return NextResponse.json({ message: "Invalid email", status: 400 });
  }

  if (!fullname || !email || !password || !confirmPassword) {
    return NextResponse.json({
      message: "All fields are required",
      status: 400,
    });
  }

  if (password !== confirmPassword) {
    return NextResponse.json({ message: "Passwords do not match" });
  }

  if (password.length < 6) {
    return NextResponse.json({
      message: "Password must be at least 6 characters long",
    });
  }

  try {
    await connectToDatabase();

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json({ status: 400, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const data = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      status: 200,
      data,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
}
