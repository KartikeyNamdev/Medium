import axios from "axios";
import { AppBar } from "../components/AppBar";
import DATABASE_URL from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageWrapper } from "../components/PageWrapper";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <>
        <AppBar />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12 flex justify-center"
        >
          <div className="max-w-screen-lg w-full bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border">
            <input
              type="text"
              placeholder="Title"
              className="w-full text-3xl font-bold border-none focus:outline-none placeholder:text-gray-400"
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              rows={10}
              placeholder="Tell your story..."
              className="mt-6 w-full text-lg text-gray-600 border-none focus:outline-none resize-none placeholder:text-gray-400"
              onChange={(e) => setDescription(e.target.value)}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium"
              onClick={async () => {
                const response = await axios.post(
                  `${DATABASE_URL}/api/v1/blog`,
                  { title, content: description },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${response.data.blog.id}`);
              }}
            >
              Publish
            </motion.button>
          </div>
        </motion.div>
      </>
    </PageWrapper>
  );
};
