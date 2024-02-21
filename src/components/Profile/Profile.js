import React from "react";
import { useSelector } from "react-redux";
function Profile() {
  const username = JSON.stringify(useSelector((state) => state.isAuthenticate));
  console.log(username);
  return (
    <div className="flex flex-col p-16">
      <div className="flex items-center gap-8">
        <img
          src="https://www.pngkey.com/png/full/115-1150420_avatar-png-pic-male-avatar-icon-png.png"
          alt=""
          className="h-36 w-36 object-cover border-none ring-2 bg-cyan-600 ring-cyan-100 rounded-full"
        />
        <div>
          <span className="text-white text-4xl font-bold">Sachin Parmar</span>
          <p className="text-white opacity-70">I am sachin parmar from GOT</p>
          <span className="text-white text-sm opacity-70">0 posts</span>
        </div>
      </div>
      <hr className="border-b-0.5 border-cyan-600 mt-4" />
    </div>
  );
}

export default Profile;
