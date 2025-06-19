import { getDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// 👇 Define Visitor with string _id
interface Visitor {
  _id: string;
  count: number;
}

export async function GET() {
  try {
    const db = await getDB("analytics");

    // 👇 Use Visitor type to inform TypeScript
    const collection = db.collection<Visitor>("visitors");

    const updated = await collection.findOneAndUpdate(
      { _id: "footer-visits" },         // ✅ _id is string
      { $inc: { count: 1 } },
      {
        upsert: true,
        returnDocument: "after",        // ✅ Ensures new doc is returned
      }
    );

    const value = null;
const count = value?.count ?? 1; // safely defaults to 1


    return NextResponse.json({ count });
  } catch (error) {
    console.error("Visitor count error:", error);
    return NextResponse.json({ error: "Failed to update count" }, { status: 500 });
  }
}
