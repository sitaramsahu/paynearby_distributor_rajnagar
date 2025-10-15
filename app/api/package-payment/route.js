// app/api/package-payment/route.js
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const mobile = formData.get("mobile");
    const panNo = formData.get("panNo");
    const aadhaarNo = formData.get("aadhaarNo");
    const gender = formData.get("gender");
    const storeName = formData.get("storeName");
    const referenceNo = formData.get("referenceNo");

    let screenshotPath = null;

    const file = formData.get("screenshot");
    if (file && file.name) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name}`;
      const uploadPath = path.join(process.cwd(), "public/payment", filename);

      fs.writeFileSync(uploadPath, buffer);
      screenshotPath = `/payment/${filename}`;
    }

    const payment = await prisma.paynearby_package_payment.create({
      data: {
        name,
        mobile,
        panNo,
        aadhaarNo,
        gender,
        storeName,
        referenceNo,
        screenshot: screenshotPath,
      },
    });

    return NextResponse.json({ success: true, payment });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
