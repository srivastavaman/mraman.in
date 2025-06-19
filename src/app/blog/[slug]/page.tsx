import { blogs } from "../data/blogs";
import { notFound } from "next/navigation";
import ShareButtons from "@/components/ShareButtons"; // client component

export async function generateMetadata({ params }) {
  const blog = blogs.find((item) => item.slug.toLowerCase() === params.slug.toLowerCase());


  if (!blog) return {};

  return {
    title: `${blog.title} – Mr. Aman`,
    description: blog.content.slice(0, 160),
    keywords: `${blog.title.toLowerCase()}, Mr. Aman blog, tech blog, ${blog.author}`,
    openGraph: {
      title: blog.title,
      description: blog.content.slice(0, 160),
      images: [{ url: blog.image }],
    },
  };
}

export default function BlogPage({ params }) {
  const blog = blogs.find((item) => item.slug === params.slug);
  if (!blog) return notFound();

  const url = `https://mraman.in/blog/${params.slug}`;

  return (
    <div className="bg-gray-800 px-6 py-10 font-serif text-white sm:px-12 md:px-40">
      <h1 className="mb-4 text-4xl font-bold text-blue-400">{blog.title}</h1>
      <p className="mb-6 text-sm text-gray-300">
        By {blog.author} | {blog.date}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="mb-6 w-full rounded-lg"
      />
      <div
        className="prose prose-invert prose-h2:text-3xl prose-h2:text-blue-400 prose-p:text-white prose-li:text-white max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Client component for share buttons */}
      <ShareButtons url={url} />
    </div>
  );
}
