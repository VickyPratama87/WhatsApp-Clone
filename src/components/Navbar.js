import React from "react";
import vicky from "../assets/vicky.jpg";
import { MdGroups } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

const Navbar = () => {
  return (
    // md:rounded-tl-[2rem]
    <div className="flex items-center justify-between px-4 bg-[#202C33] h-[4rem] w-screen md:w-full">
      <div className="w-12 h-12 flex">
        <img src={vicky} alt="" className="object-cover rounded-full" />
      </div>
      <div className="flex items-center gap-6 text-gray-400">
        <MdGroups className="w-6 h-6" />
        <AiOutlinePlus className="w-6 h-6" />
        <WiDaySunny className="w-6 h-6" />
        <BsThreeDots className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Navbar;
