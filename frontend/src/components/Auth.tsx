/* eslint-disable @typescript-eslint/no-unused-vars */
import { type SignupInput } from "@kartikeynamdev/medium-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DATABASE_URL from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function SendRequest() {
    try {
      const res = await axios.post(
        `${DATABASE_URL}/api/v1/user/${
          type === "signup" ? "signup" : "signin"
        }`,
        postInputs
      );
      const jwt = String(res.data.jwt);
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (e) {
      //Alert
      console.log(e);
    }
  }

  return (
    <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="">
            <div className="text-3xl font-extrabold px-10">
              {type === "signup" ? "Create an account" : "Log in to account"}
            </div>
            <div className="text-slate-500 mt-3 px-10 ">
              {type === "signup"
                ? "Already have an account ?"
                : "Don't have an account?"}
              <Link
                className="hover:underline pl-2"
                to={type === "signup" ? "/signin" : "/signup"}
              >
                {type === "signup" ? "Log in" : "Sign up"}
              </Link>
            </div>

            <div className="mt-6">
              {type === "signup" ? (
                <LabelledInputBox
                  label="Name"
                  placeholder="Zenitsu"
                  onChange={(e) => {
                    setPostInputs({
                      ...postInputs,
                      name: e.target.value,
                    });
                  }}
                />
              ) : null}{" "}
              <LabelledInputBox
                label="Username"
                placeholder="Zenitsu@gmail.com"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    username: e.target.value,
                  });
                }}
              />
              <LabelledInputBox
                label="Password"
                placeholder="*********"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
                onClick={SendRequest}
              >
                {type === "signup" ? "Sign up " : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInputBox({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="grid gap-6 mb-6 ">
      <div>
        <label className="block mb-2 text-sm font-bold text-black">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
