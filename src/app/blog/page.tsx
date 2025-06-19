import Link from "next/link";
import { blogs } from "./data/blogs";
import Image from "next/image";

export default function BlogList() {
  return (
    <section className="bg-slate-900 text-white min-h-screen py-20 px-6 md:px-20 lg:px-28">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-blue-400">
        Explore Our Blogs
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-blue-400 transition duration-300 ease-in-out group"
          >
            <div className="overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-blue-400 group-hover:text-blue-300 transition">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-400">{blog.author} | {blog.date}</p>
              <p className="text-gray-300 line-clamp-3">
                {blog.content.replace(/<[^>]*>?/gm, "").slice(0, 180)}...
              </p>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
