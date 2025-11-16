// app/api/newsletter/route.ts
import { getConnection } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
      });
    }

    const conn = await getConnection();

    // Check if email already exists
    const [rows] = await conn.execute(
      "SELECT id FROM newsletter_subscribers WHERE email = ?",
      [email]
    );

    if ((rows as any[]).length > 0) {
      return new Response(JSON.stringify({ message: "Already subscribed" }), {
        status: 409, // Conflict
      });
    }

    // Insert new email
    await conn.execute(
      "INSERT INTO newsletter_subscribers (email) VALUES (?)",
      [email]
    );

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
