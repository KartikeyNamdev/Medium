import { AppBar } from "../components/AppBar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { PageWrapper } from "../components/PageWrapper";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();

  if (loading) {
    return (
      <div className="pt-24 flex justify-center">
        <BlogSkeleton />
      </div>
    );
  }

  return (
    <>
      <PageWrapper>
        <AppBar />

        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <h1 className="text-5xl font-extrabold tracking-tight">
            Stories that <span className="text-green-600">matter</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl text-lg">
            Read thoughts, ideas, and perspectives from writers shaping the
            future.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => {
            console.log(blog);
            return (
              <BlogCard
                className="p-4"
                key={blog.id}
                id={blog.id}
                publishedDate="24 Oct 2024"
                authorname={blog.author.name}
                title={blog.title}
                content={blog.content}
              />
            );
          })}
        </div>
      </PageWrapper>
    </>
  );
};
