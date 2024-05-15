import React from "react";
import { Link } from "react-router-dom";

const MainPageItems = (props) => {
  //for distructuring
  const { avatar_url, login } = props;
  return (
    <div className=" card ">
      {/* every user has a card */}

      {/* card of image */}
      <img
        className="card-img m-auto "
        src={avatar_url}
        style={{ width: "100px", height: "100px" }}
        alt="avatar_image"
      />

      {/* card of title */}
      <div className="card-title text-center mt-2">{login}</div>

      {/* more for redirect  */}
      <Link className="btn btn-info ml-5 mr-5 mb-3 mt-0" to={`/user/${login}`}>
        See more
      </Link>
    </div>
  );
};

export default MainPageItems;
