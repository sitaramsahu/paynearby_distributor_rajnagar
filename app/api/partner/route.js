import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";
import { PrismaClient } from "@prisma/client";

export const runtime = "nodejs";

const prisma = new PrismaClient();

// Disable body parsing
export const config = { api: { bodyParser: false } };

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

// Convert NextRequest to a Node.js readable stream
const parseForm = async (req) => {
  const form = formidable({
    multiples: false,
    uploadDir: "./public/uploads",
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};
// POST - create partner
// POST - create partner
export async function POST(req) {
  try {
    // Parse multipart/form-data
    const formData = await req.formData(); // built-in App Router method

    const name = formData.get("name");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const aadhaar = formData.get("aadhaar");
    const pan = formData.get("pan");
    const fulladdress = formData.get("fulladdress");

    const panFile = formData.get("panfilename"); // File object
    const aadhaarFile = formData.get("aadhaarfilename"); // File object

    // Save uploaded files manually
    const saveFile = async (file) => {
      if (!file) return "";
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const filename = `${Date.now()}-${file.name}`;
      const path = `./public/uploads/${filename}`;
      await fs.promises.writeFile(path, buffer);
      return filename;
    };

    const panfilename = await saveFile(panFile);
    const aadhaarfilename = await saveFile(aadhaarFile);

    if (!name || !email || !pan) {
      return NextResponse.json(
        { error: "Name, email, and PAN are required" },
        { status: 400 }
      );
    }

    const newPartner = await prisma.paynearby_partner_apply.create({
      data: {
        name,
        email,
        mobile: parseInt(mobile || "0"),
        aadhaar,
        pan,
        fulladdress,
        panfilename,
        aadhaarfilename,
      },
    });

    // ✅ Use serialize to handle BigInt & Date
    return NextResponse.json({ success: true, partner: serialize(newPartner) });
  } catch (error) {
    console.error("❌ partner form error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET - fetch all partners
export async function GET() {
  try {
    const partners = await prisma.paynearby_partner_apply.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, partners: serialize(partners) });
  } catch (error) {
    console.error("❌ Fetch partners error:", error);
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

    const deleted = await prisma.paynearby_partner_apply.delete({
      where: { id: BigInt(id) },
    });
    return NextResponse.json({ success: true, partner: serialize(deleted) });
  } catch (error) {
    console.error("❌ Delete partner error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
