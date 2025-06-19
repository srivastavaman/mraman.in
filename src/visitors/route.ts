import clientPromise from '@/lib/mongodb'; // adjust the path based on location

import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("analytics");
  const collection = db.collection("visitors");

  const visitor = await collection.findOneAndUpdate(
    { _id: "footer-visits" },
    { $inc: { count: 1 } },
    { returnDocument: "after", upsert: true }
  );

  return NextResponse.json({ count: visitor.value?.count || 0 });
}
