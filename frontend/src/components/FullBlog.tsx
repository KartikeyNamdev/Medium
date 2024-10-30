import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar2 } from "./BlogCard";
export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 pt-12 w-full px-10 pt-200 max-w-screen-xl">
          <div className="col-span-8   ">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className=" text-base text-slate-400 pt-2">
              Posted on 30 October 24
            </div>
            <div className="text-medium font-normal pt-2">{blog.content}</div>
          </div>
          <div className=" col-span-4 ">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full ">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar2 name={blog.author.name} />
              </div>
              <div>
                <div className="text-3xl font-bold pl-3">
                  {blog.author.name}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about Author ability to grab user's
                  attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
