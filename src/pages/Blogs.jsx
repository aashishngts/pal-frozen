import { useState } from "react";
import { Eye, MessageCircle, Heart } from "lucide-react";
import Hero from "../components/Hero";

/* TEMP BLOG IMAGES */
import blog1 from "../assets/blog.png";
import blog2 from "../assets/blog.png";
import blog3 from "../assets/blog.png";
import blog4 from "../assets/blog.png";

const TABS = ["All Posts", "Events", "Recipes"];

const BLOGS = [
  {
    id: 1,
    category: "All Posts",
    title: "Why Pal Frozen Foods Are the Smartest Choice for Every Kitchen.",
    desc:
      "In today's fast-paced world, where time is precious and quality matters more than ever...",
    author: "Team Marketing",
    date: "Nov 13, 2025",
    read: "3 min read",
    img: blog1,
    views: 16,
    comments: 0,
  },
  {
    id: 2,
    category: "Events",
    title: "Inflation In Agriculture: How Frozen Food Can Save Your Budget.",
    desc:
      "Remember when ₹100 filled your veggie bag full of fresh produce? Now, it barely gets you...",
    author: "Team Marketing",
    date: "Aug 20, 2025",
    read: "3 min read",
    img: blog2,
    views: 46,
    comments: 0,
  },
  {
    id: 3,
    category: "Recipes",
    title:
      "Perfectly Preserved: The Science And Innovation Behind Frozen Food.",
    desc:
      "Freezing food isn't just about convenience — it's a blend of history, chemistry...",
    author: "Team Marketing",
    date: "Jul 9, 2025",
    read: "3 min read",
    img: blog3,
    views: 37,
    comments: 0,
  },
  {
    id: 4,
    category: "All Posts",
    title:
      "The Growing Pea Market: A Green Revolution In The Food Industry.",
    desc:
      "The global pea market is witnessing extraordinary growth, transforming this humble legume...",
    author: "Team Marketing",
    date: "Mar 28, 2025",
    read: "5 min read",
    img: blog4,
    views: 93,
    comments: 0,
  },
];

export default function Blogs() {
  const [activeTab, setActiveTab] = useState("All Posts");

  const filteredBlogs =
    activeTab === "All Posts"
      ? BLOGS
      : BLOGS.filter((b) => b.category === activeTab);

  return (
    <>
      {/* HERO (already reusable) */}
      <Hero title="Blogs" subtitle="Insights, Recipes & Updates" />

      {/* PAGE TITLE */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-semibold tracking-wide">BLOGS</h1>
      </section>

      {/* TABS BAR */}
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
          <div className="flex gap-8 text-sm">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`transition ${
                  activeTab === tab
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button className="border border-white px-4 py-1 text-white text-xs">
            Log in / Sign up
          </button>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border bg-white flex flex-col"
            >
              {/* IMAGE */}
              <img
                src={blog.img}
                alt={blog.title}
                className="h-44 w-full object-cover"
              />

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">
                {/* AUTHOR */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="w-6 h-6 rounded-full bg-gray-300" />
                  <span>{blog.author}</span>
                </div>

                {/* DATE */}
                <p className="text-xs text-gray-400 mb-3">
                  {blog.date} · {blog.read}
                </p>

                {/* TITLE */}
                <h3 className="text-green-800 font-medium mb-3 leading-snug">
                  {blog.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 flex-1">
                  {blog.desc}
                </p>

                {/* FOOTER ICONS */}
                <div className="flex items-center justify-between mt-6 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye size={15} />
                      {blog.views}
                    </span>

                    <span className="flex items-center gap-1">
                      <MessageCircle size={15} />
                      {blog.comments}
                    </span>
                  </div>

                  <button className="hover:text-red-500 transition">
                    <Heart size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
