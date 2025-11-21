import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/admin", process.env.NEXT_PUBLIC_BASE_URL));
  res.cookies.set("admin-auth", "", { maxAge: 0 }); // clear cookie
  return res;
}
