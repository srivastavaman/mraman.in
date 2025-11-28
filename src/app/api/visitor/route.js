import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

let pool;

if (!pool) {
  pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10,
  });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const isRead = searchParams.get('read') === 'true';

  if (!isRead) {
    await pool.execute('UPDATE visitor_count SET count = count + 1 WHERE id = 1');
  }

  const [rows] = await pool.execute('SELECT count FROM visitor_count WHERE id = 1');

  return NextResponse.json({ count: rows[0].count });
}
