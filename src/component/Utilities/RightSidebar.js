import { FaArrowRight } from "react-icons/fa";

function RightSidebar() {
  return (
    <div className="mt-14 pt-1 pe-5">
      <div className="w-full border rounded-md h-15 flex flex-col p-3 mb-3 items-center">
        <div className="w-full">
          <img
            src="https://github.com/images/modules/search/mona-love-2x.png"
            alt="logo-love"
            height={"50px"}
            width={"50px"}
          />
        </div>
        <h2 className="text-base">
          Sponsor open source projects you depend on
        </h2>
        <div className="text-xs text-gray-500 mb-3">
          Contributors are working behind the scenes to make open source better
          for everyone—give them the help and recognition they deserve.
        </div>
        <a
          href="https://github.com/sponsors/explore"
          className="flex items-center text-sm w-full"
        >
          Explore sponsorable projects
          <span className="pl-2">
            <FaArrowRight />
          </span>
        </a>
      </div>
      <div className="w-full border rounded-md h-15 flex p-3 mb-3 items-center">
        <h2 className="text-xs font-bold m-0">How can we improve search?</h2>
        <span className="text-blue-600 text-xs pl-2">Give feedback</span>
      </div>
    </div>
  );
}

export default RightSidebar;
