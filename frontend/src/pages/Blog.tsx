/* eslint-disable @typescript-eslint/no-unused-vars */
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: Number(id), // convert id to number
  });
  if (loading == true) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};
