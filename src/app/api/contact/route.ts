import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const client = await clientPromise;
    const db = client.db("portfolio"); // Replace with your actual DB name
    const collection = db.collection("contacts");

    await collection.insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
