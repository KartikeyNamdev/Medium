import { Avatar2 } from "./BlogCard";
import { Link } from "react-router-dom";
export const AppBar = () => {
  return (
    <div className="border-b flex p-4 justify-between px-10">
      <Link to={"/blogs"}>
        <div className="font-medium flex flex-col justify-center cursor-pointer">
          Medium
        </div>
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-8 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New
          </button>
        </Link>

        <Avatar2 name="Kartikey" />
      </div>
    </div>
  );
};
