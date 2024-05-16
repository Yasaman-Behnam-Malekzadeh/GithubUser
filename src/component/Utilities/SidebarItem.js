import { BsCode } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { GoIssueOpened } from "react-icons/go";
import { GoRepo } from "react-icons/go";
import { IoIosGitPullRequest } from "react-icons/io";

function SidebarItem({ title, numbers }) {
  const icon = (name) => {
    let result;
    switch (name) {
      case "Code":
        result = <BsCode />;
        break;
      case "Users":
        result = <RiGroupLine />;
        break;
      case "Issues":
        result = <GoIssueOpened />;
        break;
      case "Repositories":
        result = <GoRepo />;
        break;
      case "Pull requests":
        result = <IoIosGitPullRequest />;
        break;
      default:
        result = "";
    }
    return result;
  };
  return (
    <div className="flex justify-between text-sm hover:bg-slate-100 p-1 px-2 rounded-lg hover:cursor-pointer">
      <div className="text-s flex items-center">
        <span className="pr-2 text-base">{icon(title)}</span>
        {title}
      </div>
      <div className="text-xs font-bold bg-slate-100 p-1 px-2 rounded-xl">
        {numbers}
      </div>
    </div>
  );
}

export default SidebarItem;
