import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import { Contact } from "@/models/contact";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, subject, message } = body;

    await dbConnect();

    const savedContact = await Contact.create({ name, subject, message });
    console.log("✅ Saved:", savedContact);

    return NextResponse.json({ success: true, savedContact });
  } catch (error) {
    console.error("❌ Error in /api/contact:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
