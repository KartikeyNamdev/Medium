import axios from "axios";
import { useEffect, useState } from "react";
import DATABASE_URL from "../config";
import postInputs from "../config";
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
  }, []);
  return {
    loading,
    blog,
  };
}
export async function useAuthtoSignin(signinCredentials: Signin) {
  try {
    const res = await axios.post(
      `${DATABASE_URL}/api/v1/user/signin`,
      signinCredentials
    );
    console.log(signinCredentials);
    const jwt = String(res.data.jwt);
    localStorage.setItem("token", jwt);
    return jwt;
  } catch (e) {
    //Alert
    console.log(e);
  }
}

export async function useAuthtoSignup(signupCredentials: Signup) {
  try {
    console.log("Working");
    const res = await axios.post(
      `${DATABASE_URL}/api/v1/user/signup`,
      signupCredentials
    );
    const jwt = String(res.data.jwt);
    localStorage.setItem("token", jwt);
    console.log(jwt);
    return jwt;
  } catch (e) {
    //Alert
    console.log(e);
  }
}
