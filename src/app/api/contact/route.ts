import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const conn = await getConnection();
    const query = `
  INSERT INTO contacts (name, email, message, created_at)
  VALUES (?, ?, ?, NOW())
  ON DUPLICATE KEY UPDATE
    name = VALUES(name),
    message = VALUES(message),
    created_at = NOW()
`;
    await conn.execute(query, [name, email, message]);
    await conn.end();

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    console.error("Insert error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
