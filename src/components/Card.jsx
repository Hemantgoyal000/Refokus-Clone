import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
function Card() {
  return (
    <div className="w-full bg-zinc-800 p-10 rounded-xl">
      <div className="w-full">
      <div className="w-full flex items-center justify-between">
       <h3 className="text-xl">Up next</h3>
       <HiOutlineArrowLongRight/>
        </div>
        <h1 className="text-4xl font-medium mt-5">Who we are</h1>
      </div>
      <div className="down w-full mt-32">
        <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a Project</h1>
        <button className="px-3 py-2 rounded-full border-2 border-zinc-400 mt-6 ">Contact Us</button>
      </div>
    </div>
  );
}

export default Card;
