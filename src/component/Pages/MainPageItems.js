import React from "react";
import { Link } from "react-router-dom";
import { GoRepo } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";

const MainPageItems = (props) => {
  //for distructuring
  const { avatar_url, login } = props;
  return (
    <div className="w-full border rounded-md h-15 flex p-3 mb-3 items-center">
      <img
        className="rounded-full mr-3"
        src={avatar_url}
        style={{ width: "45px", height: "45px" }}
        alt="avatar_image"
      />

      <div>
        <div className="flex">
          <Link
            className="text-blue-600 hover:text-blue-600"
            to={`/user/${login}`}
          >
            {login}
          </Link>
          <Link
            className="ml-2 text-gray-400 text-s  hover:text-gray-400 "
            to={`/user/${login}`}
          >
            {login}
          </Link>
        </div>
        <div className="text-sm">Passionate about robotics and Crypto</div>
        <div className="flex text-xs text-gray-400">
          <div className="mr-1">Boulder, CO</div>
          <span>.</span>
          <div className="mr-1 ml-1">
            <GoRepo /> 130
          </div>
          <span>.</span>
          <div className="ml-1">
            <RiGroupLine /> 21
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageItems;
