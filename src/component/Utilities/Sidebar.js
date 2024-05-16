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
      title: "Users",
      numbers: "37M",
    },
  ];
  return (
    <div className="w-96 border-right p-3">
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
