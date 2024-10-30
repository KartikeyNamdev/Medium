import axios from "axios";
import { AppBar } from "../components/AppBar";
import DATABASE_URL from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="pt-8 flex justify-center">
        <div className=" max-w-screen-lg w-full">
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="pt-6">
            <textarea
              id="message"
              rows={8}
              className="focus-outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Write your thoughts here..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="pt-10 ">
            <button
              type="submit"
              className=" inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
              onClick={async () => {
                // Add your logic here to publish the post
                console.log("working");
                const response = await axios.post(
                  `
                  ${DATABASE_URL}/api/v1/blog
                `,
                  {
                    title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                console.log(response);
                navigate(`/blog/${response.data.blog.id}`);
                console.log("Post published successfully!");
              }}
            >
              Publish post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
