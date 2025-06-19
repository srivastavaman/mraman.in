"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SignUpPage() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
    setUserCaptcha("");
    setIsCaptchaVerified(false);
    setCaptchaError("");
  };

  // On mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle verify button click
  const handleCaptchaVerify = () => {
    if (userCaptcha.toUpperCase() === captcha) {
      setIsCaptchaVerified(true);
      setCaptchaError("");
    } else {
      setCaptchaError("Captcha does not match. Try again.");
      setIsCaptchaVerified(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F172A] px-6 py-10 text-white md:flex-row">
      {/* Left Side */}
      <div className="mb-10 space-y-6 text-center md:mb-0 md:w-1/2 md:text-left">
        <h1 className="text-5xl font-bold text-blue-400">Sign Up</h1>
        <p className="text-lg text-gray-400">Create Account To Get More Access</p>
        <div className="mt-10 flex justify-center md:justify-start">
          <Image src="/svg/signup.png" alt="Sign Up Illustration" width={500} height={500} />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full max-w-md rounded-2xl bg-[#1E293B] p-8 shadow-lg md:w-1/2">
      <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
        <p className="text-gray-400 mb-6">Create account to get more access</p>
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Contact</label>
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-white"
            />
          </div>

          {/* Captcha Section */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">Captcha</label>
            <div className="flex items-center gap-4 mb-2">
              <div className="px-4 py-2 bg-gray-800 font-mono text-yellow-300 rounded-md border border-yellow-500 tracking-widest">
                {captcha}
              </div>
              <button
                type="button"
                onClick={generateCaptcha}
                className="text-sm text-blue-400 hover:underline"
              >
                Refresh
              </button>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Enter Captcha"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                className="w-full rounded-md border border-slate-700 bg-slate-800 px-4 py-2 text-white"
              />
              <button
                type="button"
                onClick={handleCaptchaVerify}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
                Verify
              </button>
            </div>

            {captchaError && (
              <p className="text-sm text-red-500 mt-1">{captchaError}</p>
            )}

            {isCaptchaVerified && (
              <p className="text-sm text-green-400 mt-1">Captcha Verified ✔</p>
            )}
          </div>

          {/* Final Submit */}
          <button
            type="submit"
            disabled={!isCaptchaVerified}
            className={`w-full py-2 rounded-md font-medium text-white transition ${
              isCaptchaVerified
                ? "bg-blue-700 hover:bg-blue-700 cursor-pointer"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>
          <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/signup"><button className="text-blue-400 hover:underline">Sign In</button></a>
        </p>
        </form>
      </div>
    </div>
  );
}
