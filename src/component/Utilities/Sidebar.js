import SidebarItem from "./SidebarItem";

function Sidebar() {
  const filterItems = [
    {
      id: 1,
      title: "Code",
      numbers: "23M",
    },
    {
      id: 2,
      title: "Repositories",
      numbers: 23,
    },
    {
      id: 3,
      title: "Issues",
      numbers: "37M",
    },
    {
      id: 4,
      title: "Pull requests",
      numbers: "37M",
    },
    {
      id: 5,
      title: "Discussions",
      numbers: "37M",
    },
    {
      id: 6,
      title: "Users",
      numbers: "37M",
    },
    {
      id: 7,
      title: "Commits",
      numbers: "37M",
    },
    {
      id: 8,
      title: "Packages",
      numbers: "37M",
    },
    {
      id: 9,
      title: "Wikis",
      numbers: "37M",
    },
    {
      id: 10,
      title: "Topics",
      numbers: "37M",
    },
    {
      id: 11,
      title: "Marketplace",
      numbers: "37M",
    },
  ];
  return (
    <div className=" border-right p-3">
      <div className="text-md font-semibold mb-2">Filter by</div>
      <div>
        {filterItems.map((item) => (
          <div key={item.id}>
            <SidebarItem title={item.title} numbers={item.numbers} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
