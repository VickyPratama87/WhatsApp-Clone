import React from "react";
import vicky from "../assets/vicky.jpg";
import { FiEdit } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 bg-[#202C33] h-[4rem] w-screen md:w-full">
      <div className="w-12 h-12 flex">
        <img src={vicky} alt="" className="object-cover rounded-full" />
      </div>
      <div className="flex items-center gap-6 text-gray-400">
        <WiDaySunny className="w-4 h-4" />
        <FiEdit className="w-4 h-4" />
        <BsThreeDots className="w-4 h-4" />
      </div>
    </div>
  );
};

export default Navbar;
