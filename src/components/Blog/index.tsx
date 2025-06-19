"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Importing blogs from the correct path based on your folder structure
import { blogs } from "@/app/blog/data/blogs";

const BlogSection = () => {
  return (
    <section id="blogs" className="bg-slate-900 px-6 py-20 text-white">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-blue-400 md:text-4xl">
          Trending Blog Posts
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-slate-800 shadow-lg transition-shadow duration-300 hover:shadow-blue-500/40"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={600}
                height={400}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-yellow-300 mb-2 text-xl font-semibold">
                  {blog.title}
                </h3>
                {/* <p className="mb-4 text-sm text-gray-300">
                  {blog.content.substring(0, 100)}...
                </p> */}
                <p className="mb-4 text-xs text-gray-400">
                  By {blog.author} | {blog.date}
                </p>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-block rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
