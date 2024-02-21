import React from "react";
import image from "./sign-up.jpg";
import { RiContactsLine } from "react-icons/ri";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import { CgUser } from "react-icons/cg";

function SignUp() {
  const onSubmit = () => {};
  return (
    <div className="max-w-[1340px] flex flex-col w-full h-screen mx-auto px-10 pb-0 mt-2 pt-2 sm:p-4 justify-center items-center relative">
      <div className="bg-[#10171c] flex mt-[-4%] p-4 max-w-[600px] min-w-[300px] rounded-3xl w-full shadow shadow-cyan-950 backdrop-blur-lg">
        {/* image */}
        <div className="rounded-3xl pt-5 w-full h-full hidden sm:block">
          <img
            src={image}
            alt=""
            className="rounded-3xl max-w-[300px] saturate-50"
          />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col px-8 justify-center items-center w-full"
        >
          <div className="relative sm:self-start sm:ml-5">
            <h1 className="text-xl text-cyan-100 font-semibold">
              CREATE ACCOUNT
            </h1>
            <div className="w-10 h-0.5 sm:block hidden absolute bg-cyan-600"></div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="mt-4 w-full relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-base w-full border-b bg-transparent hover:placeholder:text-sm hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
              ></input>
              <RiContactsLine
                htmlFor="username"
                className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
              />
            </div>
            <span className="font-semibold text-cyan-600 self-end border-b-2 w-1"></span>
            <div className="mt-4 w-full relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-base w-full border-b bg-transparent hover:placeholder:text-sm hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
              ></input>
              <CgUser
                htmlFor="name"
                className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
              />
            </div>
          </div>
          <div className="mt-4  w-full relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
            <input
              type="emai"
              id="email"
              placeholder="Email"
              className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-base w-full border-b bg-transparent hover:placeholder:text-sm hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
            ></input>
            <MdMarkEmailUnread
              htmlFor="email"
              className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
            />
          </div>
          <div className="mt-4  w-full relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
            <input
              type="text"
              id="password"
              placeholder="Password"
              className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-base w-full border-b bg-transparent hover:placeholder:text-sm hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
            ></input>
            <AiFillLock
              htmlFor="password"
              className="text-white absolute pointer-events-none peer-focus:text-cyan-600 peer-active:text-cyan-600 peer-hover:text-cyan-600"
            />
          </div>
          <div className="mt-4  w-full relative flex items-center gap-2 focus-within:border-cyan-600 focus-within:border-b-2 focus-within:text-cyan-600">
            <input
              type="text"
              id="password"
              placeholder="Confirm Password"
              className="text-white autofill:hidden pl-5 placeholderbg-cyan-400 placeholder:text-base w-full border-b bg-transparent hover:placeholder:text-sm hover:placeholder:text-cyan-600 hover:border-cyan-600 placeholder:transition-all focus:text-cyan-600 focus:placeholder:text-cyan-600 focus:border-hidden transition-colors duration-200 focus:outline-none peer"
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
            Register
          </button>
          <div className="flex gap-1 mt-4">
            <h2 className="text-white text-sm">Already have a n account?</h2>
            <Link to="/Login">
              <h2 className="text-cyan-600 text-sm text-center">Login</h2>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
