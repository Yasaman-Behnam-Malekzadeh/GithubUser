import React from "react";
import { GrGithub } from "react-icons/gr";
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <div className="navbar bg-gray-100 border-bottom flex items-center py-3 h-16">
      <div className="flex w-full">
        <BsList
          size={20}
          className="border-slate-300 border rounded-md text-slate-500 flex h-8 w-8 p-1"
        />
        <GrGithub size={35} className="ml-3" />
        <input
          type="text"
          className="border h-8 border-slate-300 text-slate-400 ml-2 w-10/12 rounded-md bg-gray-100 pl-2"
          placeholder="search"
        />
      </div>
    </div>
  );
};

export default Header;
