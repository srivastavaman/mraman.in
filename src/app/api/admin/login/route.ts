import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getConnection } from "@/lib/db";
import { RowDataPacket } from "mysql2";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    const conn = await getConnection();
    const [rows] = await conn.execute<RowDataPacket[]>(
      "SELECT * FROM admin_users WHERE username = ? AND password = ?",
      [username, password]
    );
    await conn.end();

    const user = rows.length > 0 ? rows[0] : null;

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // ✅ Set secure session cookie with user name
    const res = NextResponse.json({
      message: `Welcome ${user.name}`, // send welcome message in response
      name: user.name, // optional for frontend use
    });
    res.cookies.set("admin-auth", JSON.stringify({ loggedIn: true, name: user.name }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2, // 2 hours
      path: "/",
    });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
