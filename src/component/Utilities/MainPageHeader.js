import Dropdown from "../Utilities/DropDown";

function MainPageHeader() {
  const listItems = [
    {
      id: 1,
      title: "Best match",
    },
    {
      id: 2,
      title: "Most followers",
    },
    {
      id: 3,
      title: "Fewest followers",
    },
    {
      id: 4,
      title: "Most recently joined",
    },
    {
      id: 5,
      title: "Least recently joined",
    },
    {
      id: 6,
      title: "Most repositories",
    },
    {
      id: 7,
      title: "Fewest repositories",
    },
  ];
  return (
    <div className="flex justify-between w-full mb-3">
      <div>
        9K results <span className="text-xs text-slate-600">(74 ms)</span>
      </div>
      <div>
        <Dropdown title={"Best match"} listItems={listItems} />
      </div>
    </div>
  );
}
export default MainPageHeader;
