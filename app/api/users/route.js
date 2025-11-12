// app/api/users/route.js
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.paynearby_user.findMany();
  return NextResponse.json({ success: true, users });
}
