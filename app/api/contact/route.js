export const runtime = "nodejs"; // Needed for BigInt support

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const prisma =
  globalForPrisma.prisma || new PrismaClient({ log: ["query", "error"] });
if (!globalForPrisma.prisma) globalForPrisma.prisma = prisma;

// Helper to serialize BigInt & Date
function serialize(obj) {
  return JSON.parse(
    JSON.stringify(obj, (key, value) =>
      typeof value === "bigint"
        ? value.toString()
        : value instanceof Date
        ? value.toISOString()
        : value
    )
  );
}

// POST - create contact
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, shopname, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const newContact = await prisma.paynearby_contact.create({
      data: {
        name,
        email,
        phone,
        shopname,
        message,
      },
    });

    return NextResponse.json({ success: true, contact: serialize(newContact) });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// GET - fetch all contacts
export async function GET() {
  try {
    const contacts = await prisma.paynearby_contact.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, contacts: serialize(contacts) });
  } catch (error) {
    console.error("❌ Fetch contacts error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

// DELETE - delete by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id)
      return NextResponse.json({ error: "ID is required" }, { status: 400 });

    const deleted = await prisma.paynearby_contact.delete({
      where: { id: BigInt(id) },
    });
    return NextResponse.json({ success: true, contact: serialize(deleted) });
  } catch (error) {
    console.error("❌ Delete contact error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
