import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db"; // Adjust path if needed

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, service, message } = data;

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const connection = await getConnection();

    await connection.execute(
      "INSERT INTO contact_requests (name, email, service, message) VALUES (?, ?, ?, ?)",
      [name, email, service, message]
    );

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
