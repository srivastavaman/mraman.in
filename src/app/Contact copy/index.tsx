'use client';

import NewsLatterBox from "./NewsLatterBox";
import SocialMediaBox from "./SocialMediaBox";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-gray-300 overflow-hidden py-16 md:py-20 lg:py-28 min-h-screen"
    >
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12"
      >
        📩 Contact Me
      </motion.h2>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <motion.div
            className="w-full px-4 lg:w-7/12 xl:w-8/12"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="mb-12 rounded-xl bg-slate-950 px-8 py-11 shadow-lg sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h3 className="mb-3 text-3xl font-bold text-white">Contact Us</h3>
              <p className="mb-12 text-base font-medium text-gray-400">
                We will get back to you ASAP via email.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-md bg-slate-800 text-gray-200 border border-slate-700 px-6 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md bg-slate-800 text-gray-200 border border-slate-700 px-6 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        className="w-full resize-none rounded-md bg-slate-800 text-gray-200 border border-slate-700 px-6 py-3 text-base outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4"><br />
                    <button
                      type="submit"
                      className="rounded-xl bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-md duration-300 hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="w-full px-4 lg:w-5/12 xl:w-4/12"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SocialMediaBox /><br/>
            <NewsLatterBox />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
