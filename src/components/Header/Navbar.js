import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillHome,
} from "react-icons/ai";
import { RiLoginCircleFill, RiLuggageCartFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { MdConnectWithoutContact } from "react-icons/md";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/loginSlice";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const isAuthenticate = useSelector((state) => state.isAuthenticate);
  const dispatch = useDispatch();
  const logOut = (e) => {
    dispatch(logout());
  };
  return (
    <div className="mx-auto flex justify-between items-center px-2 pt-2 pb-0 sm:pb-0 sm:pt-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer mr-1">
          <AiOutlineMenu color="white" fontSize={30} size={30} />
        </div>
        <Link to="/">
          {" "}
          <h1 className="cursor-pointer text-orange-600 text-2xl sm:text-3xl md:text-4xl px-2">
            Foodie<span className=" text-white font-bold">FY</span>
          </h1>{" "}
        </Link>
      </div>
      <div className="flex mx-2 items-center bg-slate-300 rounded-full px-2 sm:w-1/2 lg:px-6 relative">
        <AiOutlineSearch
          className=" font-extralight sm:font-normal"
          color="white"
          size={30}
        />
        <input
          className="bg-transparent p-2 focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:text-opacity-70 opacity-90 placeholder:text-purple-700 w-full"
          type="text"
          placeholder="Search Your Meal..."
        ></input>
      </div>
      <div className="">
        {!isAuthenticate ? (
          <Link to="Login">
            <button className="text-white flex items-center font-bold text-lg md:text-xl lg:text-2xl">
              <RiLoginCircleFill color="white" />
              Login
            </button>
          </Link>
        ) : (
          <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative h-fit w-fit"
          >
            <img
              src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
              alt=".."
              className="h-10 w-10 rounded-full border-none ring-1 ring-cyan-400 bg-cyan-100"
            />
            {open && (
              <div className="absolute z-10 rounded-lg left-1/2 top-12 bg-[#b7d3e7] shadow shadow-cyan-900 text-black -translate-x-3/4 md:-translate-x-1/2  p-4 origin-bottom duration-200 ease-out">
                <div className="flex flex-col gap-2">
                  <Link to={"User"}>
                    <button className="text-cyan-900 text-base bg-cyan-400 rounded-xl py-[1px] px-4 block shadow-md border-none ring-1 ring-cyan-100 shadow-cyan-900 hover:bg-cyan-900 hover:text-cyan-100 transition-all duration-200">
                      Profile
                    </button>
                  </Link>
                  <button
                    onClick={logOut}
                    className="text-cyan-900 text-base bg-cyan-400 rounded-xl py-[1px] px-4 block shadow-md border-none ring-1 ring-cyan-100 shadow-cyan-900 hover:bg-cyan-900 hover:text-cyan-100 transition-all duration-200"
                  >
                    Logout{" "}
                  </button>
                </div>
                <div className="w-3 h-3 bg-[#b7d3e7] absolute -top-1 rotate-45 translate-x-16 md:translate-x-9 rounded-sm"></div>
                <div className="h-2 w-full -translate-x-4 absolute -top-2 bg-transparent"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/*  MOBILE MENU */}
      <div>
        {/* overlay */}
        {nav ? (
          <div className=" bg-black/80 fixed top-0 left-0 w-full h-screen z-10 ease-linear duration-700"></div>
        ) : (
          ""
        )}
        {/* side drawer Menu */}
        <div
          className={
            nav
              ? "top-0 fixed left-0 w-[200px] md:w-[230px] lg:w-[250px] h-screen bg-[#212730] z-10 duration-300"
              : "top-0 fixed left-[-100%] w-[200px] md:w-[230px] lg:w-[250px] h-screen bg-[#212730] z-10 duration-300"
          }
        >
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            color="white"
            size={25}
            className="absolute right-4 top-5 cursor-pointer"
          />
          <h1 className=" text-orange-600 lg:px-6 py-3 text-3xl sm:text-3xl md:4xl px-4">
            Foodie<span className=" text-white font-bold">FY</span>
          </h1>
          <nav>
            <ul className="pl-6 cursor-pointer">
              <Link to="/">
                {" "}
                <li
                  onClick={() => setNav(!nav)}
                  className="mt-6 flex items-center gap-4 text-white"
                >
                  <AiFillHome color="white" size={40} /> HOME
                </li>{" "}
              </Link>
              <Link to="/Cart">
                {" "}
                <li
                  onClick={() => setNav(!nav)}
                  className="mt-6 flex items-center gap-4 text-white"
                >
                  <RiLuggageCartFill color="white" size={40} />
                  CART
                </li>{" "}
              </Link>
              <Link to="/About">
                {" "}
                <li
                  onClick={() => setNav(!nav)}
                  className="mt-6 flex items-center gap-4 text-white"
                >
                  <CgProfile color="white" size={40} />
                  ABOUT US
                </li>{" "}
              </Link>
              <Link to="/Contact">
                {" "}
                <li
                  onClick={() => setNav(!nav)}
                  className="mt-6 flex items-center gap-4 text-white"
                >
                  <MdConnectWithoutContact color="white" size={40} />
                  CONTACT
                </li>{" "}
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
