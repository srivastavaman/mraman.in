"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setCount(data.count);
      } catch (err) {
        console.error("Visitor fetch error:", err);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <footer className="relative z-10 bg-slate-950 pt-10 md:pt-14 lg:pt-16 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>

        <div className="flex flex-col gap-4 items-center justify-between md:flex-row py-6">
          {/* Visitor Count */}
          <div>
            👁️ Visitors:{" "}
            <strong>
              {typeof count === "number" ? count.toLocaleString() : "Updating..."}
            </strong>
          </div>

          {/* Copyright */}
          <div className="text-base order-1 md:order-2 text-center">
            © Copyright 2024 by{" "}
            <a
              href="https://mraman.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-400 hover:text-blue-500 transition duration-200"
            >
              Aman Srivastav
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
