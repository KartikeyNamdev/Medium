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
export type Signin = {
  username: string;
  password: string;
};
export type Signup = {
  name: string;
  username: string;
  password: string;
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

export async function signinUser(credentials: Signin) {
  const res = await axios.post(
    `${DATABASE_URL}/api/v1/user/signin`,
    credentials
  );

  const jwt = String(res.data.jwt);
  localStorage.setItem("token", jwt);

  return jwt;
}

export async function signupUser(credentials: Signup) {
  const res = await axios.post(
    `${DATABASE_URL}/api/v1/user/signup`,
    credentials
  );

  const jwt = String(res.data.jwt);
  localStorage.setItem("token", jwt);

  return jwt;
}

export const useTheme = () => {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, setDark };
};
