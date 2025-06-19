"use client";

import NewsLatterBox from "./NewsLatterBox";
import SocialMediaBox from "./SocialMediaBox";
import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      setStatus("Message sent successfully!");
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden bg-slate-900 py-16 md:py-20 lg:py-28 text-white"
    >
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold sm:mb-12 sm:text-4xl">
          💼 Contact Me
        </h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          {/* Left: Contact Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-2xl bg-slate-950 px-8 py-11 shadow-2xl sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[90px]">
              <h2 className="mb-3 text-3xl font-bold text-blue-400">
                Need Help?
              </h2>
              <p className="mb-8 text-base text-gray-400">
                Our support team will get back to you ASAP via email.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full rounded-md bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                        className="w-full rounded-md bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-md bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-md bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                    {status && (
                      <p className="mt-4 text-sm text-green-400">{status}</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Newsletter and Socials */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <SocialMediaBox />
            <br />
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
