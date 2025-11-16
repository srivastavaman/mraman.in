import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const isRead = searchParams.get('read') === 'true';

  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });

  if (!isRead) {
    await connection.execute('UPDATE visitor_count SET count = count + 1 WHERE id = 1');
  }

  const [rows] = await connection.execute('SELECT count FROM visitor_count WHERE id = 1');
  await connection.end();

  return NextResponse.json({ count: rows[0].count });
}
