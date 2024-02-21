import React from "react";
import { CgGym } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

function RecipeDetails() {
  return (
    <div className="flex gap-20 items-center h-[90vh] px-10 text-white">
      <div className="relative h-[400px] w-[350px]">
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full w-full object-cover rounded-3xl border-none ring-1 ring-cyan-800 "
        />
        <div className="w-full h-full rounded-3xl backdrop-brightness-75 absolute top-0 z-10"></div>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Pancake</h1>
        <div className="flex gap-2">
          <FaStar className="text-yellow-400 fill-yellow-400" />
          <FaStar className="text-yellow-400 fill-yellow-400" />
          <FaStar className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 mt-5">
            <h1 className="text-2xl font-medium">
              <span className="text-orange-400">Nutrition</span> Details
            </h1>
            <CgGym className="text-2xl translate-y-1 rotate-[35deg]" />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span>320</span> <span>Calories</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>25g</span> <span>Fat</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>40g</span> <span>carbs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-xl">
          <span className="text-orange-400 text-2xl font-medium">
            Ingredients
          </span>{" "}
          Details
        </h1>
        <ul className="flex flex-col gap-1 text-lg font-semibold ">
          <li>Flour</li>
          <li>Sugar</li>
          <li>salt</li>
          <li>Milk</li>
          <li>Baking Powder</li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeDetails;
