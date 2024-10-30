import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  if (loading === true) {
    return (
      <div className=" pt-16 flex justify-center">
        <BlogSkeleton />
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center ">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              publishedDate="24/10/24"
              authorname={blog.author.name}
              title={blog.title}
              content={blog.content}
              key={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
