import React, { useState } from "react";
import image from "./login-img.jpg";
import { RiContactsLine } from "react-icons/ri";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [pass, setPass] = useState("");
  const [userName, setUserName] = useState("");
  const nevgate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7159/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: pass,
        }),
      });
      if (response.ok == true) {
        dispatch(login({ check: true }));
        nevgate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col w-full h-screen pt-2 px-0 justify-center items-center">
      <div className="bg-[#10171c] flex mt-[-4%] p-4 max-w-[600px] min-w-[300px] rounded-3xl w-full shadow shadow-cyan-950 backdrop-blur-lg">
        {/* image */}
        <div className="rounded-3xl w-full hidden sm:block">
          <img
            src={image}
            alt=""
            className="rounded-3xl w-[300px] object-cover saturate-50"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col px-8 justify-center items-center w-full"
        >
          <h1 className=" text-2xl text-white font-semibold">LOGIN</h1>
          <div className="mt-4 relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
            <input
              type="text"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              id="username"
              value={userName}
              placeholder="Username"
              className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-lg w-full border-b bg-transparent hover:placeholder:text-base caret-cyan-600 hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
            ></input>
            <RiContactsLine
              htmlFor="username"
              className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
            />
          </div>
          <div className="mt-4   relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
            <input
              type="password"
              id="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              placeholder="Password"
              className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-lg w-full border-b bg-transparent hover:placeholder:text-base caret-cyan-600 hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
            ></input>
            <AiFillLock
              htmlFor="password"
              className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
            />
          </div>
          <button
            type="submit"
            className="text-cyan-900 text-base hover:text-sm hover:py-1 hover:px-5 mt-10 bg-cyan-400 rounded-xl py-[1px] px-4 block shadow-md border-none ring-1 ring-cyan-100 shadow-cyan-500 hover:bg-cyan-900 hover:text-cyan-100 transition-all duration-300"
          >
            {" "}
            Login
          </button>
          <div className="flex gap-1 mt-4">
            <h2 className="text-white text-sm">Don't have a account?</h2>
            <Link to="/SignUp">
              <h2 className="text-cyan-600 text-sm text-center">SignUp</h2>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
