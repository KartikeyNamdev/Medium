import axios from "axios";
import { useEffect, useState } from "react";
import DATABASE_URL from "../config";
export type Blog = {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
};
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${DATABASE_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlogs(res.data.blog);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};
export function useBlog({ id }: { id: number }) {
  const [loading, setLoading] = useState(true);

  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    axios
      .get(`${DATABASE_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      });
  }, [id]);
  return {
    loading,
    blog,
  };
}
