import { Link } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface BlogCardProps {
  id: number;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
}
export const BlogCard = ({
  id,
  authorname,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex pb-2 max-w-screen-lg">
          <div>
            <Avatar1 name="Kartikey" />
          </div>
          <div className="pl-2 font-extralight text-slate-600">
            {authorname}
          </div>
          <div className="pl-2 font-thin text-slate-400 ">{publishedDate} </div>
        </div>
        <div className="text-2xl font-semibold">{title}</div>
        <div className="font-thin text-slate-500 ">
          {" "}
          {content.slice(0, 100) + "..."}
        </div>
        <div className="pl-2 font-thin text-slate-500 text-sm pt-5">{`${Math.ceil(
          content.length / 100
        )} minutes read`}</div>
      </div>
    </Link>
  );
};
export function Avatar1({ name }: { name: string }) {
  return (
    <div className="relative w-6 h-6 inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-sm font-thin text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export function Avatar2({ name }: { name: string }) {
  return (
    <div className="relative w-10 h-10 inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-sm font-thin text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
