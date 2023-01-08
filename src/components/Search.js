import React from "react";
import { VscSearch } from "react-icons/vsc";

const Search = () => {
  return (
    <div className="relative flex items-center bg-[#051a1d] py-2">
      <div className="absolute right-4 pr-3 text-gray-400">
        <VscSearch className="w-4" />
      </div>
      <input type="search" placeholder="Search or start a new chat" className="w-full pl-3 m-2 mx-4 rounded-[.4rem] p-1.5 bg-[#202C33]" />
    </div>
  );
};

export default Search;
