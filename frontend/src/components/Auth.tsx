import { signinInput, SignupInput } from "@kartikeynamdev/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signinUser, signupUser } from "../hooks";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [signinCredentials, setSigninCredentials] = useState<signinInput>({
    username: "",
    password: "",
  });

  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function handleAuth() {
    try {
      setLoading(true);
      setError("");

      if (type === "signup") {
        await signupUser({
          name: signupInputs.name || "",
          username: signupInputs.username,
          password: signupInputs.password,
        });
      } else {
        await signinUser(signinCredentials);
      }

      navigate("/blogs");
    } catch (err) {
      console.log(err);
      setError("Authentication failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-extrabold px-10">
            {type === "signup" ? "Create an account" : "Log in to account"}
          </h1>

          <p className="text-slate-500 mt-3 px-10">
            {type === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}
            <Link
              className="hover:underline pl-2"
              to={type === "signup" ? "/signin" : "/signup"}
            >
              {type === "signup" ? "Log in" : "Sign up"}
            </Link>
          </p>

          <div className="mt-6 px-10">
            {type === "signup" && (
              <LabelledInputBox
                label="Name"
                placeholder="Zenitsu"
                onChange={(e) =>
                  setSignupInputs({ ...signupInputs, name: e.target.value })
                }
              />
            )}

            <LabelledInputBox
              label="Username"
              placeholder="zenitsu@gmail.com"
              onChange={(e) => {
                setSigninCredentials({
                  ...signinCredentials,
                  username: e.target.value,
                });
                setSignupInputs({
                  ...signupInputs,
                  username: e.target.value,
                });
              }}
            />

            <LabelledInputBox
              label="Password"
              type="password"
              placeholder="********"
              onChange={(e) => {
                setSigninCredentials({
                  ...signinCredentials,
                  password: e.target.value,
                });
                setSignupInputs({
                  ...signupInputs,
                  password: e.target.value,
                });
              }}
            />

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <button
              disabled={loading}
              onClick={handleAuth}
              className="w-full text-white bg-gray-800 hover:bg-gray-900 rounded-lg text-sm px-5 py-2.5"
            >
              {loading
                ? "Please wait..."
                : type === "signup"
                ? "Sign up"
                : "Sign in"}
            </button>
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
