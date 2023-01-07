import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="relative flex items-center bg-[#051a1d] py-2">
      <div className="absolute left-6 pl-1 text-gray-400">
        <AiOutlineSearch className="" />
      </div>
      <input type="search" placeholder="Search for friend" className="w-full pl-9 m-2 mx-4 rounded-[.4rem] p-1 bg-[#202C33]" />
    </div>
  );
};

export default Search;
