import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar2 } from "./BlogCard";
import { motion } from "framer-motion";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <AppBar />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-center"
      >
        <div className="grid grid-cols-12 gap-10 pt-16 w-full px-10 max-w-screen-xl">
          {/* Blog content */}
          <div className="col-span-8">
            <h1 className="text-5xl font-extrabold leading-tight">
              {blog.title}
            </h1>

            <p className="text-sm text-slate-400 mt-3">
              Posted on 30 October 2024 · {Math.ceil(blog.content.length / 120)}{" "}
              min read
            </p>

            <article className="prose prose-lg mt-10 max-w-none">
              {blog.content}
            </article>
          </div>

          {/* Author card */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="col-span-4 h-fit sticky top-28 bg-white rounded-2xl border p-6  hover:shadow-lg shadow-md"
          >
            <p className="text-slate-500 text-sm uppercase tracking-wide">
              Author
            </p>

            <div className="flex items-center gap-4 mt-4 ">
              <Avatar2 name={blog.author.name} />
              <div>
                <p className="text-xl font-bold">{blog.author.name}</p>
                <p className="text-slate-500 text-sm mt-1">
                  Writing about Web, Web3 & life
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};
