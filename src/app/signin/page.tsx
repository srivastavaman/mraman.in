'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SignUpPage() {
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState('');

  // Generate a random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
    setUserCaptcha('');
    setIsCaptchaVerified(false);
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCaptchaVerify = () => {
    if (userCaptcha.toUpperCase() === captcha) {
      setIsCaptchaVerified(true);
      setCaptchaError('');
    } else {
      setCaptchaError('Captcha does not match. Try again.');
      setIsCaptchaVerified(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col md:flex-row items-center justify-center text-white px-6 py-10">
      {/* Left Side Illustration and Title */}
      <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">Sign In</h1>
        <p className="text-gray-400 text-lg">Login To Get More Access</p>
        <div className="mt-10 flex justify-center md:justify-start">
          <Image src="/svg/signup.png" alt="Sign Up Illustration" width={500} height={500} />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 bg-[#1E293B] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Sign In</h2>
        <p className="text-gray-400 mb-6">Login to get more access</p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Captcha Section */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Captcha</label>
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

          {/* Submit */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Let's Go</label>
            <input
              type="submit"
              value="Sign In"
              disabled={!isCaptchaVerified}
              className={`w-full cursor-pointer px-4 py-2 rounded-md font-medium text-white transition ${
                isCaptchaVerified
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
            />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="/signup">
            <button className="text-blue-400 hover:underline">Sign Up</button>
          </a>
        </p>
      </div>
    </div>
  );
}
