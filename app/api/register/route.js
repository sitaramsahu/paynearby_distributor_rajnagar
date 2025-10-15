// app/api/register/route.js
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // Validate required fields
    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ error: "All fields are required ❌" }),
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.paynearby_user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists ❌" }), {
        status: 400,
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with role 'user' only
    const newUser = await prisma.paynearby_user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: "user", // enforce user role
      },
    });

    return new Response(
      JSON.stringify({ message: "User registered successfully ✅" }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Server error ❌" }), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
