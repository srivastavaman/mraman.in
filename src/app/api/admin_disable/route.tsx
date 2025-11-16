// src/app/admin/dashboard/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const router = useRouter();

  const [visitors, setVisitors] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  const handleLogout = () => {
    localStorage.setItem("adminLoggedIn", "true");
    router.push("/admin");
  };
  

  

  useEffect(() => {
    fetch("/api/admin/visitors").then(res => res.json()).then(setVisitors);
    fetch("/api/admin/contacts").then(res => res.json()).then(setContacts);
    fetch("/api/admin/newsletter").then(res => res.json()).then(setSubscribers);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-400">📊 Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      </div>

      {/* Visitor Count */}
      <div className="bg-slate-900 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-2">👁️ Visitor Count</h2>
        {visitors.length > 0 ? (
          visitors.map((v: any, idx) => (
            <p key={idx}>
              Total Visitors:{" "}
              <span className="text-blue-400 font-semibold">{v.count}</span>
            </p>
          ))
        ) : (
          <p>No visitor data.</p>
        )}
      </div>

      {/* Contact Messages */}
      <div className="bg-slate-900 p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">📩 Contact Messages</h2>
        {contacts.map((c: any, idx) => (
          <div key={idx} className="mb-4 p-4 bg-slate-800 rounded-lg">
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Message:</strong> {c.message}</p>
          </div>
        ))}
      </div>

      {/* Newsletter Subscribers */}
      <div className="bg-slate-900 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">📰 Newsletter Subscribers</h2>
        {subscribers.map((s: any, idx) => (
          <div key={idx} className="mb-2 p-2 bg-slate-800 rounded-md">
            <p>{s.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
