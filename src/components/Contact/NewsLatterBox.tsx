"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NewsLatterBox = () => {
  const { theme } = useTheme();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [cooldown, setCooldown] = useState(0); // NEW

  /* -------------------------------------------------------
      1️⃣ RESUME COOL-DOWN WHEN PAGE REFRESHES
  ------------------------------------------------------- */
  useEffect(() => {
    const lastSub = localStorage.getItem("lastNewsletterTime");
    if (lastSub) {
      const diff = (Date.now() - parseInt(lastSub)) / 1000;
      const remaining = 60 - diff; // cooldown: 60 sec (you can change)
      if (remaining > 0) {
        setCooldown(Math.ceil(remaining));
      }
    }
  }, []);

  /* -------------------------------------------------------
      2️⃣ COUNTDOWN TIMER
  ------------------------------------------------------- */
  useEffect(() => {
    if (cooldown > 0) {
      const t = setInterval(() => {
        setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(t);
    }
  }, [cooldown]);

  /* -------------------------------------------------------
      3️⃣ HANDLE SUBSCRIBE
  ------------------------------------------------------- */
  const handleSubscribe = async () => {
    if (!email) return;

    // Before subscribing, check cooldown
    const lastSub = localStorage.getItem("lastNewsletterTime");
    if (lastSub) {
      const diff = (Date.now() - parseInt(lastSub)) / 1000;
      const remaining = 60 - diff;
      if (remaining > 0) {
        setCooldown(Math.ceil(remaining));
        setStatus(`⏳ Please wait ${Math.ceil(remaining)} sec`);
        return;
      }
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.status === 200) {
        setStatus("✅ Subscribed successfully!");
        setEmail("");

        // Save time to localStorage
        localStorage.setItem("lastNewsletterTime", Date.now().toString());
        setCooldown(60); // 60 sec cooldown
      } 
      else if (res.status === 409) {
        setStatus("⚠️ You're already subscribed.");
      } 
      else {
        setStatus("❌ Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark: relative z-10 rounded-2xl bg-slate-950 p-8 shadow-three sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
        Subscribe to receive future updates
      </h3>

      <div>
        <input
          type="email"
          name="email"
          value={email}
          disabled={cooldown > 0 || loading}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border-stroke mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-500"
        />

        <button
          onClick={handleSubscribe}
          disabled={loading || cooldown > 0}
          className={`mb-2 flex w-full items-center justify-center rounded-xl bg-blue-600 px-9 py-4 text-base font-medium text-white shadow-submit transition duration-300 ${
            loading || cooldown > 0
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-blue-700"
          }`}
        >
          {loading
            ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Subscribing...
              </span>
            )
            : cooldown > 0
              ? `Wait ${cooldown}s`
              : "Subscribe Now"
          }
        </button>

        <p className="mt-2 text-center text-sm text-green-400">{status}</p>
        <p className="text-center text-base leading-relaxed text-body-color dark:text-gray-400">
          Please don’t send any spam mail.
        </p>
      </div>

      {/* SVGs (unchanged) */}
      <span className="absolute left-2 top-7">
        <svg
          width="57"
          height="65"
          viewBox="0 0 57 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
            fill="url(#paint0_linear_1028_600)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1028_600"
              x1="-18.3187"
              y1="55.1044"
              x2="37.161"
              y2="15.3509"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor={theme === "light" ? "#3FFF0B" : "#ffffff"}
                stopOpacity="0.62"
              />
              <stop
                offset="1"
                stopColor={theme === "light" ? "#3FFF0B" : "#ffffff"}
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default NewsLatterBox;
